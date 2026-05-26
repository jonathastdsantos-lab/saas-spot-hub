export function Stars({ value, size = 12 }: { value: number, size?: number }) {
  return (
    <div style={{ display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg 
          key={s} 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill={s <= value ? 'var(--acc)' : 'transparent'} 
          stroke={s <= value ? 'var(--acc)' : 'var(--text-muted)'} 
          strokeWidth="2"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
