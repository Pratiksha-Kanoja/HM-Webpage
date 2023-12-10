import { useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../Helpers/AxiosConfig'
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

function Login({ active, setActive }) {
    const router = useNavigate();
    const { Login, state } = useContext(AuthContext)
    function closeItem() {
        setActive(false);
    }
    const [userData, setUserData] = useState({ email: "", password: "" })

    function handlechange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function login_form(event) {
        event.preventDefault();
        if (userData.email && userData.password) {
            const { data } = await api.post('/auth/login', { userData })
            if (data.success) {
                localStorage.setItem("my-token", JSON.stringify(data.token))
                Login(data.user);
                toast.success("Login Successfully")
                router('/')
                closeItem();
                setUserData({ email: "", password: "" })
            }
            else {
                toast.error("Login Failed")
            }
        }
        else {
            toast.error("All fiels are mandatory")
        }
    }


    return (
        <div id='login_container'>
            <div>

            </div>
            <div id="login">
                <div>
                    <div id='login_top'>
                        <div>Sign in</div>
                        <button onClick={closeItem}>X</button>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>

                    <form className='login_form' onSubmit={login_form}>
                        <div>
                            <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
                            <br />
                            <input type="email" name='email' onChange={handlechange} value={setUserData.email} />
                            <br />
                            <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                            <br />
                            <input type="password" name='password' onChange={handlechange} value={setUserData.password} />
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" />
                                <label htmlFor="checkbox" style={{ marginLeft: "10px" }}>Remember me</label>
                            </div>
                            <p style={{ textDecoration: "underline" }}>Forgot password?</p>
                        </div>
                        <div>
                            <button>Sign in</button>
                            <br />
                            <div onClick={() => router('/register')}>Become a member</div>
                            <p style={{ textAlign: "center", fontSize: "13px", textDecoration: "underline", marginTop: "10px" }}>Membership info</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;