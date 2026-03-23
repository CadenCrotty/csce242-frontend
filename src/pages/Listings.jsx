import House from "../components/House";

const Listings = () => {
    return(
        <main id="listings"className="main-content">
            <h2>Listings</h2>
            <div id="houses" className="columns">
                    <House title="Cabin"
                            description="Out door getaway"/>
                    <House title="Farm House"
                            description="Chickens..."/>
                    <House title="Modern Home"
                            description="Losts of corners"/>
            </div>
        </main>
    )
};

export default Listings;