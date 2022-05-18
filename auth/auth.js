
import { signupUser } from '../fetch-utils.js';

import { signInUser } from '../fetch-utils.js';


const formSignUp = document.getElementById('sign-up-auth');
const formSignIn = document.getElementById('sign-in-auth');

//const user = {
//    email: "",
//    password: "",
//    };
//  const { data, error } = await client.from('post').insert(user);



formSignUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newUser = new FormData(formSignUp);
    const user = await signupUser(newUser.get('email'), newUser.get('password'));
    if (user) {
        location.replace('/post');
    }

});

formSignIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formSignIn);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/post');
    }
});
