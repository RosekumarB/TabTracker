import Api from './Api'

export default {
    index(searchKey) {
        return Api().get('songs', {
            params: {
                search: searchKey
            }
        })
    },
    createSong(data) {
        return Api().post('songs', data)
    },
    show(songId) {
        return Api().get(`/songs/${songId}`)
    },
    updateSong(songId, data) {
        return Api().put(`/songs/${songId}`, data)
    }
}