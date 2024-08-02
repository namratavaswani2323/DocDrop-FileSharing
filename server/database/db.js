  import mongoose from 'mongoose';
  import dotenv from 'dotenv';

  dotenv.config();
  
  const DBConnection =async () => {
    

    const MONGODB_URI=`mongodb+srv://nvaswani2323:geetansh@cluster0.edrbmfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
        console.log('Database connected successfully');

    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }

  }

  export default DBConnection;