export class FinalProjectIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'module-1'],
      name: 'module-1',
      moduleId: 'resources/final-project/module-1',
      title: 'Module 1',
      nav: true
    }, {
      route: 'module-2',
      name: 'module-2',
      moduleId: 'resources/final-project/module-2',
      title: 'Module 2',
      nav: true
    }, {
      route: 'module-3',
      name: 'module-3',
      moduleId: 'resources/final-project/module-3',
      title: 'Module 3',
      nav: true
    }]);
  }
}