import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'

const User = props =>  {
    console.log(props)
    const { user } = props;
    const { username} = user
    return <div>
        <Form />
        This is user profile info <br />
        Username: {username || 'please input and load'}
    </div>
}

const mapStateToProps = (state) => {
    console.log('state change')
    return  state
}

export default connect(mapStateToProps)(User)