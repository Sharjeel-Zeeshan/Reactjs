import { useState } from "react";

function UseStateForm() {
    const [formState, setFormState] = useState({
        name: "",
        number: "",
        email: "",
        password: "",
        search: "",
        date: "",
        file: "",
        submit: "",
        reset: "",
        button: "",
        radio: "",
        chechkbox: "",
        url: ""
    });
const onChangeEvent = (event) => {
    setFormState({
        ...formState,
        [event?.target?.name]: event?.target?.value
    });
    console.log(formState);
};
return (
    <table>
        <tbody>
        <tr>
            <td>Name</td>
            <td>
                <input type="text" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>Number</td>
            <td>
                <input
                    type="number" value=""  onChange={onChangeEvent}    
                ></input>
            </td>
        </tr>
        <tr>
            <td>Email</td>
            <td>
                <input
                    type="Emial" value="" onChange={onChangeEvent}   
                ></input>
            </td>
        </tr>
        <tr>
            <td>Password</td>
            <td>
                <input
                    type="Password" value="" onChange={onChangeEvent}   
                ></input>
            </td>
        </tr>
        <tr>
            <td>Search</td>
            <td>
                <input
                    type="Search" value="" placeholder="Search" onChange={onChangeEvent}
                ></input>
            </td>
        </tr>
        <tr>
            <td>Date</td>
            <td>
                <input type="Date" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>File</td>
            <td>
                <input type="File" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>Submit</td>
            <td>
                <input type="Submit" value="Submit" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>Reset</td>
            <td>
                <input type="reset" value="Reset" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>Radio</td>
            <td>
                <input type="radio" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>Checkbox</td>
            <td>
                <input type="checkbox" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        <tr>
            <td>URl</td>
            <td>
                <input type="url" value="" onChange={onChangeEvent}></input>
            </td>
        </tr>
        </tbody>
    </table>
);
}
export default UseStateForm;