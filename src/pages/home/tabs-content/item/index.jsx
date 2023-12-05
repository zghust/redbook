import { Card, Space, Image, Ellipsis } from 'antd-mobile'
import { FireFill, CheckCircleFill, HeartOutline } from 'antd-mobile-icons'
import { memo } from 'react'
import ItemSwapper from './style'
const content =
  '逛公园的时候，突发地震。为了保护年幼的孩子，我被倒下来的路灯砸断了一条手臂。。。'
const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
function Item() {
  return (
    <ItemSwapper>
      <div className="item">
        <Card>
          <h3>
            <Space>
              <CheckCircleFill />
              <div>有没有有趣的现实战争小说？</div>
            </Space>
          </h3>
          <div className="centercontent">
            <div className="centerleft">
              <h4>《春梅归来》</h4>
              <div>
                <Ellipsis direction="end" rows={2} content={content} />
              </div>
            </div>
            <Image
              src={demoSrc}
              className="centerright"
              fit="fill"
              width={100}
              height={68}
            />
          </div>
          <div className="bottom">
            <div className="tag">现实情感</div>
            <div className="favor">
              <HeartOutline />
              <span>1380</span>
            </div>
          </div>
        </Card>
      </div>
    </ItemSwapper>
  )
}
export default memo(Item)
