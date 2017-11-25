import React from 'react'
import { connect } from 'react-redux'
import SongItem from '../components/SongItem'
import SongsService from '../services/SongsService'
import SearchPanel from '../components/SearchPanel'
import _ from 'lodash'
class Songs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            songs: [],
        }
    }

    componentWillMount() {
         SongsService.index("")
            .then((songs) => {
                console.log('received songs', songs.data)
                this.setState ({ songs: songs.data})
                console.log(songs.data[0].title)
            })
            .catch(()=> {
                console.log('error retrieving data')
            })
    }

    handleSearchChange = (search) => {
        console.log('searching for the term', search)
            SongsService.index(search)
                .then((songs) => {
                    console.log('received songs', songs.data)
                    this.setState ({ songs: songs.data})

                    console.log('retrieved search data')
                })
                .catch(()=> {
                    console.log('error retrieving data')
                })
    }
    
    render() {
        const handleSearchDebounce = _.debounce((search) => this.handleSearchChange(search), 300)
        return (
            <div>
                <h2> Songs </h2>
                <label>
                    <SearchPanel handleSearchChange = { handleSearchDebounce } />
                </label>
                <ul>
                {
                    this.state.songs.map((song) => {
                        return <SongItem key = { song.createdAt } song = { song } />
                    })

                }
                </ul>
            </div>
        )
    }
}
export default Songs