import { useEffect, useRef, useState } from 'react'

const useOffsetTop = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null)

  const [offsetTop, setOffsetTop] = useState<number>(0)

  const getPosition = () => {
    const y = ref.current?.offsetTop
    if (y) setOffsetTop(y)
  }

  useEffect(() => {
    getPosition()
  }, [])

  return { ref, offsetTop }
}

export default useOffsetTop
