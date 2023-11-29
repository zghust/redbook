import { useEffect } from 'react'
import Tabss from '../../components/tabs'
import { fetchdata } from '../../redux/modules/home'
import { useDispatch } from 'react-redux'
function Home() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchdata())
  // }, [dispatch])
  return (
    <div className="home">
      <Tabss></Tabss>
    </div>
  )
}

export default Home
