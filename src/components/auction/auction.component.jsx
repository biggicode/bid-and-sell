import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Auction = () => {
  const { id } = useParams()

  useEffect(() => {}, [])

  return <div>this is action {id}</div>
}

export default Auction
