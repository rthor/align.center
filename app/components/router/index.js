import keycode from 'keycode';

class Router {
  static navigateToPath(path, callback) {
    window.history.pushState(null, '', path);
    callback();
  }
}


export default Router;
