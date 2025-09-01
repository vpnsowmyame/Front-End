import React, { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

const ChartApp = dynamic(
  () => import('chart_app/ChartApp'),
  { ssr: true }
);
const ProfileApp = dynamic(
  () => import('profile_app/ProfileApp'),
  { ssr: true }
);
const NotificationsApp = dynamic(
  () => import('notifications_app/NotificationsApp'),
  { ssr: true }
);

const Dashboard = () => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <header style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
      <h1>My Micro-Frontend Dashboard 🚀</h1>
    </header>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h2>📊 Analytics Chart</h2>
        <Suspense fallback={<div>Loading Chart</div>}>
          <ChartApp />
        </Suspense>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h2>👤 User Profile</h2>
        <Suspense fallback={<div>Loading Profile</div>}>
          <ProfileApp />
        </Suspense>
      </div>
      <div style={{ gridColumn: 'span 2', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h2>🔔 Notifications</h2>
        <Suspense fallback={<div>Loading Notifications</div>}>
          <NotificationsApp />
        </Suspense>
      </div>
    </div>
  </div>
);

export default Dashboard;