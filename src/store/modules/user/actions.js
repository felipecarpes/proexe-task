import ActionTypes from "./types";

export function addNewUserRequest(userTable, newUser) {
    return {
        type: ActionTypes.addNewUserRequest,
        payload: {
            userTable,
            newUser
        }
    }
}

export function removeUserRequest(userTable, userId) {
    return {
        type: ActionTypes.removeUserRequest,
        payload: {
            userTable,
            userId
        }
    }
}

export function editUserRequest(userTable, userInfo) {
    return {
        type: ActionTypes.editUserRequest,
        payload: {
            userTable,
            userInfo
        }
    }
}