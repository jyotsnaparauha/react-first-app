import MyCellComponent from "./MyCellComponent.js";
import MyHeaderComponent from "./MyHeaderComponent.js";
const MyRowElement =(props)=> {
  return(
    <div>
    
          {props.item.map((data)=>(
            
            <MyCellComponent  userName={data.userName}
                 lastName={data.lastName} message={data.message}
                  additionalDetail={data.additionalDetail}email={data.email}/> 
          
          
                 
          ))};
      
    </div>
  );
}

export default MyRowElement;
