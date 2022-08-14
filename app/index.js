// index.js
require('dotenv').config();
const express = require('express');
const app = express();
let count = 0;
app.get('/', (req, res) => {
    try {
        let number = 100000
        for (let i = 0; i < number; i++) {
            let innerNumber = 106600
            for (let j = 0; j < innerNumber; j++) {
                
            }
        }
        res.send(`Hello World! server ${process.env.NAME}`)
    } catch (error) {
        throw new Error('BROKEN') 
    }

})

app.listen(5000, () => console.log(`YAssssssssssssssssssssss  ${process.env.NAME}`));