// sections/Services.jsx

import { useState, useEffect, useCallback, memo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRevealClass, useInView } from '../hooks/useInView';
import {
  IconWifi, IconParking, IconKitchen, IconBreakfast,
  IconFamily, IconSoundproof, IconHeritage, IconKey,
  IconTower, IconChurch, IconMuseum, IconLeaf, IconMap,
} from '../components/Icons';
import './Services.css';

import imgFortress from '../assets/services/Кам\'янець-Подільська фортеця.webp';
import imgCathedral from '../assets/services/Катедральний костьол.webp';
import imgMuseum from '../assets/services/Музей Мініатюр.webp';
import imgArmenian from '../assets/services/Вірменська церква.webp';
import imgTovtry from '../assets/services/Подільські Товтри.webp';
import imgCenter from '../assets/services/Центр міста.webp';

const services = [
  { Icon: IconWifi, title: 'Безкоштовний Wi-Fi', desc: 'Швидкий інтернет у всіх номерах і спільних зонах.' },
  { Icon: IconParking, title: 'Безкоштовне паркування', desc: 'Парковка на вулиці поблизу готелю (потрібне бронювання).' },
  { Icon: IconKitchen, title: 'Спільна кухня', desc: 'Повністю обладнана кухня для самостійного приготування.' },
  { Icon: IconBreakfast, title: 'Сніданок у номері', desc: 'За попереднім замовленням — сніданок прямо в номер.' },
  { Icon: IconFamily, title: 'Сімейні номери', desc: 'Номери до 4 гостей — підходять для сімей з дітьми.' },
  { Icon: IconSoundproof, title: 'Шумозахист', desc: 'Всі номери обладнані шумозахисними вікнами.' },
  { Icon: IconHeritage, title: 'Спадок Поділля', desc: "Ми поможемо скласти маршрут по пам'ятках Кам'янця." },
  { Icon: IconKey, title: 'Check-in 14:00–23:59', desc: 'Зручний час заїзду. Check-out — до 11:00.' },
];

const landmarks = [
  { name: "Кам'янець-Подільська фортеця", dist: '11 хв пішки', Icon: IconTower, src: imgFortress },
  { name: 'Катедральний костьол', dist: '6 хв пішки', Icon: IconChurch, src: imgCathedral },
  { name: 'Музей Мініатюр', dist: '5 хв пішки', Icon: IconMuseum, src: imgMuseum },
  { name: 'Вірменська церква', dist: '5 хв пішки', Icon: IconChurch, src: imgArmenian },
  { name: 'Подільські Товтри', dist: '2 хв пішки', Icon: IconLeaf, src: imgTovtry },
  { name: 'Центр міста', dist: '15 хв пішки', Icon: IconMap, src: imgCenter },
];

// ── Service item ──────────────────────────────────────────────────────────────
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

// ── Одна картка пам'ятки ──────────────────────────────────────────────────────
function LandmarkCard({ landmark }) {
  const LmIcon = landmark.Icon;
  return (
    <div className="lm-card">
      <div className="lm-card__img">
        <img src={landmark.src} alt={landmark.name} loading="lazy" decoding="async" />
      </div>
      <div className="lm-card__footer">
        <span className="lm-card__name">{landmark.name}</span>
        <span className="lm-card__dist">
          <LmIcon width={12} height={12} aria-hidden="true" />
          {landmark.dist}
        </span>
      </div>
    </div>
  );
}

// ── Landmarks marquee ─────────────────────────────────────────────────────────
function Landmarks() {
  const lmReveal = useRevealClass('');

  // Три копії — гарантує безшовний loop на будь-якій ширині екрану
  const repeated = [...landmarks, ...landmarks, ...landmarks];

  return (
    <div ref={lmReveal.ref} className={`landmarks ${lmReveal.className}`}>

      {/* Заголовок всередині container */}
      <div className="container">
        <div className="landmarks__header section-header text-center" style={{ marginInline: 'auto' }}>
          <p className="section-eyebrow">Що поруч</p>
          <div className="divider" style={{ marginInline: 'auto' }} />
          <h2 className="section-title">
            Пам'ятки<br />
            <em>за кроком від вас</em>
          </h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>
            Старе місто буквально у дворі — всі головні пам'ятки пішки.
          </p>
        </div>
      </div>

      {/* Marquee — на повну ширину, без container */}
      <div className="lm-marquee-wrap" aria-label="Пам'ятки поруч із готелем">
        {/* Fade-маски по краях */}
        <div className="lm-marquee-fade lm-marquee-fade--left" aria-hidden="true" />
        <div className="lm-marquee-fade lm-marquee-fade--right" aria-hidden="true" />

        {/* Стрічка — зупиняється при hover */}
        <div className="lm-marquee">
          <div className="lm-marquee__track">
            {repeated.map((lm, i) => (
              <LandmarkCard key={`${lm.name}-${i}`} landmark={lm} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

// ── Головний компонент ────────────────────────────────────────────────────────
export default function Services() {
  const header = useRevealClass('');

  // ── Services Slider (Mobile only) ──
  const [servicesRef, servicesApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    active: false,
    breakpoints: {
      '(max-width: 860px)': { active: true }
    }
  });

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (!servicesApi) return;
    const onSelect = () => setActiveService(servicesApi.selectedScrollSnap());
    servicesApi.on('select', onSelect);
    servicesApi.on('reInit', onSelect);
    return () => servicesApi.off('select', onSelect);
  }, [servicesApi]);

  const scrollToService = useCallback((index) => {
    servicesApi?.scrollTo(index);
  }, [servicesApi]);

  return (
    <section id="services" className="section--alt services">

      <div className="services__dark-part">
        <div className="container">
          <div ref={header.ref} className={`section-header ${header.className}`} style={{ maxWidth: 600 }}>
            <p className="section-eyebrow" style={{ color: 'var(--color-stone)' }}>Сервіс та зручності</p>
            <div className="divider" />
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>
              Все необхідне<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-stone-light)' }}>для комфорту</em>
            </h2>
          </div>

          <div className="services__slider-wrap">
            <div className="services__embla" ref={servicesRef}>
              <div className="services__grid embla__container">
                {services.map((s, i) => (
                  <div key={s.title} className="services__slide embla__slide">
                    <ServiceItem service={s} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination dots for mobile */}
            <div className="services__pagination">
              {services.map((_, i) => (
                <button
                  key={i}
                  className={`services__dot ${i === activeService ? 'services__dot--active' : ''}`}
                  onClick={() => scrollToService(i)}
                  aria-label={`Перейти до сервісу ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Landmarks />

    </section>
  );
}