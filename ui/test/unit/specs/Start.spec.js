import Vue from 'vue'
import Start from '@/components/Start'

describe('List.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Start)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.navbar-brand').textContent)
      .to.equal('МОЭСК')
  })
})
