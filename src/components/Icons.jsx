// components/Icons.jsx
// Thin-stroke SVG icons — all use currentColor so they inherit parent's color naturally

const defaultProps = {
  width:   24,
  height:  24,
  stroke:  'currentColor',
  fill:    'none',
  strokeWidth: 1.5,
  strokeLinecap:  'round',
  strokeLinejoin: 'round',
};

export function IconTower(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Medieval tower / castle silhouette */}
      <path d="M5 21V9l3-3h8l3 3v12" />
      <path d="M2 9h2M20 9h2M5 9V6h1V4h1V6h2V4h1V6h1V9" />
      <path d="M9 21v-5a3 3 0 0 1 6 0v5" />
      <line x1="5" y1="21" x2="19" y2="21" />
    </svg>
  );
}

export function IconHome(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M9 22V12h6v10" />
      <path d="M9 7.5h6" />
    </svg>
  );
}

export function IconLeaf(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <path d="M12 22c0 0-8-4-8-12a8 8 0 0 1 16 0c0 8-8 12-8 12z" />
      <line x1="12" y1="10" x2="12" y2="22" />
      <path d="M8 14c1.5-1 3-1.5 4-1.5" />
    </svg>
  );
}

export function IconCityView(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Panorama / cityscape */}
      <rect x="2" y="11" width="4" height="10" />
      <rect x="8" y="7"  width="4" height="14" />
      <rect x="14" y="9" width="4" height="12" />
      <line x1="18" y1="21" x2="22" y2="21" />
      <line x1="2"  y1="21" x2="22" y2="21" />
      <line x1="18" y1="9"  x2="22" y2="9"  />
      <line x1="20" y1="9"  x2="20" y2="21" />
    </svg>
  );
}

export function IconWifi(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <path d="M1.5 8.5a17 17 0 0 1 21 0" />
      <path d="M5 12.5a11 11 0 0 1 14 0" />
      <path d="M8.5 16.5a6 6 0 0 1 7 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconParking(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Car icon */}
      <path d="M5 17H3a1 1 0 0 1-1-1v-4l2-5h14l2 5v4a1 1 0 0 1-1 1h-2" />
      <circle cx="7.5" cy="17" r="2.5" />
      <circle cx="16.5" cy="17" r="2.5" />
      <line x1="10" y1="17" x2="14" y2="17" />
      <path d="M4 12h16" />
    </svg>
  );
}

export function IconKitchen(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Coffee cup */}
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
      <line x1="6"  y1="2" x2="6"  y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  );
}

export function IconBreakfast(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Breakfast tray / cloche */}
      <ellipse cx="12" cy="17" rx="10" ry="3" />
      <path d="M12 17V9" />
      <path d="M7 9a5 5 0 0 1 10 0" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function IconFamily(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Two adults + child */}
      <circle cx="7"  cy="5"  r="2" />
      <circle cx="17" cy="5"  r="2" />
      <circle cx="12" cy="6"  r="1.5" />
      <path d="M4 21v-5a3 3 0 0 1 6 0v5" />
      <path d="M14 21v-5a3 3 0 0 1 6 0v5" />
      <path d="M9.5 21v-3a2.5 2.5 0 0 1 5 0v3" />
    </svg>
  );
}

export function IconSoundproof(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Moon = night / quiet */}
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <line x1="19" y1="4" x2="19" y2="7" opacity=".4" />
      <line x1="22" y1="5.5" x2="20.5" y2="5.5" opacity=".4" />
    </svg>
  );
}

export function IconHeritage(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Scroll / parchment map */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

export function IconKey(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M21 2l-9.6 9.6" />
      <path d="M15.5 7.5L17 6l2 2-1.5 1.5" />
    </svg>
  );
}

export function IconChurch(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="10.5" y1="3.5" x2="13.5" y2="3.5" />
      <path d="M8 5h8v4l2 2v10H6V11l2-2z" />
      <path d="M9 21v-5h6v5" />
      <line x1="6" y1="11" x2="18" y2="11" />
    </svg>
  );
}

export function IconMuseum(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      {/* Greek columns */}
      <polyline points="3 9 12 3 21 9" />
      <rect x="3" y="9"  width="18" height="2" />
      <rect x="3" y="20" width="18" height="1.5" />
      <line x1="6"  y1="11" x2="6"  y2="20" />
      <line x1="10" y1="11" x2="10" y2="20" />
      <line x1="14" y1="11" x2="14" y2="20" />
      <line x1="18" y1="11" x2="18" y2="20" />
    </svg>
  );
}

export function IconMap(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8"  y1="2"  x2="8"  y2="18" />
      <line x1="16" y1="6"  x2="16" y2="22" />
    </svg>
  );
}

export function IconPin(props) {
  const p = { ...defaultProps, ...props };
  return (
    <svg viewBox="0 0 24 24" width={p.width} height={p.height} fill={p.fill}
         stroke={p.stroke} strokeWidth={p.strokeWidth}
         strokeLinecap={p.strokeLinecap} strokeLinejoin={p.strokeLinejoin}
         aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
