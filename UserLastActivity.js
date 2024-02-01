function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        lastActivityTime = new Date();
        console.log("User's last activity time updated:", lastActivityTime);
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve) => {
      posts.push(post);
      console.log("Post created:", post);
      resolve(posts);
    });
  }
  
  function deletePost() {
    return new Promise((resolve) => {
      const deletedPost = posts.pop();
      console.log("Post deleted:", deletedPost);
      resolve(posts);
    });
  }
  
  createPost({ title: 'New Post', content: 'This is a new post.' })
    .then(() => updateLastUserActivityTime())
    .then(() => {
      console.log('All promises resolved!');
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
      return deletePost();
    })
    .then((remainingPosts) => {
      console.log('Remaining Posts:', remainingPosts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
