const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mcsqcra.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const coffeeCollection = client.db('coffeeDB').collection('coffee');

    app.get('/coffee', async(req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/coffee/:id',async(req,res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    })
    app.put('/coffee/:id', async(req,res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const coffee = req.body;
      const updatedCoffee = {
        $set:{
        name: coffee.name,
        quantity: coffee.quantity,
        supplier: coffee.supplier,
        taste: coffee.taste,
        category: coffee.category,
        details: coffee.details,
        url: coffee.url
        }
      }
      const result = await coffeeCollection.updateOne(filter,updatedCoffee,options);
      res.send(result);
    })

    app.post('/coffee', async(req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.delete('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    app.get('/', (req, res) => {
      res.send("Coffee making server is running...");
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // START SERVER AFTER ROUTES ARE REGISTERED
    app.listen(port, () => {
      console.log("Server is running on port:", port);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

run().catch(console.dir);
