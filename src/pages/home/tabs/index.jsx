import { Tabs, Swiper } from 'antd-mobile'
import { TabsWrapper } from './style'
import { useRef, useState, memo } from 'react'

const CustomTab = ({ title, selected }) => {
  // 在选中时设置字体变大的样式
  const textStyle = {
    fontFamily: '宋体',
    color: selected ? 'black' : 'grey',
    fontSize: selected ? '20px' : '18px',

    fontWeight: selected ? 'bold' : 'normal',
  }

  return <div style={textStyle}>{title}</div>
}

function Tabss({
  tabitems,
  searchandscan: SearchAndScan,
  tabscontent: TabsContent,
  scrollY,
}) {
  const tabItems = tabitems
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <TabsWrapper>
      <div className="tabss">
        {SearchAndScan && <SearchAndScan scrollY={scrollY} />}
        <Tabs
          activeKey={tabItems[activeIndex].key}
          onChange={(key) => {
            const index = tabItems.findIndex((item) => item.key === key)
            setActiveIndex(index)
            swiperRef.current?.swipeTo(index)
          }}
        >
          {tabItems.map((item) => (
            <Tabs.Tab
              title={
                <CustomTab
                  title={item.title}
                  selected={item.key === tabItems[activeIndex].key}
                />
              }
              key={item.key}
            />
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
                  index={index}
                  activeIndex={activeIndex}
                  scrollY={scrollY}
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
