'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '@/lib/store/userSlice';

export default function ClientDashboard({ userData }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    // Dispatch the data from the server into the Redux store on the client
    if (userData) {
      dispatch(setProfile(userData));
    }
  }, [userData, dispatch]);

  return (
    <div>
      <h2>User Profile (Client Component)</h2>
      {profile ? (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      ) : (
        <p>Loading profile</p>
      )}
    </div>
  );
}