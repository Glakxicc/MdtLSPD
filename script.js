const btn1 = document.querySelector(".item1");
btn1.addEventListener(
  "click",
  () => (document.body.innerHTML = generatePage("test", "Pas Content")),
);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 1. Fonction pour générer une page dynamiquement
function generatePage(title, content) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          h1 { color: #333; }
          div { color : #333}
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <div>${content}</div>
      </body>
    </html>
  `;
}
