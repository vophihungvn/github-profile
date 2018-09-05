import React, { Component } from 'react'
import { connect } from 'react-redux'

class Form extends Component {
    submitForm = () => {
        const { dispatch } = this.props
        const { username } = this.refs

        dispatch({
            type: 'FETCH_USER_PROFILE',
            params: {
                username: username.value
            }
        })
    }

    render() {
        return <div>
            <input type={'text'} ref="username" />
            <button type="buttton" onClick={this.submitForm}>Load Profile</button>
        </div>
    }
}

export default connect()(Form);