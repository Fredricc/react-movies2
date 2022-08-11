import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../Movies/utils/Button";
import * as Yup from 'yup';
import TextField from "../Forms/TextFields";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps){
    return(
        <>
        <Formik initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
           name: Yup.string().required('this field id required').firstLetterUppercase() 
        })}
        >
            {(formikProps) => (
            <Form>
            <TextField field="name" displayName="Name" />
                <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                <Link className="btn btn-secondary" to="/genres">Cancel</Link>
            </Form>
            )}
            
        </Formik>
        </>
    )
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers <genreCreationDTO>): void;

}