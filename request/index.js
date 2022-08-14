const async = require('async');
const axios = require('axios');
let successCount = 0;
let errorCount = 0;
async function request() {

    try {
        var config = {
            method: 'get',
            // url: 'http://example.com/',
            url: 'http://localhost:5000/',
            headers: {}
        };
        let response = await axios(config)
        console.log(response.data)
        successCount += 1

    } catch (error) {
        errorCount += 1
    }

}

async function runner() {
    console.time("test1");
    let numberOfRequest = new Array(100)
    async.each(numberOfRequest, async () => {
        await request()

    }, () => {
        console.timeEnd("test1");
        console.log(successCount)
    })
}

runner()
