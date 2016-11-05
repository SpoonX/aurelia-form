// import {Config} from '../../src/config';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
// import {Container} from 'aurelia-dependency-injection';

describe('Component', () => {
  let component;


  beforeEach( ()=> {
    component = StageComponent
      .withResources('test/resources/dummy')
      .inView('')
      .boundTo({});

    component.configure = function(aurelia) {
      aurelia.use
        .standardConfiguration();
    };
  });

  afterEach(() => {
    component.dispose();
  });

  describe('.constructor()', function() {
    it('Should create', function(done) {
      // let container = new Container();
      // let config = container.get(Config).configure();

      component.create(bootstrap).then( function() {
        done();
      });
    });
  });

  describe('.note()', function() {
    it('Should xy', function(done) {
      // let container = new Container();
      // let config = container.get(Config).configure();

      component.create(bootstrap).then(function() {
        done();
      });
    });
  });
});
