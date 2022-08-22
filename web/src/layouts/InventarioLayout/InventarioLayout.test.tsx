import { render } from '@redwoodjs/testing/web'

import InventarioLayout from './InventarioLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InventarioLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InventarioLayout />)
    }).not.toThrow()
  })
})
