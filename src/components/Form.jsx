export default function Form(props){   

    return(
        <div>
           <form onSubmit={props.handleSubmit}>           
            <label>Add task:
            <input required 
            type="text" 
            value={props.task}
            onChange={(e) => props.setTask(e.target.value)} 
            placeholder="buy milk..."/>
            </label>
            <input type="submit" />
           </form>
        </div>
    )

}