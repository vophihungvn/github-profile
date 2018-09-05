
const defaultGithubUser = {
    username: '',
    profile: {},
    followers: [],
    following: []
}

const user = (state = defaultGithubUser, data) => {
    if (data) {
        const { type, params } = data;
        switch (type) {
            case 'ADD_PROFILE': 
                return {
                    ...state,
                    username: params.data.login,
                    profile: params.data
                }
            case 'ADD_FOLLOWER':
                return {
                    ...state,
                    followers: params.followers
                }
            case 'ADD_FOLLOWEING':
                return {
                    ...state,
                    following: params.following
                }
            default:
                return state
        }
    } else {
        return state
    }
    

}

export default user;