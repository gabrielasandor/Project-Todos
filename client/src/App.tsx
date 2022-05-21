import React from 'react';
import './App.css';
import {InputFeild } from './components/InputFeild';
//import {TodoList} from  './components/TodoList';
import {SearchBar} from  './components/SearchBar';


const  App: React.FC = () =>{
 
  return (
    <div className="App">
    
    <SearchBar/>
  
    <InputFeild/>
    
    </div>
  );
}

export default App;
