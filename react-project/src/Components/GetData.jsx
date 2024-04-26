import React, { useState, useEffect } from "react";
import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/users";

// const { data } = await axios(url);
// console.log(data);

const GetData = () => {
  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     axios(url).then(({ data }) => {
  //       setUsers(data);
  //     });
  //   },[]);

  return (
    <div>
      {/* {users.map(({ username, id }) => {
        return <div key={id}>{username}</div>;
      })} */}

      {/* {
        data.map(({username,id}) => {
          return <div key={id}>{username}</div>
        })
      } */}
    </div>
  );
};

export default GetData;