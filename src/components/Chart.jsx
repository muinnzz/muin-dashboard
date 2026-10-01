import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', users: 400, sessions: 240 },
  { day: 'Tue', users: 620, sessions: 380 },
  { day: 'Wed', users: 540, sessions: 420 },
  { day: 'Thu', users: 780, sessions: 510 },
  { day: 'Fri', users: 920, sessions: 640 },
  { day: 'Sat', users: 1100, sessions: 720 },
  { day: 'Sun', users: 980, sessions: 680 },
];

export default function Chart() {
  return (
    <div style={{
      background: 'var(--panel)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: 22,
      minHeight: 320,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600 }}>Weekly Performance</h3>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Users & sessions over the week</p>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
          <Legend color="var(--cyan)" label="Users" />
          <Legend color="#7c4dff" label="Sessions" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="cUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--cyan)" stopOpacity={0.5} />
              <stop offset="100%" stopColor="var(--cyan)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="cSessions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c4dff" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#7c4dff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="day" stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--muted)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 10,
              fontSize: 12,
            }}
            labelStyle={{ color: 'var(--cyan)' }}
          />
          <Area type="monotone" dataKey="users" stroke="var(--cyan)" strokeWidth={2} fill="url(#cUsers)" />
          <Area type="monotone" dataKey="sessions" stroke="#7c4dff" strokeWidth={2} fill="url(#cSessions)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <span style={{ width: 10, height: 10, borderRadius: 3, background: color }} />
      <span style={{ color: 'var(--muted)' }}>{label}</span>
    </div>
  );
}
