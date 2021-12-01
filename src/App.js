import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [users, setUsers] = useState([]);

  const addUser = (event) => {
    setInputData(event.target.value);
  };

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
      setUsers(res.data);
    });
  }, []);

  const saveUser = () => {
    alert('Thank You');
    console.warn({ inputData });
    setUsers([...users, inputData]);
    setInputData('');
  };
  /*
  useEffect(() => {
  const postData = {
    user: inputData
  };
  axios
    .post(`https://jsonplaceholder.typicode.com/users`, { postData })
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    clickHandler;
    }, []);
*/
  return (
    <div className="App">
      <div className="test1">
        <div className="test3">
          <h2>Digikull Student</h2>
        </div>
        <div className="test2">
          <h3>Hello User</h3>
          <input type="text" value={inputData} onChange={addUser}></input>
          <button onClick={saveUser}>Add</button>
          <br></br>
          {users.length > 1 &&
            users.map((user, ind) => (
              <div key={ind} className="test4">
                <p>{user.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
