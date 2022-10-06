import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "../actors/actors.model";


export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Fred",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/330px-Dwayne_Johnson_2014_%28cropped%29.jpg",
    },
    {
      id: 2,
      name: "Felipe",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felipe_Anderson_2021.jpg/300px-Felipe_Anderson_2021.jpg",
    },
    {
      id: 3,
      name: "Hellen",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/210120-D-WD757-1975_%2850860511978%29_%28cropped%29.jpg/330px-210120-D-WD757-1975_%2850860511978%29_%28cropped%29.jpg",
    },
    {
      id: 4,
      name: "Alice",
      character: "",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Amber_Rose_2018_by_Glenn_Francis.jpg/330px-Amber_Rose_2018_by_Glenn_Francis.jpg",
    }]

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO){
        setDraggedElement(actor);
    }

    function handleDragOver(actor: actorMovieDTO){
        if (!draggedElement){
            return;
        }

        if (actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actors => {
                    
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1){
                        props.onAdd([...props.actors, actors[0]]);
                    }

                    console.log(actors);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="actor" src={actor.picture} 
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actors.map(actor => <li 
                key={actor.id}
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                    className="list-group-item list-group-item-action"
                >
                    {props.listUI(actor)} 
                    <span className="badge badge-primary badge-pill pointer text-dark"
                    style={{marginLeft: '0.5rem'}}
                    onClick={() => props.onRemove(actor)}
                    >X</span>
                    </li>)}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}