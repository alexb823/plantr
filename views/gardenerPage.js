const html = require('html-template-tag');
const mainLayout = require('./mainLayout');

module.exports = gardenerInfo => {
  return mainLayout(html`
    <h3 class="text-capitalize mb-4">
      <span class="mr-3"
        ><img
          src="/img/${gardenerInfo.name}.jpg"
          class="rounded-circle avatar-img"/></span
      >${gardenerInfo.name}
    </h3>
    <ul class="list-group text-capitalize">
      <li class="list-group-item">
        name: ${gardenerInfo.name}
      </li>
      <li class="list-group-item">age: ${gardenerInfo.age}</li>
      <li class="list-group-item">
        favorite vegetable: ${gardenerInfo.favoriteVegetable.name}
      </li>
      <li class="list-group-item">
        <ul class="list-group">
          <li class="list-group-item"><h5>plot info</h5></li>
          <li class="list-group-item">size: ${gardenerInfo.plot.size} acres</li>
          <li class="list-group-item">
            shaded: ${gardenerInfo.plot.shaded ? 'yes' : 'no'}
          </li>
          ${gardenerInfo.plot.vegetables.map(
            vegetable => html`
              <li class="list-group-item">
                vegetable: ${vegetable.name}<br />
                color: ${vegetable.color}<br />
                planted on: ${vegetable.planted_on.toDateString()}
              </li>
            `
          )}
        </ul>
      </li>
    </ul>
  `);
};
