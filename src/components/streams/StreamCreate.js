import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


/**
 * Component to create new stream.
 */
class StreamCreate extends React.Component {
    renderError = ({error, touched}) => {
        if(!touched || !error) return null;
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                className="ui form error"
                onSubmit={handleSubmit(this.onSubmit)}
            >
                <Field 
                    name="title"
                    label="Enter Title"
                    component={this.renderInput}
                />
                <Field
                    name="description"
                    label="Enter Description"
                    component={this.renderInput}
                />
                <button className="ui button primary">
                    Submit
                </button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "You must enter a title";
    }
    if(!formValues.description) {
        errors.description = "You must enter a description";
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate', // Id of our form component
    validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);