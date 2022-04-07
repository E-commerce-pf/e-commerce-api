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
            <a href="https://respaldo-everyones-store.vercel.app/?success=true">Go back to Everyones Store</a>
          </button>
          <p>Order completed. Thanks for trusting us.</p>
          <img src="https://media.istockphoto.com/vectors/check-mark-correct-icon-blue-checkmark-in-circle-for-checklist-ok-vector-id1179132259?k=20&m=1179132259&s=170667a&w=0&h=GbSXDqfwstk0hG443XE3ImVAYwmmIIxNPSczelhyKz0=" alt="Checkout"/>
      </body>
    </html>
    `;
}

module.exports = Capture;
