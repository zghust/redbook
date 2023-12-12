import Tabss from './tabs/index'
import { HomeWrapper } from './style'
import { memo, useEffect, useRef, useState } from 'react'
import SearchBars from './searchbar'
import TabsContent from './tabs-content'
import SearchAndScan from './tabs/searchanscan'
const tabItems = [
  { key: '3', title: '男频' },
  { key: '9', title: '女频' },
  { key: 'animals', title: '出版' },
]

function Home() {
  const ref = useRef()
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    const scrollTopValue = ref.current.scrollTop
    setScrollY(scrollTopValue)
  }
  useEffect(() => {
    ref.current.addEventListener('scroll', handleScroll)
    return () => {
      ref.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HomeWrapper>
      <div className="home" ref={ref}>
        <div className="searchbar">
          <SearchBars />
        </div>
        <div className="maincontent">
          <Tabss
            tabitems={tabItems}
            tabscontent={TabsContent}
            searchandscan={SearchAndScan}
            scrollY={scrollY}
          />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
