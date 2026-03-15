import { memo } from 'react';
import { useInView } from '../hooks/useInView';
import { IconHeritage, IconLeaf, IconMap } from '../components/Icons';
import aboutImage from '../assets/about.webp';
import './About.css';

const highlights = [
  { label: 'Автентичність', desc: "Кам'яна кладка та дерево", Icon: IconHeritage },
  { label: 'Затишок', desc: 'Сімейна атмосфера', Icon: IconLeaf },
  { label: 'Локація', desc: '19 хв до замку пішки', Icon: IconMap },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="about"
      className={`about-section ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <div className="container about-section__grid">

        <div className="about-section__images">
          <div className="about-section__img-frame">
            <img src={aboutImage} alt="Old Town Interior" className="about-section__img" />
            <div className="about-section__img-overlay" />
          </div>
          <div className="about-section__decoration" />
        </div>

        <div className="about-section__content">
          <div className="reveal reveal--delay-1">
            <h2 className="section-title">
              Маленький готель з <em>великою душею</em>
            </h2>
          </div>

          <div className="about-section__text reveal reveal--delay-2">
            <p>
              Гостерія «Old Town» — це шість унікальних номерів у серці Кам'янця, де кожна цеглина дихає історією. 
              Це простір для тих, хто цінує щирість, затишок натурального дерева та можливість 
              нарешті сповільнити час. Ми не просто приймаємо гостей — ми відкриваємо вам серце нашого міста.
            </p>
          </div>

          <div className="about-section__highlights">
            {highlights.map((item, idx) => (
              <div key={idx} className={`about-highlight reveal reveal--delay-${idx + 3}`}>
                <div className="about-highlight__icon-box">
                  <item.Icon width={20} height={20} />
                </div>
                <div className="about-highlight__txt">
                  <span className="about-highlight__label">{item.label}</span>
                  <span className="about-highlight__desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-section__action reveal reveal--delay-6">
            <a href="#rooms" className="btn btn-primary">Відкрити номери</a>
          </div>
        </div>

      </div>
    </section>
  );
}
