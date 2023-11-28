import { TabBar } from 'antd-mobile'
import { TabWrapper } from './style'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const tabs = [
  { title: '首页', key: 0, path: '/home' },
  { title: '消息', key: 1, path: '/msg' },
  { title: '收藏', key: 2, path: '/favor' },
  { title: '我的', key: 3, path: '/mine' },
]
function Tabbar() {
  const [currentIndex, setCurrentIndex] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    navigate(currentIndex)
  }, [currentIndex, navigate])
  return (
    <TabWrapper>
      <TabBar
        className="tabbar"
        activeKey={currentIndex}
        onChange={setCurrentIndex}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.path} title={item.title} />
        ))}
      </TabBar>
    </TabWrapper>
  )
}

export default Tabbar
