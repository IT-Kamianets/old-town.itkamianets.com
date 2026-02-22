// sections/Services.jsx

import { useState, useEffect, useCallback, useRef, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRevealClass, useInView } from '../hooks/useInView';
import {
  IconWifi, IconParking, IconKitchen, IconBreakfast,
  IconFamily, IconSoundproof, IconHeritage, IconKey,
  IconTower, IconChurch, IconMuseum, IconLeaf, IconMap,
} from '../components/Icons';
import './Services.css';

// ← Імпорти замість рядків-шляхів
import imgFortress  from '../assets/services/Кам\'янець-Подільська фортеця.webp';
import imgCathedral from '../assets/services/Катедральний костьол.webp';
import imgMuseum    from '../assets/services/Музей Мініатюр.webp';
import imgArmenian  from '../assets/services/Вірменська церква.webp';
import imgTovtry    from '../assets/services/Подільські Товтри.webp';
import imgCenter    from '../assets/services/Центр міста.webp';

const services = [
  { Icon: IconWifi,       title: 'Безкоштовний Wi-Fi',    desc: 'Швидкий інтернет у всіх номерах і спільних зонах.' },
  { Icon: IconParking,    title: 'Безкоштовне паркування', desc: 'Парковка на вулиці поблизу готелю (потрібне бронювання).' },
  { Icon: IconKitchen,    title: 'Спільна кухня',           desc: 'Повністю обладнана кухня для самостійного приготування.' },
  { Icon: IconBreakfast,  title: 'Сніданок у номері',       desc: 'За попереднім замовленням — сніданок прямо в номер.' },
  { Icon: IconFamily,     title: 'Сімейні номери',          desc: 'Номери до 4 гостей — підходять для сімей з дітьми.' },
  { Icon: IconSoundproof, title: 'Шумозахист',              desc: 'Всі номери обладнані шумозахисними вікнами.' },
  { Icon: IconHeritage,   title: 'Спадок Поділля',          desc: "Ми поможемо скласти маршрут по пам'ятках Кам'янця." },
  { Icon: IconKey,        title: 'Check-in 14:00–23:59',   desc: 'Зручний час заїзду. Check-out — до 11:00.' },
];

const landmarks = [
  { name: "Кам'янець-Подільська фортеця", dist: '11 хв пішки', Icon: IconTower,  src: imgFortress  },
  { name: 'Катедральний костьол',          dist: '6 хв пішки',  Icon: IconChurch, src: imgCathedral },
  { name: 'Музей Мініатюр',               dist: '5 хв пішки',  Icon: IconMuseum, src: imgMuseum    },
  { name: 'Вірменська церква',             dist: '5 хв пішки',  Icon: IconChurch, src: imgArmenian  },
  { name: 'Подільські Товтри',             dist: '2 хв пішки',  Icon: IconLeaf,   src: imgTovtry    },
  { name: 'Центр міста',                   dist: '15 хв пішки', Icon: IconMap,    src: imgCenter    },
];

// Мемоізовано — не перерендерується при прокрутці каруселі
const ServiceItem = memo(function ServiceItem({ service, index }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`service-item ${inView ? 'service-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.07}s` }}
    >
      <span className="service-item__icon" aria-hidden="true">
        <service.Icon width={22} height={22} />
      </span>
      <div>
        <h3 className="service-item__title">{service.title}</h3>
        <p className="service-item__desc">{service.desc}</p>
      </div>
    </div>
  );
});

// Loop-aware scale tween
function applyScales(emblaApi, slideNodes) {
  if (!emblaApi) return;

  const scrollProgress = emblaApi.scrollProgress();
  const snapList       = emblaApi.scrollSnapList();

  // Безпечний доступ до loopPoints
  let loopPoints = [];
  try {
    loopPoints = emblaApi.internalEngine()?.slideLooper?.loopPoints ?? [];
  } catch {
    loopPoints = [];
  }

  snapList.forEach((snapPos, snapIdx) => {
    let diff = snapPos - scrollProgress;

    // Корегування diff для клонованих слайдів
    loopPoints.forEach((lp) => {
      const target = lp.target?.() ?? 0;
      if (lp.index === snapIdx && target !== 0) {
        diff = target < 0
          ? snapPos - (1 + scrollProgress)
          : snapPos + (1 - scrollProgress);
      }
    });

    const absDiff = Math.abs(diff);
    const scale   = Math.max(0.72, 1 - absDiff * 0.30);
    const opacity = Math.max(0.30, 1 - absDiff * 0.72);
    const bright  = Math.max(0.50, 1 - absDiff * 0.54);

    const node = slideNodes[snapIdx];
    if (!node) return;

    node.style.transform = `scale(${scale.toFixed(4)})`;
    node.style.opacity   = opacity.toFixed(4);

    const img = node.querySelector('.lm-card__img img');
    if (img) img.style.filter = absDiff < 0.02 ? 'none' : `brightness(${bright.toFixed(4)})`;

    const caption = node.querySelector('.lm-card__caption');
    if (caption) {
      const isCenter = absDiff < 0.02;
      caption.style.opacity   = isCenter ? '1' : '0';
      caption.style.transform = isCenter ? 'none' : 'translateY(10px)';
    }
  });
}

export default function Services() {
  const header    = useRevealClass('');
  const lmRef     = useRevealClass('');
  const slideRefs = useRef([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop:          true,
    align:         'center',
    containScroll: false,
    dragFree:      false,
    startIndex:    2,            // ← починаємо з 3-го слайда (індекс 2)
    loopAdditionalSlides: 2,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const nodes  = slideRefs.current;
    const update = () => applyScales(emblaApi, nodes);

    emblaApi.on('scroll',  update);
    emblaApi.on('reInit',  update);
    emblaApi.on('settle',  update);
    update();

    return () => {
      emblaApi.off('scroll',  update);
      emblaApi.off('reInit',  update);
      emblaApi.off('settle',  update);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="services" className="section--alt services">

      {/* ── Dark services grid ── */}
      <div className="services__dark-part">
        <div className="container">
          <div ref={header.ref} className={`section-header ${header.className}`} style={{ maxWidth: 600 }}>
            <p className="section-eyebrow" style={{ color: 'var(--color-stone)' }}>Сервіс та зручності</p>
            <div className="divider" />
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Все необхідне<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-stone-light)' }}>для комфортного відпочинку</em>
            </h2>
          </div>
          <div className="services__grid">
            {services.map((s, i) => <ServiceItem key={s.title} service={s} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── Landmarks ── */}
      <div ref={lmRef.ref} className={`landmarks ${lmRef.className}`}>
        <div className="landmarks__inner">

          {/* Left */}
          <div className="landmarks__left">
            <p className="section-eyebrow">Що поруч</p>
            <div className="divider" />
            <h3 className="landmarks__title">
              Пам'ятки<br />
              <em>за кроком від вас</em>
            </h3>
            <p className="landmarks__sub">
              Старе місто буквально у дворі —
              всі головні пам'ятки пішки.
            </p>
            <div className="landmarks__arrows">
              <button className="lm-arrow" onClick={prev} aria-label="Попередня">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
                     strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="lm-arrow" onClick={next} aria-label="Наступна">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
                     strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="landmarks__carousel">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {landmarks.map((lm, i) => {
                  const LmIcon = lm.Icon;
                  return (
                    <div
                      key={lm.name}
                      className="embla__slide lm-slide"
                      ref={el => slideRefs.current[i] = el}
                    >
                      <div className="lm-card">
                        <div className="lm-card__img">
                          <img src={lm.src} alt={lm.name} loading="lazy" decoding="async" />
                        </div>
                        <div className="lm-card__caption">
                          <span className="lm-card__caption-icon" aria-hidden="true">
                            <LmIcon width={16} height={16} />
                          </span>
                          <div>
                            <strong>{lm.name}</strong>
                            <span>{lm.dist}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}