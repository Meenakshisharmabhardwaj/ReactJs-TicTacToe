import React,{useState} from 'react';
import './App.css';
import Icon from './components/icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Card,CardBody,Button,Container,Col,Row} from 'reactstrap';

const itemArray=new Array(9).fill("empty");
function App() {
  const [isCross,setIsCross]=useState(false);
  const [winMEssage,setwinMEssage]=useState("");
  const Reload=()=>{
//
  }
  const CheckIsWinner=()=>{
    //
  }
  const ChangeItem=(itemNumber)=>{
    //
  }
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Icon></Icon>
      </header>
    </div>
  );
}

export default App;
