
document.getElementById("scheme-btn").addEventListener("click", getColor);

function getColor() {
  const color = document.getElementById("colorpick").value;
  const type = document.getElementById("type").value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${color.slice(1,7)}&mode=${type}&count=5`)
    .then((response) => response.json())
    .then((data) => {
      let colorArray = [];
      for (let i = 0; i < data.colors.length; i++) {
        colorArray.push(data.colors[i].hex.value);
      }

      let html = "";
      for (let color of colorArray) {
        html += `<div class="mid-section">
                            <div id="color-scheme" class="shape" style="background-color:${color}"></div>
                            <p id="text-color">${color}</p>
                        </div>`;
      }
      document.querySelector(".main").innerHTML = html;
    });
}
