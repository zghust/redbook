import Tabss from './tabs/index'
import { HomeWrapper } from './style'
import { memo } from 'react'
import SearchBars from './searchbar'

function Home() {
  return (
    <HomeWrapper>
      <div className="home">
        <SearchBars />
        <div className="maincontent">
          <Tabss />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
