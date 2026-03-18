import './button.css'
import './buttonDark.css'

function BrButton({ className = '', type = 'button', children, ...props }) {
  const classes = ['br-button', className].filter(Boolean).join(' ')

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default BrButton
