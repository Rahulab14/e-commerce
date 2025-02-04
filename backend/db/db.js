const mongoose = require('mongoose');
module.exports=async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(e){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}