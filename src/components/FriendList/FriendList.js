import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
