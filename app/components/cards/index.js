import $ from 'jquery';

class Cards {
  constructor(element) {
    this.element_ = $(element);
    this.element_.on('click', '.Card-title', this.expand.bind(this));
    this.element_.on('click', '.Card-close', this.collapse.bind(this));
  }

  collapse(event) {
    let selected = $(event.currentTarget).closest('.Card');
    selected.animate({
      left: this.offset.left,
      position: 'absolute',
      top: this.offset.top,
      height: '200px',
      width: '200px'
    }, 200, () => {
      selected.removeClass('is-active');
      selected.css({
        overflow: '',
      });
    });
  }

  expand(event) {
    let selected = $(event.currentTarget).closest('.Card');
    this.offset = selected.offset();

    selected.css({
      overflow: 'auto',
      left: selected.offset().left,
      position: 'absolute',
      top: selected.offset().top
    }).addClass('is-active').animate({
      height: '100%',
      left: 0,
      top: 0,
      width: '100%'
    }, 200);
  }

  static init() {
    $('[data-cards]').each(function() {
      new Cards(this);
    });
  }
}

$(Cards.init);
