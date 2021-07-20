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
        }).
            catch(errHandler)



    },

    getCurrencyMarketData() {

        //getting ccurrency market data
        axios({
            "method": "GET",
            "url": "https://coinpaprika1.p.rapidapi.com/global",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
                "x-rapidapi-key": "69225c48e9msh6187f24c67061afp1b10f8jsnad7cfe59d33c",
                "useQueryString": true
            }
        })
            .then((response) => {
                const globalData = response.data
                console.log('THIS IS THE Exchanges DATA : ', globalData)
                this.setState({ loading: true })
                //set state with updated global ccurency market cap
                this.setState({ ccGlobalMcap: globalData.market_cap_usd })
                this.setState({ loading: false })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // // This method is synchronous and returns true or false
    // // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
    // isLoggedIn() {
    //     return localStorage.getItem('user') != null
    // },

    // // This method returns the user from the localStorage
    // // Be careful, the value is the one when the user logged in for the last time
    // getLocalStorageUser() {
    //     return JSON.parse(localStorage.getItem('user'))
    // },

    // // This method signs up and logs in the user
    // signup(userInfo) {
    //     return service
    //         .post('/signup', userInfo)
    //         .then(res => {
    //             // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
    //             localStorage.setItem('user', JSON.stringify(res.data))
    //             return res.data
    //         })
    //         .catch(errHandler)
    // },

    // login(username, password) {
    //     return service
    //         .post('/login', {
    //             username,
    //             password,
    //         })
    //         .then(res => {
    //             // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
    //             localStorage.setItem('user', JSON.stringify(res.data))
    //             return res.data
    //         })
    //         .catch(errHandler)
    // },

    // logout() {
    //     localStorage.removeItem('user')
    //     return service.get('/logout')
    // },

    // // This is an example on how to use this method in a different file
    // // api.getCountries().then(countries => { /* ... */ })
    // getCountries() {
    //     return service
    //         .get('/countries')
    //         .then(res => res.data)
    //         .catch(errHandler)
    // },

    // addCountry(body) {
    //     return service
    //         .post('/countries', body)
    //         .then(res => res.data)
    //         .catch(errHandler)
    // },

    // getSecret() {
    //     return service
    //         .get('/secret')
    //         .then(res => res.data)
    //         .catch(errHandler)
    // },

    // addPicture(file) {
    //     const formData = new FormData()
    //     formData.append('picture', file)
    //     return service
    //         .post('/endpoint/to/add/a/picture', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         })
    //         .then(res => res.data)
    //         .catch(errHandler)
    // },
}








