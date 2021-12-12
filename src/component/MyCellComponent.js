function MyCellComponent(props) {     

    return (
      <div style={{ "width" : "50%", "white-space" :"nowrap"}}>
      
     
      <div style={{ "width" : "33%", "display": "inline-block"}}>{props.userName}</div>
      <div style={{ "width" : "33%", "display": "inline-block"}}>{props.lastName}</div> 
      <div style={{ "width" : "33%", "display": "inline-block"}}>{props.email}</div>
      <div style={{ "width" : "33%", "display": "inline-block"}}>{props.message}</div>
      <div style={{ "width" : "33%", "display": "inline-block"}}>{props.additionalDetail}</div>
      <div>{console.log(props.lastName)}</div>
       </div> 
        
      );
}


export default MyCellComponent;
   