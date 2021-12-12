//import './TableData.css';

import MyHeaderComponent from "./MyHeaderComponent";
import MyRowElement from "./MyRowElement";
const TableData = (props) => {
  const items = [
    {
      userName: props.userName,
      lastName: props.lastName,
      email: props.email,
      message: props.message,
      additionalDetail: props.additionalDetail,
    },
  ];

  return (
    <div>
      <MyHeaderComponent item={items} />

      <MyRowElement item={items} />
    </div>
  );
};
export default TableData;
