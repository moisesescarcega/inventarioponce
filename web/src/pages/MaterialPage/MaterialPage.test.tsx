import { render } from '@redwoodjs/testing/web'

import MaterialPage from './MaterialPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MaterialPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MaterialPage />)
    }).not.toThrow()
  })
})
