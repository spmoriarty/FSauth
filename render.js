

export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('posted');

    const a = document.createElement('a');
    a.href = `./post/?=id${post.title}`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = post.title;

    const span = document.createElement('span');
    span.textContent = post.description;

    a.append(nameSpan, span);
    div.append(a);
    return div;
}