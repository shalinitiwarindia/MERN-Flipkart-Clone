import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.62s9j.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try {
      await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true})
      console.log("Connected Successfully");
    }catch (error){
        console.log("Error while connecting",error.message);
    }
}

export default Connection;