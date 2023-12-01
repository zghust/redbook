import React from 'react'
import { Tabs } from 'antd-mobile'

export default () => {
  return (
    <>
      <Tabs>
        <Tabs.Tab title="水果" key="fruits" destroyOnClose={true}>
          菠萝
        </Tabs.Tab>
        <Tabs.Tab title="蔬菜" key="vegetables" destroyOnClose={true}>
          西红柿
        </Tabs.Tab>
        <Tabs.Tab title="动物" key="animals" destroyOnClose={true}>
          蚂蚁
        </Tabs.Tab>
      </Tabs>
    </>
  )
}
