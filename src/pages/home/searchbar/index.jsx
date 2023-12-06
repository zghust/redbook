import { ScanningOutline } from 'antd-mobile-icons'
import { SearchWrapper } from './style'
import { memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDrawerOpen } from '../../../redux/modules/home'

const data = ['随人泉眼王', '落叶丰华', '无路狂飙', '登入殿堂李']
function SearchBars() {
  const dispatch = useDispatch()
  const handleOenDrawer = (e) => {
    dispatch(setDrawerOpen(e))
  }

  const [inputValue, setInputValue] = useState(data[0])
  const handleClick = (e) => {
    console.log(inputValue)
  }
  useEffect(() => {
    let i = 1
    const interval = setInterval(() => {
      setInputValue(data[i])
      if (i === data.length - 1) {
        i = 0
      } else {
        i++
      }
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  return (
    <SearchWrapper>
      <div className="searchbar">
        <div className="searchs">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClick={(e) => handleOenDrawer(e.target.value)}
          />

          <span className="search" onClick={handleClick}>
            搜索
          </span>
        </div>
        <div className="scan">
          <ScanningOutline />
        </div>
      </div>
    </SearchWrapper>
  )
}
export default memo(SearchBars)
