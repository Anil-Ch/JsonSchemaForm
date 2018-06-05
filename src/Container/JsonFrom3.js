import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'

const schema = {
    title: 'Registration Form',
    description: 'A Simple Registration Form',
    type: 'object',
    properties: {
        'First Name': { title: 'First Name', type: 'string' },
        'Last Name': { title: 'Last Name', type: 'string' },
        'Employee No': { title: 'Emp Number', type: 'number' },
        'Email': { title: 'Email', type: 'string' },
        'File': { title: 'File', type: 'string', "description": "( Upload your CV/Resume )" },
        'DOB': { title: 'DOB', type: 'string' },
        'Telephone': { title: 'Telephone', type: 'string', "minLength": 10 },
        'Address': { title: 'Address', type: 'string' },
        'Color': { title: 'Color', type: 'string' },
        'Password': { title: 'Password', type: 'string' },
        'Done': { title: 'Done', type: 'boolean', default: false }
    }
};

const uiSchema = {
    'First Name': { "ui:widget": 'text', "ui:autofocus": true },
    'Last Name': { "ui:widget": 'text' },
    'Employee No': { "ui:options": { 'inputType': 'number' } },
    'Email': { "ui:options": { 'inputType': 'email' } },
    'File': { "ui:widget": 'file' },
    'DOB': { "ui:widget": 'date' },
    'Telephone': { "ui:options": { "inputType": 'tel' } },
    'Address': { "ui:widget": 'textarea', "ui:help": "Hint: Office Address!" },
    'Color': { "ui:widget": 'color' },
    'Password': { "ui:widget": 'password' },
    'Gender': { "ui:widget": 'checkbox' }
}

const formData = {

};

class JsonForm3 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.formSubmit = this.formSubmit.bind(this)
        this.formError = this.formError.bind(this)
        this.formBlur = this.formBlur.bind(this)
        this.formFocus = this.formFocus.bind(this)
        this.formChanged = this.formChanged.bind(this)

    }

    formSubmit({ formData }) {
        console.log("Form-Data Submitted : ", formData)
    }

    formChanged({ formData }) {
        console.log("Form-Data Changed : ", formData)
    }

    formBlur(id) {
        console.log("Form-Field  Blur ", id)
    }

    formFocus(id) {
        console.log("Form-Field Focus ", id)
    }

    formError(errors) {
        console.log("I have", errors.length, "errors to fix")
    }

    render() {
        return (
            <div className='container'>
                <h2>JSON-from</h2>

                <JsonSchemaForm schema={schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onChange={this.formChanged}
                    onSubmit={this.formSubmit}
                    onError={this.formError}
                    onFocus={this.formFocus}
                    onBlur={this.formBlur} />
            </div>
        )
    }
}

export default JsonForm3