const app=require('./app');
const connectDB=require('./db/db');

process.on('uncaughtException',()=>{
    console.log(`Server shutting down ${error.message}`);
    process.exit(1);
})
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'backend/config/.env' });
}
app.listen(process.env.PORT,()=>{
    console.log(`Server successfully listen at port http://localhost:${process.env.PORT} `);
})