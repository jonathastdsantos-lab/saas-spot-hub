export function IOSDevice({ children, dark = true }: { children: React.ReactNode, dark?: boolean }) {
  return (
    <div style={{
      width: 390,
      height: 844,
      borderRadius: 44,
      border: '12px solid #1a1a1a',
      background: dark ? '#000' : '#fff',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      margin: '0 auto'
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 160,
        height: 32,
        background: '#1a1a1a',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 50
      }} />
      
      {/* Status Bar Mock */}
      <div style={{
        height: 44,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 24px',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 600,
        color: dark ? '#fff' : '#000',
        zIndex: 40,
        position: 'relative'
      }}>
        <span>09:41</span>
        <div style={{ display: 'flex', gap: 4 }}>
          {/* Signal, Wifi, Battery mocks could go here */}
          <span>•••</span>
        </div>
      </div>

      <div style={{ height: 'calc(100% - 44px)', position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
}
