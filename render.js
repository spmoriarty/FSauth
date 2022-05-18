

export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('posted');

    // const a = document.createElement('a');
    // a.href = post.contact;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = 'OR';

    const span = document.createElement('span');
    span.textContent = post.description;

    
    div.append(nameSpan, p, span);
    return div;
}