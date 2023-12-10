import { useNavigate } from 'react-router-dom';
import './Register.css'
import { RiArrowDownSLine } from "react-icons/ri";
import api from '../Helpers/AxiosConfig';
import toast from 'react-hot-toast';
import { useState } from 'react';
function Register() {
    const router = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "", DOB: "" });

    function handlechange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function formsubmit(event) {
        event.preventDefault();
        if (userData.email && userData.password && userData.DOB) {
            const { data } = await api.post('/auth/register', { userData })
            if (data.success) {
                toast.success("Register successfully !!")
                setUserData({ email: "", password: "", DOB: "" })
                router('/')
            }
            else {
                toast.error(data.error);
            }
        }
        else {
            toast.error("All fields are mandatory")
        }
    }
    return (
        <div className='register_container'>
            <div>

            </div>

            <div className="register">
                <div>
                    <div className='register_top'>
                        <div>BECOME A MEMBER</div>
                        <button>X</button>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>

                    {/* Form */}
                    <form className='register_form' onSubmit={formsubmit}>
                        <div>
                            <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label><br />
                            <input type="email" style={{ marginBottom: "15px" }} name='email' onChange={handlechange} value={setUserData.email} /><br />
                            <label htmlFor="password">Create a Password <span style={{ color: "red" }}>*</span></label><br />
                            <input type="password" name='password' onChange={handlechange} value={setUserData.password} />
                            <p>8 characters 1 lowercase 1 uppercase 1 number</p>
                            <label htmlFor="date">Date of birth <span style={{ color: "red" }}>*</span></label><br />
                        </div>

                        <div className='birth_date'>
                            <input type="text" placeholder='DD/MM/YYYY' name='DOB' onChange={handlechange} value={setUserData.DOB} />
                            <p>H&M wants to give you a special treat on your birthday</p>
                        </div>

                        <div className='Add_more'>
                            <p>ADD MORE 7 GET MORE</p>
                            <div><RiArrowDownSLine /></div>
                        </div>

                        <div>
                            <input type="checkbox" required />
                            <label htmlFor="checkbox" >Yes, email me offers, style updates, and special invites to sales and events.</label>
                            <p>Wish your inbox was more stylish? No problem, just subscribe to our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight to your inbox!</p>
                        </div>

                        <div>
                            <p>By clicking ‘Become a member’, I agree to the H&M Membership </p>
                            <p>Terms and conditions.</p>
                            <p>To give you the full membership experience, we will process your personal data in accordance with the H&M's Privacy Notice.</p>
                        </div>

                        <div>
                            <button>Become a member</button>
                            <br />
                            <div onClick={() => router('/')}>Sign in </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Register;