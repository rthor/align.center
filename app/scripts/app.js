import hljs from 'highlight.js';
import '../components/cards';

class App {
  constructor() {
    let codeSnippets = [...document.querySelectorAll('pre code')];

    for (let snippet of codeSnippets) {
      hljs.highlightBlock(snippet);
    }
  }

  static start() {
    return new App();
  }
}

export default App;
