
import { useState } from 'react';
import './App.css';
import Aside from './component/Aside/Aside';
import Main from './component/Main/Main';






function App() {
  const [list,setList]=useState([]);

  const addToList = time => {
    if (list.length === 0) {
      setList([time])
    } else {
      const newList = [...list, time];
      setList(newList);
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
      
      <Main addToList={addToList}></Main>
      <Aside list={list}></Aside>
      </div>
    </div>
  );
}

export default App;
