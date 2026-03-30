
import "../css/About.css";
/*fix layout to make it look better later */
const songs = [
  {
    rank: 1,
    title: "Thunder Road",
    artist: "Bruce Springsteen",
    description:
      "An iconic rock ballad that serves as an epic, emotional invitation to escape a dead-end town",
    release: "August 25, 1975",
    plays: "45.2M plays",
  },
  {
    rank: 2,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    description:
      "An iconic 8-minute progressive rock epic featuring a gradual build from acoustic folk to electric hard rock",
    release: "November 8, 1971",
    plays: "89.5M plays",
  },
  {
    rank: 3,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    description:
      "A groundbreaking, six-minute suite that blends balladry, opera, and hard rock",
    release: "October 31, 1975",
    plays: "95.0M plays",
  },
  {
    rank: 4,
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    description:
      "Classic rock ballad known for its iconic opening guitar riff and emotional vocals",
    release: "August 17, 1988",
    plays: "78.0M plays",
  },
  {
    rank: 5,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    description:
      "A 1991 grunge anthem that brought alternative rock to the mainstream",
    release: "September 10, 1991",
    plays: "82.0M plays",
  },
  {
    rank: 6,
    title: "Hotel California",
    artist: "Eagles",
    description:
      "A classic rock song featuring a famous dual-guitar solo and a surreal metaphor",
    release: "February 22, 1977",
    plays: "76.5M plays",
  },
  {
    rank: 7,
    title: "Under Pressure",
    artist: "Queen & David Bowie",
    description:
      "An iconic duet exploring the pressures of modern life with a famous bassline",
    release: "October 26, 1981",
    plays: "61.0M plays",
  },
  {
    rank: 8,
    title: "Back in Black",
    artist: "AC/DC",
    description:
      "A legendary hard rock anthem serving as a tribute to former lead singer Bon Scott",
    release: "July 25, 1980",
    plays: "72.0M plays",
  },
  {
    rank: 9,
    title: "Free Bird",
    artist: "Lynyrd Skynyrd",
    description:
      "A Southern rock ballad about independence and the inability to settle down",
    release: "November 1, 1973",
    plays: "58.0M plays",
  },
  {
    rank: 10,
    title: "Dream On",
    artist: "Aerosmith",
    description:
      "A power ballad about dreams, aging, and the passage of time",
    release: "June 27, 1973",
    plays: "54.0M plays",
  },
];
/*add spaces between song date and playss*/
export default function Rock() {
  return (
    <div className="rock-page">

      <section className="page-title">
        <h3>Top 10 Rock Songs</h3>
        <p>The most iconic and influential tracks in the history of rock</p>
      </section>

      <main className="song-list">
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
      </main>
    </div>
  );
}