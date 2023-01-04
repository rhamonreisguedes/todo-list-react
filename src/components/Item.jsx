import './Item.css'

const Item = ({ text, id }) => {
  return (
    <div id={id} className='item'>{text}</div>
  )
}

export default Item