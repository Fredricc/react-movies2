import { useState } from "react";
import Events from "./Events";
import ProjectContent from "./ProjectContent";
import SelectNumber from "./SelectNumber";

export default function ConditionalsIfSeveralComponents(){
    const [selectedRate, setSelectedRate] = useState(1);
    const fiveStarRate = "https://d3f1hgx3lfk57q.cloudfront.net/wp-content/uploads/2017/12/five-stars-crop.jpg";
    const fourStarRate = "https://previews.123rf.com/images/gioiak2/gioiak21908/gioiak2190800645/130112071-gold-stars-four-4-golden-stars-isolated-against-white-background-christmas-hotel-ranking-concept-3d-.jpg";
    
    function displayResult(){
        if (selectedRate === 1){
            return <span>Noooo!</span>
        } else if (selectedRate ===2){
            return(
            <>
            <div>"What can we do to make it better"</div>
            <input type = "text" />
            </>);
        } else if (selectedRate === 3){
            return (<>
            <div>Thank you for your opinion</div>
            <Events />
            </>);
        } else if (selectedRate === 4){
            return(<>
            <div>Thank you for the **** rating</div>
            <div>
            <img src={fourStarRate} alt= "4 stars"/>
            </div>
            </>);
        } else if (selectedRate === 5){
            return(<> 
            <div>Awesooooome, Thank you for the 5 stars rating!</div>
            <div>
            <img src={fiveStarRate} alt= "5 stars"/>
            </div>
            </>);
        } else {
            return(<>
            <span>Thanks!</span>
            </>);
        }
    }

    return(
        <>
        <h1>Conditionals if example</h1>
        <div>
            Rate this Website
        </div>
        <div>
            <SelectNumber 
            selectContent={(value) => `Select ${value}`}
            onSelected={setSelectedRate} />
        {/* </div>
        <div>{displayResult()}</div>
        <div> */}
            <ProjectContent bottomPart={<><span>This is the end</span></>}>
                <>
                <button onClick={() => console.log('I was clicked')}>This is a button as a parameter</button>
                </>
            </ProjectContent>
        </div>
        

        </>
    )
}