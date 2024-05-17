import { useState } from "react";
import "./List.css";
export default function List(props){

    const [styles, setStyle] = useState(false)
    
    function handleClick(){
        styles?setStyle(false):setStyle(true);
        }
    
    return(  
        <div id="listMain">                 
        <li onClick={handleClick} contentEditable="true" style={styles?{ textDecoration: 'line-through', color: "green"}:{ textDecoration: 'none' }}>{props.task + "   "}  
        
        
        
        <button onClick={()=>props.handleRemove(props.index)}>Remove</button></li>
        </div>

    )

}