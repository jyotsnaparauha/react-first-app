function MyHeaderComponent(props) {     
 return (
    <div style={{ "width" : "50%", "white-space" :"nowrap"}}>
        <div style={{ "width" : "33%", "display": "inline-block"}}>UserName</div>
        <div style={{ "width" : "33%", "display": "inline-block"}}>LastName</div>
        <div style={{ "width" : "33%", "display": "inline-block"}}>Email</div>
        <div style={{ "width" : "33%", "display": "inline-block"}}>Message</div>
        <div style={{ "width" : "33%", "display": "inline-block"}}>AdditionalDetail</div>
    </div>
 );
}

export default MyHeaderComponent;
