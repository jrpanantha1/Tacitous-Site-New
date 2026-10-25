export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="currentColor" />
      <g fill="none" stroke="var(--logo-ink, #fff)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 9v5M18 14l3 3.5M46 14l-3 3.5M12 26h4.5M52 26h-4.5" />
        <path d="M22 31a10 10 0 1 1 20 0c0 4.6-3.2 7-4.6 9.6-.8 1.5-1 3-1 4.4h-8.8c0-1.4-.2-2.9-1-4.4C25.2 38 22 35.6 22 31Z" />
        <path d="M27.5 50h9M28.5 32l3.5 4 3.5-4" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-word">Tacitous</span>
    </span>
  );
}
