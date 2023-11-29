import { useSelector } from 'react-redux'
import { TabsWrapper } from './style'
import { Ellipsis } from 'antd-mobile'
import { fetchdata } from '../../../redux/modules/home'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { InfiniteScroll } from 'antd-mobile'
function TabsContent() {
  const res = useSelector((state) => state.home.detaildata)
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const [loading, setloading] = useState(false)
  const [currentpage, setcurrentpage] = useState(1)
  const loadMore = () => {
    if (loading) return
    setloading(true)
    dispatch(fetchdata(currentpage)).then(() => {
      setloading(false)
      setcurrentpage(currentpage + 1)
    })
  }
  return (
    <TabsWrapper>
      <div className="tabscontent">
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
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </div>
    </TabsWrapper>
  )
}

export default TabsContent
