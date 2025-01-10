const mysql = require('mysql2')
const express = require('express')
app.use(cors())

// Create a connection (for some reason createPool doesnt work)
const db = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: 'Jay123456',  
  database: 'myDB'           
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM readers"
    db.query(sql, (err, data) => {
        if (err) {
            throw err
        }
        return res.json(data);
    })
})

//test connection

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySql2 is connected')
// });

const app = express();
app.listen('3000', () => {
    console.log('server started on port 3000');
});