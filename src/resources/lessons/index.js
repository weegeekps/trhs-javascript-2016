export class LessonsIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'setup'],
      name: 'setup',
      moduleId: 'resources/lessons/setup',
      title: '1. Setup',
      nav: true
    }, {
      route: 'variables',
      name: 'variables-conditionals',
      moduleId: 'resources/lessons/variables-conditionals',
      title: '2. Variables & Conditionals',
      nav: true
    }, {
      route: 'functions',
      name: 'functions',
      moduleId: 'resources/lessons/functions',
      title: '4. Functions',
      nav: true
    }, {
      route: 'html-css',
      name: 'html-css',
      moduleId: 'resources/lessons/html-css',
      title: '5. HTML & CSS',
      nav: true
    }]);
  }
}