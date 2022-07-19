// import React, { useState, useEffect } from 'react';

function Image({ index, user, setActiveUser }) {

  const imgHandler = e => {
    console.log(e);
    console.log(index);
    setActiveUser(user);
  };

  return (
    <div className='img'>
      <img src={user.picture.medium} alt='user' onClick={imgHandler} />
    </div>
  );
}

export default Image;
