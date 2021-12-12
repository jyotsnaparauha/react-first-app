import { useState } from "react";
import ContactForm from "./ContactForm";
import ShowData from "./ShowData";

 const ContactItem=(props)=>{
const recieveItem=(enteredData)=>{
        const enteredtItem={...enteredData,id:Math.random().toString()  }
        props.onSubmit(enteredtItem);}
    /*const[isEditing,setEditing]=useState(false);

   const recieveItem=(enteredData)=>{
     const enteredItem={...enteredData,id:Math.random().toString()  };
       
     props.onSubmit(enteredItem);
     setEditing(false);
    
    }
   const editingHandler=()=>{
       setEditing(true);



   }*/


   return(
       <div>
      <ContactForm  onSubmit={recieveItem}/>
     
    
    </div>
   );

    
}



export default ContactItem;