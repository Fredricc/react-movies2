import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from 'yup';
import Button from "./utils/Button";
import { Link } from "react-router-dom";
import TextField from "../Forms/TextFields";
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import CheckboxField from "../Forms/CheckboxField";
import MultipleSector, { multipleSelectorModel } from "../Forms/MuiltipleSelector";
import { useState } from "react";
import { genreDTO } from "../Genres/genres.model";
import { movieTheaterDTO } from "../moviesTheaters/movieTheater.model";

export default function MovieForm(props: movieFormProps){

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = 
        useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = 
        useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = 
        useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items: {id: number, name: string}[]): multipleSelectorModel[] {
        return items.map(item=> {
            return{key: item.id, value: item.name}
        })
    }

    return(
        <Formik
            initialValues={props.model}
            onSubmit={(values, actions) => {
            values.genresIds = selectedGenres.map(item => item.key);
            values.movieTheatersIds = selectedMovieTheaters.map(item => item.key);
            props.onSubmit(values, actions)
        }}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
            <Form>
                <TextField displayName="Title" field="title" />
                <CheckboxField displayName="In Theaters" field="inTheaters" />
                <TextField displayName="Trailer" field="trailer" />
                <DateField displayName="Release Date" field="releaseDate" />
                <ImageField displayName="Poster" field="poster" 
                    imageURL={props.model.posterURL}
                />

                <MultipleSector 
                    displayName="Genres"
                    nonSelected={nonSelectedGenres}
                    selected={selectedGenres}
                    onChange={(selected, nonSelected) => {
                        setSelectedGenres(selected);
                        setNonSelectedGenres(nonSelected);
                    }}
                />

                <MultipleSector 
                    displayName="Movie Theaters"
                    nonSelected={nonSelectedMovieTheaters}
                    selected={selectedMovieTheaters}
                    onChange={(selected, nonSelected) => {
                        setSelectedMovieTheaters(selected);
                        setNonSelectedMovieTheaters(nonSelected);
                    }}
                />

                <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                <Link className="btn btn-secondary" to="/genres">Cancel</Link>
            </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];

}