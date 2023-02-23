import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  userName,
  userTag,
  userLocation,
  userAvatar,
  userStats,
}) => {
  return (
    <div>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={userAvatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{userName}</p>
          <p className={css.tag}>{userTag}</p>
          <p className={css.location}>{userLocation}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{userStats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{userStats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{userStats.likes}</span>
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
