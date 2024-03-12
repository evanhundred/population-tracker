import { html } from 'lit-html';
const template = document.createElement('template');

template.id = 'app-template';
template.innerHTML = html`
  <section class="app">
    <app-topbar></app-topbar>
    <main class="main"></main>
    <app-bottombar></app-bottombar>
  </section>
`;
