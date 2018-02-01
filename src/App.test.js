import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, mount } from 'enzyme'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

it('renders a #count span and 3 .increment buttons', async () => {

  const wrapper = shallow(<App />)
  expect(wrapper.find('#count').length).toBe(1)
  expect(wrapper.find('.increment').length).toBe(3)

})

it('renders an initial count of 3', async () => {

  const wrapper = shallow(<App />)
  expect(wrapper.find('#count').text()).toBe("3")

})

it('clicking #increment1 button 10 times increases count from 3 to 13', async () => {

  const wrapper = mount(<App />)
  let numClicks = 10
  while (numClicks--) {
    wrapper.find('#increment1').simulate('click')
  }
  expect(wrapper.find('#count').text()).toBe("13")

})

it('clicking #increment5 button 10 times increases count from 3 to 53', async () => {

  const wrapper = mount(<App />)
  let numClicks = 10
  while (numClicks--) {
    wrapper.find('#increment5').simulate('click')
  }
  expect(wrapper.find('#count').text()).toBe("53")

})

it('clicking #increment10 button 10 times increases count from 3 to 103', async () => {

  const wrapper = mount(<App />)
  let numClicks = 10
  while (numClicks--) {
    wrapper.find('#increment10').simulate('click')
  }
  expect(wrapper.find('#count').text()).toBe("103")

})
