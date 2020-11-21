import { shallowMount } from '@vue/test-utils'
import ProjectCard from '@/components/Project/ProjectCard'

const factory = () => shallowMount(ProjectCard, {
  propsData: {
    technologies: 'csharp,laravel',
    title: 'Test Title',
    description: 'Description Test',
    btnText: 'Check Page',
    linkButton: 'http://test.com',
    imgSrc: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'
  }
})

const factoryWrongTech = () => shallowMount(ProjectCard, {
  propsData: {
    technologies: 'abc,xyz',
    title: 'Test Title',
    description: 'Description Test',
    btnText: 'Check Page',
    linkButton: 'http://test.com',
    imgSrc: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'
  }
})

const factoryNoTech = () => shallowMount(ProjectCard, {
  propsData: {
    title: 'Test Title',
    description: 'Description Test',
    btnText: 'Check Page',
    linkButton: 'http://test.com',
    imgSrc: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'
  }
})

const factoryNoButton = () => shallowMount(ProjectCard, {
  propsData: {
    technologies: 'csharp,laravel',
    title: 'Test Title',
    description: 'Description Test',
    btnText: 'Check Page',
    imgSrc: 'https://cdn.vuetifyjs.com/images/cards/server-room.jpg'
  }
})

describe('Project Card', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('title shows correctly', () => {
    const wrapper = factory()
    expect(wrapper.find('h2').text()).toEqual('Test Title')
  })

  test('description shows correctly', () => {
    const wrapper = factory()
    expect(wrapper.find('p').text()).toEqual('Description Test')
  })

  test('button text set correctly', () => {
    const wrapper = factory()
    expect(wrapper.find('v-btn-stub').text()).toEqual('Check Page')
  })

  test('show correct specified technologies logo on tech input', () => {
    const wrapper = factory()
    expect(wrapper.find('v-btn-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-spacer-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-avatar-stub')).toBeTruthy()
    expect(wrapper.find('img')).toBeTruthy()
    expect(wrapper.find('#csharp-img').element.attributes.item(1).name).toEqual('src')
    expect(wrapper.find('#csharp-img').element.attributes.item(1).value).toEqual('/csharp_logo.svg')
    expect(wrapper.find('#csharp-img').element.attributes.item(2).name).toEqual('alt')
    expect(wrapper.find('#csharp-img').element.attributes.item(2).value).toEqual('C# Logo')
    expect(wrapper.find('#laravel-img').element.attributes.item(1).name).toEqual('src')
    expect(wrapper.find('#laravel-img').element.attributes.item(1).value).toEqual('/laravel-mark-rgb-red.svg')
    expect(wrapper.find('#laravel-img').element.attributes.item(2).name).toEqual('alt')
    expect(wrapper.find('#laravel-img').element.attributes.item(2).value).toEqual('Laravel Logo')
  })

  test('show no logo on wrongly technologies input', () => {
    const wrapper = factoryWrongTech()
    expect(wrapper.find('v-btn-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-spacer-stub').exists()).toBeTruthy()
    expect(wrapper.find('v-avatar-stub')).toBeTruthy()
    expect(wrapper.find('img')).toBeTruthy()
    expect(wrapper.find('#abc-img').element.attributes.item(1).name).toEqual('src')
    expect(wrapper.find('#abc-img').element.attributes.item(1).value).toEqual('')
    expect(wrapper.find('#abc-img').element.attributes.item(2).name).toEqual('alt')
    expect(wrapper.find('#abc-img').element.attributes.item(2).value).toEqual('No logo')
    expect(wrapper.find('#xyz-img').element.attributes.item(1).name).toEqual('src')
    expect(wrapper.find('#xyz-img').element.attributes.item(1).value).toEqual('')
    expect(wrapper.find('#xyz-img').element.attributes.item(2).name).toEqual('alt')
    expect(wrapper.find('#xyz-img').element.attributes.item(2).value).toEqual('No logo')
  })

  test('show no image on empty technologies input', () => {
    const wrapper = factoryNoTech()
    expect(wrapper.find('v-avatar-stub').exists()).toBeFalsy()
    expect(wrapper.find('v-avatar-stub').exists()).toBeFalsy()
  })

  test('show no button on empty link input', () => {
    const wrapper = factoryNoButton()
    expect(wrapper.find('v-btn-stub').exists()).toBeFalsy()
    expect(wrapper.find('v-spacer-stub').exists()).toBeFalsy()
    expect(wrapper.find('v-avatar-stub').exists()).toBeTruthy()
    expect(wrapper.find('#csharp-img').exists()).toBeTruthy()
    expect(wrapper.find('#laravel-img').exists()).toBeTruthy()
  })

  test('calls openLinkNewTab on click', () => {
    window.open = jest.fn()
    const spyTst = jest.spyOn(ProjectCard.methods, 'openLinkNewTab')
    const wrapper = factory()
    wrapper.find('v-btn-stub').vm.$listeners.click() // trigger('click')
    expect(spyTst).toHaveBeenCalled()

    spyTst.mockReset()
    spyTst.mockRestore()
  })

  // test('clicked is true after click', () => {
  //   const wrapper = factory()
  //   wrapper.find('button').trigger('click')
  //   expect(wrapper.vm.clicked).toBe(true)
  // })
})
