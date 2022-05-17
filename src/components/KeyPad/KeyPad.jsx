import "./KeyPad.css"

export default function KeyPad() {
    function handleClick(val) {
        console.log(val);
    }

    return (
        <div className="keypad-container">
            {/* <div className="keypad-row"> */}
                <div className="keypad-key" onClick={() => handleClick(1)} >1</div>
                <div className="keypad-key" onClick={() => handleClick(2)} >2</div>
                <div className="keypad-key" onClick={() => handleClick(3)} >3</div>
            {/* </div> */}
            {/* <div className="keypad-row"> */}
                <div className="keypad-key" onClick={() => handleClick(4)} >4</div>
                <div className="keypad-key" onClick={() => handleClick(5)} >5</div>
                <div className="keypad-key" onClick={() => handleClick(6)} >6</div>
            {/* </div> */}
            {/* <div className="keypad-row"> */}
                <div className="keypad-key" onClick={() => handleClick(7)} >7</div>
                <div className="keypad-key" onClick={() => handleClick(8)} >8</div>
                <div className="keypad-key" onClick={() => handleClick(9)} >9</div>
            {/* </div> */}
            {/* <div className="keypad-row"> */}
                <div className="keypad-key">{'<-'}</div>
                <div className="keypad-key" onClick={() => handleClick(0)} >0</div>
                <div className="keypad-key">Enter</div>
            {/* </div> */}
        </div>
    )
}