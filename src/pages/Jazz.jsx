import "../css/Jazz.css";

const songs = [
  {
    rank: 1,
    title: "Take Five",
    artist: "Dave Brubeck Quartet",
    description:
      "A famous jazz standard renowned for its cool, sophisticated atmosphere, catchy alto saxophone melody, and pioneering 5/4 time signature.",
    release: "July 1, 1959",
    plays: "38.0M plays",
  },
  {
    rank: 2,
    title: "So What",
    artist: "Miles Davis",
    description:
      "A relaxed “cool” feel, minimal chord changes, and AABA structure based on D Dorian mode.",
    release: "August 17, 1959",
    plays: "42.0M plays",
  },
  {
    rank: 3,
    title: "A Love Supreme Pt. 1",
    artist: "John Coltrane",
    description:
      "A musical declaration of devotion, faith, and gratitude to God.",
    release: "February 1965",
    plays: "31.0M plays",
  },
  {
    rank: 4,
    title: "Round Midnight",
    artist: "Thelonious Monk",
    description:
      "Often evokes a sense of nocturnal solitude, heartbreak, and yearning.",
    release: "November 21, 1947",
    plays: "29.0M plays",
  },
  {
    rank: 5,
    title: "My Favorite Things",
    artist: "John Coltrane",
    description:
      "A transformative, 14-minute modal jazz masterpiece that reimagines the Sound of Music show tune as hypnotic, whirling dervish dance.",
    release: "March 7, 1961",
    plays: "36.0M plays",
  },
  {
    rank: 6,
    title: "Strange Fruit",
    artist: "Billie Holiday",
    description:
      "A haunting, powerful protest ballad condemning the lynching of Black Americans in the Southern US.",
    release: "April 20, 1939",
    plays: "28.0M plays",
  },
  {
    rank: 7,
    title: "Giant Steps",
    artist: "John Coltrane",
    description:
      "A legendary, fast-paced hard bop track renowned as one of the most challenging, “feared” compositions in jazz.",
    release: "February 1, 1960",
    plays: "32.0M plays",
  },
  {
    rank: 8,
    title: "Summertime",
    artist: "Ella Fitzgerald",
    description:
      "An iconic, slow-tempo jazz interpretation of the Porgy and Bess aria.",
    release: "August 1, 1957",
    plays: "33.0M plays",
  },
  {
    rank: 9,
    title: "Blue in Green",
    artist: "Miles Davis",
    description:
      "A relaxed “cool” feel, minimal chord changes, and AABA structure based on D Dorian mode.",
    release: "August 17, 1959",
    plays: "35.0M plays",
  },
  {
    rank: 10,
    title: "Autumn Leaves",
    artist: "Bill Evans Trio",
    description:
      "Known for its conversational, democratic interplay.",
    release: "December 28, 1959",
    plays: "27.0M plays",
  },
];

export default function Jazz() {
  return (
    <div className="jazz-page">
      <section className="page-title">
        <h2>Top 10 Jazz Songs</h2>
        <p>The most influential and beloved tracks in jazz music history</p>
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