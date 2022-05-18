
import { signupUser } from '../fetch-utils.js';
import { checkAuth } from '../fetch-utils.js';


const signUpButton = document.getElementById('sign-up-sub');
const signInButton = document.getElementById('sign-in-sub');

signUpButton.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpButton);
    const user = await signupUser(data.get('email'), data.get('password'));
        if (user) {
            location.replace('/post');
        };
}