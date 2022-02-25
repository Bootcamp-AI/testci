const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
	res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})


app.get('/product', (req, res)=>{
	res.send([
		{
			productId: '100',
			price: 200
		},
		{
			productId: '103',
			price: 100
		}

		])
})


app.listen(port, ()=>{
	console.log(`App listen on  port: ${port}`);
})


