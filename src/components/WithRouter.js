import {useState} from 'react'

const WithRouter = (OldComponent, incrementPlus=1) => {
  return function EnahncedComponent(props) {
    const [count, setCount]= useState(0)
    return (
        <OldComponent {...props} count={count} incrementBy={()=>setCount(count+incrementPlus)}/>
    )
  }
  
}

export default WithRouter