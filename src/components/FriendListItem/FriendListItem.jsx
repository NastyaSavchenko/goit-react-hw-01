import s from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={s.imgWrapp}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline ? "Online" : " Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
