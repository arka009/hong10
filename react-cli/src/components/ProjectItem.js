/**
 * Created by zxy on 2018/1/5.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ProjectItem extends Component {
    deleteProject(id) {
        console.log('test')
        this.props.onDelete(id)
    }
    render() {
        return (
            <div className="Project">
                {this.props.project.title} - {this.props.project.city} - <span onClick={this.deleteProject.bind(this, this.props.project.id)}>X</span>
            </div>
        )
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}

export default ProjectItem;