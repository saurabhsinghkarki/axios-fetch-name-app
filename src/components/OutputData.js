import axios from "axios";
import { useEffect } from "react";
const url = "https://react-app-720f4-default-rtdb.firebaseio.com";

const OutputData = (props) => {
  // useEffect(() => {
  //    console.log("Called from use Effect");
  //    getNamesList();
  //  }, []);

  const getNamesList = async () => {
    try {
      const response = await axios.get(url + "/names.json");
      props.onAddNames(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getNamesList}>getNames</button>
    </div>
  );
};
export default OutputData;
