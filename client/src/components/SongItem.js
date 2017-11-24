import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class SongItem extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to= {`/edit/${this.props.song.id}`}>
                   <h3> { this.props.song.title } </h3>
                </Link>
            </div>            
        )
    }
}