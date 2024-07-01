import WithRouter from './WithRouter'

const HoverCounter = ({count, incrementBy}) => {
  return (
    <div>
        <button onMouseOver={incrementBy}>Hover me</button>
        <h2>count is : {count}</h2>
    </div>
  )
}

export default WithRouter(HoverCounter, 5)