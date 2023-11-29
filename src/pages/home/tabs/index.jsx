import { Tabs } from 'antd-mobile'
import { TabsWrapper } from './style'
import TabsContent from '../tabs-content/index'
import { useDispatch, useSelector } from 'react-redux'
import { InfiniteScroll } from 'antd-mobile'
import { fetchdata } from '../../../redux/modules/home'
import { useState } from 'react'
function Tabss() {
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
      <div className="tabss">
        <Tabs defaultActiveKey="rooms">
          <Tabs.Tab title="发现" key="find">
            <div className="content">
              <TabsContent res={res} />
              <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </div>
          </Tabs.Tab>

          <Tabs.Tab title="民宿" key="rooms">
            <div className="content">
              <TabsContent res={res} />
              <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="推荐" key="advise">
            <div className="content">
              <TabsContent res={res} />
              <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    </TabsWrapper>
  )
}
export default Tabss
