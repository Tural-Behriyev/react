import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const url = "https://jsonplaceholder.typicode.com/users/";

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(url + id)
      .then((res) => {
        if (res.status === 200) {
          SetUser(res.data);
        }
      })
      .catch((err) => {
        setUser({ error: 'vfdvddf' });
      });
  }, []);

  return (
    <div>
      {user.error || (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
