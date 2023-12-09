import { memo } from 'react'
import Tabss from '../../tabs'
import Tabscontent from './tabscontent'
const tabItems = [
  { key: '3', title: '飙升榜' },
  { key: '9', title: '热度榜' },
  { key: 'animals', title: '新书榜' },
]

function TopList() {
  return (
    <div>
      <Tabss tabitems={tabItems} tabscontent={Tabscontent} />
    </div>
  )
}
export default memo(TopList)
