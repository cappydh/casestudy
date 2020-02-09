import React from "react";
import { connect } from "react-redux";
import { fetchJob } from "../actions/jobActions";

import "../styles/JobDetail.css";
// import logo from "../images/kariyer_logo.png";

class JobDetail extends React.Component {
  componentDidMount = async () => {
    await this.props.fetchJob(this.props.match.params.id);
  };

  render() {
    if (this.props.job) {
      return (
        <div className="container">
          <div className="row justify-content-md-center align-middle">
            <div className="company-section mx-auto">
              {this.props.job.companyName} - {this.props.job.positionName}
            </div>
            <div className="photo-section col-md-4">
              <img
                src={this.props.job.imgUrl}
                alt="photo"
                width="300"
                height="300"
              />
            </div>
          </div>
          <div className="row">
            <div className="job-description">
              {this.props.job.positionDescription}
            </div>
          </div>
          <div className="row">
            <div className="fulladdress">{this.props.job.address}</div>
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    job: state.jobs.find(job => job.id === parseInt(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps, { fetchJob })(JobDetail);
