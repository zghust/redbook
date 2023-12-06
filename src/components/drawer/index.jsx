const Drawer = ({ isOpen, children }) => {
  const style = {
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.1s ease-out',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#ccc',
    zIndex: 1000,
  }

  return <div style={style}>{children}</div>
}
export default Drawer
