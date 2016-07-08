export class App {
  configureRouter(config, router) {
    this.router = router;

    config.map([
      {route: '', name: 'introduction', moduleId: 'resources/lessons/introduction', title: 'Introduction', nav: true},
      {route: 'lesson/setup', name: 'setup', moduleId: 'resources/lessons/setup', title: 'Setup', nav: true}
    ]);
  }
}
