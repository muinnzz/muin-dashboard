import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StatCard({ label, value, change, up, icon: Icon }) {
  return (
    <div style={{
      background: 'linear-gradient(180deg, var(--panel) 0%, var(--panel-2) 100%)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: 18,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.2s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--cyan)';
      e.currentTarget.style.boxShadow = '0 8px 30px -10px var(--cyan-glow)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    >
      <div style={{
        position: 'absolute', top: -40, right: -40,
        width: 120, height: 120, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.15), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500, letterSpacing: 0.4 }}>
          {label.toUpperCase()}
        </span>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'rgba(0, 229, 255, 0.1)',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          display: 'grid', placeItems: 'center',
          color: 'var(--cyan)',
        }}>
          <Icon size={16} />
        </div>
      </div>

      <div style={{ marginTop: 14, fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>
        {value}
      </div>

      <div style={{
        marginTop: 8,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 12,
        fontWeight: 600,
        color: up ? 'var(--success)' : 'var(--danger)',
      }}>
        {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
        <span style={{ color: 'var(--muted)', fontWeight: 400, marginLeft: 4 }}>
          vs last week
        </span>
      </div>
    </div>
  );
}
