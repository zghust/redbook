import { memo, useEffect, useState } from 'react'
import { TabsWrapper } from './style'
import { Ellipsis } from 'antd-mobile'

function TabsContent({ res }) {
  return (
    <TabsWrapper>
      <div className="tabscontent">
        {res?.map((item) => {
          return (
            <div key={item.data.houseId}>
              <div className="itemcontent">
                <img src={item.data.image.url} alt=""></img>
                <div
                  className={item.discoveryContentType === 9 ? 'highimg' : ''}
                >
                  <div> {item.data.summaryText}</div>
                  <Ellipsis
                    direction="end"
                    content={item.data.houseName}
                    rows={2}
                    expandText="展开"
                    collapseText="收起"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </TabsWrapper>
  )
}

export default memo(TabsContent)
