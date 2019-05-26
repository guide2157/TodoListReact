import React from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchTodos, deleteTodo} from '../../actions';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTime = (todo)=> {
        var time = new Date(todo.deadline);
        return time.toLocaleDateString('en-US');
    };



    renderList() {
        return this.props.todos.map(todo => {
            return (
                <div className="item" key={todo.id}>
                    <i className="sticky note outline icon"/>
                    <div className="content">
                        <Link to={`/todo/detail/${todo.id}`} className="header">
                            {todo.title}
                        </Link>
                        <div className="description">{this.renderTime(todo)}</div>

                    </div>
                    <i className="trash alternate outline icon" onClick={this.props.deleteTodo(todo.id)}/>
                </div>
            )
        })
    }

    renderCreate() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to="/todo/new" className="ui button primary">
                    Create Todo
                </Link>
            </div>
        );
    }



    render() {
        return (
            <div>
            <div className="ui container" style={{width:'70%'}} >
                <div className="ui relaxed list divided" style={{'fontSize':'14pt'}}>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
            </div>
        );
    }

}


const mapStateToProps = state => {
    return {
        todos: Object.values(state.todos),
    };
};

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(TodoList);