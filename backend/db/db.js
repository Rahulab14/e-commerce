const mongoose = require('mongoose')
module.exports = async()=>{
    try{
    await mongoose.connect(process.env.DB_URL)
    console.log('Mongo db connected')
    }
    catch(e){
        console.log(`something went wrong ${e.message}`)
        process.exit(0)
    }
}