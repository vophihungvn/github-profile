

export const getUser = username => ({
    type: 'FETCH_USER',
    params: {
        username
    }
})