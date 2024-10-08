const express = require("express")
const app = express();
const dbConnect = require('./config/connect')
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

const noteRoutes = require("./routes/notesRoute")
app.use('/api', noteRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    dbConnect();
})