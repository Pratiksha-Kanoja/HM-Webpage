import './Login.css'
function Login() {
    return (
        <div>
            {/* <div>

            </div> */}
            <div id="signin">
                <div>
                    <div id='top'>
                        <div>Sign in</div>
                        <button>X</button>
                    </div>
                    <p>Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.</p>
                    <div>
                        <label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <input type="email" />
                        <br />
                        <label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
                        <br />
                        <input type="password" />
                    </div>
                    <div>
                        <div>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox" style={{marginLeft:"10px"}}>Remember me</label>
                        </div>
                        <div style={{textDecoration:"underline"}}>
                            Forgot password?
                        </div>
                    </div>
                    <button>Sign in</button>
                    <br />
                    <button>Become a member</button>
                    <p style={{textAlign:"center",fontSize:"13px",textDecoration:"underline",marginTop:"10px"}}>Membership info</p>
                </div>
            </div>
        </div>
    )
}
export default Login;