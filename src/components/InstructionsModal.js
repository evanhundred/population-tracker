class instructionsModal {
  constructor(ele) {
    this.parentEle = ele;

    const instructionsModalOverlay = document.createElement("div");
    instructionsModalOverlay.classList.add("instructions-modal-overlay");
    ele.appendChild(instructionsModalOverlay);

    const instructionsModalBox = document.createElement("div");
    instructionsModalBox.classList.add("instructions-modal-box");
    ele.appendChild(instructionsModalBox);

    const instructionsModalContent = document.createElement("div");
    instructionsModalContent.classList.add("instructions-modal-content");
    instructionsModalBox.appendChild(instructionsModalContent);

    const handleClose = () => {
      this.closeModal();
    };

    const closeX = document.createElement("div");
    closeX.classList.add("close-x");
    const xP = document.createElement("p");
    xP.innerText = "X";
    xP.addEventListener("click", handleClose);
    closeX.appendChild(xP);
    instructionsModalContent.appendChild(closeX);

    const modalText = document.createElement("div");
    instructionsModalContent.appendChild(modalText);
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
      "#instructions-modal-container p.modal-line-1"
    );
    firstLine.innerText = "Welcome to Population Tracker.";
    const line2 = document.querySelector(
      "#instructions-modal-container p.modal-line-2"
    );
    line2.innerHTML =
      "The U.S. Census Bureau provides access to its results <a href='https://www.census.gov/programs-surveys/decennial-census/about/rdo/summary-files.html' target='_blank' rel='noreferrer'>data</a>.";

    const line3 = document.querySelector(
      "#instructions-modal-container p.modal-line-3"
    );
    line3.innerText =
      "Population Tracker focuses on the Decennial (10-year) population survey.";
    const line4 = document.querySelector(
      "#instructions-modal-container p.modal-line-4"
    );
    line4.innerText =
      "Select a year from the options listed. A colorful representation of the population data will render. Below it will be a simple list, which can be organized by name or population.";

    const okButton = document.createElement("div");
    okButton.classList.add("ok-button");
    const okH3 = document.createElement("h3");
    okH3.innerText = "OK";
    okH3.addEventListener("click", handleClose);
    okButton.appendChild(okH3);
    instructionsModalContent.appendChild(okButton);
  }

  closeModal() {
    this.parentEle.remove();
  }
}

export default instructionsModal;
