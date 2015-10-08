import hljs from 'highlight.js';
import Router from '../components/router';
import '../components/cards';

class App {
  constructor() {
    let codeSnippets = [...document.querySelectorAll('pre code')];
    this.router = new Router();

    for (let snippet of codeSnippets) {
      hljs.highlightBlock(snippet);
    }
  }

  static start() {
    return new App();
  }
}

export default App;
