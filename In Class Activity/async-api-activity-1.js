const postsContainer = document.getElementById('posts-container');

// ✅ This function gets posts from an API and shows them
// TODO 1: Convert this function to use async/await instead of .then()
// Hint: await fetch(...), await response.json(), use try/catch for errors

try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts.json');
    if (!response.ok) {
        throw new Error(`HTTP error Status: ${response.status}`)
    }

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts.json');
        if (!response.ok) {
            throw new Error(`HTTP error Status: ${response.status}`)
        }
    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {*/

            // TODO 2: Only show the first 5 posts
            const firstFive = posts;// <- Change this line

        /*slice*/

            firstFive.forEach(post => {
                const postEl = document.createElement('div');
                postEl.className = 'post';

                // TODO 3: Show the post title in the div
                postEl.textContent = '...'; // <- Replace this with post.title

                postsContainer.appendChild(postEl);

                // TODO 4: Add a click event to the post div to call fetchComments()
                // Hint: use post.id and pass postEl too
                // postEl.addEventListener('click', ...)
            });
        })
        .catch(error => {
            console.error('Error loading posts', error);
        });
}

// ✅ This function gets comments for a post and shows them
// TODO 5: Convert this to async/await too!
// Hint: use await fetch(...) and await response.json()
function fetchComments(postId, postElement) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            // TODO 6: Only show the first 5 comments
            const firstFiveComments = comments; // <- Fix this

            // TODO 7: Check if comments already exist – if yes, return (no duplicates!)
            if (postElement.querySelector('.comments')) {
                return;
            }

            const commentsContainer = document.createElement('div');
            commentsContainer.className = 'comments';

            firstFiveComments.forEach(comment => {
                const commentEl = document.createElement('p');

                // TODO 8: Show the comment body
                commentEl.textContent = '...'; // <- Replace with comment.body

                commentsContainer.appendChild(commentEl);
            });

            postElement.appendChild(commentsContainer);
        })
        .catch(error => {
            console.error(`Error loading comments for post ${postId}`, error);
        });
}

// ✅ Start everything
fetchPosts();
