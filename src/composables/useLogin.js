import {ref} from "vue";
const error = ref(null)
import {connectAuthEmulator, signInWithEmailAndPassword} from "firebase/auth";
import {projectAuth} from '@/firebase/config'
// connectAuthEmulator(projectAuth, "http://localhost:9099");
const login = async (email,password) => {
    error.value = null //reset
    await signInWithEmailAndPassword(projectAuth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            error.value='Incorrect login credentials'
        });
}

const useLogin = () => {
    return {error,login}
}


export default  useLogin
