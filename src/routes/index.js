import config from "~/config"
import { client } from "~/pages/client"
import { admin } from "~/pages/admin"
import HomeLayout from "~/layouts/Home/HomeLayout"
import AdminLayout from "~/layouts/Admin/AdminLayout"

export const routes = [
    {name: 'Home', path: config.routes.client.Home, component: client.Home, layout: HomeLayout},
    {name: 'Login', path: config.routes.client.Login, component: client.Login},
    {name: 'Register', path: config.routes.client.Register, component: client.Register},
    {name: 'Detail', path: config.routes.client.Detail, component: client.Detail, layout: HomeLayout},
    {name: 'Genre', path: config.routes.client.Genre, component: client.Genre, layout: HomeLayout},
    {name: 'Contact', path: config.routes.client.Contact, component: client.Contact, layout: HomeLayout},
    {name: 'Search', path: config.routes.client.Search, component: client.Search, layout: HomeLayout},
    {name: 'Admin', path: '/admin', component: admin.ManageMovie, layout: AdminLayout},
    {name: 'Add Genre', path: '/admin'+ config.routes.admin.AddGenre, component: admin.AddGenre, layout: AdminLayout},
    {name: 'Add Movie', path: '/admin'+ config.routes.admin.AddMovie, component: admin.AddMovie, layout: AdminLayout},
    {name: 'Add User', path: '/admin'+ config.routes.admin.AddUser, component: admin.AddUser, layout: AdminLayout},
    {name: 'Edit Genre', path: '/admin'+ config.routes.admin.EditGenre, component: admin.EditGenre, layout: AdminLayout},
    {name: 'Edit Movie', path: '/admin'+ config.routes.admin.EditMovie, component: admin.EditMovie, layout: AdminLayout},
    {name: 'Edit User', path: '/admin'+ config.routes.admin.EditUser, component: admin.EditUser, layout: AdminLayout},
    {name: 'Manage Genre', path: '/admin'+ config.routes.admin.ManageGenre, component: admin.ManageGenre, layout: AdminLayout},
    {name: 'Manage Movie', path: '/admin'+ config.routes.admin.ManageMovie, component: admin.ManageMovie, layout: AdminLayout},
    {name: 'Manage User', path: '/admin'+ config.routes.admin.MangageUser, component: admin.ManageUser, layout: AdminLayout},
]