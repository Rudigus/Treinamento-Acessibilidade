import { useEffect, useState } from 'react'

function calcularSeEhMobile(breakpoint) {
  if (typeof window === 'undefined') {
    return false
  }

  return window.innerWidth <= breakpoint
}

export default function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(() => calcularSeEhMobile(breakpoint))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const atualizarEstado = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    atualizarEstado()
    window.addEventListener('resize', atualizarEstado)

    return () => {
      window.removeEventListener('resize', atualizarEstado)
    }
  }, [breakpoint])

  return isMobile
}
