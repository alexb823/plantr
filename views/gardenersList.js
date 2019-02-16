const html = require('html-template-tag');
const mainLayout = require('./mainLayout');

module.exports = gardeners => {
  return mainLayout(html`
    <h3 class="mb-4">Gardeners</h3>
    <div class="list-group">
      ${gardeners.map(
        gardener =>
          html`
            <a class="list-group-item list-group-item-action text-capitalize" href="/gardeners/${gardener.id}">${gardener.name}</a>
          `
      )}
    </div>
  `);
};
