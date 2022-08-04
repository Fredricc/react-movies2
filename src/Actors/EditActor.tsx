import ActorForm from "./ActorForm";

export default function EditActor(){
    return(
        <>
        <h3>Edit Actors</h3>
        <ActorForm model={{name: 'Tom Holland', 
        dateOfBirth: new Date('1996-06-01T00:00:00'),
        pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_2014_%28cropped%29.jpg'
    }}
         onSubmit={values => console.log(values)}
            />
        </>
    )
}



