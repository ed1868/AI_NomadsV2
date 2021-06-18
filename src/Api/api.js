import axios from 'axios'



const service = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        dataType: 'json'
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
    sendFlare(requestDetails) {
        console.log('ATTEMPTING TO SEND FLARE TO BACKEND...');

        return service.post('/contact/request', requestDetails).then(response => {
            console.log('SUCCESFULL RESPONSE : ', response);
            if (response.status == 200) {
                return response.data;
            }
            else {
                console.log('RESPONSE WAS DIFFERENT : ', response)
            }
        }).catch(errHandler)

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
