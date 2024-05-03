import FriendListItem from "./FriendListItem";
import css from "../FriendList/FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => {
        return (
          <li className={css.friendsItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
