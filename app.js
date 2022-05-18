
import { renderPosts } from './render.js';
import { fetchPost } from './fetch-utils.js';


const container = document.getElementById('post-container');


async function onLoad() {
    const data = await fetchPost();
    for (let post of data) {
        const postDiv = renderPosts(post);
        container.append(postDiv);
    }
    
}

onLoad();



