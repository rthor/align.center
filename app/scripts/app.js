import $ from 'jquery';
import hljs from 'highlight.js';
import '../components/cards';
import '../components/center';

class App {
  constructor() {
    console.log('Started...');
    $('pre code').each((i, block) => {
      hljs.highlightBlock(block);
    });
  }

  static start() {
    return new App();
  }
}

export default App;
