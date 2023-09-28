import './Login.css'
function Login({active,setActive}) {
    function closeItem() {
      setActive(false);
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