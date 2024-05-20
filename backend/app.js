import express from 'express'      
import web from './routes/web.js'
import cors  from 'cors'
const app = express();
const port = process.env.PORT || '3000'
import connectDB from './db/connectDatabase.js'
// import web  from './routes/web.js'
const DATABASE_URL = process.env.DATABASE_URL ||  'mongodb://127.0.0.1:27017'

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// configer CORS
app.use(cors())

// Load routes
app.use("/todo",web)


// app.get('/', (req, res)=> {
//     res.end('hello world')
// })


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})