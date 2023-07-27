"use client"
import cardList from "./dataButton"

const DataButtons = () => {
  return (
    <div className="m-5">
                {cardList.map(card => (
                    <div className="inline-flex items-baseline">
                        <button type="button" className="m-5 h-10  items-center justify-center rounded-md border text-sm transition-all focus:outline-none border-rosa bg-rosa text-black hover:bg-white hover:text-rosa">
                        <input type="checkbox" className="me-2 ms-1"/>
                        {card.label}
                        </button>
                    </div>
                ))}
            </div>
  )
}

export default DataButtons