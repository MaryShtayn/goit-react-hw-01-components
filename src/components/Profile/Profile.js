import PropTypes from 'prop-types';

export const Profile = ({
  userName,
  userTag,
  userLocation,
  userAvatar,
  userStats,
}) => {
  return (
    <div>
      <div className="profile">
        <div className="description">
          <img src={userAvatar} alt="User avatar" className="avatar" />
          <p className="name">{userName}</p>
          <p className="tag">{userTag}</p>
          <p className="location">{userLocation}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{userStats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{userStats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{userStats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userStats: PropTypes.objectOf(PropTypes.number).isRequired,
};
