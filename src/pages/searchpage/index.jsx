import { SearchWraper } from './style'
import { Button } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { useEffect, useRef, useState } from 'react'
function Search({ isOpen, onClose }) {
  const ref = useRef()

  useEffect(() => {
    if (isOpen) {
      ref.current.focus()
    }
  }, [isOpen])

  const [inputValue, setInputValue] = useState('')
  const handleClick = (e) => {
    setInputValue('')
    console.log(inputValue)
  }
  return (
    <SearchWraper>
      <div className="search">
        <div className="searchBar">
          <LeftOutline onClick={() => onClose()} />
          <input
            type="text"
            ref={ref}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button fill="none" onClick={handleClick}>
            搜索
          </Button>
        </div>
      </div>
    </SearchWraper>
  )
}
export default Search
