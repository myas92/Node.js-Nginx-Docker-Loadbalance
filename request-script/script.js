const async = require('async');
const axios = require('axios');
let successCount = 0;
let errorCount = 0;
async function requestToServer() {
    try {
        // const url = 'http://localhost:5000/'; // For Tesing PM2 in local
        const url = 'http://localhost:8001/'; // dockerize server
        // const url = 'http://example.com/'; // For testing Nginx
        const config = {
            method: 'get',
            url: url,
            headers: {}
        };
        const { data } = await axios(config)
        console.log(data)
        successCount += 1
    } catch (error) {
        errorCount += 1
    }
}

async function runner(numberOfRequest) {
    console.time("test-time");
    let requests = new Array(numberOfRequest) // create 100 request
    // use async module to sending paralle requests
    async.each(requests, async () => {
        await requestToServer()
    }, () => {
        console.log("-------------------------------")
        console.timeEnd("test-time");
        console.log("-------------------------------")
        console.log('number of sccessful request:', successCount)
        console.log("-------------------------------")
    })
}

runner(100)
