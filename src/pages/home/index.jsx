import { useDispatch, useSelector } from 'react-redux'
import { fetchdata, getAdd } from '../../redux/modules/home'
import { useEffect } from 'react'

function Home() {
  const dispath = useDispatch()
  const cout = useSelector((state) => state.home.cout)
  useEffect(() => {
    dispath(fetchdata())
  })
  return (
    <div className="home">
      {cout}
      <button onClick={() => dispath(getAdd(5))}>加五</button>
    </div>
  )
}

export default Home
