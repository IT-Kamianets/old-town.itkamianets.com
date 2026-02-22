// components/FloatingContact.jsx
// Плаваюча кнопка зв'язку — WhatsApp / Viber / телефон
// Замінити номери на реальні

import { useState } from 'react';
import './FloatingContact.css';

// Номер телефону (тільки цифри, з кодом країни)
const PHONE = '380673801949';

const contacts = [
  {
    id:    'phone',
    label: 'Зателефонувати',
    href:  `tel:+${PHONE}`,
    color: '#2C1F14',
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id:    'viber',
    label: 'Viber',
    href:  `viber://chat?number=%2B${PHONE}`,
    color: '#7360f2',
    icon: (
      /* Viber purple logo shape */
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
        <path d="M11.4 1.001C7.88.987 4.5 2.34 2.04 4.8c-2.46 2.46-3.81 5.84-3.81 9.38 0 2.1.5 4.15 1.47 5.99L.09 23l2.9-.58c1.8.94 3.82 1.44 5.88 1.44 3.54 0 6.92-1.35 9.38-3.81 2.46-2.46 3.79-5.83 3.76-9.37-.03-7.27-5.93-9.65-9.61-9.65zm.1 17.7c-1.65 0-3.28-.44-4.7-1.27l-.34-.2-3.5.92.93-3.42-.22-.35C2.8 13.04 2.37 11.45 2.37 9.8c0-4.97 4.06-9.03 9.03-9.03 4.97 0 9.03 4.06 9.03 9.03 0 4.97-4.06 9.03-9.03 9.03a8.9 8.9 0 0 1-1.5-.12c.67.13 1.34.19 2 .19 4.2 0 7.64-3.3 7.96-7.42a7.96 7.96 0 0 0-7.91-8.47c-4.4 0-7.98 3.58-7.98 7.98a8 8 0 0 0 1.26 4.32l-1.18 4.31 4.4-1.15a7.88 7.88 0 0 0 3.5.82c4.4 0 7.98-3.58 7.98-7.98 0-.48-.05-.96-.13-1.42-.5 3.7-3.65 6.57-7.49 6.57zm4.3-5.55c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.14.23-.56.71-.69.86-.13.14-.25.16-.47.05-.22-.11-.94-.35-1.79-1.1-.66-.59-1.1-1.32-1.23-1.54-.13-.23-.01-.35.1-.46.1-.1.22-.25.33-.38.11-.13.14-.22.22-.37.07-.14.04-.27-.02-.38-.06-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38-.13 0-.27-.01-.42-.01-.14 0-.38.05-.58.27-.2.22-.76.75-.76 1.82 0 1.07.78 2.1.89 2.25.11.14 1.54 2.35 3.72 3.3.52.22.93.35 1.25.45.52.16 1 .14 1.38.08.42-.06 1.3-.53 1.49-1.04.18-.51.18-.95.13-1.04-.05-.1-.2-.16-.42-.27z"/>
      </svg>
    ),
  },
  {
    id:    'whatsapp',
    label: 'WhatsApp',
    href:  `https://wa.me/${PHONE}?text=Доброго%20дня!%20Хочу%20дізнатися%20про%20бронювання.`,
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-contact ${open ? 'floating-contact--open' : ''}`}>

      {/* Список кнопок зв'язку */}
      <div className="floating-contact__list" aria-hidden={!open}>
        {contacts.map(({ id, label, href, color, icon }) => (
          <a
            key={id}
            href={href}
            className="floating-contact__item"
            style={{ '--item-color': color }}
            aria-label={label}
            title={label}
            tabIndex={open ? 0 : -1}
            target={id === 'whatsapp' ? '_blank' : undefined}
            rel={id === 'whatsapp' ? 'noopener noreferrer' : undefined}
          >
            <span className="floating-contact__item-label">{label}</span>
            <span className="floating-contact__item-icon">{icon}</span>
          </a>
        ))}
      </div>

      {/* Головна кнопка */}
      <button
        className="floating-contact__trigger"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Закрити меню зв\'язку' : 'Зв\'язатися з нами'}
        aria-expanded={open}
      >
        {/* Phone icon (коли закрито) */}
        <span className={`floating-contact__trigger-icon ${open ? 'hidden' : ''}`}>
          <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor"
               strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5 19.8 19.8 0 0 1 3 2.18 2 2 0 0 1 5 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 7.09a16 16 0 0 0 6 6l.71-.71a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        {/* X icon (коли відкрито) */}
        <span className={`floating-contact__trigger-icon ${open ? '' : 'hidden'}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </button>
    </div>
  );
}
