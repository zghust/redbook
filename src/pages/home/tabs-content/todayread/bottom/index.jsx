import { useState } from 'react'
import BottomWrapper from './style'
import { Image, Space, Divider } from 'antd-mobile'

function Bottom({ res }) {
  const onscroll = (e) => {
    e.stopPropagation()
  }
  const [random, setrandom] = useState(Math.floor(Math.random() * 5))
  const res1 = res.slice(random, random + 4)

  return (
    <BottomWrapper>
      <div className="bottom" onTouchMove={onscroll}>
        {res1.map((item) => (
          <div key={item.id} className="bottomItem">
            <Space direction="vertical">
              <div className="contenttop">
                <Image
                  src={item.src}
                  fit="fill"
                  width={100}
                  height={68}
                  style={{ borderRadius: 4 }}
                />
                <div className="titleinner">《{item.sub_title}》</div>
              </div>
              <div>
                {item.sub_type}·{item.main_type}
              </div>
            </Space>
          </div>
        ))}
      </div>
    </BottomWrapper>
  )
}
export default Bottom
