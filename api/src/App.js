import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import UserList from './UserList';

function App() {

  const [listOfUSer,setListOfUser] = useState([]);
  

  useEffect(() => {
    const fetchItems = async () => {
      axios(`https://jsonplaceholder.typicode.com/users`)
      .then(result => { setListOfUser(result.data);})
    }
    fetchItems();
  },[]);




  return (
    <div className="App container">

      <div className="row">
      <UserList listOfUSer={listOfUSer} />
     
      
      </div>

    </div>
  );
}

export default App;





