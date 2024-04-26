const express =require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

// ---middle ware
app.use(cors())
app.use(express.json())

// ---------from mongodb


const uri = "mongodb+srv://tourisms:qPe0HyumTPm4eeb7@cluster0.mhxjfos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// -----------------------------


app.get('/',(req,res)=>{
    res.send("assigment 10")
})

app.listen(port,()=>{
    console.log(`"server is",${port}`)
})
