import Tabss from './tabs/index'
import { HomeWrapper } from './style'
import { memo } from 'react'
import SearchBars from './searchbar'
import TabsContent from './tabs-content'
import SearchAndScan from './tabs/searchanscan'
const tabItems = [
  { key: '3', title: '男频' },
  { key: '9', title: '女频' },
  { key: 'animals', title: '出版' },
]

function Home() {
  return (
    <HomeWrapper>
      <div className="home">
        <div className="searchbar">
          <SearchBars />
        </div>
        <div className="maincontent">
          <Tabss
            tabitems={tabItems}
            tabscontent={TabsContent}
            searchandscan={SearchAndScan}
          />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
