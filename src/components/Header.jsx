import { Search, Bell, Sun } from 'lucide-react';

export default function Header({ active }) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(15, 23, 32, 0.6)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>{active}</h1>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
          Welcome back, Muin · {new Date().toLocaleDateString('ms-MY', { dateStyle: 'long' })}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: '8px 12px',
          width: 260,
        }}>
          <Search size={16} color="var(--muted)" />
          <input
            placeholder="Search..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontFamily: 'inherit',
              fontSize: 13,
              width: '100%',
            }}
          />
        </div>

        <IconBtn><Sun size={18} /></IconBtn>
        <IconBtn>
          <Bell size={18} />
          <span style={{
            position: 'absolute', top: 8, right: 9,
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--cyan)',
            boxShadow: '0 0 8px var(--cyan)',
          }} />
        </IconBtn>

        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--cyan), var(--cyan-2))',
          display: 'grid', placeItems: 'center',
          color: '#06131a', fontWeight: 700, fontSize: 14,
        }}>M</div>
      </div>
    </header>
  );
}

function IconBtn({ children }) {
  return (
    <button style={{
      position: 'relative',
      width: 38, height: 38,
      borderRadius: 10,
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      color: 'var(--text)',
      display: 'grid', placeItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.18s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
    >
      {children}
    </button>
  );
}
