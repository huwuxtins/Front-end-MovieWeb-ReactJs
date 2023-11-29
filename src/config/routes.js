const routes = {
    admin: {
        AddGenre: '/add-genre',
        AddMovie: '/add-movie',
        AddUser: '/add-user',
        EditGenre: '/edit-genre/:id',
        EditMovie: '/edit-movie/:id',
        EditUser: '/edit-user/:id',
        ManageGenre: '/manage-genre',
        ManageMovie: '/manage-movie',
        MangageUser: '/manage-user'
    },
    client: {
        Contact: '/contact',
        Detail: '/detail/:id',
        Genre: '/genre',
        Home: '/',
        Login: '/login',
        Register: '/register',
        Search: '/search'
    }
}

export default routes