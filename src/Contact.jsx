const Contact = () =>  {
    return(
        <>
            <div className="contact_container">
                <div className="input_contact_container">
                    <div className="names">
                        <div className="fname">
                            <p>First Name</p>
                            <input type="text" placeholder="Enter your first name" />
                        </div>
                        <div className="lname">
                            <p>Last Name</p>
                            <input type="text" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="email">
                        <p>Email</p>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="numbers">
                        <p>Mobile Number</p>
                        <input type="tel" name="number" id="number" placeholder="123-456-7890" />
                    </div>
                    <div className="address">
                        <p>Address</p>
                        <textarea name="textarea" id="textarea" cols="40" rows="6" placeholder="Enter your address here"></textarea>
                    </div>
                    <button type="submit" className="submitbtn">Submit</button>
                </div>

                <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6851157701685!2d72.5605621737448!3d23.035331079164887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85de84596675%3A0xbfc1f9a2dce5ee5c!2sSofts%20Solution%20Service%20-%20Best%20IT%20Training%20Institute%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1715686325099!5m2!1sen!2sin" width="500" height="400"></iframe>
                </div>
            </div>  
        </>
    )
}
export default Contact;