import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/ProjectActions";

class AddProject extends Component{
    constructor(props){
        super(props);
        this.state={
            projectName:"",
            projectIdentifier:"",
            description:"",
            start_date:"",
            end_date:"",
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(event){
        // console.log("-----onChange Triggered------");
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
        }
    }
    onSubmit(event){
        event.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        // console.log(newProject);
        this.props.createProject(newProject, this.props.history);
    }
    render(){
        const {errors} = this.state;
        return(
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                                   className="form-control form-control-lg " 
                                   name="projectName"
                                   value={this.state.projectName}
                                   placeholder="Project Name"
                                   onChange={this.onChange} />
                                   <p>{errors.projectName}</p>
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                   className="form-control form-control-lg" 
                                   name="projectIdentifier"
                                   value={this.state.projectIdentifier}
                                   placeholder="Unique Project ID"
                                   onChange={this.onChange} />
                                   <p>{errors.projectIdentifier}</p>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" 
                                   name="description"
                                   value={this.state.description}
                                   placeholder="Project Description"
                                   onChange={this.onChange} ></textarea>
                                   <p>{errors.description}</p>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date"
                                   className="form-control form-control-lg" 
                                   name="start_date"
                                   value={this.state.start_date}
                                   onChange={this.onChange} />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" 
                                   className="form-control form-control-lg" 
                                   name="end_date"
                                   value={this.state.end_date}
                                   onChange={this.onChange} />
                        </div>

                        <input type="submit" 
                                className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        );
    }
}
export default AddProject;