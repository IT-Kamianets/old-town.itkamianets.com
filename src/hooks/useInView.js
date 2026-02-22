// hooks/useInView.js
// Intersection Observer hook for scroll-triggered animations

import { useEffect, useRef, useState } from 'react';

/**
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0–1)
 * @param {string} options.rootMargin - Margin around viewport
 * @param {boolean} options.once - If true, triggers only once
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/**
 * Returns a className string that includes 'in-view' when element is visible.
 * Use with .reveal CSS classes.
 */
export function useRevealClass(modifiers = '', options = {}) {
  const { ref, inView } = useInView(options);
  const cls = `reveal ${modifiers} ${inView ? 'in-view' : ''}`.trim();
  return { ref, className: cls };
}
