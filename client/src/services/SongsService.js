import Api from './Api'

export default {
    index() {
        return Api().get('songs')
    },
    createSong(data) {
        return Api().post('songs', data)
    },
    show(songId) {
        return Api().get(`/songs/${songId}`)
    }
}