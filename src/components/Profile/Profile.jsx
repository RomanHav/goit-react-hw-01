import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats = { followers: 0, views: 0, likes: 0 },
}) {
  return (
    <div className={css.profile}>
      <div className="about-profile">
        <div className={css.background}>
          <img className={css.profileimg} src={image} alt="User avatar" />
        </div>
        <p className={css.profilename}>{name}</p>
        <p className={css.profilemail}>@{tag}</p>
        <p className={css.profilelocation}>{location}</p>
      </div>

      <ul className={css.profileinfo}>
        <li className={css.profilepart}>
          <span className={css.profiletitle}>Followers</span>
          <span className={css.profiledescription}>{stats.followers}</span>
        </li>
        <li className={css.profilepart}>
          <span className={css.profiletitle}>Views</span>
          <span className={css.profiledescription}>{stats.views}</span>
        </li>
        <li className={css.profilepart}>
          <span className={css.profiletitle}>Likes</span>
          <span className={css.profiledescription}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
