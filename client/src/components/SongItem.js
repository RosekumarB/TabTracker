import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookmarksService from '../services/BookmarksService'
class SongItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookmark: null
        }
        this.authenticated = this.props.isLoggedIn
        this.handleBookmark = this.handleBookmark.bind(this)
        this.handleUnbookmark = this.handleUnbookmark.bind(this)
    }

    handleBookmark(e) {
        BookmarksService.post({
            SongId: this.props.song.id,
            UserId: this.props.userId.id
        }).then((response)=> {
            const bookmark = response.data
            console.log(' received', bookmark)
            if(bookmark) {
                this.setState({
                    bookmark: bookmark
                })
            }
            
        })
    }

    handleUnbookmark(e){
        BookmarksService.delete({
            songId: this.props.song.id,
            userId: this.props.userId.id
        }).then((response) =>{
            console.log(response.data)
            this.setState({
                bookmark: null
            })
        }).catch((e) => {
            console.log('error unbookmarking, check network connection')
        })
    }

    render() {
        return (
            <div>
                <Link to= {`/edit/${this.props.song.id}`}>
                   <h3> { this.props.song.title } </h3>                
                </Link>
                { this.props.isLoggedIn ? (this.state.bookmark ?
                        <div>
                            <button onClick = { this.handleUnbookmark }> unbookmark </button>
                        </div>:
                        <button onClick = { this.handleBookmark } > bookmark </button> )
                        : <div/>
                }
            </div>            
        )
    }

    componentDidMount() {
        if(this.props.isLoggedIn) {
            console.log('mounting, song id is ', this.props.song.id)
            BookmarksService.get({
                songId: this.props.song.id,
                userId: this.props.userId.id
            }).then((response) => {
                const bookmark = response.data
                console.log(bookmark,'is response')
                if(bookmark) {
                    this.setState({
                        bookmark: bookmark
                    })
                }
            }).catch((err)=>{
                res.send({
                    error: "error finding the bookmark asked"
                })
            })
        }
    }

}

const mapStateToProps = (state) =>({
    isLoggedIn: state.login.loggedIn,
    userId: state.user.user
})

export default connect(mapStateToProps)(SongItem)