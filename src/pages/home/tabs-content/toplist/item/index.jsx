import { Card, Space, Image, Ellipsis } from 'antd-mobile'
import { FireFill, CheckCircleFill, HeartOutline } from 'antd-mobile-icons'
import { memo } from 'react'
import ItemsSwapper from './style'
const content =
  '逛公园的时候，突发地震。为了保护年幼的孩子，我被倒下来的路灯砸断了一条手臂。。。'
const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
function Itemin({ index = 1 }) {
  return (
    <ItemsSwapper>
      <div className="item">
        <Card>
          <h3>
            <Space>
              {index}
              <div>木槿</div>
            </Space>
          </h3>
          <div className="centercontent">
            <Image src={demoSrc} className="centerleft" fit="cover" />
            <div className="centerright">
              <div>
                <Ellipsis direction="end" rows={2} content={content} />{' '}
              </div>
              <div className="bottom">
                <span>抹茶时光.</span>
                <span>言情.</span>
                <span>32.4万热度</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ItemsSwapper>
  )
}
export default memo(Itemin)
