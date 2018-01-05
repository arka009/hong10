/**
 * Created by zxy on 2018/1/5.
 */
import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        citys: ['korea', 'china', 'japan']
    }
    handleSubmit(e) {
        console.log('submited')
        if(this.refs.title.value===''){
            alert('Title is required');
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                city: this.refs.city.value
            }}, function(){
                console.log(this.state)
                this.props.addProject(this.state.newProject);
            })
        }
        e.preventDefault();
    }
    render() {
        let citys = this.props.citys.map(city=>{
            return <option key={city} value={city}>{city}</option>
        })
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>City</label>
                        <select ref="city">
                            {citys}
                        </select>
                    </div>
                    <input type="submit" value="submit"/>
                    <br/>
                </form>
            </div>
        )
    }
}

AddProject.propTypes = {
    citys: PropTypes.array,
    addProject: PropTypes.func
}

export default AddProject;