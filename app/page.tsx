"use client"
import CountButton from "./CountButton/countButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
    return <div>
    <CountButton name={"+1"} mult={1} color={"green"}/><CountButton name="+2" mult={2} color={"yellow"}/>
    <hr />
    <a href="https://github.com/jaycec34/demo_Next">My Github Repo</a>
    <hr />
    <SearchBar />
    </div>
  }