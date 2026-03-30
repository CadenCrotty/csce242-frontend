import "../css/Country.css";

const songs = [
  {
    rank: 1,
    title: "Take Me Home, Country Roads",
    artist: "John Denver",
    description:
      "An iconic folk-rock ballad celebrating rural nostalgia and longing for home, specifically West Virginia",
    release: "April 12, 1971",
    plays: "67.0M plays",
  },
  {
    rank: 2,
    title: "Jolene",
    artist: "Dolly Parton",
    description:
      "A country ballad where a vulnerable narrator begs a breathtakingly beautiful rival to not steal her man",
    release: "October 1, 1973",
    plays: "58.0M plays",
  },
  {
    rank: 3,
    title: "Ring of Fire",
    artist: "Johnny Cash",
    description:
      "A country song that uses intense fiery imagery as a metaphor for the experience of falling into uncontrollable, passionate love",
    release: "April 1, 1963",
    plays: "71.0M plays",
  },
  {
    rank: 4,
    title: "The Gambler",
    artist: "Kenny Rogers",
    description:
      "A narrative country song about a chance encounter on a train where a weary gambler imparts life advice to the narrator using poker",
    release: "November 15, 1978",
    plays: "52.0M plays",
  },
  {
    rank: 5,
    title: "I Walk the Line",
    artist: "Johnny Cash",
    description:
      "Written as a sincere pledge of fidelity to his first wife, Vivian Liberto, while touring",
    release: "May 1, 1956",
    plays: "48.0M plays",
  },
  {
    rank: 6,
    title: "Before He Cheats",
    artist: "Carrie Underwood",
    description:
      "Tells the story of a woman taking revenge on her potentially unfaithful partner",
    release: "August 19, 2006",
    plays: "64.0M plays",
  },
  {
    rank: 7,
    title: "Friends in Low Places",
    artist: "Garth Brooks",
    description:
      "A country anthem about heartbreak, pride, and choosing authentic friendships over high-society pretension",
    release: "August 6, 1990",
    plays: "59.0M plays",
  },
  {
    rank: 8,
    title: "The Dance",
    artist: "Garth Brooks",
    description:
      "A love story about a failed relationship and a broader metaphor for life, focusing on the beauty of experiences despite the pain",
    release: "April 9, 1990",
    plays: "46.0M plays",
  },
  {
    rank: 9,
    title: "Wagon Wheel",
    artist: "Old Crow Medicine Show",
    description:
      "Tells the story of a hitchhiker traveling from New England to Raleigh, North Carolina, featuring a catch chorus about finding home",
    release: "February 24, 2004",
    plays: "55.0M plays",
  },
  {
    rank: 10,
    title: "Amarillo by Morning",
    artist: "George Strait",
    description:
      "A classic country ballad depicting the arduous, lonely life of a rodeo cowboy traveling Texas",
    release: "September 1983",
    plays: "42.0M plays",
  },
];

export default function Country() {
  return (
    <div className="country-page">
      <section className="page-title">
        <h2>Top 10 Country Songs</h2>
        <p>The most influential and beloved tracks in country music history</p>
      </section>

      <section className="song-list">
        {songs.map((song) => (
          <article className="song-card" key={song.rank}>
            <div className="song-rank">#{song.rank}</div>

            <div className="album-image">
              
            </div>

            <div className="song-info">
              <h2>{song.title}</h2>
              <h3>{song.artist}</h3>
              <p className="song-description">"{song.description}"</p>

              <div className="song-data">
                <span>Release: {song.release}</span>
                <span>{song.plays}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}