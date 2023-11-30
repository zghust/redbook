// import { TabBar } from 'antd-mobile'
import { TabWrapper } from './style'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
const tabs = [
  { title: '首页', key: 0, path: '/home' },
  { title: '消息', key: 1, path: '/msg' },
  { title: '收藏', key: 2, path: '/favor' },
  { title: '我的', key: 3, path: '/mine' },
]
function Tabbar({ navigate }) {
  const location = useLocation()

  const [currentIndex, setCurrentIndex] = useState(location.pathname)

  useEffect(() => {
    navigate(currentIndex)
  }, [currentIndex])
  useEffect(() => {
    setCurrentIndex(location.pathname)
  }, [location])
  return (
    <TabWrapper>
      <div className="tabbar">
        {tabs.map((item) => (
          <div
            key={item.path}
            className={classNames(
              'items',
              currentIndex === item.path ? 'active' : ''
            )}
            onClick={() => setCurrentIndex(item.path)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </TabWrapper>
  )
}

export default Tabbar
