import React, {useState, useEffect} from 'react';
import CreateForm from './CreateForm';
import List from './List';

function App () {
  /* states */
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [count, setCount] = useState(1);

  /* hook de ciclo de vida */
  useEffect(() => {
    let call = (data) => {
        setData(data)
    }
    callFetch(`https://reqres.in/api/users?page=${count}`, call)
  }, [user, count]);


  const callFetch = (endpoint, call, config = null) => {
    fetch(endpoint, config)
        .then(res => res.json())
        .then(data => call(data))
  }

  return (
    <>
      <h1>Aplicación de prueba con ReqRes</h1>
      <p>User: {user.name ?? ""}</p>
      <p>Job: {user.job ?? ""}</p>
      <p>Page: {data.page} </p>
      <CreateForm setUser={setUser} setCount={setCount} count={count}/>
      <List setData={setData} users={data.data} />
    </>
  );
}

export default App;
