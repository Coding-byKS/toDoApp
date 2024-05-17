export default function Heading(){

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // console.log(date.getDate(), date.getMonth(), date.getFullYear())
    const today = `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
    console.log(today)
    return(
        <div>
            <h1>Hi, Today is 📅 {today}. </h1>
            <h2>Get a head-start 🏃‍♀️. Make your To Do List 📃!</h2>
        </div>
    )
}