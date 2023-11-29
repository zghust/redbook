import { Tabs } from 'antd-mobile'
import { TabsWrapper } from './style'
import TabsContent from '../../pages/home/tabs-content'

function Tabss() {
  return (
    <TabsWrapper>
      <div className="tabss">
        <Tabs>
          <Tabs.Tab title="水果" key="fruits">
            <div className="content">
              <TabsContent />
            </div>
          </Tabs.Tab>
          <Tabs.Tab title="蔬菜" key="vegetables">
            西红柿
          </Tabs.Tab>
          <Tabs.Tab title="动物" key="animals">
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </div>
    </TabsWrapper>
  )
}
export default Tabss
