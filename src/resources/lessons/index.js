export class LessonsIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'introduction'],
      name: 'introduction',
      moduleId: 'resources/lessons/introduction',
      title: 'Introduction',
      nav: true
    }, {
      route: 'setup',
      name: 'setup',
      moduleId: 'resources/lessons/setup',
      title: 'Setup',
      nav: true
    }]);
  }
}