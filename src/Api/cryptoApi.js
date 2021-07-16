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

    //THIS METHOD SENDS THE CONTACT REQUEST TO THE BACKEND AND RETURNS TRUE IF SUCCESFULL 
    // sendFlare(requestDetails) {
    //     console.log('ATTEMPTING TO SEND FLARE TO BACKEND...');

    //     return service.post('/contact/request', requestDetails).then(response => {
    //         console.log('SUCCESFULL RESPONSE : ', response);
    //         if (response.status == 200) {
    //             return response.data;
    //         }
    //         else {
    //             console.log('RESPONSE WAS DIFFERENT : ', response)
    //         }
    //     }).catch(errHandler)

    // },



    getExchangeData = () => {


        //GET EXCHANGE DATA 

        let exchangesIds = ["binance", "coinbase-pro", "gemini"];
        axios({
            "method": "GET",
            "url": `https://coinpaprika1.p.rapidapi.com/exchanges/${exchangesIds[0]}/markets`,
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
                "x-rapidapi-key": "69225c48e9msh6187f24c67061afp1b10f8jsnad7cfe59d33c",
                "useQueryString": true
            }
        }).then((payload) => {
            console.log(`FIRST PAYLOAD of cup: ${payload}`)
            return payload;

        }).catch((err) => {
            if (err) {
                console.log('WE HAVE AN ERROR ', err);
            }
        })

    },


    tokenWaitList(user) {

        console.log('USER IS ATTEMPTING TO GET IN THE WAITLIST FOR NOMA TOKEN :D ');
        console.log('THE USER BEING SENT TO THE BACKEND : ', user)
        let tokenuser = {
            firstName: user.firstName,
            email: user.email
        }
        return service.post('/tokenWaitList/tokenRequest', tokenuser).then(response => {
            if (response.status == 200) {
                console.log('SUCCESFULL RESPOMSE : ', response)
                return response.data.message;
            } else {
                console.log('SHITTY RESPONSE : ', response);
            }

        }).catch(errHandler);

    }
    ,

    getCurrencyData = () => {
        //getting ccurencies data
        axios({
            "method": "GET",
            "url": "https://coinpaprika1.p.rapidapi.com/tickers",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
                "x-rapidapi-key": "69225c48e9msh6187f24c67061afp1b10f8jsnad7cfe59d33c",
                "useQueryString": true
            }
        })
            .then((response) => {
                //assign all ccurencies data from API into variable
                const coins = response.data

                console.log('ALL THE COINS : ', coins)
                //declare ccurencies and their imgs
                const ccArray = [
                    // { name: 'Bitcoin', img: btc },
                    // { name: 'Ethereum', img: eth },
                    // { name: 'Chainlink', img: link },
                    // { name: 'Cardano', img: ada },
                    // { name: 'Monero', img: xmr },
                    // { name: 'yearn.finance', img: yfi },
                    // { name: 'Aave', img: lend },
                    // { name: 'Compound', img: comp },
                    // { name: 'Uniswap', img: uni },
                    // { name: 'Golem', img: gnt }
                ]

                /* search for chosen cryptocurrencies, then add them to the state */
                //get ccurency from ccArray 



                //get ccurrency from API
                for (let i = 0; i < coins.length; i++) {
                    //if current ccurrency API == current ccurrency from ccArray
                    // if (coins[i].name === ccArray[j].name) {
                    //add img to the ccurrency API data
                    // coins[i]['img'] = ccArray[j].img
                    //set state with updated data
                    // this.setState({
                    //   ccData: [...this.state.ccData, coins[i]]
                    this.state.ccData.push(coins[i])
                    // })
                    // }
                }

                //sort ccurrencies by rank
                this.setState({
                    ccData: this.state.ccData.sort((a, b) => a.rank - b.rank)
                })
            })
            .catch((error) => {
                console.log(error)
            })
    },

    getCurrencyMarketData = () => {

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








