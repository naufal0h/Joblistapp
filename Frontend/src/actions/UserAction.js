import axios from "axios";

export const LOGIN_ACTION = "LOGIN_ACTION"
export const LOGOUT_ACTION = "LOGOUT_ACTION"
export const REGISTER_ACTION = "REGISTER_ACTION"
export const LOGIN_STATUS = "LOGIN_STATUS"


export const loginAction = (data) => {
    return (dispatch) => {

        dispatch({
            type: LOGIN_ACTION,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/users/login',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // localStorage.setItem('access_token', response.data.access_token)
                // console.log('berhasil dapat data');
                localStorage.setItem('access_token', response.data)
                // console.log(response);
                
                // berhasil get API
                dispatch({
                    type: LOGIN_ACTION,
                    payload: {
                        loading: false,
                        data: true,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                let errorResponse = {
                    isError: true,
                    message: response.response.data.message
                }
                // console.log(response.response.data.message);
                // console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: LOGIN_ACTION,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: errorResponse
                    }
                })
            })

    }

}

export const registerAction = (data) => {
    // console.log('masuk ke register action')
    return (dispatch) => {

        // loading
        dispatch({
            type: REGISTER_ACTION,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        axios({
            method: 'POST',
            url: 'http://localhost:3000/users/register',
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // console.log('berhasil dapat data');
                // console.log(response.data);
                // berhasil get API
                dispatch({
                    type: REGISTER_ACTION,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                // console.log(response);
                // console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: REGISTER_ACTION,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const loginStatus = () => {
    return (dispatch) => {
        const access_token = localStorage.getItem('access_token')
        let data = undefined
        if(access_token) {
            data = {
                status: true,
                access_token: access_token
            }
        } else {
            data = {
                status: false
            }
        }

        // loading
        dispatch({
            type: LOGIN_STATUS,
            payload: {
                data: data
            }
        })

        // console.log(data)
        // const access_token = localStorage.getItem('access_token')
        // if(access_token) {
        //     dispatch({
        //         type: LOGIN_STATUS,
        //         payload: {
        //             loading: false,
        //             data: access_token,
        //             errorMessage: false
        //         }
        //     })
        // } else {
        //     dispatch({
        //         type: LOGIN_STATUS,
        //         payload: {
        //             loading: false,
        //             data: false,
        //             errorMessage: true
        //         }
        //     })
        // }

    }

}
export const logoutAction = () => {
    return (dispatch) => {
        const access_token = localStorage.getItem('access_token')
        // console.log(access_token);
        let data = undefined
        if(access_token) {
            localStorage.clear()
            data = {
                logoutStatus: true,
            }
            // console.log(data);
        } else {
            data = {
                logoutStatus: false
            }
        }

        // loading
        dispatch({
            type: LOGOUT_ACTION,
            payload: {
                data: data
            }
        })
    }

}