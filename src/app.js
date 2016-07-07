export class App {
  configureRouter(config, router) {
    this.router = router;

    config.map([
      {route: '', name: 'introduction', moduleId: 'resources/lessons/introduction', title: 'Introduction', nav: true}
    ]);
  }
}
