import Tabss from './tabs/index'
import { SearchOutline } from 'antd-mobile-icons'
import { HomeWrapper } from './style'
function Home() {
  return (
    <HomeWrapper>
      <div className="home">
        <Tabss></Tabss>
        <span className="searchicon" onClick={() => console.log('aaa')}>
          <SearchOutline />
        </span>
      </div>
    </HomeWrapper>
  )
}

export default Home
