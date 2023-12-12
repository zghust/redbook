import Itemin from '../item'
import { Card } from 'antd-mobile'
import { TabscontentWrapper } from './style'
import { useSelector } from 'react-redux'
const data1 = [
  { id: 1, title: '111', content: 's' },
  { id: 2, title: '111', content: 's' },
  { id: 3, title: '111', content: 's' },
  { id: 4, title: '111', content: 's' },
  { id: 5, title: '111', content: 's' },
  { id: 6, title: '111', content: 's' },
]
const Tabscontent = ({ index, activeIndex }) => {
  const data = useSelector((state) => state.home[`detaildata${index}`])

  return (
    <TabscontentWrapper>
      <div className="all">
        <Card>
          <Itemin
            sub_title={data[index]?.sub_title}
            content={data[index]?.content}
            main_type={data[index]?.main_type}
            sub_type={data[index]?.sub_type}
            favor={data[index]?.favor}
            src={data[index]?.src}
          />
          <div className="contents" onTouchMove={(e) => e.stopPropagation()}>
            <div className="group">
              {data.slice(3, 5).map((item) => (
                <div key={item.id} className="content">
                  <Itemin
                    sub_title={item.sub_title}
                    content={item.content}
                    main_type={item.main_type}
                    sub_type={item.sub_type}
                    favor={item.favor}
                    src={item.src}
                    index={item.id - 2}
                  />
                </div>
              ))}
            </div>
            <div className="group">
              {data.slice(5, 7).map((item) => (
                <div key={item.id} className="content">
                  <Itemin
                    sub_title={item.sub_title}
                    content={item.content}
                    main_type={item.main_type}
                    sub_type={item.sub_type}
                    favor={item.favor}
                    src={item.src}
                    index={item.id - 2}
                  />
                </div>
              ))}
            </div>
            <div className="group">
              {data.slice(7, 9).map((item) => (
                <div key={item.id} className="content">
                  <Itemin
                    sub_title={item.sub_title}
                    content={item.content}
                    main_type={item.main_type}
                    sub_type={item.sub_type}
                    favor={item.favor}
                    src={item.src}
                    index={item.id - 2}
                  />
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
