import { useEffect, useState,  } from "react"

export default function UseEffectExample(){
    const [clicks, setClicks] = useState(0);
    useEffect(() => {
        // Execute immediately
        console.log('component loaded');

        return () => {
            //Run before the component is destroyed
            console.log('the component will be destroyed');
        }
    }, []);

    useEffect(() => {
        document.title = `${clicks} times` ;
    }, [clicks])

    return(
        <>
       <h1>Use Effect Examples</h1>
       <div>
        <button onClick={() => setClicks(clicks+1)}>
            You have clicked {clicks} times
        </button>
       </div>
       </> 
    )
    
    
}


