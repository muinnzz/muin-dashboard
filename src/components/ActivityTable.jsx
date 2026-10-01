const rows = [
  { id: '#4821', user: 'Aiman',   action: 'Login',   status: 'Success' },
  { id: '#4820', user: 'Sarah',   action: 'Upload',  status: 'Success' },
  { id: '#4819', user: 'Daniel',  action: 'Payment', status: 'Pending' },
  { id: '#4818', user: 'Nadia',   action: 'Logout',  status: 'Success' },
  { id: '#4817', user: 'Farid',   action: 'Update',  status: 'Failed'  },
];

const colorFor = (s) =>
  s === 'Success' ? 'var(--success)' :
  s === 'Pending' ? 'var(--cyan)'   : 'var(--danger)';

export default function ActivityTable() {
  return (
    <div style={{
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: 22,
      minHeight: 320,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600 }}>Recent Activity</h3>
        <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Live user actions</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {rows.map((r) => (
          <div key={r.id} style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr 1fr auto',
            alignItems: 'center',
            gap: 10,
            padding: '10px 12px',
            background: 'var(--panel-2)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            fontSize: 13,
            transition: 'border-color 0.18s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.4)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <span style={{ color: 'var(--muted)', fontSize: 11, fontFamily: 'monospace' }}>{r.id}</span>
            <span style={{ fontWeight: 500 }}>{r.user}</span>
            <span style={{ color: 'var(--muted)', fontSize: 12 }}>{r.action}</span>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              color: colorFor(r.status),
              background: `${colorFor(r.status)}18`,
              padding: '3px 8px',
              borderRadius: 6,
            }}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
