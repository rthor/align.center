import Component from '../component';
import Router from '../router';
import keycode from 'keycode';
import gsap from 'gsap';

class Card extends Component {
  constructor(element) {
    super(element);

    this.view_ = this.element_.querySelector('.Card-view');
    this.link_ = this.element_.querySelector('.Card-link');
    this.close_ = this.element_.querySelector('.Card-close');
    this.isExpanded_ = false;
    this.registerEvents();
  }

  registerEvents() {
    window.addEventListener('keyup', this.keyUpHandler_.bind(this));
    this.link_.addEventListener('click', this.clickHandler_.bind(this));
    this.close_.addEventListener('click', this.clickHandler_.bind(this));
  }

  keyUpHandler_(event) {
    if (this.isExpanded_ && keycode(event) === 'esc') {
      Router.navigateToPath('/', this.collapse.bind(this));
    }
  }

  clickHandler_(event) {
    event.preventDefault();

    if (this.isExpanded_) {
      Router.navigateToPath('/', this.collapse.bind(this));
    } else {
      Router.navigateToPath(this.link_.getAttribute('href'), this.expand.bind(this));
    }
  }

  animate(direction, state) {
    return new Promise((resolve, reject) => {
      this.element_.classList.add('Card--animating');

      gsap[direction](this.view_, .2, {
        top: state.top,
        left: state.left,
        height: state.height,
        width: state.width,

        onComplete: () => {
          this.element_.classList.remove('Card--animating');

          gsap.set(this.view_, {
            top: '',
            overflow: '',
            left: '',
            height: '',
            width: ''
          });

          resolve();
        }
      });
    });
  }

  collapse() {
    this.isExpanded_ = false;
    this.animate('to', this.element_.getBoundingClientRect()).then(() => {
      this.element_.classList.remove('Card--expanded');
    });
  }

  expand() {
    this.isExpanded_ = true;
    this.element_.classList.add('Card--expanded');
    this.animate('from', this.element_.getBoundingClientRect());
  }
}

Card.register(Card, '[data-card]');

export default Card;
