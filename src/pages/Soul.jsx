import "../css/Soul.css";

const songs = [
  {
    rank: 1,
    title: "Respect",
    artist: "Aretha Franklin",
    description:
      "A woman demanding recognition and equal standing in a relationship.",
    release: "April 29, 1967",
    plays: "73.0M plays",
  },
  {
    rank: 2,
    title: "What's Going On",
    artist: "Marvin Gaye",
    description:
      "Addresses social injustice, poverty, war, and environmentalism.",
    release: "January 20, 1971",
    plays: "65.0M plays",
  },
  {
    rank: 3,
    title: "I Feel Good",
    artist: "James Brown",
    description:
      "Landmark 1965 funk and soul song celebrated for its high energy, iconic opening scream, and brassy arrangement.",
    release: "October 1, 1965",
    plays: "68.0M plays",
  },
  {
    rank: 4,
    title: "Ain't No Sunshine",
    artist: "Bill Withers",
    description:
      "Sparse, bluesy structure, famous repetition of 'I know,' and lyrics about the melancholy of missing someone.",
    release: "July 1, 1971",
    plays: "56.0M plays",
  },
  {
    rank: 5,
    title: "Let's Stay Together",
    artist: "Al Green",
    description:
      "Soul ballad defining romantic commitment, characterized by its smooth, velvety vocals, and a laid-back, infectious groove.",
    release: "December 1971",
    plays: "61.0M plays",
  },
  {
    rank: 6,
    title: "Superstition",
    artist: "Stevie Wonder",
    description:
      "Acts as a warning against believing in, and subsequently suffering from, irrational superstitions.",
    release: "October 24, 1972",
    plays: "69.0M plays",
  },
  {
    rank: 7,
    title: "Stand by Me",
    artist: "Ben E. King",
    description:
      "Classic soul ballad about unwavering loyalty and support, co-written with Jerry Leiber and Mike Stoller.",
    release: "April 21, 1961",
    plays: "72.0M plays",
  },
  {
    rank: 8,
    title: "Try a Little Tenderness",
    artist: "Otis Redding",
    description:
      "Features a slow emotional build-up that explodes into a passionate, rhythmic R&B finale.",
    release: "November 1966",
    plays: "49.0M plays",
  },
  {
    rank: 9,
    title: "Lovely Day",
    artist: "Bill Withers",
    description:
      "A feel-good soul anthem celebrating optimism, love and emotional resilience.",
    release: "December 21, 1977",
    plays: "53.0M plays",
  },
  {
    rank: 10,
    title: "I Heard it Through the Grapevine",
    artist: "Marvin Gaye",
    description:
      "Portrays a betrayed lover learning of his partner's infidelity through rumors rather than direct communication.",
    release: "October 30, 1968",
    plays: "64.0M plays",
  },
];

export default function Soul() {
  return (
    <div className="soul-page">
      <section className="page-title">
        <h2>Top 10 Soul Songs</h2>
        <p>The most iconic and influential tracks in the history of Soul</p>
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