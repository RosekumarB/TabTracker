import React from 'react'
import { connect } from 'react-redux'
import SongsService from '../services/SongsService'

class SongForm extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.state = {
            song: {
                title: props.song ?  props.song.title : "",
                artist: props.song  ?  (props.song.artist ? props.song.artist: "" ): "",
                album: props.song ? props.song.album : "",
                genre: props.song ? props.song.genre : "",
                albumImageUrl: props.song ? props.song.albumImageUrl: "",
                youtubeId: props.song ? props.song.youtubeId: "",
                lyrics:props.song ? props.song.lyrics: "",
                tab: props.song ? props.song.tab: ""
            },
            error: null
        }
        console.log('the state in constructor', this.state.song)
    }

    onTitleChange = (e) => {
        console.log('changing title')
        console.log(this.state.song)
        const title = e.target.value 
        const song = this.state.song
        this.setState(()=> ({ song: {...song,title}}))
    }
    onArtistChange = (e) => {
        const artist = e.target.value 
        const song = this.state.song        
        this.setState(()=> ({ song: {...song,artist} }))
    }
    onAlbumChange = (e) => {
        const album = e.target.value
        const song = this.state.song         
        this.setState(()=> ( { song: {...song, album}}))
    }
    onGenreChange = (e) => {
        const genre = e.target.value 
        const song = this.state.song
        this.setState(()=> ({ song: {...song, genre }}))
    }
    onUrlChange = (e) => {
        const albumImageUrl = e.target.value 
        const song = this.state.song        
        this.setState(()=> ({ song : {...song, albumImageUrl}}))
                this.render()
    }
    onYoutubeIdChange = (e) => {
        const youtubeId = e.target.value 
        const song = this.state.song
        this.setState(()=> ({ song: { ...song, youtubeId } }))

    }
    onLyricsChange = (e) => {
        const lyrics = e.target.value 
        const song = this.state.song        
        this.setState(()=> ({ song: {...song, lyrics }}))

    }
    onTabChange = (e) => {
        const tab = e.target.value 
        const song = this.state.song        
        this.setState(()=> ({ song: {...song, tab }}))

    }

    validate = () => {               
        const song = this.state.song
        return (
            song.title.length > 0 &&
            song.artist.length > 0 && 
            song.album.length > 0 &&
            song.genre.length > 0 &&
            song.albumImageUrl.length > 0 &&
            song.lyrics.length > 0 &&
            song.tab.length > 0 &&
            song.youtubeId.length > 0
        )
    }

    onSubmitHandler(e) {
        e.preventDefault()
        console.log('form was submitted')
        console.log(this.state.song)
        const isValid = this.validate()
        if(isValid) {
            SongsService.createSong(this.state.song)
                        .then((response) => {
                            console.log("respone received")
                        })
                        .catch((e) => {
                            console.log('error recived')
                        })
            this.setState = (()=> { error: null})
            this.props.history.push('/songs')
        } else {
            console.log('error mate')
            this.setState(() => ({ error: "input error "}))
        }
    }

    checkforchangesfromprops() {
        this.setState({
            song: this.props.song
        })
    }

    render() {
        return (
        <div> 
          <form>
            <label>
                Title
                <input 
                    type="text" 
                    name="title" 
                    value={ this.state.song.title }
                    onChange = { this.onTitleChange}
                />
                <br/>
            </label>
             <label>
                artist
                <input 
                    type="text" 
                    name="artist"
                    value={ this.state.song.artist }
                    onChange = { this.onArtistChange }
                />
                <br/>
            </label>
             <label>
                album: 
                <input 
                    type="text" 
                    name="album"
                    value={ this.state.song.album }    
                    onChange= { this.onAlbumChange }
                />
                <br/>
            </label>
             <label>
                genre : 
                <input 
                    type="text" 
                    name="genre"
                    value={ this.state.song.genre }
                    onChange = { this.onGenreChange }
                />
                <br/>
            </label>
             <label>
                albumimageurl
                <input 
                    type="text" 
                    name="albumimage"
                    value = { this.state.song.albumImageUrl }
                    onChange = { this.onUrlChange }
                />
                <br/>
            </label>
             <label>
                youtubeid
                <input 
                    type="text" 
                    name="youtubeid"
                    value = { this.state.song.youtubeId }
                    onChange = { this.onYoutubeIdChange }            
                />
                <br/>
            </label>
             <label>
                lyrics
                <input 
                    type="text" 
                    name="lyrics"
                    value = { this.state.song.lyrics }
                    onChange = { this.onLyricsChange }
                />
                <br/>
            </label>
             <label>
                tab
                <input 
                    type="text" name="tab"
                    value = {this.state.song.tab}
                    onChange = { this.onTabChange }
                />
                <br/>
            </label>
            <button type="submit" onClick = { (e) => this.onSubmitHandler(e)}  > Submit </button>
            { this.state.error ? <p> {this.state.error} has occured </p>: <p> </p>}
          </form>
        </div>
        )
    }
}


export default SongForm
