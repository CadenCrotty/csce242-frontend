import "../css/Reggae.css";

const songs = [
  {
    rank: 1,
    title: "No Woman, No Cry",
    artist: "Bob Marley & The Wailers",
    description:
      "An iconic reggae song of comfort, resilience, and nostalgia, assuring a woman that ‘everything’s gonna be alright’ despite living in poverty in Trenchtown, Jamaica.",
    release: "October 1974",
    plays: "78.0M plays",
  },
  {
    rank: 2,
    title: "Three Little Birds",
    artist: "Bob Marley & The Wailers",
    description:
      "Serves as a cheerful anthem of hope and resilience, often interpreted as a reminder to remain positive and overcome life’s daily anxieties.",
    release: "June 3, 1977",
    plays: "71.0M plays",
  },
  {
    rank: 3,
    title: "Redemption Song",
    artist: "Bob Marley & The Wailers",
    description:
      "A raw, acoustic anthem of self-liberation and mental freedom.",
    release: "October 10, 1980",
    plays: "66.0M plays",
  },
  {
    rank: 4,
    title: "Israelites",
    artist: "Desmond Dekker",
    description:
      "Details the struggles of the poor, referencing biblical themes of suffering.",
    release: "December 1968",
    plays: "38.0M plays",
  },
  {
    rank: 5,
    title: "The Harder They Come",
    artist: "Jimmy Cliff",
    description:
      "A reggae anthem representing defiance against oppression and the struggle for personal dignity.",
    release: "September 1, 1972",
    plays: "42.0M plays",
  },
  {
    rank: 6,
    title: "Red Red Wine",
    artist: "UB40",
    description:
      "A popular song about using alcohol to forget sorrow.",
    release: "August 29, 1983",
    plays: "59.0M plays",
  },
  {
    rank: 7,
    title: "Police and Thieves",
    artist: "Junior Murvin",
    description:
      "A landmark roots reggae song inspired by political violence, gang warfare, and police brutality in Kingston, Jamaica, ahead of the 1976 elections.",
    release: "1976",
    plays: "31.0M plays",
  },
  {
    rank: 8,
    title: "Rivers of Babylon",
    artist: "Boney M",
    description:
      "Expressing themes of exile, oppression, and longing for home.",
    release: "April 1978",
    plays: "54.0M plays",
  },
  {
    rank: 9,
    title: "54-46 Was My Number",
    artist: "Toots and the Maytals",
    description:
      "A song written by Fred ‘Toots’ Hibbert, detailing his personal, wrongful imprisonment for marijuana possession.",
    release: "1968",
    plays: "29.0M plays",
  },
  {
    rank: 10,
    title: "Pressure Drop",
    artist: "Toots and the Maytals",
    description:
      "An iconic reggae anthem about karmic justice, warning that those who do wrong to others will face inevitable consequences.",
    release: "1970",
    plays: "35.0M plays",
  },
];

export default function Reggae() {
  return (
    <div className="reggae-page">
      <section className="page-title">
        <h2>Top 10 Reggae Songs</h2>
        <p>The most iconic and influential tracks in the history of reggae</p>
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