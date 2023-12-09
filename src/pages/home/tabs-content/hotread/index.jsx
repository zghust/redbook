import { Card, Space } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'
import { HotReadWrapper } from './style'
const HotReadList = () => {
  return (
    <HotReadWrapper>
      <div className="hotreadlist">
        <Card className="card">
          <div className="cardtop">
            <Space>
              <div className="topcontent">榜单</div>
              <RightOutline fontSize={8} />
            </Space>
          </div>
          <div className="bottom">高分必读</div>
        </Card>
        <Card className="card">
          <div className="cardtop">
            <Space>
              <div className="topcontent">书单</div>
              <RightOutline fontSize={8} />
            </Space>
          </div>
          <div className="bottom">精品书单</div>
        </Card>
        <Card className="card">
          <div className="cardtop">
            <Space>
              <div className="topcontent">分类</div>
              <RightOutline fontSize={8} />
            </Space>
          </div>
          <div className="bottom">海量好书</div>
        </Card>
      </div>
    </HotReadWrapper>
  )
}
export default HotReadList
