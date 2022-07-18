export default function MapExample(){
    const arr = Array(100).fill(0);
    return(
        <>
        <h1>Conditionals if example</h1>
        <div>
            Rate this Website
        </div>
        <select onChange={(e) => {
            console.log(e.currentTarget.value)
            
        }}>
            {arr.map((number, index) => <option key={index+1} value={index+1}>{index+1}</option>)}
        </select>
        
</>
    )
}