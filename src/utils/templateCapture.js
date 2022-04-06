function Capture(success) {
  return `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Everyones Store</title>
        <style>
          div {
            padding-top: 100px;
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h1 {
            text-align: center;
            margin-top: 20px;
            margin-bottom: 20px;
            color: #faa422;
            text-shadow: 1px 1px 1px #535353;
          }
          a {
            text-decoration: none;
          }
          button {
            padding: 10px;
            margin: 8px;
            border-radius: 5px;
            border: 1px solid #eca424;
            color: #474737;
            cursor: pointer;
            background-color: #ebb76859;
          }
          button:hover {
            color: white;
            background-color: #faa222;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${success}</h1>
          <button>
            <a href="https://everyones-store-api.herokuapp.com?success=true/">Volver a Everyones Store</a>
          </button>
      </body>
    </html>
    `;
}

module.exports = Capture;
