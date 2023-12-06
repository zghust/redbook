import { ScanningOutline } from 'antd-mobile-icons'
import { SearchBar } from 'antd-mobile'
import { SearchWrapper } from './style'
import { memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDrawerOpen } from '../../../redux/modules/home'
const data = ['随人泉眼王', '落叶丰华', '无路狂飙', '登入殿堂李']
function SearchBars() {
  const dispatch = useDispatch()
  const handleOenDrawer = () => {
    dispatch(setDrawerOpen())
  }

  const [inputValue, setInputValue] = useState('123')
  const handleClick = (e) => {
    console.log(inputValue)
  }
  return (
    <SearchWrapper>
      <div className="searchbar">
        <div className="searchs">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClick={handleOenDrawer}
          />
          <span
            className="inputvalueclick"
            onClick={handleClick}
            style={{
              position: 'fixed',
              top: 29,
              left: 33,
              width: 80,
              height: 12,
              backgroundColor: 'white',
              fontSize: 12,
              transform: '',
              transition: 'transform 0.1s ease-out',
            }}
          >
            {inputValue}
          </span>
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
