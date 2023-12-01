import { Tabs, Swiper } from 'antd-mobile'
import { TabsWrapper } from './style'
import TabsContent from '../tabs-content/index'
import { useDispatch, useSelector } from 'react-redux'
import { InfiniteScroll } from 'antd-mobile'
import { fetchdata, cleardata } from '../../../redux/modules/home'
import { SearchOutline, ScanningOutline } from 'antd-mobile-icons'
import { useEffect, useRef, useState, memo } from 'react'
const tabItems = [
  { key: '3', title: '水果', hasInfiniteScroll: false },
  { key: '9', title: '蔬菜', hasInfiniteScroll: true },
  { key: 'animals', title: '动物', hasInfiniteScroll: false },
]
function Tabss() {
  const res = useSelector((state) => state.home.detaildata)
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const [currentpage, setcurrentpage] = useState(1)
  const loadMore = async () => {
    await dispatch(fetchdata(currentpage + 1)).then(() => {
      setcurrentpage(currentpage + 1)
    })
  }
  const swiperRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(1)
  useEffect(() => {
    dispatch(cleardata())
    dispatch(fetchdata())
  }, [])

  const [scrollY, setScrollY] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const newY = document.documentElement.scrollTop
      setScrollY(newY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <TabsWrapper>
      <div className="tabss">
        <div className="searchandscan" style={{ opacity: scrollY > 50 && 1 }}>
          <div className="searchicon" onClick={() => console.log('aaa')}>
            <SearchOutline />
          </div>
          <div className="scan">
            <ScanningOutline />
          </div>
        </div>
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={(key) => {
            const index = tabItems.findIndex((item) => item.key === key)
            setActiveIndex(index)
            swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map((item) => (
            <Tabs.Tab title={item.title} key={item.key} destroyOnClose={true} />
          ))}
        </Tabs>
        <div
          className="scrollcontent"
          style={{
            overflowY: scrollY > 50 ? 'auto' : 'hidden',
          }}
        >
          <Swiper
            direction="horizontal"
            loop
            indicator={() => null}
            ref={swiperRef}
            defaultIndex={activeIndex}
            onIndexChange={(index) => {
              setActiveIndex(index)
            }}
          >
            {tabItems.map((item) => (
              <Swiper.Item key={item.key}>
                <div className="content">
                  <TabsContent
                    res={res.filter((e) => e.discoveryContentType == item.key)}
                  />
                </div>
              </Swiper.Item>
            ))}
          </Swiper>
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            threshold={25}
          />
        </div>
      </div>
    </TabsWrapper>
  )
}
export default memo(Tabss)
