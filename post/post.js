import { checkAuth } from '../fetch-utils.js';
import { createNewPost } from '../fetch-utils.js';

const postSub = document.getElementById('post-info');

postSub.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(postSub);
    const newPost = { title: data.get('to-do'), description: data.get('to-not'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
});



checkAuth();