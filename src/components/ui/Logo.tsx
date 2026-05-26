export function Logo({ size = 24, className = '' }: { size?: number, className?: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.4 }} className={className}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--acc)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="var(--acc)" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="var(--acc)" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
      {size > 16 && <span style={{ fontWeight: 700, fontSize: size * 0.8, letterSpacing: '-0.03em' }}>Stackly</span>}
    </div>
  );
}
