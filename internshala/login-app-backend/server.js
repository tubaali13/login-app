const express = require('express');

const cors = require('cors');

const mysql = require('mysql');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const db = mysql.createConnection({
	host: 'internshala.mysql.database.azure.com',
	user: 'tuba@internshala',
	password: 'qwerty_1234',
	database: 'loginapp',
	port: 3306,
	multipleStatements: true
})

db.connect((err) => {
	if(err)
		throw err;
	else
		console.log("Connected");
})

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.json("Success");
    console.log("!!!");
})

function queryExec(sql,res) {
	db.query(sql, function (error, results) {
    if (error) {
        throw error;
        res.json("Error");
    }
    res.json(results);
    console.log(results);
	});
}

app.post('/login', (req, res) => {
	var username = req.body.username,
	password = req.body.password;
	
	let sql = `SELECT * FROM users where username = '${username}' 
	AND password = '${password}';`

	db.query(
		`SELECT * FROM users where username = '${username}' `,

		(err, result) => {
    		if (err) {
        		res.send("Error");
    		}
    	if(result.length > 0) {
    		bcrypt.compare(password, result[0].password, (error, response) => {
    			if(response) {
    				res.send(result);
    			} else {
    				res.send(error);
    			}
    		})
    	}
    	else {
    		res.send({message: "User does'nt exist"});
    	}
    });
})

app.post('/register', (req, res) => {
	var username = req.body.username,
	password = req.body.password;

	bcrypt.hash( password, saltRounds, (err, hash) => {
		if(err) {
			console.log(err);
		}
		db.query (
			`INSERT INTO users (username, password) VALUES ('${username}','${hash}');`,
			(err, result) => {
				if(err) {
					console.log(err)
				}
				else {
					res.send(result);
				}
			}
		)
	})

})


app.listen(3001, err => {
	console.log("The app is running at port 3001");
});