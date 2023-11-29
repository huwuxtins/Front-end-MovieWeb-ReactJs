import { header } from '~/helper/header'
import * as httpRequest from '~/utils/httpRequest'

export const filmService = {
    getFilms: async (size, page, sort, sortedProperty, name, search) => {
        try {
            var path = '/film'
            if (size) {
                path += `?size=${size}`
            }
            if (page) {
                path += `&page=${page}`
            }
            if(sort){
                path += `&sort=${sort}`
            }
            if(sortedProperty){
                path += `&sortedProperty=${sortedProperty}`
            }
            if (name) {
                path += `&name=${name}`
            }
            if (search) {
                path += `&search=${search}`
            }
            const res = await httpRequest.get(path, {
                size, page, sort, sortedProperty, name, search
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    getFilmsAdmin: async (size, page, sort, sortProperty, name, search) => {
        try {
            var path = '/film/admin'
            if (size) {
                path += `?size=${size}`
            }
            if (page) {
                path += `&page=${page}`
            }
            if (name) {
                path += `&name=${name}`
            }
            if (search) {
                path += `&search=${search}`
            }
            const res = await httpRequest.get(path, {
                headers: header()
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    getFilmById: async (id) => {
        try {
            const res = await httpRequest.get(`/film/${id}`)
            return res
        }
        catch (error) {
            return error.response
        }
    },
    addFilm: async (name, description, genre, imageLink, author,
        country, yearRelease, linkUrl, linkDemo, filmLength) => {
        try {
            const res = await httpRequest.post('/film', {
                name, description, genre, imageLink, author, country,
                yearRelease, linkUrl, linkDemo, filmLength, rating: 0, reviews: 0
            }, {
                headers: header()
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    updateFilm: async (id, name, description, genre, imageLink, author, country, yearRelease,
        linkUrl, linkDemo, filmLength, rating, reviews) => {
        try {
            const res = await httpRequest.put(`/film/${id}`, {
                id, name, description, genre, imageLink, author, country,
                yearRelease, linkUrl, linkDemo, filmLength, rating, reviews
            }, {
                headers: header()
            })
            return res
        } catch (error) {
            return error.response
        }
    },
    reviewFilm: async (id, score) => {
        try {
            await httpRequest.put(`/film`, {
                id,
                score
            }, {
                headers: header()
            })
        } catch (error) {

        }
    },
    deleteFilm: async (id) => {
        try {
            const res = await httpRequest.deleted(`/film/${id}`, {
                headers: header()
            })
            return res
        } catch (error) {
            return error.response
        }
    }
}