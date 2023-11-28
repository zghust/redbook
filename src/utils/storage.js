const KEY = 'geek_pc_token_87'

export const getTokens = () => JSON.parse(localStorage.getItem(KEY)) || {}

export const setTokens = (tokens) =>
  localStorage.setItem(KEY, JSON.stringify(tokens))

export const removeTokens = () => localStorage.removeItem(KEY)

export const isAuth = () => !!getTokens().token
