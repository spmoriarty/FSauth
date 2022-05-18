// import functions and grab DOM elements
import { renderPosts } from './render.js';
import { fetchPost } from './fetch-utils.js';
// let state

const container = document.getElementById('post-container');


async function onLoad() {
    const data = await fetchPost();
    renderPosts(data);
    container.append(data);
    return container;
    
}

onLoad();

// onLoad();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
