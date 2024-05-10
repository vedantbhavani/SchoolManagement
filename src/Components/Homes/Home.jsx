import './Home.css'
import Slider from './Slider'

const Home = () => {
    return(
        <>
        
        <div className="home-container">
            <div className="box1">
                <img className='box1img' src="https://images.news18.com/ibnlive/uploads/2016/09/boman-iranai.jpg" alt="Viru Viru Sahastrabudhhe" />
                {/* <img className='box1img' src="https://www.venkateshwaragroup.in/vgiblog/wp-content/uploads/2022/09/Untitled-design-2-1.jpg" alt="Viru Viru Sahastrabudhhe" /> */}
                <div className="box1data">
                    <p className="box1title">Viru Sahastrabudhhe</p>
                    <p className="box1minititle">Principal</p>
                    <p className='box1desc'>He is last 20 years Principal of this School and he was stand a position of school is 21 to on 1st. They have a one pen and that pen will be able to written in Space.</p>
                    <a target='_vedant' href="https://villains.fandom.com/wiki/Viru_Sahastrabuddhe"><button className='box1btn'>Know More</button></a>
                </div>
            </div>

            <div className="blogs">
                <h2 className="blogs-title">Blogs</h2>
                <div className="blog-content">
                    <div className="blog-boxes">
                        <img className='blog-boxes-img' src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2023/01/America_the_Story_of_Us_3000x3000_NT-scaled.jpg" alt="" />
                        <p className="blog-boxes-title">America</p>
                        <p className="blog-boxes-desc">We are planned a trip in america to know all about america country. </p>
                    </div>
                    <div className="blog-boxes">
                        <img className='blog-boxes-img' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0c/ea/bb/ottawa-city-view.jpg?w=1400&h=1400&s=1" alt="" />
                        <p className="blog-boxes-title">Canada</p>
                        <p className="blog-boxes-desc">We are planned a trip in Canada to know all about Canada country. </p>
                    </div>
                    <div className="blog-boxes">
                        <img className='blog-boxes-img' src="https://static.toiimg.com/thumb/86797679/Australia-reopening-for-tourism.jpg?width=1200&height=900" alt="" />
                        <p className="blog-boxes-title">Australia</p>
                        <p className="blog-boxes-desc">We are planned a trip in Australia to know all about Australia country. </p>
                    </div>
                </div>
            </div>
            <Slider/>
            <div className="gallery">
                <h3 className='gallery-title'>Gallery</h3>
                <div className="gallery-items">
                    <img src="https://s3-alpha-sig.figma.com/img/ae6b/6229/6c51e9c3e8622832317244cff583e971?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VNVU3~e6vQ44vKMmIXR9vKUWNznIDiS-nGNw86yMiM2PBrF2Yvub~t~Ic8iXbz5HYap0J6RIy~kt5jZojMTIK1BYf-rQZSbg8Yjc6mNGaibGjNGX-yV1H2UCxuaxUwTCfFnXkISkdv3~xLSVgvI6LZwWA0pDL3EUO-ybFa8g1AYsz3aujkARlIgFZG36RcubNzKgsDJufPIMef1iT7TiOD5K0N2wpKnbUofV3s7tlbAmH-VWUgA-Rv3QPjyio650a4VPln7XIysNtD8aZwMuJ-0~52p9QS3qDyiNoDhFdji4MEyFvJ5uT~B0XFQR0pJ959UH6SnYoDPtdKckMT4riw__" alt="" />
                    
                    <img src="https://s3-alpha-sig.figma.com/img/6649/1413/08301bfe0d5748a97e968467424c5922?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCXTnSitlzS4vZjZLyqr-tp7gpJOqcMxbyQrMV~wJya9bu1WCDvzuK-1FAcruXIni6KdY~5OsreJz0CIZbzioKWhZeUZbcfzWVDHzkcd9UJUfIugOR7g3wgt2NAsRxWaWy2wtwA5SiVJ2KRcDpKhH0X8OQHGN3H3JbutW~jUfe9jEqdzWRxfsjeMjdnGj1p8pjKTlm5hAmm5eflSSo3mKvIuQe7HxyPQuZIszzfYtC2UyO-aMElJeDUukFEIr2EoA3Jh78RT~R0n4kP3MrcY8v9WoZLU3VGlNEeui0b8L0cY9-i7UkOwt05i-3aKQfwzevY0oOaXZlMx4qvAq3rJcQ__" alt="" />

                    <img src="https://s3-alpha-sig.figma.com/img/3f4a/d796/e4430f32ff625c7f3dfbb9de31e650cc?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PNlAAiIOiuP0M~Uv4EffVZV4EfQht5SA~wq3dZ~Xgmnuj~qD5LpUFhX02irJVJbmkhrEb0UC1LMZQoTJXUEUICeqzh9KWFe~nmNHADD2oxkIW--Ec7J5RHOtgy4epYwcfLPmUV1c9z-1oDr1Hn4neNx7Du3D5zpjNEeIif-zXPgD0oNPT1MQUe~CF0vHxZJT7s52WRaT2H6S73DcAAKWoZ7QmpYJAg2jruNNxhUZdocQFFUltnQFFz~Evg~2sNDtDBzWdMDuipcOF-BJNG8U1ZCmmhfL6fFSqBFoN5JOJn9JIiJLWWw0TZJ3QIhJlVoA0-1Fe8zCcuKFQyLo3WcFgw__" alt="" />

                    <img src="https://s3-alpha-sig.figma.com/img/0672/74cc/b85889373df836cacab863d0a33856b7?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTL1vvuCGhkL57YmbJn8945U1ju1LZ-GN7sk29xtNMit0r5YolwSo-OXaqvweGr8UjTktk7t0GQAtUYXqXN-FMod6IbQTvglEXcrtrYcO2aiIE7XSIaGcXKbnyE2uLUtI5zZykwH-UrUqobCeAEIhCqqNmoWIzHCsZ5nEBqKGZktIwO79o5tjrOvFuipNcRprWDQqqA0Z3363UpJWrYTBKfwmMnYbJPcVnNleunVLlMupi-pBvOC5ccopbbyGoN33OLcC7kMn2nZqA4FNQz3KTb1bMc8QXOLcYMbXJuns6lMEhvQ1EZBStkcjqxpDdHWyLrFNbnU2HadjZPiLuxdBA__" alt="" />

                    <img src="https://s3-alpha-sig.figma.com/img/a0be/ca2e/ad5cd9a1891e67b8f03ec1f7e057fdea?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUBB3rww0vz8EWQtfjf5RaYQYQ4A-PVhJB1jWnn151AMgwHdrwdidIVHpmpBoQKUI168rINn4DlIH7BBy32uXVCtZqFleSYit-gfpAFsEpgyaP84~ABSZOIy9KgR72HOOtQFHA3ZPPGcsBAllwaUEPbN31-xhmIsOvMB49fcJy~pgAAE6sZe1z1r7Gg8AjD0t4OMdS7KbW9TQ4Cp0FlHQDgrVmrMQQH8ckKMfe55bPBHk7Fae~9f3JzakGmGW0nGP2lRJNhSsEUImOggq63g8KkJIQ3cWhZ45OqlarXnQAeXz7CurH7tbuis1IvrYpeFo9tjwK5WmcHfUPxDSdy1bA__" alt="" />

                    <img src="https://s3-alpha-sig.figma.com/img/4368/5bbb/fc0d5537958bf1580dd59e4acbfeadcd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pp84zjPD~caw9p8riVofcnjCFsOOjxyzJiCja17A42ruVwZs11tLispD6SAsO726NXb4NSYMr4ImUeyvCBxonbJU9LDem0CLgP7PKY~YruN6TUnvJGXzUVGNH4vAIWs2qaf9-vqEukFWp5ocqbGI2SPNNoR28RhKeltM3fS63CgZa1WTxifx8WPrr7s~SjRT7-bW~yb6ptNCHNUgIAzky2wrGrPBrkhznBDFPfYLmim6z1ZFy-IQaecgd7say73lQuKtniWpF5eRLgtljCeO6Uo0T8h8mPMfIlC0TWKQuf-4FZREZidyfVXVvbJKdxHMD6QP3goYukCXiVE3le2t3g__" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Home