import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [userList, setUserList] = useState([]);

  const handleAddClick = () => {
    setUserList([...userList, input]);
    setInput('');
  };

  return (
    <div>
      <h1>Hello World</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
      <h2>User List</h2>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;