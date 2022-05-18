

export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post');

    const a = document.createElement('a');
    a.href = `./post/?=id${post.title}`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `./post/?=id${post.description}`;

    const span = document.createElement('span');
    span.textContent = `./post/?=id${post.contact}`;

    a.append(nameSpan, span);
    div.append(a);
    return div;
}