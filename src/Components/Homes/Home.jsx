import './Home.css'
import Slider from './Slider'

const Home = () => {
    return(
        <>
        <div className="home-container">
            <div className="box1">
                <img className='box1img' src="https://images.news18.com/ibnlive/uploads/2016/09/boman-iranai.jpg" alt="Viru Viru Sahastrabudhhe" />
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
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/TaareZameenPar.jpeg" alt="" />
                    
                    <img src="https://im.rediff.com/movies/2019/jul/09teacher1.jpg" alt="" />

                    <img src="https://im.rediff.com/movies/2019/jul/09teacher8.jpg" alt="" />

                    <img src="https://im.rediff.com/movies/2019/jul/09teacher11.jpg" alt="" />

                    <img src="https://im.rediff.com/movies/2019/jul/09teacher24.jpg" alt="" />

                    <img src="https://im.rediff.com/movies/2019/jul/09teacher6.jpg" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Home