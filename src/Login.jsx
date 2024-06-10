const Login = () => {

    return (
        <>
            <div className="register_container">
                <div className="reg_box">
                    <div className="reg-img">
                        <img src="https://s3-alpha-sig.figma.com/img/1dab/af5c/853b90fe8b682fd1db7b37e3af58aa23?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g982yQyktggt1-IrtWE8DYBz8U7mi3Oi-vgDimN26M5FpS25yooI~dtoaf1L17iv9~K3eUHyhkbrjg6A~IqkV-Sw0JdklMdejWkzNeZ7qPtveDcmemSTOXEtP93MN3aFlzIkgDwOhFtufcOJT2vpkGbAV87P4iqR43sic-EWlw9tPatKODnUrOtFXipV6kNVlM5Ax1qssSNzs9J0hrcWvpFB4OImU1-JMLKZds8RwvN~fogx5P1plRHY~WXWvV6YBstEeKbSvesp2Mncm43qyZMornVWUaiG2beyXBroQPSs1DWZAIIKwRkYVpmm5RaCLSXeOQFxLWVSDwYPH6doAg__" className="reg-img-main" alt="Register image" />
                    </div>

                    <div className="main_login">
                        <h2 className="reg_title">Login Form</h2>
                        <div className="reg_data">
                            <input type="email" name="email" id="email" placeholder="Enter Email *" />
                            <input type="password" name="email" id="email" placeholder="Password *" />
                            <input type="password" name="email" id="email" placeholder="Confirm Password *" />
                            <button type="submit" className="submitbtn1">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;