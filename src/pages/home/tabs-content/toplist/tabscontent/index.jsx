import Itemin from '../item'
import { Card } from 'antd-mobile'
import { TabscontentWrapper } from './style'
const data = [
  { id: 1, title: '111', content: 's' },
  { id: 2, title: '111', content: 's' },
  { id: 3, title: '111', content: 's' },
  { id: 4, title: '111', content: 's' },
  { id: 5, title: '111', content: 's' },
  { id: 6, title: '111', content: 's' },
]
const Tabscontent = () => {
  return (
    <TabscontentWrapper>
      <div className="all">
        <Card>
          <Itemin />
          <div className="contents" onTouchMove={(e) => e.stopPropagation()}>
            <div className="group">
              {data.slice(0, 2).map((item) => (
                <div key={item.id} className="content">
                  <Itemin />
                </div>
              ))}
            </div>
            <div className="group">
              {data.slice(2, 4).map((item) => (
                <div key={item.id} className="content">
                  <Itemin />
                </div>
              ))}
            </div>
            <div className="group">
              {data.slice(4, 6).map((item) => (
                <div key={item.id} className="content">
                  <Itemin />
                </div>
              ))}
            </div>
          </div>
          <div className="alltops">全部榜单</div>
        </Card>
      </div>
    </TabscontentWrapper>
  )
}
export default Tabscontent
