import React from 'react'
import PropTypes from 'prop-types'

export default class LogItem extends React.Component {

  state = {
    showDetail: false
  }

  handleDetail() {
    this.setState(prev => ({
      showDetail: !prev.showDetail
    }))
  }

  render() {
    if (this.state.showDetail !== true) {
      return (
        <tr>
          <td><button onClick={this.handleDetail.bind(this)} className="btn btn-sm btn-primary" data-toggle="button" aria-pressed="false"> > </button></td>
          <td>{this.props.data.key_name}</td>
          <td>{this.props.data.app_name}</td>
          <td>{this.props.data.service_url}</td>
          <td>{this.props.data.executed_at}</td>
          <td>{this.props.data.request_param_billkey1}</td>
          <td>{this.props.data.request_param_billkey2}</td>
          <td>{this.props.data.request_param_billkey3}</td>
          <td>{this.props.data.request_param_ntpn}</td>
          <td>{this.props.data.response_data_code}</td>
          <td>{this.props.data.response_data_message}</td>
          <td>{this.props.data.is_error}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td><button onClick={this.handleDetail.bind(this)} className="btn btn-sm btn-primary" data-toggle="button" aria-pressed="false"> > </button></td>
          <td>{this.props.data.key_name}</td>
          <td>{this.props.data.app_name}</td>
          <td colSpan="9">
            request_param
            <pre style={{ background: "white", border: "1px solid #CCCCCC", padding: "10px" }}>{JSON.stringify(this.props.data.request_param, null, 2)}</pre>
            response_data
            <pre style={{ background: "white", border: "1px solid #CCCCCC", padding: "10px" }}>{JSON.stringify(this.props.data.response_data, null, 2)}</pre>
            additional_info
            <pre style={{ background: "white", border: "1px solid #CCCCCC", padding: "10px" }}>{JSON.stringify(this.props.data.additional_info, null, 2)}</pre>
          </td>
        </tr>
      )
    }
  }
}

LogItem.propTypes = {
  data: PropTypes.object.isRequired
}
