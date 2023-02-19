import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../../src/user.json';
import data from '../../src/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        userStats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
