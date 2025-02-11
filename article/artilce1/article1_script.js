// 获取点赞按钮元素
const likeButton = document.getElementById('like-btn');
// 获取显示点赞数的元素
const likeCountElement = document.getElementById('like-count');

// 从本地存储中获取文章的点赞数，如果不存在则初始化为0
let likeCount = localStorage.getItem('article1_like_count') || 0;
likeCount = parseInt(likeCount);
// 更新页面上显示的点赞数
likeCountElement.textContent = likeCount;

// 为点赞按钮添加点击事件监听器
likeButton.addEventListener('click', function () {
  likeCount++;
  // 更新页面上显示的点赞数
  likeCountElement.textContent = likeCount;
  // 将更新后的点赞数保存到本地存储中，使用文章的特定标识（这里以文章标题命名key，可根据实际情况调整更合适的标识）
  localStorage.setItem('article1_like_count', likeCount);
});