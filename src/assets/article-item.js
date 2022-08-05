

class ArticleItem extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    this.innerHTML = `
     <div class="article-info">
         <h2><small>${this._article.title}</small></h2>
         <p class="article-desc">${this._article.description}</p>
     </div>
   `;
  }
}

customElements.define("article-item", ArticleItem);

