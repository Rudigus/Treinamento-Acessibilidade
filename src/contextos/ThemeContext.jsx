import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CHAVE_STORAGE_TEMA = 'tema-aplicacao'
const ThemeContext = createContext(null)

function obterTemaInicial() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const temaSalvo = window.localStorage.getItem(CHAVE_STORAGE_TEMA)

  if (temaSalvo === 'dark' || temaSalvo === 'light') {
    return temaSalvo
  }

  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(obterTemaInicial)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    document.body.setAttribute('data-theme', theme)
    window.localStorage.setItem(CHAVE_STORAGE_TEMA, theme)
  }, [theme])

  const value = useMemo(() => {
    return {
      theme,
      setTheme: (proximoTema) => {
        if (proximoTema === 'light' || proximoTema === 'dark') {
          setThemeState(proximoTema)
        }
      },
      toggleTheme: () => {
        setThemeState((temaAtual) => (temaAtual === 'light' ? 'dark' : 'light'))
      },
    }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const contexto = useContext(ThemeContext)

  if (!contexto) {
    throw new Error('useTheme deve ser utilizado dentro de ThemeProvider')
  }

  return contexto
}
