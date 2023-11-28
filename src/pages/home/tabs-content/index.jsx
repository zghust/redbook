import { useSelector } from 'react-redux'
import { TabsWrapper } from './style'
function TabsContent() {
  const res = useSelector((state) => state.home.detaildata.data)
  return (
    <TabsWrapper>
      <div className="tabscontent">
        {res?.map((item) => {
          return (
            <div key={item.data.houseName}>
              {item.data.houseName}
              <img src={item.data.image.url} alt=""></img>
            </div>
          )
        })}
      </div>
    </TabsWrapper>
  )
}

export default TabsContent
