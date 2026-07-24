const btn1 = document.querySelector(".item1");
btn1.addEventListener("click", function () {
  fetch("./test.html" /*, options */)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("html").innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
