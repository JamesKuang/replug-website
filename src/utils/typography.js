import Typography from "typography"
import sutroTheme from "typography-theme-sutro"
sutroTheme.overrideStyles = () => ({
  'a': {
    color: '#44a2e6',
    textDecoration: 'none',
  },
  'a:hover': {
    color: '#666',
  }
})

const typography = new Typography(sutroTheme)

export const { scale, rhythm, options } = typography
export default typography
