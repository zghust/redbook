import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuserdata } from '../../redux/modules/user'
import { hasToken } from '../../utils/storage'
function Favor({ navigate }) {
  return (
    <div className="favor">
      {!hasToken() ? (
        <button onClick={() => navigate('/login')}>立即登陆</button>
      ) : (
        <div>favor</div>
      )}
    </div>
  )
}
export default Favor
