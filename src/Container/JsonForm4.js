import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'

const schema = {
    title: 'Registration Form',
    description: 'A Simple Registration Form',
    type: 'object',
    properties: {
        "Number": {
            type: "number",
            enum: [1, 2, 3],
            enumNames: ["one", "two", "three"]
        },
        'Files': {
            title: 'Upload Files', type: 'array', items: {
                type: "string",
                format: "data-url",
            }
        },
        'Hobbies': {
            type: "array",
            title: "Select Hobbies",
            minItems: 2,
            items: {
                type: "string",
                enum: ["Cricket", "Hockey", "Badminton", "Baseball"],
            },
            uniqueItems: true
        }
    }
};

const uiSchema = {
    "ui:rootFieldId": "myform",
    'Number': {
        "ui:placeholder": "Select ..."
    },
    'Files': {
        'items': {
            'ui:widget': 'file'
        }
    },
    "Hobbies": {
        "ui:widget": 'checkboxes', "ui:options": {
            inline: true
        }
    }
}

const formData = {

};

class JsonForm4 extends Component {
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

                <JsonSchemaForm 
                    autocomplete="off"
                    enctype="multipart/form-data"
                    acceptcharset="ISO-8859-1"
                    schema={schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onChange={this.formChanged}
                    onSubmit={this.formSubmit}
                    onError={this.formError}
                    onFocus={this.formFocus}
                    onBlur={this.formBlur} 
                    />
            </div>
        )
    }
}

export default JsonForm4