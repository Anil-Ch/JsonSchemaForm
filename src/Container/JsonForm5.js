import React, { Component } from 'react'
import JsonSchemaForm from 'react-jsonschema-form'
import SplitterLayout from 'react-splitter-layout'


const schema = {
    'title': ' New Record ',
    'description': 'A Simple Record Registration Form',
    'type': 'object',
    'required': ['RecordName', 'ProductName', 'Client'],
    'properties': {
        'ProductId': {
            title: 'Product Name',
            type: 'string',
            enum: []
        },
        'RecordName': {
            title: 'Record Name',
            type: 'string'
        },
        'Client': {
            title: 'Client',
            type: 'string',
            enum: []
        },
        'QuoteId': {
            title: 'Quote Id',
            type: 'string'
        }
    }
}

const uiSchema = {
    'ProductId': { "ui:placeholder": "Select Product " },
    'RecordName': { "ui:widget": 'text', "ui:placeholder": "Record Name" },
    'Client': { "ui:placeholder": "Select Client" }
}


class JsonForm5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Error: false,
            Record: {
                ProductId: '',
                RecordName: '',
                CreatedBy: '',
                CreatedAt: '',
                UpdatedBy: '',
                UpdatedAt: '',
                Version: '1'
            }
        }

        this.formSubmit = this.formSubmit.bind(this)
        this.formError = this.formError.bind(this)
        this.formBlur = this.formBlur.bind(this)
        this.formFocus = this.formFocus.bind(this)
        this.formChanged = this.formChanged.bind(this)

    }

    formSubmit({ formData }) {
        console.log('Form-Data Submitted : ', formData)
        let newProduct = {}
        debugger
        newProduct.ProductId = formData.ProductId === undefined ? "" : formData.ProductId
        newProduct.RecordName = formData.RecordName === undefined ? "" : formData.RecordName
        newProduct.Client = formData.Client === undefined ? "" : formData.Client
        newProduct.Version = this.state.Record.Version
        newProduct.CreatedBy = ''
        newProduct.UpdatedBy = ''
        newProduct.CreatedAt = new Date().toLocaleString()
        newProduct.UpdatedAt = new Date().toLocaleString()
        this.setState({ Record: newProduct })

    }

    formChanged({ formData }) {
        console.log('Form-Data Changed : ', formData)
        let newProduct = {}
        debugger
        newProduct.ProductId = formData.ProductId === undefined ? "" : formData.ProductId
        newProduct.RecordName = formData.RecordName === undefined ? "" : formData.RecordName
        newProduct.Client = formData.Client === undefined ? "" : formData.Client
        this.setState({ Record: newProduct })
    }

    formBlur(id) {
        console.log('Form-Field  Blur ', id)
    }

    formFocus(id) {
        console.log('Form-Field Focus ', id)
    }

    formError(errors) {
        console.log('I have', errors.length, 'errors to fix')
    }

    render() {
        return (
            <div>
                <SplitterLayout primaryIndex={0} primaryMinSize={600} secondaryMinSize={600}>
                    <div className='container'>
                        <h2> <u>
                            {this.state.Error && "Error in some fields."}
                        </u>
                        </h2>
                        <JsonSchemaForm
                            schema={schema}
                            uiSchema={uiSchema}
                            formData={this.state.Record}
                            onChange={this.formChanged}
                            onSubmit={this.formSubmit}
                            onError={this.formError}
                            onFocus={this.formFocus}
                            onBlur={this.formBlur}
                        />
                    </div>
                    <div className='container-fluid'>
                        <Output {...this.state} />
                    </div>
                </SplitterLayout>

            </div>
        )
    }
}


const Output = (props) => {
    debugger
    return (
        <div style={{ backgroundColor: 'aqua', border: '1px solid black', marginTop: '5%', textAlign: 'left' }}>
            <h2><u> OUTPUT </u> </h2>
            ProductId  : {props.Record.ProductId} <br />
            RecordName  : {props.Record.RecordName} <br />
            CreatedBy  : {props.Record.CreatedBy} <br />
            Version  : {props.Record.Version} <br />
            CreatedAt  : {(props.Record.CreatedAt) && new Date(props.Record.CreatedAt).toLocaleString()} <br />
        </div >
    )
}

export default JsonForm5