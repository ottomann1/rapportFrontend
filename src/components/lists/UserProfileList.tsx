
import React, { useEffect, useState } from 'react';
import { getUserProfiles } from '../../services/apiService';
import { UserProfile } from '../../types/models';

const UserProfileList: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        const data = await getUserProfiles();
        setUserProfiles(data);
      } catch (error) {
        setError('Failed to fetch user profiles');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfiles();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>User Profile List</h1>
      <ul>
        {userProfiles.map(userProfile => (
          <li key={userProfile.id}>{userProfile.user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileList;