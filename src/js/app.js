
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
 
  let article = document.createElement('article');
  article.className='message';
  article.textContent = 'hello';
  article.className='message';
  article.textContent = 'hello';
  article.className='message';
  article.textContent = 'hello';
  article.className='message';
  article.textContent = 'hello';
  article.className='message';
  article.textContent = 'hello';
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
