
import { signupUser } from '../fetch-utils.js';
import { checkAuth } from '../fetch-utils.js';


const formSignUp = document.getElementById('sign-up-auth');
const signInButton = document.getElementById('sign-in-sub');

formSignUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formSignUp);
    const user = await signupUser(data.get('email'), data.get('password'));
        if (user) {
            location.replace('/post');
        };
    }