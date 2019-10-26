import Firebase, { db } from '../config/Firebase.js'

export const LOGIN = 'LOGIN'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const SIGNUP = 'SIGNUP'


//Firebase Authentication for login
export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            
            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

//Firebase user creation

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    userType: 'user'
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}

//Get user details

export const getUser = uid => {
    return async(dispatch, getState) => {
        try{
            const user = await db.collection('users').doc(uid).get()

            dispatch({type: LOGIN, payload: user.data()})
        } catch (e){
            alert(e)
        }
    }
}

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}