
import "./loadEnv.mjs"
import posts from "./routes/posts.mjs"      //importing the loadEnv
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
// Load the /posts routes
app.use("/posts", posts);


//Listens to the PORT
app.listen(PORT, () => {
    console.log('server is running on',PORT)
})