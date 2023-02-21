import NamesList from "./NamesList";

const Names = (props)=>{
   
console.log(props)

return(
<ul>
{props.names.map((names , index)=><NamesList

key={index}
names={names.names}

/>
)}
</ul>
)

}

export default Names;