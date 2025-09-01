import { fetchUserProfile } from '@/lib/api/userApi';
import { ReduxProvider } from '../providers'; // Import the provider
import ClientDashboard from './ClientDashboard';

export default async function DashboardPage() {
  const userData = await fetchUserProfile();

  return (
    <ReduxProvider>
      <div>
        <h1>Server-Side Dashboard</h1>
        <ClientDashboard userData={userData} />
      </div>
    </ReduxProvider>
  );
}