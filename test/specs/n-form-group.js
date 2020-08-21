import { createTest, createVue, destroyVM } from '../util';
import NFormGroup from 'component/n-form-group';

describe('n-form-group', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

    it('create', () => {
      vm = createTest(NFormGroup, {}, true);
      let Elm = vm.$el;
      expect(Elm.classList.contains('n-form-group')).to.be.true;
    });
})