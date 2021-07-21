import axios from 'axios'



const service = axios.create({
    baseURL: `https://coinpaprika1.p.rapidapi.com`,
    headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.CRYPTOKEY}`,
        "useQueryString": true
    }
})

const errHandler = err => {
    console.error(err)
    if (err.response && err.response.data) {
        console.error('API response', err.response.data)
        throw err.response.data.message
    }
    throw err
}

export default {
    service: service,

    getExchangeData() {
        //GET EXCHANGE DATA 

        let exchangesIds = ["binance", "coinbase-pro", "gemini"];


        return service.get(`/exchanges/${exchangesIds[0]}/markets`).then(response => {
            console.log('SUCCESFUL RESPONSE: ', response);
            if (response.status == 200) {
                return response.data
            } else {
                console.log('RESPONSE WAS DIFFERENT : ', response);
            }

        })
            .catch(errHandler)


    }
    ,

    getCurrencyData() {
        //GETTING CURRENCY DATA

        return service.get(`/tickers`).then(response => {
            let coins = response.data;
            console.log(`ALL THE COINS : ${coins}`);
            let resultArr = [];

            coins.map(coin => {
                resultArr.push(coin);
            })
        })
            .catch(errHandler)

    },

    getCurrencyMarketData() {
        // GET GLOBAL CURRENCY DATA

        return service.get('/global').then(response => {
            const globalData = response.data
            console.log('THIS IS THE Exchanges DATA : ', globalData)

            return globalData
        }).catch(errHandler)

    }
}








