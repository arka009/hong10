import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }
    getTodos() {
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function () {
                    console.log(this.state)
                })
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })
    }
    getProjects() {
        this.setState({
            projects: [
                { id: uuid.v4(), title: 'hong10', city: 'korea'},
                { id: uuid.v4(), title: 'taisuke', city: 'japan'},
                { id: uuid.v4(), title: 'wing', city: 'korea'}

            ]
        })

    }
    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects});
    }
    componentDidMount() {
        this.getTodos();
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index=  projects.findIndex(project=> project.id === id);
        projects.splice(index, 1);
        this.setState({projects});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <AddProject addProject={this.handleAddProject.bind(this)} />
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
                <hr/>
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
