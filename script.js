document.getElementById('toggleTheme').addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
  });
  
  function handleSubmit(event) {
    event.preventDefault();
    alert('Thanks for your message!');
  }
  
  // Blog post pagination
  const posts = ['post1.md', 'post2.md', 'post3.md'];
  let currentIndex = 0;
  
  function loadPost(index) {
    fetch(`posts/${posts[index]}`)
      .then(res => res.text())
      .then(text => {
        document.getElementById('blogContent').innerHTML = marked.parse(text);
        document.getElementById('postIndicator').textContent = `Post ${index + 1} of ${posts.length}`;
      });
  }
  
  document.getElementById('prevPost').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadPost(currentIndex);
    }
  });
  
  document.getElementById('nextPost').addEventListener('click', () => {
    if (currentIndex < posts.length - 1) {
      currentIndex++;
      loadPost(currentIndex);
    }
  });
  
  loadPost(currentIndex); // initial load
  