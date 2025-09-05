// サイドバーを読み込む
document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.querySelector(".sidebar");
  if (sidebarContainer) {
    fetch("/Ant_Legion/sidebar.html"　+ new Date().getTime())
      .then(response => response.text())
      .then(data => {
        sidebarContainer.innerHTML = data;
      })
      .then(() => {
        // sidebar.html 読み込み後に toggleMenu を定義
        window.toggleMenu = function(id) {
          const menu = document.getElementById(id);
          if (menu) {
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
          }
        };
      })
      .catch(err => console.error("サイドバー読み込み失敗:", err));
  }
});
