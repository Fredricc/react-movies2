import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import './MarkdownField.css';

export default function MarkdownField(props: markdownFieldProps) {
    const {values} = useFormikContext<any>();
    return(
        
        <div className="mb-3 form-markdown">
            <div>
                <label>{props.field}</label>
                <div>
                    <Field name={props.field} as="textarea" className="form-textarea" />
                </div>
            </div>
            <div>
                <label>{props.displayName} (preview):</label>
                    <ReactMarkdown>{values[props.field]}</ReactMarkdown>
            </div>

        </div>
    )
}

interface markdownFieldProps{
    displayName: string;
    field: string;
}