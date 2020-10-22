import React from 'react';
import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa';
const Icon=({name})=>{
   switch(name){
   case 'circle':
       return <FaRegCircle className='icons'></FaRegCircle>
   case 'cross':
       return <FaTimes className='icons'></FaTimes>
   default:
       return <FaRegCircle className='icons'></FaRegCircle>
   }
}
export default Icon;