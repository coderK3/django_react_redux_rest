import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <Fragment>
        <h2>table </h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <tb>{lead.id}&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</tb>
                <tb>{lead.name}&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</tb>
                <tb>{lead.email}&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</tb>
                <tb>{lead.message}&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;</tb>
                <tb>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </tb>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
