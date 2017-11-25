import Api from './Api'

export default {
    index() {
        return Api().get('bookmarks', {
            params: {
                search: searchKey
            }
        })
    },
    get(params) {
        return Api().get(`bookmark`, {
            params: {
                userId: params.userId,
                songId: params.songId
            }
        })
    },
    post(bookmark) {
        return Api().post('bookmarks', bookmark)
    },
    delete(params) {
        return Api().delete('bookmarks', {
            params: {
                userId: params.userId,
                songId: params.songId
            }
        })
    }
}