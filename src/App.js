import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routes } from "~/routes"
import HomeLayout from "./layouts/Home/HomeLayout";
import AdminLayout from "./layouts/Admin/AdminLayout";
import { AuthProvider } from "./auth/useAuth";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        routes.map((route, index) => {
                            const Page = route.component

                            let Layout = ''

                            if (route.layout) {
                                Layout = route.layout
                            } else{
                                Layout = Fragment
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <AuthProvider>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </AuthProvider>
                                    }
                                >
                                    {route.name}
                                </Route>
                            )
                        })
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
