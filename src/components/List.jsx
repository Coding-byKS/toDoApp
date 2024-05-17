import { useState } from "react";
import "./List.css";
import { motion } from "framer-motion";
export default function List(props){

    const [styles, setStyle] = useState(false)
    
    function handleClick(){
        styles?setStyle(false):setStyle(true);
        }
    
    return(  
        <div id="listMain">                 
        {/* <li onClick={handleClick} contentEditable="true" style={styles?{ textDecoration: 'line-through', color: "green"}:{ textDecoration: 'none' }}>{props.task + "   "}   */}
        
        
        <motion.li 
        contentEditable="true"
        whileHover={{scale:1.2, color:"#c3195d"}}>{props.task+"  "}
        <motion.button 
        onClick={()=>props.handleRemove(props.index)}
        animate={{scale:.8}}
        whileHover={{scale:1}}>Remove</motion.button></motion.li>
        </div>

    )

}