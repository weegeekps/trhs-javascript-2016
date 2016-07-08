export class App {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: '',
      name: 'home',
      moduleId: 'resources/home',
      title: 'Home',
      nav: true
    }, {
      route: 'lessons',
      name: 'lessons',
      moduleId: 'resources/lessons/index',
      title: 'Lessons',
      nav: true
    }, {
      route: 'resources',
      name: 'resources',
      moduleId: 'resources/resources.html',
      title: 'Resources',
      nav: true
    }]);
  }
}
