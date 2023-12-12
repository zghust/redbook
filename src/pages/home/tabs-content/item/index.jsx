import { Card, Space, Image, Ellipsis } from 'antd-mobile'
import { CheckCircleFill, HeartOutline } from 'antd-mobile-icons'
import { memo } from 'react'
import ItemSwapper from './style'

function Item({ src, asktitle, subtitle, favor, maintype, subtype, content }) {
  return (
    <ItemSwapper>
      <div className="item">
        <Card>
          <div>
            <Space>
              <CheckCircleFill />
              <div className="title">{asktitle}</div>
            </Space>
          </div>
          <div className="centercontent">
            <div className="centerleft">
              <div className="subtitle">《{subtitle}》</div>
              <div>
                <Ellipsis direction="end" rows={2} content={content} />
              </div>
            </div>
            <Image
              src={src}
              className="centerright"
              fit="cover"
              width={100}
              height={68}
            />
          </div>
          <div className="bottom">
            <div className="tag">
              {maintype}·{subtype}
            </div>
            <div className="favor">
              <HeartOutline />
              <span>{favor}</span>
            </div>
          </div>
        </Card>
      </div>
    </ItemSwapper>
  )
}
export default memo(Item)
