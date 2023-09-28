import './Register.css'
import { RiArrowDownSLine } from "react-icons/ri";
function Register() {
    return (
        <div id='register_container'>
            <div>

            </div>
            <div id="register">
                <div>
                    <div id='register_top'>
                        <div>BECOME A MEMBER</div>
                        <button>X</button>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                    <div>
                        <label htmlFor="email" style={{ fontSize:"15px" }}>Email <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <input type="email" style={{ marginBottom: "15px" }} />
                        <br />
                        <label htmlFor="password" style={{ fontSize:"15px" }}>Create a Password <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <input type="password" />

                        <p>8 characters 1 lowercase 1 uppercase 1 number</p>

                        <label htmlFor="date" style={{ fontSize:"15px" }}>Date of birth <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <div id='birth_date'>
                            <input type="text" placeholder='DD' />
                            <p>/</p>
                            <input type="text" placeholder='MM' />
                            <p>/</p>
                            <input type="text" placeholder='YYYY' />
                        </div>
                        <p>H&M wants to give you a special treat on your birthday</p>

                        <div id='Add_more'>
                            <p>ADD MORE 7 GET MORE</p>
                            <div><RiArrowDownSLine/></div>
                            
                        </div>

                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox" style={{marginLeft:"10px",fontSize:"13px"}}>Yes, email me offers, style updates, and special invites to sales and events.</label>
                            <p style={{marginLeft:"22px",fontSize:"14px",marginTop:"10px"}}>Wish your inbox was more stylish? No problem, just subscribe to our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight to your inbox!</p>
                        </div>
                        <p style={{marginTop:"15px",fontSize:"12px",color:"gray"}}>By clicking ‘Become a member’, I agree to the H&M Membership </p>
                        <p style={{textDecoration:"underline",color:"gray"}}>Terms and conditions.</p>
                        <p style={{color:"gray"}}> To give you the full membership experience, we will process your personal data in accordance with the H&M's Privacy Notice.</p>
                    </div>

                    <button>Become a member</button>
                    <br />
                    <button>Sign in </button>
                </div>
            </div>
        </div>
    )
}
export default Register;