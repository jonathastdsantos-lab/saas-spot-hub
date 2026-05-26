import { SaasProduct } from '../../lib/types';

interface LogoTileProps {
  p: SaasProduct;
  size?: number;
}

export function LogoTile({ p, size = 48 }: LogoTileProps) {
  const initials = p.name.substring(0, 2).toUpperCase();
  // Using a deterministic hue based on string length to give varied colors
  const hue = (p.name.length * 37) % 360;
  
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: size * 0.2,
      background: `hsl(${hue}, 40%, 20%)`,
      color: `hsl(${hue}, 80%, 80%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: size * 0.4,
      fontFamily: 'var(--font-mono)',
      border: '1px solid rgba(255,255,255,0.1)',
      flexShrink: 0
    }}>
      {initials}
    </div>
  );
}
