import keycode from 'keycode';

class Router {
  static navigateToPath(path, callback) {
    console.log(path);
    window.history.pushState(null, '', path);
    callback();
  }
}


export default Router;
