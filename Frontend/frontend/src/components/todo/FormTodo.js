import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class TodoForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }


    renderDatePicker = ({input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
        <div className={className}>
            <DatePicker {...input}
                        dateForm="MM/DD/YYYY"
                        selected={input.value ? input.value : null}
                        autoComplete="off"
                        minDate={new Date()}/>
            {this.renderError(meta)}
        </div>
        );
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);

    };

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <label style={{'fontWeight':'bold'}}> Enter Deadline </label>
                <Field
                    name="deadline"
                    component={this.renderDatePicker}
                    label = "Pick Deadline"
                />
                <button className="ui button primary" style={{margin:'20px 0 0 0'}} >Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.deadline) {
        errors.deadline = "You must choose a deadline";
    }

    if (formValues.deadline) {
        const today = new Date();
        const chosen = formValues.deadline;
        if (moment(chosen).isBefore(today)) {
            errors.deadline = "You must choose a valid deadline";
        }
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

export default reduxForm({
    form: 'todoForm',
    validate
})(TodoForm);