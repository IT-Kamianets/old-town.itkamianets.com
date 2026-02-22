// sections/BookingForm.jsx
// Booking inquiry form with room selection, dates, and contact info

import { useState } from 'react';
import { useRevealClass } from '../hooks/useInView';
import { IconPin } from '../components/Icons';
import './BookingForm.css';

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const ROOM_OPTIONS = [
  { value: 'deluxe-1', label: 'Делюкс №1 (Queen-size, 15 м², 2 ос.)' },
  { value: 'deluxe-2', label: 'Делюкс №2 (Queen-size, 15 м², 2 ос.)' },
  { value: 'deluxe-3', label: 'Делюкс №3 (Double, 16 м², 2 ос.)' },
  { value: 'quad',     label: 'Чотиримісний Делюкс (25 м², 4 ос.)' },
  { value: 'family',   label: 'Family з каміном (King-size, 21 м², 4 ос.)' },
  { value: 'suite',    label: 'Люкс мансарда (King-size, 30 м², 2 ос.)' },
];

const INITIAL = {
  name: '', email: '', phone: '',
  checkin: '', checkout: '', guests: '2',
  room: '', message: '',
};

export default function BookingForm() {
  const [form, setForm]     = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const header = useRevealClass('');
  const left   = useRevealClass('reveal--left');
  const right  = useRevealClass('reveal--right');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // TODO: Replace with your actual form submission endpoint
    // Options: Formspree (https://formspree.io), EmailJS, own API
    // Example Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST', headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });

    // Simulating success for demo
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div ref={header.ref} className={`section-header text-center ${header.className}`}>
          <p className="section-eyebrow">Бронювання</p>
          <div className="divider" style={{ marginInline: 'auto' }} />
          <h2 className="section-title">Забронювати номер</h2>
          <p className="section-subtitle" style={{ maxWidth: 500, marginInline: 'auto' }}>
            Заповніть форму — ми відповімо протягом кількох годин і підтвердимо
            доступність обраного номеру.
          </p>
        </div>

        <div className="contact__layout">

          {/* Info column */}
          <div ref={left.ref} className={`contact__info ${left.className}`}>
            <div className="contact__info-card">
              <h3>Контактна інформація</h3>

              <ul className="contact__info-list">
                <li>
                  <span><IconPhone /></span>
                  <div>
                    <strong>Телефон</strong>
                    <a href="tel:+380673801949">067 380 1949</a>
                  </div>
                </li>
                <li>
                  <span><IconPin width={18} height={18} /></span>
                  <div>
                    <strong>Адреса</strong>
                    <span>вул. П'ятницька, 8<br />Кам'янець-Подільський, 32301</span>
                  </div>
                </li>
                <li>
                  <span><IconClock /></span>
                  <div>
                    <strong>Час заїзду / виїзду</strong>
                    <span>Заїзд: 14:00 – 23:59<br />Виїзд: до 11:00</span>
                  </div>
                </li>
                <li>
                  <span>
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor"
                         strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
                    </svg>
                  </span>
                  <div>
                    <strong>Мови спілкування</strong>
                    <span>Українська · Англійська · Російська</span>
                  </div>
                </li>
              </ul>

              <div className="contact__rules">
                <h4>Важлива інформація</h4>
                <ul>
                  <li>Передоплата до заїзду (банківський переказ)</li>
                  <li>Розміщення з домашніми тваринами не допускається</li>
                  <li>Номери тільки для некурців</li>
                  <li>Дитячі ліжечка не надаються</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div ref={right.ref} className={`contact__form-wrap ${right.className}`}>
            {status === 'success' ? (
              <div className="contact__success" aria-live="polite">
                <span className="contact__success-icon" aria-hidden="true">✓</span>
                <h3>Дякуємо за запит!</h3>
                <p>
                  Ми отримали вашу заявку і зв'яжемося з вами найближчим часом
                  для підтвердження бронювання.
                </p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Надіслати ще один запит
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Форма бронювання номеру"
              >
                {/* Row: name + phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ваше ім'я *</label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      placeholder="Ім'я та прізвище"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Телефон *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+38 0__ ___ __ __"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Dates row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkin">Дата заїзду *</label>
                    <input
                      id="checkin" name="checkin" type="date"
                      value={form.checkin} onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkout">Дата виїзду *</label>
                    <input
                      id="checkout" name="checkout" type="date"
                      value={form.checkout} onChange={handleChange}
                      min={form.checkin || new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                {/* Room + guests */}
                <div className="form-row">
                  <div className="form-group" style={{ flex: 2 }}>
                    <label htmlFor="room">Тип номеру</label>
                    <select id="room" name="room" value={form.room} onChange={handleChange}>
                      <option value="">Будь-який (уточнимо при підтвердженні)</option>
                      {ROOM_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Гостей</label>
                    <select id="guests" name="guests" value={form.guests} onChange={handleChange}>
                      {[1,2,3,4].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'гість' : 'гостей'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Побажання чи запитання</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Особливі побажання, час прибуття, запитання..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Надсилаємо...' : 'Надіслати запит на бронювання'}
                </button>

                <p className="form-note">
                  * Поля обов'язкові. Ми відповімо протягом 4–8 годин. 
                  Бронювання підтверджується після передоплати.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}