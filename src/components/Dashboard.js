import React from "react";
import ProjectItem from "./ProjectItem";
import CreateProjectButton from "./projects/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/ProjectActions";
import { PropTypes } from "prop-types";

class Dashboard extends React.Component{
    componentWillMount(){
        this.props.getProjects();
    }
    render(){
        const {projects} = this.props.projects;
        return(
            <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <CreateProjectButton/>
                    <br />
                    <hr />
                    {
                        projects.map(project => (
                            <ProjectItem key={project.id} project={project}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
        );
    }
}
Dashboard.propTypes = {
    projects: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    projects: state.projects
});
export default connect(mapStateToProps,{getProjects})(Dashboard);