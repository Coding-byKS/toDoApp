export default function Form(props){   

    return(
        <div style={{fontSize:"30px"}}> 
           <form onSubmit={props.handleSubmit}>           
            <label>Add task     :  
            <input required 
            style={{fontSize:"30px", fontFamily: "Lucida Handwriting"} }
            type="text" 
            value={props.task}
            onChange={(e) => props.setTask(e.target.value)} 
            placeholder="buy milk..."/>
            </label>
            <input style={{fontSize:"30px", fontFamily: "Lucida Handwriting"}} type="submit" />
           </form>
        </div>
    )

}