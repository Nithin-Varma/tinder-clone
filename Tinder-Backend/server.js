import express from "express"
import mongoose from "mongoose"
import Cards from "./DbCards.js"
import Cors from "cors";
// import bodyParser from 'body-parser';

//App Config
const app = express();
app.use(Cors());

const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://mnithin1422:wm8oN7kDmqxNiFIS@cluster0.aa1j5dh.mongodb.net/`

//Middlewares
app.use(express.json());



//DB Config
mongoose.connect(connection_url);

//API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello Nithin")
})

// app.post("/cards", (req, res) => {
//     const DbCard = req.body;

//     Cards.create(DbCard, (err, data) => {
//         if(err) {
//             res.status(500).send(err)
//         }
//         else {
//             res.status(201).send(data)
//         }
//     })
// })
app.post("/cards", async (req, res) => {
    const DbCard = req.body;
  
    try {
      const data = await Cards.create(DbCard);
      res.status(201).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });


// app.get('/cards', (req, res) => {
//     Cards.find((err, data) => {
//         if(err) {
//             res.status(500).send(err);
//         }
//         else {
//             res.status(200).send(data);
//         }
//     })
// })
app.get('/cards', async (req, res) => {
    try {
      const data = await Cards.find().exec();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

//Listener
app.listen(port, () => {
    console.log(`listening on localhost: ${port}`)
})