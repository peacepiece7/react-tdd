import { render, screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { withRouter } from '../../tests/utils'
import renderer from 'react-test-renderer'
import SearchHeader from '../SearchHeader'
import userEvent from '@testing-library/user-event'

const text = 'foo'
describe('Search Header', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      withRouter(<Route path='/' element={<SearchHeader />} />)
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with keyword correctly', async () => {
    render(
      withRouter(
        <Route path='/:keyword' element={<SearchHeader />} />,
        `/${text}`
      )
    )
    expect(screen.getByDisplayValue(text)).toBeInTheDocument()
  })

  it('naviagtes to results page on search button click', async () => {
    const searchKeyword = 'fake-keyword'
    render(
      withRouter(
        <>
          <Route path='/home' element={<SearchHeader />} />
          <Route
            path={`/videos/${searchKeyword}`}
            element={<p>{searchKeyword}</p>}
          />
        </>,
        '/home'
      )
    )
    const searchButton = screen.getByRole('button')
    const searchInput = screen.getByRole('textbox')

    userEvent.type(searchInput, searchKeyword)
    userEvent.click(searchButton)

    expect(screen.getByText(searchKeyword)).toBeInTheDocument()
  })
})
