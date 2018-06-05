import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'

const schema = {
    type: "object",
    properties: {
        foo: {
            type: "object",
            properties: {
                bar: { type: "string" }
            }
        },
        baz: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    description: {
                        "type": "string"
                    }
                }
            }
        }
    }
}

const uiSchema = {
    foo: {
        bar: {
            "ui:widget": "textarea"
        },
    },
    baz: {
        // note the "items" for an array
        items: {
            description: {
                "ui:widget": "textarea"
            }
        }
    }
}

class JsonForm2 extends Component {
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
                    onChange={this.formChanged}
                    onSubmit={this.formSubmit}
                    onError={this.formError}
                    onFocus={this.formFocus}
                    onBlur={this.formBlur} />
            </div>
        )
    }
}

export default JsonForm2