import { popDegreesArray, getPct } from "./util";

class Legend {
  constructor(ele) {
    this.renderLegend(ele);
  }

  renderLegend(ele) {
    let legendDiv = document.createElement("div");
    legendDiv.setAttribute("id", "legend-div");
    ele.appendChild(legendDiv);
    let legendTitle = document.createElement("p");
    legendTitle.setAttribute("id", "legend-title");
    legendTitle.innerText = "legend:";
    legendDiv.appendChild(legendTitle);
    let legendBox = document.createElement("p");
    legendBox.setAttribute("id", "legend-box");
    legendDiv.appendChild(legendBox);

    const colorBase = "rgba(81, 199, 212, ";

    const colorString = (colorBase, colorPctString) =>
      `${colorBase}${colorPctString}`;
    const colorPctString = (level) => getPct(level);

    // let under50k = document.createElement("span");
    // under50k.classList.add("under50k");
    // under50k.textContent = "0 - 50 thousand ";
    // legendBox.appendChild(under50k);

    // let under200k = document.createElement("span");
    // under200k.classList.add("under200k");
    // under200k.textContent = "50 - 200 thousand ";
    // legendBox.appendChild(under200k);

    let under500k = document.createElement("span");

    under500k.classList.add("under500k");
    under500k.style.color = colorString(colorBase, colorPctString(1));
    under500k.textContent = "200 - 500 thousand ";
    legendBox.appendChild(under500k);

    // let under1m = document.createElement("span");
    // under1m.classList.add("under1m");
    // under1m.textContent = "500k - 1 million ";
    // legendBox.appendChild(under1m);

    // let under1p5m = document.createElement("span");
    // under1p5m.classList.add("under1p5m");
    // under1p5m.textContent = "1 million - 1.5 million ";
    // legendBox.appendChild(under1p5m);

    let under2m = document.createElement("span");
    under2m.classList.add("under2m");
    under2m.style.color = colorString(colorBase, colorPctString(2));
    under2m.textContent = "1 - 2 million ";
    legendBox.appendChild(under2m);

    // let under2p5m = document.createElement("span");
    // under2p5m.classList.add("under2p5m");
    // under2p5m.textContent = "2 - 2.5 million ";
    // legendBox.appendChild(under2p5m);

    // let under3m = document.createElement("span");
    // under3m.classList.add("under3m");
    // under3m.textContent = "2.5 - 3 million ";
    // legendBox.appendChild(under3m);

    // let under3p5m = document.createElement("span");
    // under3p5m.classList.add("under3p5m");
    // under3p5m.textContent = "3 - 3.5 million ";
    // legendBox.appendChild(under3p5m);

    // let under4m = document.createElement("span");
    // under4m.classList.add("under4m");
    // under4m.textContent = "3.5 - 4 million ";
    // legendBox.appendChild(under4m);

    // let under4p5m = document.createElement("span");
    // under4p5m.classList.add("under4p5m");
    // under4p5m.textContent = "4 - 4.5 million ";
    // legendBox.appendChild(under4p5m);

    let under5m = document.createElement("span");
    under5m.style.color = colorString(colorBase, colorPctString(3));
    under5m.classList.add("under5m");
    under5m.textContent = "4.5 - 5 million ";
    legendBox.appendChild(under5m);

    // let under5p5m = document.createElement("span");
    // under5p5m.classList.add("under5p5m");
    // under5p5m.textContent = "5 - 5.5 million ";
    // legendBox.appendChild(under5p5m);

    // let under6m = document.createElement("span");
    // under6m.classList.add("under6m");
    // under6m.textContent = "5.5 - 6 million ";
    // legendBox.appendChild(under6m);

    // let under6p5m = document.createElement("span");
    // under6p5m.classList.add("under6p5m");
    // under6p5m.textContent = "6 - 6.5 million ";
    // legendBox.appendChild(under6p5m);

    // let under7m = document.createElement("span");
    // under7m.classList.add("under7m");
    // under7m.textContent = "6.5 - 7 million ";
    // legendBox.appendChild(under7m);

    // let under7p5m = document.createElement("span");
    // under7p5m.classList.add("under7p5m");
    // under7p5m.textContent = "7 - 7.5 million ";
    // legendBox.appendChild(under7p5m);

    // let under8m = document.createElement("span");
    // under8m.classList.add("under8m");
    // under8m.textContent = "7.5 - 8 million ";
    // legendBox.appendChild(under8m);

    // let under9m = document.createElement("span");
    // under9m.classList.add("under9m");
    // under9m.textContent = "8 - 9 million ";
    // legendBox.appendChild(under9m);

    let under10m = document.createElement("span");
    under10m.style.color = colorString(colorBase, colorPctString(4));
    under10m.classList.add("under10m");
    under10m.textContent = "9 - 10 million ";
    legendBox.appendChild(under10m);

    // let under11m = document.createElement("span");
    // under11m.classList.add("under11m");
    // under11m.textContent = "10 - 11 million ";
    // legendBox.appendChild(under11m);

    // let under12m = document.createElement("span");
    // under12m.classList.add("under12m");
    // under12m.textContent = "11 - 12 million ";
    // legendBox.appendChild(under12m);

    // let under13m = document.createElement("span");
    // under13m.classList.add("under13m");
    // under13m.textContent = "12 - 13 million ";
    // legendBox.appendChild(under13m);

    // let under14m = document.createElement("span");
    // under14m.classList.add("under14m");
    // under14m.textContent = "13 - 14 million ";
    // legendBox.appendChild(under14m);

    // let under15m = document.createElement("span");
    // under15m.classList.add("under15m");
    // under15m.textContent = "14 - 15 million ";
    // legendBox.appendChild(under15m);

    // let under20m = document.createElement("span");
    // under20m.classList.add("under20m");
    // under20m.textContent = "15 - 20 million ";
    // legendBox.appendChild(under20m);

    let under25m = document.createElement("span");
    under25m.style.color = colorString(colorBase, colorPctString(5));
    under25m.classList.add("under25m");
    under25m.textContent = "20 - 25 million ";
    legendBox.appendChild(under25m);

    // let under30m = document.createElement("span");
    // under30m.classList.add("under30m");
    // under30m.textContent = "25 - 30 million ";
    // legendBox.appendChild(under30m);

    // let under35m = document.createElement("span");
    // under35m.classList.add("under35m");
    // under35m.textContent = "30 - 35 million ";
    // legendBox.appendChild(under35m);

    let under50m = document.createElement("span");
    under50m.style.color = colorString(colorBase, colorPctString(6));
    under50m.classList.add("under50m");
    under50m.textContent = "35- 50 million ";
    legendBox.appendChild(under50m);
  }
}

export default Legend;
