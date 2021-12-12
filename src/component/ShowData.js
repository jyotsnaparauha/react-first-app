import TableData from "./TableData";

const ShowData = (props) => {
  return (
    <div>
      {props.items.map((data) => (
        <TableData
          key={data.id}
          userName={data.userName}
          lastName={data.lastName}
          message={data.message}
          additionalDetail={data.additionalDetail}
          email={data.email}
        />
      ))}
      ;
    </div>
  );
};
export default ShowData;
