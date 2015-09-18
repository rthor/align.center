import $ from 'jquery';

class Align {
  constructor(element) {
    this.element_ = $(element);
    // let content = $(this.element_.html());
    // this.element_.html($('<div data-align-content/>').html(content));
  }

  static init() {
    $('[data-align]').each(function() {
      new Align(this);
    });
  }
}

$(Align.init);
