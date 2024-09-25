// articles.ts

export const articles = [
    {
      title: "My Portfolio",
      date: "2024-09-25",
      author: "Nekwo aka Retrocaus",
      content: (
        <div style={{ display: 'flex', padding: '16px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ flex: 1 }}>
            <header style={{ borderBottom: '2px solid #85dce1', paddingBottom: '10px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '3.5em', margin: '0' }}>This is What I'm up to!</h1>
              <p style={{ color: '#555', margin: '5px 0' }}>By <strong>Nekwo aka Retrocaus</strong> | Published on <time dateTime="2024-9-22">September 22, 2024</time></p>
            </header>
            <article>
              <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Education</h2>
                <p style={{ fontSize: '1.2em' }}>Studied Computer and Mechatronics engineering in NYC, Self taught most things since CUNY is mid, like CAD CAM, CIRCUIT DESIGN, 
                  C++, MOX [conan package manager x lua build system for c++], PYTHON,HTML, CSS, JAVASCRIPT, REACT, NODE, EXPRESS, MONGODB, UNREAL ENGINE, BLENDER, MAYA, ZBRUSH,
                  PHOTOSHOP, PREMIERE, NGNX, 
                   </p>
                   <p style={{ fontSize: '1.2em' }}>
                    I am Mostly passionate about Unreal engine and AI, if you want to get into AI I have a video on YouTube on how to get started with image gen using the latest open source tech
                    <a href="https://youtu.be/wXRUouN0XVE?si=Ka8znpubDErvApeJ" target="_blank" rel="noopener noreferrer"> here</a>
                  </p>

                  <p style={{ fontSize: '1.2em' }}>
                    This is my channel where I post educational content as well for unreal engine 5, c++ and beyond
                    <a href="https://www.youtube.com/@Retrocaus" target="_blank" rel="noopener noreferrer"> here</a>
                  </p>
              </section>
              <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Projects</h2>
                <p style={{ fontSize: '1.1em' }}>I've built alot of bots I started opensourcing a few of my stuff a little while ago but I have been mostly building my unreal engine app for the past few years</p>
                <p style={{ fontSize: '1.1em' }}><a href="https://github.com/nekwo" target="_blank" rel="noopener noreferrer"> here is my github i will be uploading this website there soon</a></p>
              </section>
              <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Work experience</h2>
                <p style={{ fontSize: '1.1em' }}>Due to the corrupt financial and education system I had to learn everythign myself so I run my own stuff @ Arcadia Labs if you need something done for the right price @me on twitter @retrocause</p>
              </section>
            </article>
            <footer style={{ borderTop: '2px solid #85dce1', paddingTop: '10px', marginTop: '20px', textAlign: 'center', color: '#555' }}>
              <p>&copy; 2024 Eternia Blog. All rights reserved.</p>
            </footer>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
            
          </div>
        </div>
      )
    },
    {
      title: "Meow meow meow",
      date: "2024-09-22",
      author: "Nekwo aka Retrocaus",
      content: (
        <div style={{ display: 'flex', padding: '16px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ flex: 1 }}>
            <header style={{ borderBottom: '2px solid #85dce1', paddingBottom: '10px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '3.5em', margin: '0' }}>Meow!</h1>
              <p style={{ color: '#555', margin: '5px 0' }}>By <strong>Nekwo aka Retrocaus</strong> | Published on <time dateTime="2024-9-25">September 22, 2024</time></p>
            </header>
            <article>
              <section style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Meow Meow </h2>
                <p style={{ fontSize: '1.2em' }}>Meow meow meow meow meow meow Meow meow meow meow meow meow meow meow meow</p>
              </section>
            </article>
            <footer style={{ borderTop: '2px solid #85dce1', paddingTop: '10px', marginTop: '20px', textAlign: 'center', color: '#555' }}>
              <p>&copy; 2024 Eternia Blog. All rights reserved.</p>
            </footer>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
            <img src="" alt="yami" style={{ maxWidth: '100%', maxHeight: '200px', width: 'auto', height: 'auto' }} />
            <img src="" alt="meow" style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto', height: 'auto', marginTop: '20px' }} />
          </div>
        </div>
      )
    },
    // Add more articles here
  ];