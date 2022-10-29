const http = require('http');
const app = require('./app');
const connectDB = require('./db/connect');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

async function startServer(){
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, console.log(`server is listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

// Start the server
startServer();