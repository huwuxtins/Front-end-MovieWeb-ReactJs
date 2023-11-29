import { header } from '~/helper/header'
import * as httpRequest from '~/utils/httpRequest'

export const userService = {
    login: async (email, password) => {
        try {
            const res = await httpRequest.post('/user/sign-in', {
                email, 
                password
            }, {
                Headers: header
            })

            console.log(res)
            return res
        } catch (error) {
           console.error(error) 
        }
    },
    register: async (name, username, email, password) => {
        try {
            const res = await httpRequest.post('/user', {
                name, username, email, password
            }, {
                Headers: header
            })

            console.log(res)
            return res
        } catch (error) {
            console.log(error)
        }
    },
    getAllUser: async (page) => {
        try {
            const res = await httpRequest.get(`/user?page=${page}`, {
                headers: header()
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    updateUser: async (id, name, username, email, password, roleName, isLocked) => {
        try {
            const res = await httpRequest.put(`/user/admin/${id}`, {
                id, name, username, email, password, roleName, isLocked
            }, {
                headers: header()
            })
            return res
        }
        catch (error) {
            return error.response
        }
    }
}