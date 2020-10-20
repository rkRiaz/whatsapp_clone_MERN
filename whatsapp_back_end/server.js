const express = require("express") 
const mongoose = require("mongoose")
const Message = require("./Message")

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res, next) => {
    res.send(`Hello Whatsapp`)
})

app.get('/messages', async(req, res) => {
    let messages = await Message.find()
    res.status(200).json(messages)
})

app.post('/message/new', async(req, res, next) => {
    let {message, name, received} = req.body
    let messageObj = new Message({
        message,
        name,
        received,
    })
    let newMessage = await messageObj.save()
    res.status(200).json(newMessage)
})






let MONGO_DB_URI = `mongodb+srv://rkRiaz:01726@cluster0.dcbsa.mongodb.net/whatsapp_messages?retryWrites=true&w=majority`
let PORT = process.env.PORT || 8080
mongoose.connect(MONGO_DB_URI,
        {useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true}
    )
    .then(() => {
        console.log(`Database Connected`)
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })

