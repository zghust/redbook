import TodayreadWrapper from './style'
import { Card, Space, Divider } from 'antd-mobile'
import Item from '../item'
import Bottom from './bottom'
function TodayRead() {
  return (
    <TodayreadWrapper>
      <div className="todayread">
        <Card>
          <div className="top">
            <h3>今日必读</h3>
            <div>5/12</div>
          </div>
          <Item />
          <Divider />
          <Bottom></Bottom>
        </Card>
      </div>
    </TodayreadWrapper>
  )
}
export default TodayRead
