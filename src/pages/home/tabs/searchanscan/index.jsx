import { SearchandscansWrapper } from './style'
import { SearchOutline, ScanningOutline } from 'antd-mobile-icons'
import GetScrollY from '../../../../utils/getscrolly'

function SearchAndScan() {
  const scrollY = GetScrollY()
  return (
    <SearchandscansWrapper>
      <div className="searchandscan" style={{ opacity: scrollY > 60 && 1 }}>
        <div className="searchicon" onClick={() => console.log('aaa')}>
          <SearchOutline />
        </div>
        <div className="scan">
          <ScanningOutline />
        </div>
      </div>
    </SearchandscansWrapper>
  )
}
export default SearchAndScan
