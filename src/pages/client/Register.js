import { Fragment, useState } from "react"
import style from './login.module.css'
import classNames from "classnames/bind"
import { Link, useNavigate } from "react-router-dom"
import { userService } from "~/services/user"

const cx = classNames.bind(style)
function Register() {
    const history = useNavigate()
    const [isClick, setClick] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notification = (message) => (
        <div className="alert alert-success" role="alert">{message}</div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        const fetchApi = async () => {
            try {
                await userService.register(name, username, email, password)
                    .then(res => {
                        setClick(!isClick)
                    })
                    .then(() => {
                        setTimeout(() => {
                            history('/login')
                        }, 1000)
                    })

            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
    }
    return (
        <Fragment>
            <div className={cx("custom-body")}>
                <div className={cx("wrapper")}>
                    <form onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <div className={cx("input-box")}>
                            <input type="text" placeholder="Name" name="name" required onChange={(e) => { setName(e.target.value) }} />
                            <i className={cx('bx bxs-user')}></i>
                        </div>
                        <div className={cx("input-box")}>
                            <input type="text" placeholder="Username" name="username" required onChange={(e) => { setUsername(e.target.value) }} />
                            <i className={cx('bx bxs-user')}></i>
                        </div>
                        <div className={cx("input-box")}>
                            <input type="text" placeholder="Email" name="email" required onChange={(e) => { setEmail(e.target.value) }} />
                            <i className={cx('bx bxs-user')}></i>
                        </div>
                        <div className={cx("input-box")}>
                            <input type="password" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }} />
                            <i className={cx('bx bxs-lock-alt')} ></i>
                        </div>
                        {isClick ? notification("Register successfully!") : ''}
                        <button type="submit" className={cx("btn")}>Register</button>
                        <div className={cx("login-link")}>
                            <Link to={"/login"}>Back to Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register