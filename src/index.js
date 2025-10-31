import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'



const app = express()

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
    
}).then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err))


app.get('/', (req,res) => {
    res.send('Api is working')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))