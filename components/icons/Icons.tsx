import type { ServiceId } from '@/lib/services/catalog';

type IconProps = { className?: string };

export function SvcIcon({ id }: { id: ServiceId | 'saas' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (id) {
    case 'agents':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="4" cy="5" r="1.5" />
          <circle cx="20" cy="5" r="1.5" />
          <circle cx="4" cy="19" r="1.5" />
          <circle cx="20" cy="19" r="1.5" />
          <path d="M5.3 6.2 L9.5 10.5 M14.5 10.5 L18.7 6.2 M5.3 17.8 L9.5 13.5 M14.5 13.5 L18.7 17.8" />
        </svg>
      );
    case 'n8n':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="2" y="9" width="6" height="6" rx="1" />
          <rect x="16" y="3" width="6" height="6" rx="1" />
          <rect x="16" y="15" width="6" height="6" rx="1" />
          <path d="M8 12 H12 M12 12 V6 H16 M12 12 V18 H16" />
        </svg>
      );
    case 'consulting':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <path d="M12 3 V5 M12 19 V21 M3 12 H5 M19 12 H21" />
        </svg>
      );
    case 'training':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 6 L12 3 L21 6 L12 9 Z" />
          <path d="M3 11 L12 14 L21 11" />
          <path d="M3 16 L12 19 L21 16" />
        </svg>
      );
    case 'mcp':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="8" width="9" height="8" rx="1" />
          <path d="M12 10 H18 M12 14 H18" />
          <circle cx="20" cy="10" r="1.5" />
          <circle cx="20" cy="14" r="1.5" />
          <path d="M6 8 V5 M9 8 V5" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 9 H22" />
          <circle cx="5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="7" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="9" cy="6.5" r=".5" fill="currentColor" />
          <path d="M6 13 H12 M6 16 H14" />
        </svg>
      );
    case 'saas':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3 L21 7.5 L12 12 L3 7.5 Z" />
          <path d="M3 12 L12 16.5 L21 12" />
          <path d="M3 16.5 L12 21 L21 16.5" />
        </svg>
      );
    default:
      return null;
  }
}

export function Flag({ code }: { code: 'ca' | 'es' | 'en' | 'fr' }) {
  const props = { viewBox: '0 0 18 12', style: { display: 'block', width: 18, height: 12 } };
  if (code === 'ca')
    return (
      <svg {...props}>
        <rect width="18" height="12" fill="#FCDD09" />
        {[1, 3, 5, 7, 9].map((y) => (
          <rect key={y} x="0" y={y} width="18" height="1.2" fill="#DA121A" />
        ))}
      </svg>
    );
  if (code === 'es')
    return (
      <svg {...props}>
        <rect width="18" height="12" fill="#AA151B" />
        <rect y="3" width="18" height="6" fill="#F1BF00" />
      </svg>
    );
  if (code === 'en')
    return (
      <svg {...props}>
        <rect width="18" height="12" fill="#012169" />
        <path d="M0 0 L18 12 M18 0 L0 12" stroke="#fff" strokeWidth="2.4" />
        <path d="M0 0 L18 12 M18 0 L0 12" stroke="#C8102E" strokeWidth="1" />
        <path d="M9 0 V12 M0 6 H18" stroke="#fff" strokeWidth="3" />
        <path d="M9 0 V12 M0 6 H18" stroke="#C8102E" strokeWidth="1.6" />
      </svg>
    );
  return (
    <svg {...props}>
      <rect width="6" height="12" fill="#002395" />
      <rect x="6" width="6" height="12" fill="#fff" />
      <rect x="12" width="6" height="12" fill="#ED2939" />
    </svg>
  );
}

export function BlogCover({ variant }: { variant: number }) {
  const common = {
    fill: 'none',
    stroke: '#86A4D8',
    strokeWidth: 0.6,
    strokeLinecap: 'round' as const,
  };
  if (variant % 3 === 0)
    return (
      <svg
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #141B33, #0A0E1C)' }}
      >
        <g opacity="0.8">
          {[...Array(9)].map((_, i) => (
            <circle key={i} cx={20 + (i % 3) * 50} cy={20 + Math.floor(i / 3) * 25} r={i === 4 ? 5 : 3} {...common} />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
            const x1 = 20 + (i % 3) * 50;
            const y1 = 20 + Math.floor(i / 3) * 25;
            if (i % 3 < 2)
              return <line key={`h${i}`} x1={x1 + 4} y1={y1} x2={x1 + 46} y2={y1} {...common} opacity="0.4" />;
            return null;
          })}
        </g>
      </svg>
    );
  if (variant % 3 === 1)
    return (
      <svg
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #141B33, #0A0E1C)' }}
      >
        <g opacity="0.8">
          <rect x="12" y="20" width="30" height="14" rx="2" {...common} />
          <rect x="65" y="12" width="30" height="14" rx="2" {...common} />
          <rect x="65" y="36" width="30" height="14" rx="2" {...common} />
          <rect x="65" y="60" width="30" height="14" rx="2" {...common} />
          <rect x="118" y="36" width="30" height="14" rx="2" {...common} />
          <path d="M42 27 L65 19 M42 27 L65 43 M42 27 L65 67 M95 43 L118 43" {...common} strokeDasharray="1.5 1.5" />
        </g>
      </svg>
    );
  return (
    <svg
      viewBox="0 0 160 90"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #141B33, #0A0E1C)' }}
    >
      <g opacity="0.7">
        <path d="M20 45 Q50 15, 80 45 T140 45" {...common} />
        <path d="M20 52 Q50 22, 80 52 T140 52" {...common} opacity="0.6" />
        <path d="M20 59 Q50 29, 80 59 T140 59" {...common} opacity="0.4" />
        {[20, 50, 80, 110, 140].map((x) => (
          <g key={x}>
            <circle cx={x} cy={45} r="2" fill="#86A4D8" />
            <circle cx={x} cy={45} r="5" {...common} opacity="0.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return <span className={className ? `arr ${className}` : 'arr'}>→</span>;
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 2.9 1.1 4.6 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.5 0-3-.4-4.3-1.1l-.3-.2-3.1.8.8-3-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v2h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.48 3.04 5.48 6.98V22h-4.56v-6.58c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.52 1.71-2.52 3.48V22H7.72V8z" />
    </svg>
  );
}
