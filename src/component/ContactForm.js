import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = (props) => {
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMassage] = useState("");
  const [additionalDetail, setAdditionalDetail] = useState("");
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const messageHandler = (event) => {
    setMassage(event.target.value);
  };

  const additionalDetailHandler = (event) => {
    setAdditionalDetail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const items = {
      userName: userName,
      lastName: lastName,
      email: email,
      message: message,
      additionalDetail: additionalDetail,
    };

    setUserName("");
    setLastName("");
    setMassage("");
    setEmail("");
    setAdditionalDetail("");
    props.onSubmit(items);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="col-md-6">
          <label>UserName</label>
          <input
            type="text" size="30" value={userName}
            placeholder="userName"
            required
            onChange={userNameHandler}
          />

          <label>LastName</label>

          <input
            type="text" 
            placeholder="lasrName" value={lastName}
            required
            onChange={lastNameHandler}
          />

          <label>Email</label>

          <input
            type="email" size="30"
            placeholder="email"
            required value={email}
            onChange={emailHandler}
          />
        
      </div>
      
      <div className="col-md-6">
      
        <label>Message</label>
        <textarea placeholder="Start typing..."  value={message}cols="10" rows="10"onChange={messageHandler} />
      
        
        <label>AdiitionaDetails</label>

        <textarea
          placeholder="Start typing..." cols="10" rows="10" value={additionalDetail}
          onChange={additionalDetailHandler}
        />
          
           </div>
      
      <div className="col-md-12">
      
        <button type="submit" align className="submit">Add Item</button>
        
      </div>
    </form>
  );
};
export default ContactForm;
