import { useEffect, useState } from 'react'

function GetScrollY() {
  const [scrollY, setScrollY] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const newY = document.documentElement.scrollTop
      setScrollY(newY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}
export default GetScrollY
