import ActionTypes from './types'

const user = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.addNewUserRequest: {
            const { userTable, newUser } = action.payload;
            return userTable.push({
                id: userTable.length + 1,
                name: newUser.name,
                username: newUser.name.substr(0,6),
                email: newUser.email,
                address: {
                    city: '-'
                }
            })
        }
        case ActionTypes.removeUserRequest: {
                const { userTable, userId } = action.payload;
                const findUser = userTable.findIndex(item => item.id === userId)

                if(findUser >= 0) {
                    userTable.splice(findUser, 1)
                    return userTable
                }
            break;
        }
        case ActionTypes.editUserRequest: {
                const { userTable, userInfo } = action.payload;
                const findUser = userTable.findIndex(item => item.id === userInfo.id)

                if(findUser >= 0) {
                    userTable[findUser]['name'] = userInfo.name
                    userTable[findUser]['email'] = userInfo.email
                    return userTable
                }
            break;
        }
        default: {
            return state;
        }
    }
}

export default user;

