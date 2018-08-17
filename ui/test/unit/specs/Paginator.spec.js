import Vue from 'vue'
import Pagin from '@/components/pagination/Paginator'

describe('Paginator.vue', () => {
  it('Проверка корректности создания первой кнопки', () => {
    const Constructor = Vue.extend(Pagin)
    const vm = new Constructor({
      propsData: {
        firstNumber: false,
        countPages: 10
      }
    }).$mount()
    expect(vm.$el.querySelector('.page-item a').textContent)
      .to.contain('1 (осн)')
  })
})
