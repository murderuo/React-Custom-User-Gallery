function UserInfo({ user }) {
  return (
    <div>
      <div className="user-name">{`${user?.name.first} ${user?.name.last}`} </div>
      <div className="user-email">{user?.email}</div>
      <div className="user-phone">{user?.phone}</div>
      <div className="user-location">{user?.location.country}</div>
    </div>
  );
}

export default UserInfo;
