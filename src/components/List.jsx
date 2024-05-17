import { useState } from "react";
export default function List(props){

    const [styles, setStyle] = useState(false)
    
    function handleClick(){
        styles?setStyle(false):setStyle(true);
        }
    
    return(  
        <>                 
        <li onClick={handleClick} contentEditable="true" style={styles?{ textDecoration: 'line-through', color: "green"}:{ textDecoration: 'none' }}>{props.task}</li>
        {/* <li><div contentEditable="true">{props.task}</div></li> */}
        
        
        <button onClick={()=>props.handleRemove(props.index)}>Done. Remove this task</button>
        </>

    )

}