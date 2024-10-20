const express = require( "express" );
const cors = require( "cors" );
const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use( cors() );
app.use( express.json() );

app.get( "/", ( req, res ) =>
{
    res.send( "server is listening" );
    console.log( "server is listening" );
} )


app.listen( port, () =>
{
    console.log( `serve activated on port ${port}` );
} )