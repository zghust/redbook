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
    icon: (active) =>
      active ? <EyeFill color="var(--adm-color-danger)" /> : <EyeOutline />,
    path: '/home',
  },
  {
    title: '喜欢',
    icon: (active) =>
      active ? <HeartFill color="var(--adm-color-danger)" /> : <HeartOutline />,
    path: '/favor',
  },
  {
    title: '我的',
    icon: (active) =>
      active ? <SmileFill color="var(--adm-color-danger)" /> : <SmileOutline />,
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
