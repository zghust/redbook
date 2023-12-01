import { TabBar } from 'antd-mobile'
import {
  SmileOutline,
  SmileFill,
  HeartOutline,
  HeartFill,
  EyeOutline,
  EyeFill,
} from 'antd-mobile-icons'
import { TabWrapper } from './style'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const tabs = [
  {
    title: '书城',
    icon: (active) => (active ? <EyeFill /> : <EyeOutline />),
    path: '/home',
  },
  {
    title: '喜欢',
    icon: (active) => (active ? <HeartFill /> : <HeartOutline />),
    path: '/favor',
  },
  {
    title: '我的',
    icon: (active) => (active ? <SmileFill /> : <SmileOutline />),
    path: '/mine',
  },
]
function Tabbar({ navigate }) {
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(
    location.pathname === '/' ? '/home' : location.pathname
  )

  useEffect(() => {
    navigate(currentIndex)
  }, [currentIndex])
  // useEffect(() => {
  //   setCurrentIndex(location.pathname)
  // }, [location])
  return (
    <TabWrapper>
      <TabBar
        className="tabbar"
        activeKey={currentIndex}
        onChange={setCurrentIndex}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.path} title={item.title} icon={item.icon} />
        ))}
      </TabBar>
    </TabWrapper>
  )
}

export default Tabbar
