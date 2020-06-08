import { createTest, createVue, destroyVM } from '../util';
import NButton from 'component/n-button';

describe('n-button', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });
  
    it('create', () => {
      vm = createTest(NButton, {}, true);
      let buttonElm = vm.$el;
      expect(buttonElm.classList.contains('n-button')).to.be.true;
    });

    it('autofocus', () => {
      vm = createTest(NButton, {autofocus:true}, true);
      let buttonElm = vm.$el.querySelector('button');;
      expect(buttonElm.getAttribute('autofocus')).to.be.equal('autofocus');
    });

    it('btnStyle', () => {
      vm = createTest(NButton, {btnStyle:{color:'red'}}, true);
      let buttonElm = vm.$el.querySelector('button');;
      expect(buttonElm.getAttribute('style')).to.be.equal('color: red;');
    });

    it('disabled', () => {
      vm = createTest(NButton, {disabled:true}, true);
      let buttonElm = vm.$el.querySelector('button');;
      expect(buttonElm.getAttribute('disabled')).to.be.equal('disabled');
    });
    
    it('theme', () => {
      vm = createTest(NButton, {theme:'primary'}, true);
      let buttonElm = vm.$el;
      expect(buttonElm.classList.contains('theme-primary')).to.be.true;
    });
    
    it('name', () => {
      vm = createTest(NButton, {name:'n-button-name'}, true);
      let buttonElm = vm.$el.querySelector('button');;
      expect(buttonElm.getAttribute('name')).to.be.equal('n-button-name');
    });

    it('shape', () => {
      vm = createTest(NButton, {shape:'round'}, true);
      let buttonElm = vm.$el;
      expect(buttonElm.classList.contains('shape-round')).to.be.true;
    });

    it('size', () => {
      vm = createTest(NButton, {size:'lg'}, true);
      let buttonElm = vm.$el;
      expect(buttonElm.classList.contains('size-lg')).to.be.true;
    });

    it('type', () => {
      vm = createTest(NButton, {type:'reset'}, true);
      let buttonElm = vm.$el.querySelector('button');
      expect(buttonElm.getAttribute('type')).to.be.equal('reset');
    });

    it('slot', () => {
      vm = createVue({
        template: `
          <n-button><span class="inner"></span></n-button>
        `,
      }, true);
      let buttonElm = vm.$el.querySelector('.inner');
      expect(buttonElm).to.be.ok;
    });

    it('click-inside', done => {
      vm = createVue({
        template: `
          <n-button @click="handleClick"><span class="inner"></span></n-button>
        `,
        data(){
          return {result:null}
        },
        methods: {
          handleClick() {
            this.result = 'click-inside';
          }
        }
      }, true);
      vm.$el.querySelector('.inner').click();
      setTimeout(_ => {
        expect(vm.result).to.equal('click-inside');
        done();
      }, 20);
    });

    it('click', done => {
      vm = createVue({
        template: `
          <n-button @click="handleClick">click</n-button>
        `,
        data(){
          return {result:null}
        },
        methods: {
          handleClick() {
            this.result = 'click1';
          }
        }
      }, true);
      vm.$el.querySelector('button').click();
      setTimeout(_ => {
        expect(vm.result).to.equal('click1');
        done();
      }, 30);
    });
  });