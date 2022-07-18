import { useState } from "react";

export default function Events(){
    const [canSee, setCanSee] = useState(false);
    const [text, setText] = useState(" ");


    function checkBoxHandler(){
        //alert("my value was changed")
        setCanSee(!canSee);
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
        console.log(e.currentTarget.value);
        setText(e.currentTarget.value);
    }
    return(
        <>
        <h1>Events Example</h1>
        <input type="checkbox" onChange={checkBoxHandler} />
        <div>
            <button onClick={() => {
                alert('I have been clicked')
            }}>Click Me</button>
        </div>
        <div>
                <input type="text" onKeyUp={(e) => handleKeyUp(e)}/>
            
        </div>
        <div>
            {text}
        </div>
        {canSee ? <div>You can see the secrete </div> :
        <div>You are not allowed to see. Please Login</div>}
        </>
    )
}