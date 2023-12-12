import { Card, Space, Image, Ellipsis } from 'antd-mobile'
import { memo } from 'react'
import ItemsSwapper from './style'

function Itemin({
  index = 1,
  sub_title,
  content,
  main_type,
  sub_type,
  favor,
  recommend,
  src,
}) {
  return (
    <ItemsSwapper>
      <div className="item">
        <Card>
          <div className="title">
            {index}
            <span>{sub_title}</span>
          </div>
          <div className="centercontent">
            <Image
              src={src}
              className="centerleft"
              fit="cover"
              width={100}
              height={68}
            />
            <div className="centerright">
              <div>
                <Ellipsis direction="end" rows={2} content={content} />
              </div>
              <div className="bottom">
                <span>{main_type}</span>·<span>{sub_type}</span>·
                <span>{favor}热度</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </ItemsSwapper>
  )
}
export default memo(Itemin)
