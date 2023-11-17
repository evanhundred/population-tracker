class SplashModal {
  constructor(ele) {
    this.parentEle = ele;

    const splashModalOverlay = document.createElement("div");
    splashModalOverlay.classList.add("splash-modal-overlay");
    ele.appendChild(splashModalOverlay);

    const splashModalBox = document.createElement("div");
    splashModalBox.classList.add("splash-modal-box");
    ele.appendChild(splashModalBox);

    const splashModalContent = document.createElement("div");
    splashModalContent.classList.add("splash-modal-content");
    splashModalBox.appendChild(splashModalContent);

    const handleClose = () => {
      this.closeModal();
    };

    const closeX = document.createElement("div");
    closeX.classList.add("close-x");
    const xP = document.createElement("p");
    xP.innerText = "X";
    xP.addEventListener("click", handleClose);
    closeX.appendChild(xP);
    splashModalContent.appendChild(closeX);

    const modalText = document.createElement("div");
    splashModalContent.appendChild(modalText);
    modalText.classList.add("modal-text");
    const createModalText = () => {
      for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.classList.add(`modal-line-${i}`);
        modalText.appendChild(p);
      }
    };
    createModalText();
    const firstLine = document.querySelector(
      "#splash-modal-container p.modal-line-1"
    );
    firstLine.innerText = "Welcome to Population Tracker.";
    const line2 = document.querySelector(
      "#splash-modal-container p.modal-line-2"
    );
    line2.innerHTML =
      "The U.S. Census Bureau provides access to its results <a href='https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html' target='_blank' rel='noreferrer'>data</a>.";

    const line3 = document.querySelector(
      "#splash-modal-container p.modal-line-3"
    );
    line3.innerText =
      "Population Tracker focuses on the Decennial (10-year) population survey.";
    const line4 = document.querySelector(
      "#splash-modal-container p.modal-line-4"
    );
    line4.innerText =
      "Select a year from the options below. A colorful representation of the population data will render. Below it will be a simple list, which can be organized by name or population.";

    const okButton = document.createElement("div");
    okButton.classList.add("ok-button");
    const okH3 = document.createElement("h3");
    okH3.innerText = "OK";
    okH3.addEventListener("click", handleClose);
    okButton.appendChild(okH3);
    splashModalContent.appendChild(okButton);
  }

  closeModal() {
    this.parentEle.remove();
  }
}

export default SplashModal;
