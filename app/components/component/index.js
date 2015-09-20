class Component {
  constructor(element) {
    this.element_ = element;
  }

  on(event, callback) {
    this.element_.addEventListener(event, callback);
  }

  static register(component, selector) {
    [...document.querySelectorAll(selector)].forEach(item => {
      new component(item)
    });
  }
}

export default Component;
