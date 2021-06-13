import {useFormik} from "formik";
import * as yup from 'yup';
import {Button, MenuItem, Select, TextField} from "@material-ui/core";
import createComponentFormTypes from "../../constants/FormConstants";

const validationSchema = yup.object({
    type: yup
        .string('Type of the Item')
        .required('Type is required'),
    // password: yup
    //     .string('Enter your password')
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .required('Password is required'),
});

const CreateComponentForm = () => {


    const formik = useFormik({
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Select fullWidth id="type" name="type" label="Type" value={""}
                        error={formik.touched.type && Boolean(formik.errors.type)}
                >
                    {createComponentFormTypes.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreateComponentForm;