const express = require( "express" );
require( 'dotenv' ).config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require( "cors" );
const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use( cors() );
app.use( express.json() );

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.cusoal9.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
} );

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
run().catch( console.dir );

app.get( "/", ( req, res ) =>
{
    res.send( "server is listening" );
    console.log( "server is listening" );
} )


app.listen( port, () =>
{
    console.log( `serve activated on port ${port}` );
} )