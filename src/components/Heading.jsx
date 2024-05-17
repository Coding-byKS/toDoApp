import { motion } from "framer-motion";
export default function Heading(){

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // console.log(date.getDate(), date.getMonth(), date.getFullYear())
    const today = `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
    console.log(today)
    return(
        <div>
            <motion.h1 animate={{y:-50,color:"#402a23"}}>Hi, Today is 📅 {today}. </motion.h1>
            <motion.h2 animate={{y:-50, color:"#402a23"}}>Get a head-start 🏃‍♀️. Make your To Do List 📃!</motion.h2>
        </div>
    )
}