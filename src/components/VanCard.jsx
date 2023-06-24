import React from "react"
import "../styles/van-card.css"

const VanCard = ({ imageUrl, name, price, type, id }) => {
  let typeColor = ""
  if (type === "luxury") {
    typeColor = "#161616"
  } else if (type === "rugged") {
    typeColor = "#115E59"
  } else if (type === "simple") {
    typeColor = "#E17654"
  }

  console.log(type, typeColor)

  return (
    <>
      <div className="van-card-container">
        <img className="van-poster" src={imageUrl} alt={`${name}-${id}`} />
        <h3 className="van-info">
          <span className="van-name">{name}</span>
          <span className="van-price">{price}</span>
          <span className="lower-font">/day</span>
        </h3>
        <div className="van-type" style={{ backgroundColor: typeColor }}>
          {type}
        </div>
      </div>
    </>
  )
}

export default VanCard