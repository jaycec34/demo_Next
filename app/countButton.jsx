import { useEffect, useState } from "react"

export default function CountButton() {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
      <div>
      <button onClick={handleClick}>+1</button>
      <div>{count}</div>
      </div>
    )
  }