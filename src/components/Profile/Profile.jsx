import s from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;
  const { followers, views, likes } = stats;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={image} alt={tag} />
        <p className={s.name}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <span className={s.statsName}>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span className={s.statsName}>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span className={s.statsName}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
