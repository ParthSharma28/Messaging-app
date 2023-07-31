import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = process.env.CONNECTION_URL;
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
   })
   mongoose.set('strictQuery', true);
//API Endpoints

const pusher = new Pusher({
   app_id : process.env.app_id,
   key : process.env.key,
   secret : process.env.secret,
   cluster : "ap2",
    useTLS: true
   });
   console.log("rygf");
   //API Endpoints
   const db = mongoose.connection
   db.once("open", () => {
    console.log("DB Connected")
    const msgCollection = db.collection("messagingmessages")
    const changeStream = msgCollection.watch()
    console.log("clo");
    changeStream.on('change', change => {
    console.log(change)
    if(change.operationType === "insert") {
    const messageDetails = change.fullDocument
    try {
      pusher.trigger("test", "inserted", {
         name: messageDetails.name,
         message: messageDetails.message,
         timestamp: messageDetails.timestamp,
         received: messageDetails.received
         })
      
    } catch (error) {
      console.log(error);
    }
    
    } else {
    console.log('Error trigerring Pusher')
    }
    })
   })

app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
    if(err)
    res.status(500).send(err)
    else
    res.status(201).send(data)
    })
   })
   app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
    if(err) {
    res.status(500).send(err)
    } else {
    res.status(200).send(data)
    }
    })
   })

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))