// articles.tsx

export const articles = [
  {
    title: "My Portfolio",
    date: "2024-09-25",
    author: "Nekwo aka Retrocaus",
    content: (
      <div className="container">
        <div className="main-content">
          <header className="header">
            <h1 className="MainAH1">This is What I'm up to!</h1>
            <p className="paragraph">
              By <strong>Nekwo aka Retrocaus</strong> | Published on <time dateTime="2024-9-22">September 22, 2024</time>
            </p>
          </header>
          <article>
            <section className="article">
              <h2 className="section-heading">Education</h2>
              <p className="introduction-paragraph">
                Studied Computer and Mechatronics engineering in NYC, Self taught most things since CUNY is mid, like CAD CAM, CIRCUIT DESIGN, 
                C++, MOX [conan package manager x lua build system for c++], PYTHON, HTML, CSS, JAVASCRIPT, REACT, NODE, EXPRESS, MONGODB, UNREAL ENGINE, BLENDER, MAYA, ZBRUSH,
                PHOTOSHOP, PREMIERE, NGNX,
              </p>
              <p className="introduction-paragraph">
                I am Mostly passionate about Unreal engine and AI, if you want to get into AI I have a video on YouTube on how to get started with image gen using the latest open source tech
                <a href="https://youtu.be/wXRUouN0XVE?si=Ka8znpubDErvApeJ" target="_blank" rel="noopener noreferrer"> here</a>
              </p>
              <p className="introduction-paragraph">
                This is my channel where I post educational content as well for unreal engine 5, c++ and beyond
                <a href="https://www.youtube.com/@Retrocaus" target="_blank" rel="noopener noreferrer"> here</a>
              </p>
            </section>
            <section className="article">
              <h2 className="section-heading">Projects</h2>
              <p className="section-paragraph">
                I've built a lot of bots. I started open-sourcing a few of my projects a little while ago, but I have been mostly building my Unreal Engine app for the past few years.
              </p>
              <p className="section-paragraph">
                <a href="https://github.com/nekwo" target="_blank" rel="noopener noreferrer">Here is my GitHub. I will be uploading this website there soon.</a>
              </p>
            </section>
            <section className="article">
              <h2 className="section-heading">Work Experience</h2>
              <p className="section-paragraph">
                Due to the corrupt financial and education system, I had to learn everything myself, so I run my own stuff @ Arcadia Labs. If you need something done for the right price, @me on Twitter @retrocause.
              </p>
            </section>
          </article>
          <footer className="footer">
            <p>&copy; 2024 Eternia Blog. All rights reserved.</p>
          </footer>
        </div>
        <div className="sidebar">
          {/* Add any sidebar content here */}
        </div>
      </div>
    )
  },
  {
    title: "Meow meow meow",
    date: "2024-09-22",
    author: "Nekwo aka Retrocaus",
    content: (
      <div className="container">
        <div className="main-content">
          <header className="header">
            <h1 className="MainAH1">Meow!</h1>
            <p className="paragraph">
              By <strong>Nekwo aka Retrocaus</strong> | Published on <time dateTime="2024-9-25">September 22, 2024</time>
            </p>
          </header>
          <article>
            <section className="article">
              <h2 className="section-heading">Meow Meow</h2>
              <p className="introduction-paragraph">
                Meow meow meow meow meow meow Meow meow meow meow meow meow meow meow meow
              </p>
            </section>
          </article>
          <footer className="footer">
            <p>&copy; 2024 Eternia Blog. All rights reserved.</p>
          </footer>
        </div>
        <div className="sidebar">
          <img src="" alt="yami" className="image image-yami" />
          <img src="" alt="meow" className="image image-meow" />
        </div>
      </div>
    )
  },
  // Add more articles here
];