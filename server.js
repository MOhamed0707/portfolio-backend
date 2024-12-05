const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =require('dotenv');


dotenv.config();

const app =express();
const PORT =process.env.PORT || 5000;

//Middleware usage

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser :true, 
    useUnifiedTopology:true
}).then(()=> console.log('Connected To MongoDB'))
.catch(err => console.error('MongoDB connection failed',err));


//sample Route

app.get('/',(req,res)=>{
    res.send('Backend is running!');
});

//Import and use the routes
const projectRoutes =require('./routes/projects');
app.use('/api',projectRoutes);

//Start the server

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
});

