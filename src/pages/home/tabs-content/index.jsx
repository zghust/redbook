import { memo, useEffect, useState } from 'react'
import { TabsWrapper } from './style'
import { Ellipsis, PullToRefresh } from 'antd-mobile'
import { InfiniteScroll } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchdata0,
  fetchdata1,
  fetchdata2,
  cleardata0,
  cleardata1,
  cleardata2,
} from '../../../redux/modules/home'

function TabsContent({ scrollY, index }) {
  const res = useSelector((state) => state.home[`detaildata${index}`])

  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const [currentpage, setcurrentpage] = useState(1)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const loadMore = async () => {
    if (index === 0) {
      await dispatch(fetchdata0(currentpage)).then(() => {
        setcurrentpage(currentpage + 1)
      })
    }
    if (index === 1) {
      await dispatch(fetchdata1(currentpage)).then(() => {
        setcurrentpage(currentpage + 1)
      })
    }
    if (index === 2) {
      await dispatch(fetchdata2(currentpage)).then(() => {
        setcurrentpage(currentpage + 1)
      })
    }
  }
  const onRefresh = () => {
    if (index === 0) {
      setcurrentpage(1)
      dispatch(cleardata0())
    }
    if (index === 1) {
      setcurrentpage(1)
      dispatch(cleardata1())
    }
    if (index === 2) {
      setcurrentpage(1)
      dispatch(cleardata2())
    }
  }
  return (
    <TabsWrapper>
      <PullToRefresh onRefresh={onRefresh}>
        <div
          className="tabscontent"
          style={{
            overflowY: scrollY > 50 ? 'auto' : 'hidden',
          }}
        >
          {res?.map((item) => {
            return (
              <div key={item.data.houseId}>
                <div className="itemcontent">
                  <img src={item.data.image.url} alt=""></img>
                  <div
                    className={item.discoveryContentType === 9 ? 'highimg' : ''}
                  >
                    <div> {item.data.summaryText}</div>
                    <Ellipsis
                      direction="end"
                      content={item.data.houseName}
                      rows={2}
                      expandText="展开"
                      collapseText="收起"
                    />
                  </div>
                </div>
              </div>
            )
          })}
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            threshold={25}
          />
        </div>
      </PullToRefresh>
    </TabsWrapper>
  )
}

export default memo(TabsContent)
