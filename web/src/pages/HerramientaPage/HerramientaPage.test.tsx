import { render } from '@redwoodjs/testing/web'

import HerramientaPage from './HerramientaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HerramientaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HerramientaPage />)
    }).not.toThrow()
  })
})
