const app=require("./index");

const connect=require("./configs/db");
require('dotenv').config();
const port =process.env.PORT ||8000 ;
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
})