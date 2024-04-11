// Our dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Running server
app.listen(3002, ()=> {
    console.log('Server is running on port 3002')
} )

// Database Creating
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'share',
})