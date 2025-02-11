// 获取搜索框元素
const searchBox = document.getElementById('search-box');
// 获取存放文章的父容器元素
const articleContainer = document.getElementById('article-container');

// 监听搜索框的输入事件
searchBox.addEventListener('input', function () {
  const searchText = searchBox.value.toLowerCase();
  // 获取所有文章元素
  const articles = articleContainer.querySelectorAll('article');
  articles.forEach(article => {
    const articleTitle = article.querySelector('h2').textContent.toLowerCase();
    // 判断文章标题是否包含搜索文本
    if (articleTitle.includes(searchText)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});