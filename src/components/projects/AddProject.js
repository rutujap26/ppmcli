import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/ProjectActions";
import PropTypes from "prop-types";
import classnames from "classnames";

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
            this.setState({
                errors: nextProps.errors
            })
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
                                   className={classnames("form-control form-control-lg ",{
                                       "is-invalid": errors.projectName
                                   })} 
                                   name="projectName"
                                   value={this.state.projectName}
                                   placeholder="Project Name"
                                   onChange={this.onChange} />
                                   {errors.projectName && (
                                       <div className="invalid-feedback">
                                           {errors.projectName}
                                       </div>
                                   )}
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                   className={classnames("form-control form-control-lg ",{
                                    "is-invalid": errors.projectIdentifier
                                })}
                                   name="projectIdentifier"
                                   value={this.state.projectIdentifier}
                                   placeholder="Unique Project ID"
                                   onChange={this.onChange} />
                                   {errors.projectIdentifier && (
                                       <div className="invalid-feedback">
                                           {errors.projectIdentifier}
                                       </div>
                                   )}
                        </div>
                        <div className="form-group">
                            <textarea className={classnames("form-control form-control-lg ",{
                                       "is-invalid": errors.description
                                   })}
                                   name="description"
                                   value={this.state.description}
                                   placeholder="Project Description"
                                   onChange={this.onChange} ></textarea>
                                   {errors.description && (
                                       <div className="invalid-feedback">
                                           {errors.description}
                                       </div>
                                   )}
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
AddProject.propTypes ={
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    errors: state.errors
});
export default connect(mapStateToProps,{createProject})(AddProject);