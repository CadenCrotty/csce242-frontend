import "../css/Home.css";

import Slideshow from "../components/Slideshow";


import bob from "../images/redemption.jpg";
import hank from "../images/HWJr.png";
import basie from "../images/CB.png";
import marvin from "../images/MG.png";
import skynyrd from "../images/bird.jpg";

const Home = () => {
    return (
        <main id="home" className="main-content">
            <h2>Welcome to Top Tracks</h2>
            <p className="home-text">Explore the greatest songs across Rock, Country, Jazz, Soul, and Reggae. Discover top tracks from iconic artists, and timeless classics that have shaped music history. Whether you're a longtime fan or new to these genres. TopTracks is your gateway to discovery.</p>
            <Slideshow />

            <div className="card-container">
            <div className="card card1">
                <h2>Top 10 Charts</h2>
                <p>Curated lists of the most influential songs in each genre</p>
            </div>

            <div className="card card2">
                <h2>Rich Details</h2>
                <p>Learn about each songs story, release date, and cultural impact</p>
            </div>

            <div className="card card3">
                <h2>Featured Artists</h2>
                <p>Explore legendary performers and their signature hits</p>
            </div>
            </div>
            
            <h2 className="section-title">Featured Artists</h2>

            <div className="artists">
            <div className="artist">
                <img src={skynyrd} alt="Lynyrd Skynyrd" />
                <p>Lynyrd Skynyrd</p>
            </div>

            <div className="artist">
                <img src={hank} alt="Hank Williams Jr" />
                <p>Hank Williams Jr</p>
            </div>

            <div className="artist">
                <img src={basie} alt="Count Basie" />
                <p>Count Basie</p>
            </div>

            <div className="artist">
                <img src={marvin} alt="Marvin Gaye" />
                <p>Marvin Gaye</p>
            </div>

            <div className="artist">
                <img src={bob} alt="Bob Marley" />
                <p>Bob Marley</p>
            </div>
            </div>
        </main>
    );

};

export default Home;