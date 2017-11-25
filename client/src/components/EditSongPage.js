import React from 'react'
import { connect } from 'react-redux'
import SongForm from '../components/SongForm'
import SongsService from '../services/SongsService'

export default class EditSongPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            song: null
        }
        this.counter = 1
        this.handleRouting = this.handleRouting.bind(this)
    }
    
    handleRouting() {
        this.props.history.push('/songs')
    }

    tick() {
        if(this.counter > 5)  return ;
        this.counter = this.counter + 1
        SongsService
            .show(this.counter)
            .then((response) => {
                this.setState( {
                    song: response.data
                })
                console.log(this.counter, this.state.song)
            })
    }

    render() {
        if(this.state.song)
            return <SongForm song = { this.state.song } action="UPDATE" handleRouting = { this.handleRouting } id = { this.props.match.params.id} />
        else return <div> loading ... </div>
    }

    componentDidMount() {
        console.log('did Mount called')
        SongsService
            .show(this.props.match.params.id)
            .then((response) => {
                this.setState( {
                    song: response.data
                })
            })
            .catch(() => {
                console.log('error loading')
            })
    }

}
