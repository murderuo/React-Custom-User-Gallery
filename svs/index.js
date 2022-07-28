function Image({ user, setActiveUser }) {
  const imgHandler = e => {
    // setActiveUser({ ...user, userStatus: true })
    user.userStatus === false
      ? setActiveUser({ ...user, userStatus: true })
      : setActiveUser({ ...user, userStatus: false });
      console.log(user.userStatus);
    };

    
    // console.log(user.userStatus === false ? 'img' : 'img active-user');
  return (
    <div className={user.userStatus === false ? 'img' : 'img active-user'}>
      <img src={user.picture.medium} alt="user" onClick={imgHandler} />
      {/* {JSON.stringify(user.userStatus)} */}
    </div>
  );
}

export default Image;
