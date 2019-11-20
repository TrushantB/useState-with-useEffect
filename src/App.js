import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import  Header  from './header'
import './App.css';
import axios from 'axios';

function App() {
  const [userRequest, setUserRequest] = useState({
    loading: false,
    user: null,
  });
  useEffect(()=> {
    setUserRequest({ loading: true });
    alert("it works");
    axios.get('http://localhost:4000/posts').then((res) => {
    console.log(res.data);
    setUserRequest({
      loading: false,
      user: res.data,
    });
  })
},[]);
 
  return (
    <div className="App">
      <header className="App-header">
      {
      userRequest.user && <Header myData={userRequest.user}/>
      }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
