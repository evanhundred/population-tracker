class SplashModal {
  constructor(ele) {
    this.ele = ele;

    const splashModalOverlay = document.createElement("div");
    splashModalOverlay.classList.add("splash-modal-overlay");
    ele.appendChild(splashModalOverlay);

    const splashModalBox = document.createElement("div");
    splashModalBox.classList.add("splash-modal-box");
    ele.appendChild(splashModalBox);

    const splashModalContent = document.createElement("div");
    splashModalContent.classList.add("splash-modal-content");
    splashModalBox.appendChild(splashModalContent);

    const closeX = document.createElement("div");
    closeX.classList.add("close-x");
    const xP = document.createElement("p");
    xP.innerText = "X";
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
    const firstLine = document.qurerySelector(
      "#splash-modal-container p.modal-line-1"
    );
    firstLine.innerText = "Welcome to Population Tracker.";

    const okButton = document.createElement("div");
    okButton.classList.add("ok-button");
    const okH3 = document.createElement("h3");
    okH3.innerText = "OK";
    okButton.appendChild(okH3);
    splashModalContent.appendChild(okButton);
  }
}

export default SplashModal;
