export class FinalProjectIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'setup'],
      name: 'setup',
      moduleId: 'resources/final-project/module-1',
      title: '1. Setup',
      nav: true
    }, {
      route: 'creating-javascript-file',
      name: 'creating-javascript-file',
      moduleId: 'resources/final-project/module-2',
      title: '2. Creating our JavaScript File',
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