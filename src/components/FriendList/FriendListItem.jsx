import clsx from "clsx";
import css from "../FriendList/FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendsItemWrapper}>
      <img className={css.friendPhoto} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
