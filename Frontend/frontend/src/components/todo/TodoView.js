import React from "react"
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchTodo} from '../../actions';

class TodoView extends React.Component {
    componentDidMount() {
        this.props.fetchTodo(this.props.match.params.id);
    }

    renderTime = (todo) => {
        var time = new Date(todo.deadline);
        return time.toLocaleDateString('en-US');
    };

    renderDetail() {
        return (
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">
                    <i className="sticky note outline icon"/>
                    <div className="content">
                        {this.props.todo.title}
                    </div>
                </h2>
                <h3>{this.renderTime(this.props.todo)}</h3>
                <h4>{this.props.todo.description} </h4>
            </div>
        )
    }

    renderDelete() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to={`/todo/delete/${this.props.match.params.id}`} className="ui button primary">
                    Delete
                </Link>
            </div>
        );
    }

    renderEdit() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to={`/todo/edit/${this.props.match.params.id}`} className="ui button primary">
                    Edit
                </Link>
            </div>
        );
    }

    render() {
        if (!this.props.todo) {
            return (
                <div>Loading</div>
            );
        }
        return (
            <div>
                <div className="ui container" style={{width: '70%'}}>
                    <div className="ui relaxed list" style={{'fontSize': '14pt'}}>{this.renderDetail()}</div>
                    <div style={{float:'right'}}>
                        <div style={{float:'left'}}>
                        {this.renderEdit()}
                        </div>
                        <div style={{float:'right'}}>
                        {this.renderDelete()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {todo: state.todos[id]};
};

export default connect(mapStateToProps, {fetchTodo})(TodoView);