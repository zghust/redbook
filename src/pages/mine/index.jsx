import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchuserdata } from '../../redux/modules/user'
import { hasToken } from '../../utils/storage'
// import Authrouter from '../../router/authrouter'
function Mine({ navigate }) {
  const res = useSelector((state) => state.user.userdata)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchuserdata())
  }, [dispatch])

  return (
    <div className="mine">
      <h1>欢迎来到小蓝书</h1>
      {!hasToken() ? (
        <button onClick={() => navigate('/login')}>立即登陆</button>
      ) : (
        <div>{res?.data?.nickname}</div>
      )}
    </div>
  )
}
export default Mine
