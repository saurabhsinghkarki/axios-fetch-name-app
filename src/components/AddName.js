
import React,{useRef} from "react";
import axios from "axios";
import "./AddName.css";

const url = "https://react-app-720f4-default-rtdb.firebaseio.com";

const AddName = () => {

const inputRef = useRef("");

const submitHandler = (event) => {
event.preventDefault();

if(inputRef.current.value.trim() === ""){
alert("Enter Valid Name")
}

else{
   const studNames = {
      nameOfStud:inputRef.current.value
   }
   
   
      const postNames = async ()=>{
      try{
         const response = await axios.post(url + "/names.json"  , studNames)
         console.log(response.status);
      }
      catch(error){
         console.log(error)
      }
      }
   postNames();
      
   
   
   inputRef.current.value = "";
}

   }

return(
   <div className="mainDiv">
      <div className="header">
         Hello User
      </div>
      <form onSubmit={submitHandler}>
         <label htmlFor="nameInput"></label>
         <input type="text" id="nameInput" ref={inputRef}/>
         <button type="submit">Add</button>
      </form>
   </div>
);
}

export default AddName;