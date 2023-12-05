import BottomWrapper from './style'
import { Image, Space, Divider } from 'antd-mobile'
const data = [
  {
    title: '安然',
    src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
    maintitle: '精选书单推荐',
  },
  {
    title: '情深山高',
    src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
    maintitle: '现实口碑好文',
  },
  {
    title: '万年王八往北走',
    src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
    maintitle: '精选书单推荐',
  },
  {
    title: '不怕不怕辣',
    src: 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60',
    maintitle: '科技军事要闻',
  },
]

function Bottom() {
  const onscroll = (e) => {
    e.stopPropagation()
  }
  return (
    <BottomWrapper>
      <div className="bottom" onTouchMove={onscroll}>
        {data.map((item) => (
          <div key={item.title} className="bottomItem">
            <Space direction="vertical">
              <div className="contenttop">
                <Image
                  src={item.src}
                  fit="fill"
                  width={100}
                  height={68}
                  style={{ borderRadius: 4 }}
                />
                <div className="titleinner">{item.title}</div>
              </div>
              <div>{item.maintitle}</div>
            </Space>
          </div>
        ))}
      </div>
    </BottomWrapper>
  )
}
export default Bottom
