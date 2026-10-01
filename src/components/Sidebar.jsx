import {
  LayoutDashboard, BarChart3, Users, Settings,
  Bell, Shield, Zap
} from 'lucide-react';

const items = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Users',     icon: Users },
  { name: 'Alerts',    icon: Bell },
  { name: 'Security',  icon: Shield },
  { name: 'Settings',  icon: Settings },
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside style={{
      width: 240,
      background: 'var(--bg-2)',
      borderRight: '1px solid var(--border)',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      position: 'sticky',
      top: 0,
      height: '100vh',
    }}>
      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 10px 22px',
        borderBottom: '1px solid var(--border)',
        marginBottom: 14,
      }}>
        <div style={{
          width: 36, height: 36,
          borderRadius: 10,
          background: 'linear-gradient(135deg, var(--cyan), var(--cyan-2))',
          display: 'grid', placeItems: 'center',
          boxShadow: '0 0 20px var(--cyan-glow)',
        }}>
          <Zap size={20} color="#06131a" strokeWidth={2.5} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: 0.5 }}>MUIN</div>
          <div style={{ fontSize: 11, color: 'var(--muted)' }}>Control Panel</div>
        </div>
      </div>

      {/* Menu */}
      {items.map(({ name, icon: Icon }) => {
        const isActive = active === name;
        return (
          <button
            key={name}
            onClick={() => setActive(name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 12px',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              background: isActive ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
              color: isActive ? 'var(--cyan)' : 'var(--muted)',
              fontFamily: 'inherit',
              fontSize: 14,
              fontWeight: isActive ? 600 : 500,
              textAlign: 'left',
              transition: 'all 0.18s ease',
              boxShadow: isActive ? 'inset 0 0 0 1px rgba(0, 229, 255, 0.25)' : 'none',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = 'var(--panel)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = 'transparent';
            }}
          >
            <Icon size={18} strokeWidth={2} />
            {name}
          </button>
        );
      })}

      <div style={{ marginTop: 'auto', padding: 12, borderRadius: 10, background: 'var(--panel)', border: '1px solid var(--border)' }}>
        <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>SYSTEM STATUS</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--success)',
            boxShadow: '0 0 8px var(--success)',
          }} />
          <span style={{ fontSize: 13, fontWeight: 500 }}>All systems operational</span>
        </div>
      </div>
    </aside>
  );
}
