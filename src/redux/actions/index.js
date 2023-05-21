import {auth,provider} from "../../firebase";
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import * as actions from "./actions";

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                dispatch(actions.setUser(payload.user));
            })
            .catch((error) => alert(error.message));
    };
}

export function getUserAuth() {
    // sign up with different user //
    return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
        if(user){
            dispatch(actions.setUser(user))
        }
    })
    };
}


export function signOutAPI() {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(actions.setUser(null))
            })
            .catch((error) => alert(error.message));
    };
}

