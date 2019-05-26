import React from "react";
import {connect} from 'react-redux';
import {editTodo, fetchTodo} from '../../actions';
import TodoForm from "./FormTodo";
import _ from "lodash";

class EditTodo extends React.Component {

    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editTodo(this.props.match.params.id, formValues);
    };
    render() {
        if (!this.props.todo) {
            return (
                <div>Loading</div>
            );
        }
        return (
            <div>
                <h3> Edit Todo</h3>
                <TodoForm onSubmit={this.onSubmit}
                          initialValues={_.pick(this.props.todo, "title", "description")}/>/>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {todo: state.todos[id]};
};

export default connect (mapStateToProps, {editTodo, fetchTodo}) (EditTodo);