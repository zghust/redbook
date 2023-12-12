import TodayreadWrapper from './style'
import { Card, Divider } from 'antd-mobile'
import Item from '../item'
import Bottom from './bottom'
import { useState } from 'react'
const currentDate = new Date()
const day = currentDate.getDate()
const month = currentDate.getMonth()
function TodayRead({ res }) {
  const [random, setrandom] = useState(Math.floor(Math.random() * 5))
  return (
    <TodayreadWrapper>
      <div className="todayread">
        <Card>
          <div className="top">
            <div className="bigtitle"> 今日必读</div>
            <div>
              <span className="month">{day}</span>
              <span>/{month + 1}</span>
              <span>月</span>
            </div>
          </div>
          <div className="itemdiv">
            <Item
              src={res[random]?.src}
              asktitle={res[random]?.ask_title}
              content={res[random]?.content}
              favor={res[random]?.favor}
              maintype={res[random]?.main_type}
              subtype={res[random]?.sub_type}
              subtitle={res[random]?.sub_title}
            />
          </div>
          <Divider />
          <Bottom res={res}></Bottom>
        </Card>
      </div>
    </TodayreadWrapper>
  )
}
export default TodayRead
