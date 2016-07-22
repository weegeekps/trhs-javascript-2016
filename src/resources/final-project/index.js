export class FinalProjectIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'setup'],
      name: 'setup',
      moduleId: 'resources/final-project/module-1',
      title: '1. Initial Setup',
      nav: true
    }, {
      route: 'creating-javascript-file',
      name: 'creating-javascript-file',
      moduleId: 'resources/final-project/module-2',
      title: '2. Creating our JavaScript File',
      nav: true
    }, {
      route: 'creating-tiles',
      name: 'creating-tiles',
      moduleId: 'resources/final-project/module-3',
      title: '3. Creating Tiles',
      nav: true
    }, {
      route: 'assigning-pokemon',
      name: 'assigning-pokemon',
      moduleId: 'resources/final-project/module-4',
      title: '4. Assigning Pokémon to Tiles',
      nav: true
    }]);
  }
}