import React,{useState} from 'react';
import './App.css';
import ShowData from './component/ShowData';

import ContactItem from './component/ContactItem';
import ContactForm from './component/ContactForm';

const Dummy_data=[{   id:'e1',
                       userName:'',
                       lastName:'',
                       email:'',
                       message:'',
                       additinalDetail:'',
}];
function App() {
     const[data,setData]=useState(Dummy_data);
     
    
   const addEnteredData=(entereItem)=>{
      
      setData((prevState)=>{
        return[...prevState,entereItem]
      });
   };
   
  
  return (
    <div>
    
    <ContactItem onSubmit={addEnteredData}  />
    <ShowData items={data}/>
    </div>
  );
 
}

export default App;
