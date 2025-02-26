const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minlength:4},
    avatar:{
        id:{type:String},
        url:{type:String}
    },
    adress:[
        {
          country:{type:String,required:true},
          city:{typr:String,required:true},
          adress1:{type:String},
          adress2:{type:String},
          pincode:{type:Number,required:true}  
        }
    ],
    role:{type:String,default:'user'},
    createdAt:{type:Date,default:Date.now()}
})
userSchema.pre('save',async function(next){
    if(!this.modified('password'))
    return next();

    await bcrypt.hash(this.password,10);
    next();
})
userSchema.methods.jsonWebToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_EXPIRES});
}