import React from 'react'
import { connect } from 'react-redux'
import SongForm from '../components/SongForm'
export default class CreateSongPage extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return <SongForm />
    }
}

