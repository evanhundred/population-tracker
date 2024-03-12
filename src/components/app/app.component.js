import template from './app.template.js';
class App extends HTMLElement {
  #isReady = false;
  #data = [];
  constructor() {
    super();

    const node = document.importNode(template.content, true);
    this.topbar = node.querySelector('app-topbar');
    this.bottombar = node.querySelector('app-bottombar');

    this.shadow = this.attachShadow({ mode: 'open' });
    this.htmlDirection = document.dir || 'ltr';
    this.setAttribute('dir', this.htmlDirection);
    this.shadow.adoptedStyleSheets = [globalStyles, appStyles, mainStyles];
    this.shadow.append(node);
  }
}

customElements.define('app', App);
export default App;
