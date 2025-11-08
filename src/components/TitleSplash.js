class TitleSplash {
  constructor(ele) {
    this.ele = ele;
    let oldTitleDiv = document.getElementById('title');
    let newTitleDiv = document.createElement('div');
    newTitleDiv.setAttribute('id', 'title');
    let h1 = document.createElement('h1');
    h1.innerText = "Population Track<span class='egg'>e</span>r";
    newTitleDiv.appendChild(h1);
    this.ele.replaceChild(newTitleDiv, oldTitleDiv);
    this.textStyle = 'normal';

    this.ele.addEventListener('click', this.handleClick.bind(this));

    let contentEl = document.createElement('div');
    contentEl.innerText =
      '<a href="https://evanryan.dev" target="_blank" rel="noopener noreferrer"><p>ER 2024</p></a><a href="https://github.com/evanhundred/population-tracker" target="_blank" rel="noopener noreferrer"><img src="./assets/logos/github.png" alt="gh"/></a> <a href="https://www.linkedin.com/in/evan-ryan-dev/" target="_blank" rel="noopener noreferrer"><img src="./assets/logos/linkedin.png" alt="li"/></a>';
    document.getElementById('personal').appendChild(contentEl);
  }

  handleClick(e) {
    let eventTarget = e.target;
    let titleH1 = document.querySelector('#title h1');
    if (eventTarget.classList.contains('egg')) {
      if (this.textStyle === 'normal') {
        this.textStyle = 'spooky';
        titleH1.innerText = "..pOpUl<span class='egg'>A</span>tIoN tRaCkEr...";
      } else {
        this.textStyle = 'normal';
        titleH1.innerText = "Population Track<span class='egg'>e</span>r";
      }
    }
  }
}

export default TitleSplash;
