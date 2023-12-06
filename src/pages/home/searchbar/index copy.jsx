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
  //动画变量
  const [currentTime, setCurrentTime] = useState(0)
  const translateYRef = useRef(0)
  useEffect(() => {
    let animationFrameId
    let lastTimestamp
    const animate = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp
      }

      const deltaTime = timestamp - lastTimestamp
      setCurrentTime((prevTime) => prevTime + deltaTime)
      lastTimestamp = timestamp

      // 根据时间计算 translateY 的值，形成滚动效果
      translateYRef.current = -(currentTime / 3000) * 100
      if (translateYRef.current < -200) {
        translateYRef.current = 0
        setCurrentTime(0)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate(currentTime)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [currentTime])

  useEffect(() => {
    let i = 0
    const inter = setInterval(() => {
      setInputValue(data[i])
      if (i === data.length - 1) {
        i = 0
      } else {
        i++
      }
    }, 3000)
    return () => clearInterval(inter)
  }, [])

  const [inputValue, setInputValue] = useState('')
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
              transform: `translateY(${translateYRef.current}%)`,
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
