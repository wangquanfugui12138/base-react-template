
import Index from './pages/Index'
import React from 'react'
import { render } from 'enzyme'




describe('Index', () => {
  it('should hava the `th` "年龄"', () => {
    const wrapper = render(Index)
    expect(
      wrapper.contains('.wrapper')
    ).toBe(1)
  })
})
