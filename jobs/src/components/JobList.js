import React from "react";
import { connect } from "react-redux";
import { fetchJobs } from "../actions/jobActions";
import history from "../history";

import "../styles/JobList.css";

import jobs from "../data/db.json";

class JobList extends React.Component {
  state = { jobs: [], filterPos: "", filterComp: "", filterCity: "" };

  componentDidMount = async () => {
    await this.props.fetchJobs();
    this.setState({ jobs: this.props.jobs });
  };

  renderList() {
    var filteredJobs = this.state.jobs.filter(
      job =>
        job.positionName
          .toUpperCase()
          .includes(this.state.filterPos.toUpperCase()) &&
        job.companyName
          .toUpperCase()
          .includes(this.state.filterComp.toUpperCase()) &&
        job.cityName.toUpperCase().includes(this.state.filterCity.toUpperCase())
    );
    return filteredJobs.map(job => {
      return (
        <tr key={job.id} onClick={() => history.push(`/jobdetail/${job.id}`)}>
          <td>{job.positionName}</td>
          <td>{job.companyName}</td>
          <td>{job.cityName}</td>
        </tr>
      );
    });
  }

  onInputChangePos = event => {
    this.setState({ filterPos: event.target.value.toString() });
  };

  onInputChangeComp = event => {
    this.setState({ filterComp: event.target.value.toString() });
  };

  onInputChangeCity = event => {
    this.setState({ filterCity: event.target.value.toString() });
  };

  render() {
    return (
      <table className="table table-hover" style={{ marginTop: "50px" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              {" "}
              <input
                className="filter position"
                type="text"
                value={this.state.filterPos}
                onChange={this.onInputChangePos}
                placeholder="Position"
              />
            </th>
            <th scope="col">
              {" "}
              <input
                className="filter company"
                type="text"
                value={this.state.filterComp}
                onChange={this.onInputChangeComp}
                placeholder="Company"
              />
            </th>
            <th scope="col">
              {" "}
              <input
                className="filter city"
                type="text"
                value={this.state.filterCity}
                onChange={this.onInputChangeCity}
                placeholder="City"
              />
            </th>
          </tr>
        </thead>
        <tbody>{this.renderList()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  };
};

export default connect(mapStateToProps, { fetchJobs })(JobList);
