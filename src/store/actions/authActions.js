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
                    }
                }
            })
            dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: 'Logged in successfully',
                    type: 'success'
                }
            })
        })
        .catch(error => {
           dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: error.message,
                    type: 'error'
                }
           })
       });

    dispatch({
        type: LOADING_FINISHED
    });
}
export const resetPassword = payload => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth.confirmPasswordReset(payload.code, payload.password).then(() => {
        dispatch({
            type: LOADING_FINISHED
        });
        dispatch({
            type: SET_NOTIFICATION_MESSAGE,
            payload: {
                message: ' Password has been changed successfully',
                type: 'success'
            }
        });
    }).catch(err => {
        dispatch({
            type: SET_NOTIFICATION_MESSAGE,
            payload: {
                message: err.message,
                type: 'error'
            }
        })
        dispatch({
            type: LOADING_FINISHED
        });

    })
}
export const sendPasswordResetEmail = email => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth.sendPasswordResetEmail(email).then(function() {
        dispatch({
            type: LOADING_FINISHED
        })
        dispatch({
            type: SET_NOTIFICATION_MESSAGE,
            payload: {
                message: 'Please check your email.',
                type: 'success'
            }
        })
    }).catch(function(error) {
        dispatch({
            type: LOADING_FINISHED
        })
        dispatch({
            type: SET_NOTIFICATION_MESSAGE,
            payload: {
                message: error.message,
                type: 'error'
            }
        })

    });
}
export const register = payload => dispatch => {
    dispatch({
        type: LOADING_STARTED
    });
    auth
        .createUserWithEmailAndPassword(payload.credentials.email, payload.credentials.password)
        .then(({user}) => {
            user.updateProfile({
                ...payload.meta
            })
            dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message: 'Thanks for registering.',
                    type: 'sucess'
                }
            })
            dispatch({
                type: LOADING_FINISHED
            });
        }).catch(({message}) => {
            dispatch({
                type: SET_NOTIFICATION_MESSAGE,
                payload: {
                    message,
                    type: 'error'
                }
            })
            dispatch({
                type: LOADING_FINISHED
            });

        });
}