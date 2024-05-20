const Register = () => {

    return (
        <>

            <div className="register_container">
                <div className="reg_box">
                    <div className="reg-img">
                        <img src="https://s3-alpha-sig.figma.com/img/1dab/af5c/853b90fe8b682fd1db7b37e3af58aa23?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g982yQyktggt1-IrtWE8DYBz8U7mi3Oi-vgDimN26M5FpS25yooI~dtoaf1L17iv9~K3eUHyhkbrjg6A~IqkV-Sw0JdklMdejWkzNeZ7qPtveDcmemSTOXEtP93MN3aFlzIkgDwOhFtufcOJT2vpkGbAV87P4iqR43sic-EWlw9tPatKODnUrOtFXipV6kNVlM5Ax1qssSNzs9J0hrcWvpFB4OImU1-JMLKZds8RwvN~fogx5P1plRHY~WXWvV6YBstEeKbSvesp2Mncm43qyZMornVWUaiG2beyXBroQPSs1DWZAIIKwRkYVpmm5RaCLSXeOQFxLWVSDwYPH6doAg__" className="reg-img-main" alt="Register image" />
                    </div>

                    <div className="main_register">
                        <h2 className="reg_title">Register Form</h2>
                        <p className="mini_title">Already have an account? Login</p>
                        <div className="reg_data">
                            <form action="post">
                            <div className="names">
                                <input type="text" placeholder="First Name *" />
                                <input type="text" placeholder="Last Name *" />
                            </div>
                            <input type="email" name="email" id="email" placeholder="Enter Email *" />
                            <input type="email" name="email" id="email" placeholder="Confirm Email *" />
                            <div className="numbers">
                                <input type="tel" name="number" id="number" placeholder="Mobile Number *" />
                                <input type="number" name="number" id="number" placeholder="Token *" />
                            </div>
                            <div className="genders">
                                <div className="inner-gender">
                                    <div className="first_gender">
                                        <input type="radio" name="female" id="male" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="second-gender">
                                        <input type="radio" name="female" id="fmale" />
                                        <label htmlFor="fmale">Female</label>
                                    </div>
                                </div>
                                <select name="Departments" id="Departments">
                                    <option value="null">Select</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Science">Science</option>
                                    <option value="Aarts">Aarts</option>
                                </select>
                            </div>
                            <div className="reg_btns">
                            <button type="reset" className="resetbtn1">Reset</button>
                            <button type="submit" className="submitbtn1">Register</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;