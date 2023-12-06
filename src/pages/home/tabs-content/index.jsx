import { memo, useEffect, useRef, useState } from 'react'
import { TabsWrapper } from './style'
import { Ellipsis, PullToRefresh } from 'antd-mobile'
import { InfiniteScroll, Divider } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchdata0,
  fetchdata1,
  fetchdata2,
  cleardata0,
  cleardata1,
  cleardata2,
} from '../../../redux/modules/home'
import Item from './item'
import TodayRead from './todayread'
function TabsContent({ scrollY, index, activeIndex }) {
  const res = useSelector((state) => state.home[`detaildata${index}`])
  const ref = useRef()
  const dispatch = useDispatch()
  const [hasMore, setHasMore] = useState(true)
  const [currentpage, setcurrentpage] = useState(1)
  const [prescrollyy, setprescrollyy] = useState(0)
  const [scrollyy, setscrollyy] = useState(0)
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
  //获取动态scrollyy值，为了让计算滚动与否显示函数刷新
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setscrollyy(ref.current.scrollTop)
      }
    }
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  //计算滚动显示与否函数
  useEffect(() => {
    setprescrollyy(scrollyy)
    if (scrollY > 50) {
      ref.current.style.overflowY = 'auto'
    } else {
      if (scrollyy > 0) {
        if (prescrollyy < scrollyy) {
          ref.current.style.overflowY = 'hidden'
        } else {
          ref.current.style.overflowY = 'auto'
        }
      } else {
        ref.current.style.overflowY = 'hidden'
      }
    }
  }, [scrollY, scrollyy, activeIndex])

  return (
    <TabsWrapper>
      <PullToRefresh onRefresh={onRefresh}>
        <div ref={ref} className="tabscontent">
          <TodayRead />
          <div style={{ marginLeft: 10, marginRight: 10 }}>
            <Divider
              style={{
                color: '#B7B7B7',
                borderColor: '#B7B7B7',
                borderStyle: 'solid',
              }}
            >
              大家都在看
            </Divider>
          </div>
          {res.map((item) => {
            return (
              <div key={item.data.houseId}>
                <Item
                  src={item.data.image.url}
                  summary={item.data.summaryText}
                  housename={item.data.houseName}
                  favor={item.data.productPrice}
                  location={item.data.location}
                  text={item.data.priceTipBadge.text}
                />
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
