import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../Forms/TextFields";
import * as Yup from 'yup';
import DateField from "../Forms/DateField";
import ImageField from "../Forms/ImageField";
import MarkdownField from "../Forms/MarkdownFieldProps";
import { actorsCreationDTO } from "./actors.models";

export default function ActorForm(props: actorFormProps) {
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstLetterUppercase(),
            dateOfBirth: Yup.date().nullable().required('This field is required')
        })}
        >
        {(formikProps) => (
            <Form>
                <TextField displayName="Name" field="name" />
                <DateField displayName="Date of Birth" field="dateOfBirth" />
                <ImageField displayName="Picture" field="picture" imageURL={props.model.pictureURL} />
                <MarkdownField displayName="Biography" field="biography"/>

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