export function ScoreGauge({ score, size = 64 }: { score: number, size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;
  
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
        <circle 
          cx={size/2} cy={size/2} r={radius} 
          fill="none" stroke="var(--surface-3)" strokeWidth="4" 
        />
        <circle 
          cx={size/2} cy={size/2} r={radius} 
          fill="none" stroke="var(--acc)" strokeWidth="4" 
          strokeDasharray={circumference} 
          strokeDashoffset={offset} 
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-out' }}
        />
      </svg>
      <div className="sx-mono" style={{ fontSize: size * 0.35, fontWeight: 600, color: 'var(--text)' }}>
        {score}
      </div>
    </div>
  );
}
