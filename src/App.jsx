import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import Chart from './components/Chart';
import ActivityTable from './components/ActivityTable';
import { Users, Activity, Cpu, TrendingUp } from 'lucide-react';

export default function App() {
  const [active, setActive] = useState('Dashboard');

  const stats = [
    { label: 'Total Users', value: '12,438', change: '+12.4%', up: true, icon: Users },
    { label: 'Active Now', value: '1,204', change: '+3.1%', up: true, icon: Activity },
    { label: 'CPU Load', value: '42%', change: '-2.0%', up: false, icon: Cpu },
    { label: 'Revenue', value: 'RM 84k', change: '+8.7%', up: true, icon: TrendingUp },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar active={active} setActive={setActive} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header active={active} />

        <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Stats */}
          <section style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 18,
          }}>
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </section>

          {/* Chart + Activity */}
          <section style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
            gap: 18,
          }}>
            <Chart />
            <ActivityTable />
          </section>
        </div>
      </main>
    </div>
  );
}
