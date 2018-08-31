import React from 'react'
import Pagination from 'rc-pagination'
import { connect } from 'react-redux'
import { Api, QueryString } from '~/Helpers'
import { LogItem } from '~/Partials'

class Retrieve extends React.Component {
  timer = null

  state = {
    logs: [],
    page: {
      count: 0,
      current: 1
    },
    logret: {
      app_id: '',
      app_name: '',
      key_name: '',
      service_url: '',
      executed_at: '',
      is_error: '',
      total_time: '',
      request_param_transmission_datetime: '',
      request_param_trx_datetime: '',
      request_param_company_code: '',
      request_param_channel_id: '',
      request_param_billkey: '',
      request_param_billkey1: '',
      request_param_billkey2: '',
      request_param_billkey3: '',
      request_param_payment_amount: '',
      request_param_currency: '',
      request_param_transaction_id: '',
      request_param_reference1: '',
      request_param_reference2: '',
      request_param_reference3: '',
      request_param_ntpn: '',
      response_data_code: '',
      response_data_message: '',
      additional_info_http_code: '',
      additional_info_http_message: '',
      additional_info_exception: '',
      request_param: '',
      response_data: '',
      additional_info: ''
    }
  }

  componentDidMount() {
    let qs = this.props.location.search
    let check = qs.substring(0, 1)
    if (check === '?') {
      qs = qs.substring(1)
    }
    let xx = QueryString.parse(qs)
    let page = xx.page || xx["?page"] || 1
    this.getLogData(parseInt(page, 10) || 1)
    this.props.onLoad({
      pageTitle: 'Retrieve From Bank'
    })
  }

  getLogData(page) {
    let data2send = this.state.logret
    data2send['page'] = page || 1
    Api.get('/monitoring/retrieve', {params: data2send}).then(res => {
      this.setState({
        logs: res.data,
        page: {
          count: parseInt(res.headers['x-pagination-total-count'], 10) || 0,
          current: parseInt(res.headers['x-pagination-current-page'], 10) || 1
        }
      })
    })
  }

  handleChange(e) {
    let logret = this.state.logret
    logret[e.target.name] = e.target.value
    this.setState({
      logret: logret
    })
    clearTimeout(this.timer )
    this.timer = setTimeout(() => {
      this.getLogData(1)
    }, 1000)
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Log Retrieve From Bank</div>
              <div className="card-body">
                <table className="table table-responsive table-condensed table-hover table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th></th>
                      <th>Key</th>
                      <th>App</th>
                      <th>URL</th>
                      <th>Executed At</th>
                      <th>BillKey1</th>
                      <th>BillKey2</th>
                      <th>BillKey3</th>
                      <th>NTPN</th>
                      <th>code</th>
                      <th>message</th>
                      <th>Is Error</th>
                    </tr>
                    <tr>
                      <td>#</td>
                      <td><input type="text" name="key_name" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="app_name" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="service_url" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="executed_at" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="request_param_billkey1" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="request_param_billkey2" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="request_param_billkey3" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="request_param_ntpn" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="response_data_code" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="response_data_message" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                      <td><input type="text" name="is_error" className="form-control input-sm" value={this.state.value} onChange={this.handleChange.bind(this)} /></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.logs.map(log => <LogItem key={log.id} data={log}/>)}
                  </tbody>
                </table>
                <Pagination onChange={this.getLogData.bind(this)} pageSize={20} current={this.state.page.current} total={this.state.page.count} />
              </div>
            </div>
          </div>
        </div>
      </div>
  	)
  }
}

const mapStateToProps = state => ({
  pageTitle: state.common.pageTitle
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({
      type: process.env.PAGE_LOAD,
      payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Retrieve)
