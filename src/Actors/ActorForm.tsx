import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../Forms/TextFields";
import Button from "../Movies/utils/Button";
import { actorsCreationDTO } from "./Actors.models";
import * as Yup from 'yup';

export default function ActorForm(props: actorFormProps) {
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstLetterUppercase()
        })}
        >
        {(formikProps) => (
            <Form>
                <TextField displayName="Name" field="name" />

                <Button disabled={formikProps.isSubmitting} 
                type="submit"
                >Save Changes</Button>
            </Form>
        )}    
        </Formik>

    )
}

interface actorFormProps{
    model: actorsCreationDTO;
    onSubmit(values: actorsCreationDTO, action: FormikHelpers<actorsCreationDTO>): void;
}