import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [data, setDate] = useState([])

  useEffect(() => {
  Axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log("Getting from ;;;",res.data)
    setDate(res.data)
  }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data, index) => {
    return (
      <tr>
          <th>{data.id}</th>
          <th>{data.title}</th>
          <th>{data.body}</th>
        </tr>
    )
  })
  

  return (
    <div className="App">
      <h1>Consumindo API com Axios</h1>
      <h3>Aluno: Vitor de Andrade Marino - RA:2100010</h3>
      <table width="467" border="1px" align='center'>
        <tr>
          <th width="101" height="40">ID</th>
          <th width="200">Title</th>
          <th width="200">Body</th>
        </tr>
        {arr}
      </table>
    </div>
  );
}

export default App;
