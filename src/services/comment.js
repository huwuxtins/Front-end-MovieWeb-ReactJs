import { header } from '~/helper/header'
import * as httpRequest from '~/utils/httpRequest'

export const commentService = {
    seeComment: async (size, filmId) => {
        try {
            var path = `/comment?filmId=${filmId}`
            if(size){
                path += `&size=${size}`
            }
            const res = await httpRequest.get(path)
            console.log(res)
            return res
        } catch (error) {
            console.log(error)
        }
    },
    postComment: async (email, content, createdDate, username, filmId) => {
        try {
            const res = await httpRequest.post('/comment', {
                email, content, createdDate, username, filmId
            }, {
                headers: header()
            })

            console.log(res)
            return res
        } catch (error) {
            console.error(error);
            throw error;
        }
    } 
}