const express = require('express');
const cors = require('cors');
const router = require('./routes');
const session = require('./middleware/session');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

const connectDB = require('./db/db');

app.get("/", (req, res)=> {
    res.send({
        status: 200,
        message: "Status: ok "
    })
})
app.use(session);
app.use(router);

app.listen(8080, () => console.log("server is running on port 8080"));