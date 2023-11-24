import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Route, useLocation } from 'react-router-dom'
import VideoCard from '../VideoCard'
import { formatAgo } from '../../util/date'
import { FakeVideo as video } from '../../tests/videos'
import { withRouter } from '../../tests/utils'
import renderer from 'react-test-renderer'

describe('VideoCard', () => {
  // prettier-ignore
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet

  it('renders video item - static test', () => {
    render(withRouter(<Route path='/' element={<VideoCard video={video} />} />))
    const image = screen.getByRole('img')
    expect(image.src).toBe(thumbnails.medium.url)
    expect(image.alt).toBe(title)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(channelTitle)).toBeInTheDocument()
    expect(screen.getByText(formatAgo(publishedAt))).toBeInTheDocument()
  })

  /**
   * @description HTML Role 확인하기
   * @see https://www.w3.org/TR/html-aria/#docconformance
   * @see https://testing-library.com/docs/queries/byrole#api
   */
  it('navigates to detailed video page with video state when clicked - dynamic test', () => {
    // 통합 테스트가 아니기 때문에, 어디로 이동하는지는 여기서 테스트하지 않아도 됨 이는 E2E 테스트임
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>
    }
    render(
      withRouter(
        <>
          <Route path='/' element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    )
    const card = screen.getByRole('listitem')
    userEvent.click(card)
    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument()
  })

  /**
   * UI의 변경 -> Jest의 Snapshot testing
   * @see https://jestjs.io/docs/snapshot-testing
   */
  it('renders grid type correctly', () => {
    const component = renderer.create(
      withRouter(<Route path='/' element={<VideoCard video={video} />} />)
    )
    const tree = component.toJSON()
    // 스냅샷이 변경된게 확실하면 u 를 눌러서 스냅샷 업데이트 하기
    expect(tree).toMatchSnapshot()
  })
  it('renders list type correctly', () => {
    const component = renderer.create(
      withRouter(
        <Route path='/' element={<VideoCard video={video} type='list' />} />
      )
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
