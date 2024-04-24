// Our dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

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

//  Creating the route
app.post('/register', (req, res) => {
    //  Get the variables
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // Create sql statement for DB
    const SQL = 'INSERT INTO Users (email, username, password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword]

    // Query to execute sql statement
    db.query(SQL, Values, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            console.log('User inserted succesfully')
            res.send({message: "User added!"})
        }
    })
})

// Login route
app.post('/login', (req, res) => {
    //  Get the variables
    const sentLoginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    // Create sql statement for DB
    const SQL = 'SELECT * FROM Users WHERE username = ? && password = ?'
    const Values = [sentLoginUserName, sentLoginPassword]
    
    // Query to execute sql statement
    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err)
        }
        if (results.lenght > 0) {
            res.send(results)
        }
        else {
            res.send({message: "Credentials don't match!"})
        }
    })
})