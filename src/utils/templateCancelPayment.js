function cancelTemplate(success) {
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
            img {
              display:block;
              margin:auto;
              height: 300px;
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
              <a href="https://everyones-store-q70uyrzx0-e-commerce-pf.vercel.app">Go back to Everyones Store</a>
            </button>
            <p>Order canceled successfully.</p>
            <img src="https://img2.freepng.es/20180403/ihq/kisspng-check-mark-cross-red-tick-cross-5ac40470d1a056.1012398315227956328586.jpg" alt="canceled"/>
          </div>
        </body>
      </html>
      `;
  }
  
  module.exports = cancelTemplate;
  