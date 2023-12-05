import { Tabs, Swiper } from 'antd-mobile'
import { TabsWrapper } from './style'
import TabsContent from '../tabs-content/index'
import { SearchOutline, ScanningOutline } from 'antd-mobile-icons'
import {
  fetchdata0,
  fetchdata1,
  fetchdata2,
  cleardata,
} from '../../../redux/modules/home'
import { useEffect, useRef, useState, memo } from 'react'
const tabItems = [
  { key: '3', title: '男频' },
  { key: '9', title: '女频' },
  { key: 'animals', title: '出版' },
]
function Tabss() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
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
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
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
          {tabItems.map((item, index) => (
            <Swiper.Item key={item.key}>
              <div className="content">
                <TabsContent
                  scrollY={scrollY}
                  index={index}
                  activeIndex={activeIndex}
                />
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
    </TabsWrapper>
  )
}
export default memo(Tabss)
