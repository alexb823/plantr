const html = require('html-template-tag');

module.exports = pageContent => {
  return html`
    <!DOCTYPE html>
    <html>
      <header>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Plantr</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css"
          integrity="sha384-PDle/QlgIONtM1aqA2Qemk5gPOE7wFq8+Em+G/hmo5Iq0CCmYZLv3fVRDJ4MMwEA"
          crossorigin="anonymous"
        />
      </header>
      <body>
        <div class="container">
          <!-- Page Header -->
          <h1 class="my-2"><a href="/">Plantr</a></h1>

          <!-- Page Content -->
          <dvi class="container">
            $${pageContent}
          </dvi>
        </div>
      </body>
    </html>
  `;
};
