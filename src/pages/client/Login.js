import { Fragment, useState } from "react"
import style from '~/pages/client/login.module.css'
import classNames from "classnames/bind"
import { Link, useNavigate } from "react-router-dom"
import { userService } from "~/services/user"

const cx = classNames.bind(style)
function Login() {
    const history = useNavigate()
    const [isClick, setClick] = useState(false)
    const [isSuccess, setSuccess] = useState(false)
    const [isLocked, setLocked] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notification = (type, message) => (
        <div className={`alert alert-${type}`} role="alert">{message}</div>
    )
    const handleSubmit = (e) => {
        e.preventDefault()

        const fetchApi = async () => {
            try {
                await userService.login(email, password)
                    .then((res) => {
                        localStorage.setItem("jwtToken", res.token)
                        localStorage.setItem("user", JSON.stringify(res.user))
                        setClick(!isClick)
                        return res.user
                    })
                    .then((user) => {
                        if(user.isLocked === "False"){
                            setSuccess(true)
                            setTimeout(() => {
                                history('/')
                            }, 1000)
                        }
                        else{
                            setLocked(true)
                        }
                    })
                    .catch(error => {
                        setSuccess(false)
                    })

            } catch (error) {
                console.error(error)
            }
        }
        fetchApi()
        setTimeout(() => {
            setClick(false);
        }, 1000);
    }

    return (
        <Fragment>
            <div className={cx("custom-body")}>
                <div className={cx("wrapper")}>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className={cx("input-box")}>
                            <input type="text" name="Email" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} />
                            <i className={cx('bx bxs-user')}></i>
                        </div>
                        <div className={cx("input-box")}>
                            <input type="password" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }} />
                            <i className={cx('bx bxs-lock-alt')}></i>
                        </div>
                        <div className={cx("remember-forgot")}>
                            <label><input type="checkbox" />Rememberme</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        {isClick ? ((isSuccess === true) ? notification("success", "Login succefully") : notification("danger", (isLocked === true) ? "This account was locked, please contact with us to know more information": "Login failed, Email or password isn't correct!")) : ''}
                        <button type="submit" className={cx("btn")}>Login</button>
                        <div className={cx("register-link")}>
                            <p>Don't have an account?
                                <Link to={"/register"}>Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login