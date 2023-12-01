import Tabss from './tabs/index'
import { ScanningOutline } from 'antd-mobile-icons'
import { SearchBar } from 'antd-mobile'
import { HomeWrapper } from './style'
import { memo } from 'react'

function Home() {
  return (
    <HomeWrapper>
      <div className="home">
        <div className="searchbar">
          <div className="searchs" onClick={() => console.log('aaa')}>
            <SearchBar placeholder="请输入内容" icon={null} />
            <span className="search"> 搜索</span>
          </div>
          <div className="scan">
            <ScanningOutline />
          </div>
        </div>

        <div className="maincontent">
          <Tabss />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
