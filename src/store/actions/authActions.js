import { SET_LOGGED_IN_USER, LOADING_STARTED, LOADING_FINISHED, SET_NOTIFICATION_MESSAGE, UNSET_LOGGED_IN_USER } from './types.js'
import { auth } from "../../config/firebase";

export const logout = () => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth.signOut().then(() => {
        dispatch({
            type: LOADING_FINISHED
        });
        dispatch({
            type: UNSET_LOGGED_IN_USER
        })
    }).catch(error => {
           dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: error.message
                }
           })
       });
    dispatch({
        type: SET_NOTIFICATION_MESSAGE,
        payload: {
            message: 'Logged out successfully.'
        }
    })

}
export const login = payload => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(({ user }) => {
            dispatch({ 
                type: SET_LOGGED_IN_USER,
                payload: {
                    user: {
                        email: user.email,
                        name: user.displayName,
                        activated: user.emailVerified,
                        phone_number: user.phoneNumber,
                        profile_picture: user.photoURL
                    },
                    token: user.ra
                }
            })

        })
        .catch(error => {
           dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: error.message
                }
           })
       });

    dispatch({
        type: LOADING_FINISHED
    });
}
export const register = payload => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth
        .createUserWithEmailAndPassword(...payload.credentials)
        .then(() => {
            // user update profile.
            // ...payload.meta
            dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: 'Thanks for registering.'
                }
            })
        }).catch(({message}) => 
            dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message
                }
            })
        );

    dispatch({
        type: LOADING_FINISHED
    });

}