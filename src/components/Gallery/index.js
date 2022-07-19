import Image from '../Image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from '../UserInfo';

function Gallery() {
  const [pagesize,setPageSize]=useState(5)
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get(`https://randomuser.me/api/?results=${pagesize}`);
      const results = response.data.results;
      // console.log(results);
      setUsers(results);
      setActiveUser(results[0]);
    };
    fetchData();
  }, [pagesize]);

  const optionsHandler = e => {
    // console.log(e.target.value);
    setPageSize(e.target.value);
  }

  return (
    <div className="image">
      <div className="big-image">
        <img src={activeUser?.picture.large} alt="big user " />
      </div>
      <div className="user-info ">
        <UserInfo user={activeUser} />
      </div>
      <div className="options">
        <label >Show me More..</label>
        <select name="option" onChange={optionsHandler} >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>{' '}
      </div>
      <div className="small-images">
        {users.map((user, index) => (
          <Image key={index} user={user} setActiveUser={setActiveUser} />
        ))}
      </div>

    </div>
  );
}

export default Gallery;
