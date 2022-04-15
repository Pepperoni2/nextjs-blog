import mongoose from 'mongoose' // ---  import mongoose libary for database connection

// connectDB => Function for connecting to the database
const connectDB = () => {
    // ---- check if database is already connected with the web-application
    if(mongoose.connections[0].readyState){
        console.log('Already connected.')   
        return; // if connected return nothing
    }
    // ----- connect to database using the connection uri
    mongoose.connect(process.env.MONGODB_URI, { 
    }, err => { // if an error occurs display the error
        if(err) throw err;
        // else database has been successfully connected with the web-application
        console.log('Connected to mongodb.') 
    })
}

// export the function 'connectDB' 
export default connectDB