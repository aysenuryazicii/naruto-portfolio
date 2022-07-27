import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Hatake Kakashi",
      title: "Team Leader",
      img: "https://i.pinimg.com/originals/f6/c1/9a/f6c19a2717c5bc3f44c5f73953b53755.jpg",
      icon: "assets/twitter.png",
      desc: "Hmmm… how do I put this? My first impression of this group… you're a bunch of idiots!",
    },
    {
      id: 2,
      name: "Uchiha Sasuke",
      title: "Mid-Level Shinobi",
      img: "https://cdn131.picsart.com/243152572027202.jpg?to=crop&type=webp&r=1456x1442&q=85",
      icon: "assets/youtube.png",
      desc: "I never want to see another important person die in front of me again.",
      featured: true,
    },
    {
      id: 3,
      name: "Jiraiya",
      title: "Sannin",
      img: "https://64.media.tumblr.com/eadb8eb6cbc7817444ef5a747d970686/e3e1829c6ff93fb2-b9/s1280x1920/b504c9da3695747796d62fa189e8bde9549b506d.jpg",
      icon: "assets/linkedin.png",
      desc: "Let me explain something to you, there is only one thing that matters if you are a shinobi, and it isn't the number of jutsu you possess. All you do need, is the guts to never give up.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc} </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
