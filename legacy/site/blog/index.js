const loadContent = () => {
  window.onload = () => {
    document.querySelector(".blog-content").innerHTML = marked(mdContent);
  };
};
