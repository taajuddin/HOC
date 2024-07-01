import WithRouter from "./WithRouter"

const ClickCounter = ({count, incrementBy}) => {
  return (
    <div>
        <button onClick={incrementBy}>Clicke Me</button>
        <h2> counter is :{count}</h2>
    </div>
  )
}

export default WithRouter(ClickCounter, 10)