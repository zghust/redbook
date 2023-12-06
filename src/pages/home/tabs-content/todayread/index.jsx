import TodayreadWrapper from './style'
import { Card, Space, Divider } from 'antd-mobile'
import Item from '../item'
import Bottom from './bottom'
const currentDate = new Date()
const day = currentDate.getDate()
const month = currentDate.getMonth()
function TodayRead() {
  return (
    <TodayreadWrapper>
      <div className="todayread">
        <Card>
          <div className="top">
            <h3>今日必读</h3>
            <div>
              <span className="month">{day}</span>
              <span>/{month + 1}</span>
              <span>月</span>
            </div>
          </div>
          <Item
            src={
              'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            summary={'时间来得及发'}
            housename={
              '《他和她的猫》书摘周荡是小公主,需要疼...全文 +7 细节决定 2023-11-28 消防安全手抄报,简单好看,有线稿可打印 +4 细节决定'
            }
            favor={264}
            location={'中国北京'}
            text={'《活着》'}
          />
          <Divider />
          <Bottom></Bottom>
        </Card>
      </div>
    </TodayreadWrapper>
  )
}
export default TodayRead
