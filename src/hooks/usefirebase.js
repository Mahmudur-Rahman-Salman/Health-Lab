import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


import { useEffect } from "react/cjs/react.development";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [islogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();



    // Google Sign in 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }




    // Object ovserver 

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])






    // Email Register 

    const handleEmailRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        if (islogin) {
            processLogin(email, password);
        }
        else {
            createNewUser(email, password)
        }
    }

    const handlemailchange = e => {
        setEmail(e.target.value);
    }
    const handlepasswordchange = e => {
        setPassword(e.target.value);
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }


    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    // sign out

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return {
        handleGoogleSignIn,
        user,
        error,
        logout,
        handleEmailRegister,
        handlemailchange,
        toggleLogin,
        handlepasswordchange,
        islogin,
        setIsLogin,
        createNewUser,
        processLogin
    }



}


export default useFirebase; 