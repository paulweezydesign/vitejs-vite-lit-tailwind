import { html, css, LitElement } from 'lit';

export class SubElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },
    
      constructor() {
        super();
        this.docsHint = 'Click on the Vite and Lit logos to learn more';
      },
      createRenderRoot() {
        return this; // will render the template without shadow DOM
      },
      render() {
        return html`
        <p class="text-center text-xl text-white/90">${this.docsHint}</p>


        `;
      }


      static get styles() {
        return css`
          :host {
            max-width: 1280px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
          }
    
          .logo {
            height: 6em;
            padding: 1.5em;
            will-change: filter;
          }
          .logo:hover {
            filter: drop-shadow(0 0 2em #646cffaa);
          }
    
          .card {
            padding: 2em;
          }
    
          .read-the-docs {
            color: #888;
          }
    
          a {
            font-weight: 500;
            color: #646cff;
            text-decoration: inherit;
          }
          a:hover {
            color: #535bf2;
          }
    
          h1 {
            font-size: 3.2em;
            line-height: 1.1;
          }
    
          button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #deeppink;
            cursor: pointer;
            transition: border-color 0.25s;
          }
          button:hover {
            border-color: #646cff;
          }
          button:focus,
          button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
          }
    
          @media (prefers-color-scheme: light) {
            a:hover {
              color: #747bff;
            }
            button {
              background-color: #f9f9f9;
            }
          }
        `;
      }
    }
    
window.customElements.define('sub-element', SubElement);