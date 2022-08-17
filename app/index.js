require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    const loop = 100000
    for (let i = 0; i < loop; i++) {
        const innerLoob = 100000
        for (let j = 0; j < innerLoob; j++) { }
    }
    res.send(`Finished task in ${process.env.NODE_ENV}`)
})
const port = process.env.PORT;
app.listen(5000, () => {
    console.log(`Server is running on Prot: ${port}`);
    console.log(`Envirement: ${process.env.NODE_ENV}`);
})