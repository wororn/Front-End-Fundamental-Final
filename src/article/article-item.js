class ArticleItem extends HTMLElement {
  set article(article) {
    this._article = article;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div>&nbsp;</div>
    <div align="center">
    <img class="featured-image" src="${this._article.featuredImage}" alt="Pants Pictures" align="center">
    </div>
     <div class="article-info">
         <h2>${this._article.title}</h2>
         <p class="article-desc">${this._article.description}</p>
         
     </div>
   `;
  }
}

customElements.define("article-item", ArticleItem);

