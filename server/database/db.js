import mongoose from "mongoose";

export const Connection = async (username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.bivhjuc.mongodb.net/?retryWrites=true&w=majority`;
    try{
        mongoose.connect(URL,{useunifiedtopology: true, useNewUrlParser: true  });
        console.log('Database Connected Successfully');
    }
    catch(error){
        console.log("Error while connecting with database", error.message);
    }
}

export default Connection;