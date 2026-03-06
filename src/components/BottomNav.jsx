// components/BottomNav.jsx
import './BottomNav.css';

export default function BottomNav() {
    return (
        <nav className="bottom-nav">
            <a href="#hero" className="bottom-nav__link" aria-label="Головна">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                    <path d="M9 22V12h6v10" />
                    <path d="M9 7.5h6" />
                </svg>
                <span>Головна</span>
            </a>
            <a href="#rooms" className="bottom-nav__link" aria-label="Номери">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7.5" cy="15.5" r="5.5" />
                    <path d="M21 2l-9.6 9.6" />
                    <path d="M15.5 7.5L17 6l2 2-1.5 1.5" />
                </svg>
                <span>Номери</span>
            </a>
            <a href="#gallery" className="bottom-nav__link" aria-label="Галерея">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span>Галерея</span>
            </a>
            <a href="#location" className="bottom-nav__link" aria-label="Розташування">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Контакти</span>
            </a>
            <a href="tel:+380673801949" className="bottom-nav__link bottom-nav__link--phone" aria-label="Телефон">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Телефон</span>
            </a>
        </nav>
    );
}
