import { useState,useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Modal, TitleBar, List, TaskBar, TextArea, Frame } from '@react95/core';
import { Faxcover3, ReaderClosed, WindowsExplorer, BatExec,  Star, CdMusic} from '@react95/icons';
import styled from 'styled-components'
import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';
import { articles } from './modules/articles'; // Import the articles array

//import react95Logo from '/React95.png';
import './App.css';

//Themes
import '@react95/core/GlobalStyle';
import '@react95/core/themes/rose.css';
import './modules/kawaii.css';



//icon styles
const Icon = styled.button`
  all: unset;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;

  * {
    cursor: pointer;
  }
`
// Snap icons to grid
const gridSize = 40;
const snapToGrid = (x: number, y: number, gridSize: number) => {
  const newX = Math.round(x / gridSize) * gridSize;
  const newY = Math.round(y / gridSize) * gridSize;
  return { newX, newY };
};


function App() {

  //drag and drop
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const { newX, newY } = snapToGrid(data.x, data.y, gridSize);
    setPosition({ x: newX, y: newY });
  };
  const handleStop2 = (e: DraggableEvent, data: DraggableData) => {
    const { newX, newY } = snapToGrid(data.x, data.y, gridSize);
    setPosition2({ x: newX, y: newY });
  };

  const handleStop3 = (e: DraggableEvent, data: DraggableData) => {
    const { newX, newY } = snapToGrid(data.x, data.y, gridSize);
    setPosition3({ x: newX, y: newY });
  };

  //Modal exe state
  const [showModal, setShowModal] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [showMediaPlayerPolka, setshowMediaPlayer] = useState(true)
  //const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMuted, setIsMuted] = useState(true);
  const videoUrls = [
    "/levanpolkacomp.mp4",
    "https://www.youtube.com/watch?v=lwrJNXRpXYI",
    "https://www.youtube.com/watch?v=o1iz4L-5zkQ",
    "https://www.youtube.com/watch?v=WGzfIubGMpo&list=PLYy1ak97OiTsB2rBPD2x1fx-KqDjSxPug&index=12",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  //mute on start and click anywhere to play audio
  const handleUnmute = () => {
    setIsMuted(false);
  };
  useEffect(() => {
    const handleClick = () => {
      setIsMuted(false);
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const [showMediaPlayerLuckyop, setshowMediaPlayerLuckyop] = useState(true)
  const [showMediaPlayerSpotify, setshowMediaPlayerSpotify] = useState(false)
  const [position2, setPosition2] = useState({ x: 0, y: 0 });

  //articles
  const [showArticles, setShowArticles] = useState(false)
  //const [isMinimized, setIsMinimized] = useState(false);
  const [position3, setPosition3] = useState({ x: 0, y: 0 });
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);


  const [showgif, setshowgif] = useState(true)


  const [currentPath, setCurrentPath] = useState<string>('public');
  const [files, setFiles] = useState<string[]>([
    '/x.jpg', 'arona-blue-archive.gif', 'Flowerwaifu.png','TLRYAMITOYAK.gif','CityScape.png','levanpolkacomp.mp4']);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  
  const handleFileClick = (file: string) => {
    if (file.includes('.')) {
      setSelectedFile(`${currentPath}/${file}`);
    } else {
      const newPath = `${currentPath}/${file}`;
      setCurrentPath(newPath);
    }
  };
  
  const handleBackClick = () => {
    const newPath = currentPath.split('/').slice(0, -1).join('/');
    setCurrentPath(newPath || 'public');
  };

const handleCloseFileModal = () => {
  setSelectedFile(null);
};

const [isFileExplorerOpen, setIsFileExplorerOpen] = useState(false);

  return (
    
    <>

      {showgif && ( //Arona gif
  <Modal
    style={{
      width: 'fit-content',
      height: 'fit-content',
      padding: '5px'
    }}
    icon={<Star variant="32x32_4" />}
    title="OHMYARONA"
    dragOptions={{
      defaultPosition: {
        x: -1000,
        y: 980,
      },
    }}
    titleBarOptions={[
      <TitleBar.Help
        key="help"
        onClick={() => {
          alert('Yell Meow for help!');
        }}
      />,
      <TitleBar.Minimize key="minimize2" />,
      <TitleBar.Close key="close2" onClick={() => setshowgif(false)} />,
    ]}
    buttons={[]}
  >
    <Modal.Content
      width="340px"
      height="160px"
      boxShadow="$in"
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
        <img 
          src="/arona-blue-archive.gif" 
          alt="omgarona" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </Modal.Content>
  </Modal>
      )}

      {showMediaPlayerSpotify && ( //spotify player
              <Modal
              style={{
                width: 'fit-content',
                height: 'fit-content',
                padding: '5px'
              }}

              icon={<Star variant="32x32_4" />}
              title="Music Player"
              dragOptions={{
                defaultPosition: {
                  x: 400,
                  y: 500,
                },
              }}
              titleBarOptions={[
                
                <TitleBar.Help
                  key="help"
                  onClick={() => {
                    alert('Yell Meow for help!');
                  }}
                />,
                <TitleBar.Minimize key="minimize2"  />,
                <TitleBar.Close key="close2" onClick={() => setshowMediaPlayerSpotify(false)} />,
                
                
              ]}
              buttons={[
                //{ value: 'Close', onClick: () => setShowModal(false) },
                //{ value: 'Minimize', onClick: () => setIsMinimized(true) },
              ]}
            >
              
              <Modal.Content
                 width="640px"  // Set exact width
                 height="360px" // Set exact height
                boxShadow="$in"
              >

<Frame
        boxShadow="none"
        style={{
          height: "352px",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/6onmykglWM378jdXBtvbzh?si=017c25ed5bdc41c9?utm_source=generator&theme=0 "
          width="100%"
          height="352px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="The Ultimate Lo-Fi House Playlist on Spotify"
        />
      </Frame>

                
              </Modal.Content>
            </Modal>
            )}

      {showMediaPlayerLuckyop && ( //lucky star op player
              <Modal
              style={{
                width: 'fit-content',
                height: 'fit-content',
                padding: '5px'
              }}

              icon={<Star variant="32x32_4" />}
              title="Lucky"
              dragOptions={{
                defaultPosition: {
                  x: 400,
                  y: 700,
                },
              }}
              titleBarOptions={[
                
                <TitleBar.Help
                  key="help"
                  onClick={() => {
                    alert('Yell Meow for help! Or dm on ig @godoftimee');
                  }}
                />,
                <TitleBar.Minimize key="minimize2"  />,
                <TitleBar.Close key="close2" onClick={() => setshowMediaPlayerLuckyop(false)} />,
                
                
              ]}
              buttons={[
                //{ value: 'Close', onClick: () => setShowModal(false) },
                //{ value: 'Minimize', onClick: () => setIsMinimized(true) },
              ]}
            >
              
              <Modal.Content
                 width="640px"  // Set exact width
                 height="360px" // Set exact height
                boxShadow="$in"
              >

              <ReactPlayer
              url="https://www.youtube.com/watch?v=6iseNlvH2_s"
              controls
              width="100%"
              height="100%"
              playing={false}
              muted={false}
              />

                
              </Modal.Content>
            </Modal>
            )}

      {showMediaPlayerPolka && ( //Miku polka player
              <Modal
              style={{
                width: 'fit-content',
                height: 'fit-content',
                padding: '5px'
              }}

              icon={<Star variant="32x32_4" />}
              title="Miku Nation"
              dragOptions={{
                defaultPosition: {
                  x: 500,
                  y: 100,
                },
              }}
              titleBarOptions={[
                
                <TitleBar.Help
                  key="help"
                  onClick={() => {
                    alert('Yell Meow for help!');
                  }}
                />,
                <TitleBar.Minimize key="minimize2"  />,
                <TitleBar.Close key="close2" onClick={() => setshowMediaPlayer(false)} />,
                
                
              ]}
              buttons={[
                //{ value: 'Close', onClick: () => setShowModal(false) },
                //{ value: 'Minimize', onClick: () => setIsMinimized(true) },
                { value: 'Next' , onClick: handleNextVideo },
              ]}
            >
              
              <Modal.Content
                width= "640px"
                height="360px"
                boxShadow="$in"
              >

              <ReactPlayer
              url={videoUrls[currentIndex]}
              controls
              width="100%"
              height="100%"
              playing={true}
              muted={isMuted}
              />

                
              </Modal.Content>
            </Modal>
            )}

      {showModal && !isMinimized && ( //main intro modal exe
              <Modal
              style={{
                padding: '5px'
              }}

              icon={<BatExec variant="32x32_4" />}
              title="Galactic Executable"
              dragOptions={{
                defaultPosition: {
                  x: -900,
                  y: 300,
                },
              }}
              titleBarOptions={[
                
                <TitleBar.Help
                  key="help"
                  onClick={() => {
                    alert('Yell Meow for help!');
                  }}
                />,
                <TitleBar.Minimize key="minimize" />,
                <TitleBar.Close key="close" onClick={() => setShowModal(false)} />,
                
                
              ]}
              buttons={[
                //{ value: 'Close', onClick: () => setShowModal(false) },
                //{ value: 'Minimize', onClick: () => setIsMinimized(true) },
              ]}
            >
              


              <Modal.Content
                width= "fit-content"
                height="fit-content"
                boxShadow="$in"
                //bgColor="white"
              >

                      <div style={{ display: 'flex', padding: '16px', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                      <div style={{ flex: 1 }}>
                        <header style={{ borderBottom: '2px solid #85dce1', paddingBottom: '10px', marginBottom: '20px' }}>
                          <h1 style={{ fontSize: '3.5em', margin: '0' }}>Welcome to My site!</h1>
                          <p style={{ color: '#555', margin: '5px 0' }}>By <strong>Nekwo aka Retrocaus</strong> | Published on <time dateTime="2024-9-22">September 22, 2024</time></p>
                        </header>
                        <article>
                          <section style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Introduction</h2>
                            <p style={{ fontSize: '1.2em' }} > On the left you can double click on the desktop icons to open my latest mini apps or just explore (Everything is draggable and close-able; minimizing coming soon!) </p>
                          </section>
                          <section style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Directory</h2>
                            <p style={{ fontSize: '1.1em' }}>Here is a quick directory to my latest stuff</p>
                            <p style={{ fontSize: '1.1em' }}>Make sure you check out Eternia the metaverse game once I release it, sign up with your email when it is time for special rewards</p>
                            <p style={{ fontSize: '1.1em' }}>Click here to see my latest articles</p>
                          </section>
                          <section style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '2.5em', margin: '0 0 10px 0' }}>Credits</h2>
                            <p style={{ fontSize: '1.1em' }}>React95 library; Flower girl is from the ED of 16bit Sensation: Another Layer; Cityscape background by me; Hatsune Miku Ievan Polkka Dance Comparison; All articles by me</p>
                          </section>
                        </article>
                        <footer style={{ borderTop: '2px solid #85dce1', paddingTop: '10px', marginTop: '20px', textAlign: 'center', color: '#555' }}>
                          <p>&copy; 2024 Eternia Blog. All rights reserved.</p>
                        </footer>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                      <img src="/TLRYAMITOYAK.gif" alt="yami" style={{ maxWidth: '100%', maxHeight: '200px', width: 'auto', height: 'auto' }} />
                      <img src="/x.jpg" alt="meow" style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto', height: 'auto', marginTop: '20px' }} />
                    </div>
                    </div>

              </Modal.Content>
            </Modal>
            )}


      {/* File Explorer */}
      {isFileExplorerOpen && (
        <Modal
          style={{
            width: 'fit-content',
            height: 'fit-content',
            padding: '5px'
          }}
          icon={<WindowsExplorer variant="32x32_4" />}
          title="File Explorer"
          dragOptions={{
            defaultPosition: {
              x: -400,
              y: 700,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert('Yell Meow for help! Or dm on ig @godoftimee');
              }}
            />,
            <TitleBar.Minimize key="minimize2" />,
            <TitleBar.Close key="close2" onClick={() => setIsFileExplorerOpen(false)} />,
          ]}
          buttons={[]}
        >
          <Modal.Content
      width="640px"  // Set exact width
      height="360px" // Set exact height
      boxShadow="$in"
    >
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
        {files.map((file) => (
          <div
            key={file}
            onClick={() => handleFileClick(file)}
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer',
              padding: '5px',
            }}
          >
            {file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.jpg') ? (
              <img
                src={`/${currentPath}/${file}`}
                alt={file}
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            ) : file.endsWith('.mp4') ? (
              <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>🎥</span>
              </div>
            ) : (
              <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>{file}</span>
              </div>
            )}
            <span style={{ marginTop: '5px', textAlign: 'center', fontSize: '12px' }}>{file}</span>
          </div>
        ))}
      </div>
    </Modal.Content>
        </Modal>
      )}

      {selectedFile && (
        <Modal
          style={{
            width: 'fit-content',
            height: 'fit-content',
            padding: '5px'
          }}
          icon={<ReaderClosed variant="32x32_4" />}
          title={selectedFile ? selectedFile.split('/').pop() : ''}
          dragOptions={{
            defaultPosition: {
              x: -400,
              y: 250,
            },
          }}
          titleBarOptions={[
            <TitleBar.Help
              key="help"
              onClick={() => {
                alert('Yell Meow for help! Or dm on ig @godoftimee');
              }}
            />,
            <TitleBar.Minimize key="minimize2" />,
            <TitleBar.Close key="close2" onClick={handleCloseFileModal} />,
          ]}
          buttons={[]}
        >
          <Modal.Content
            width="640px"  // Set exact width
            height="360px" // Set exact height
            boxShadow="$in"
          >
            {selectedFile && (selectedFile.endsWith('.txt') ? (
              <TextArea
                rows={20}
                cols={60}
                value={`Content of ${selectedFile}`}
                readOnly
              />
            ) : selectedFile.endsWith('.mp4') ? (
              <ReactPlayer
                url={`/${selectedFile}`}
                controls
                width="100%"
                height="100%"
                playing={false}
                muted={false}
              />
            ) : selectedFile.endsWith('.png') || selectedFile.endsWith('.gif') || selectedFile.endsWith('.jpg') ? (
              <img
                src={`/${selectedFile}`}
                alt={selectedFile}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : (
              <p>Preview not available</p>
            ))}
          </Modal.Content>
        </Modal>
      )}
      {/*  */}
    
      {/* Articles */}
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
              

              {showArticles &&(<Modal
                style={{
                  width: 'fit-content',
                  height: 'fit-content',
                  padding: '5px',
                }}
                icon={<Star variant="32x32_4" />}
                title={selectedArticle ? selectedArticle.title : 'Articles'}
                dragOptions={{
                  defaultPosition: {
                    x: -200,
                    y: 500,
                  },
                }}
                titleBarOptions={[
                  <TitleBar.Help
                    key="help"
                    onClick={() => {
                      alert('Yell Meow for help!');
                    }}
                  />,
                  <TitleBar.Minimize key="minimize" />,
                  <TitleBar.Close key="close" onClick={() => { setSelectedArticle(null); setShowArticles(false); }} />,
                ]}
                buttons={[]}
              >
                <Modal.Content
                  width="fit-content"
                  height="fit-content"
                  boxShadow="$in"
                >
                  
                  {!selectedArticle && (
                <div>
                  <h1 style={{ fontSize: '5em', margin: '0' }}>Latest Posts</h1>
                </div>
              )}
                  {!selectedArticle ? (
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {articles.map((article, index) => (
                        <li
                          key={index}
                          style={{
                            margin: '10px 0',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                          }}
                          onClick={() => setSelectedArticle(article)}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                        >
                          <h2 style={{ margin: 0, fontSize: '2.2em' }}>{article.title}</h2>
                          <p style={{ margin: 0, color: '#555' }}>{article.date}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <p>{selectedArticle.content}</p>
                      <button
                        onClick={() => setSelectedArticle(null)}
                        style={{
                          display: 'block',
                          margin: '10px auto',
                          padding: '10px 20px',
                          backgroundColor: '#0078d4',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '1em',
                        }}
                      >
                        Back To Articles
                      </button>
                    </div>
                  )}
                </Modal.Content>
              </Modal>)}
      </div> 
      {/*  */} 

        
      <div //background settings
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(Flowerwaifu.png)`, // Use your image here
          //backgroundColor: 'steelblue',//'#dec486', // Fallback color
          backgroundSize: '70%', 
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          zIndex: -1, // Keeps the background behind everything
      }}></div>

      <div //backgrounds backround
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(CityScape.png)`, // Use your image here
          backgroundColor: 'steelblue',//'#dec486', // Fallback color
          backgroundSize: 'cover', 
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          zIndex: -2, // Keeps the background behind everything
       }}></div>


      {/* desktop icons */}

      {/* Main*/}
      <Draggable position={position} onStop={handleStop}>     
      <Icon onDoubleClick={() => setShowModal(true)} 
        style={{
          position: 'absolute',
          top: '20%',
          left: '2%',
          transform: 'translateY(-50%)',
          color: '#efdcdc', // Set text color
        }}>
        <BatExec variant='32x32_4' />
        meow.exe
      </Icon>
      </Draggable> 

      {/* Music Player */}
      <Draggable position={position2} onStop={handleStop2}>     
      <Icon onDoubleClick={() => setshowMediaPlayerSpotify(true)} 
        style={{
          position: 'absolute',
          top: '20%',
          left: '6%',
          transform: 'translateY(-50%)',
          color: '#efdcdc', // Set text color
        }}>
        <CdMusic variant='32x32_4' />
        Music.exe
      </Icon>
      </Draggable> 

      {/* Articles */}
      <Draggable position={position3} onStop={handleStop3}>     
      <Icon onDoubleClick={() => setShowArticles(true)} 
        style={{
          position: 'absolute',
          top: '28%',
          left: '2%',
          transform: 'translateY(-50%)',
          color: '#efdcdc', // Set text color
        }}>
        <Faxcover3 variant='32x32_4' />
        Articles.exe
      </Icon>
      </Draggable> 
      {/*  */}


      {/*Start Button List */}
      <TaskBar list={ 
        <List>

        <List.Item
          icon={<ReaderClosed variant="32x32_4" />}
          onClick={() => setIsFileExplorerOpen(true)}
          >
          Local Disk (C:)
        </List.Item>

        <List.Item
          icon={<WindowsExplorer variant="32x32_4" />}
          onClick={() => setIsFileExplorerOpen(true)}
        >
          Windows Explorer
        </List.Item>

        <List.Item icon={<img src={`/github-mark.svg`} alt="GitHub" className="github-icon" style={{ width: 32, height: 32 }} />} onClick={() => { window.open('https://github.com/nekwo', '_blank'); }}>
          <span className="github-link-text">GitHub</span>
          </List.Item>

        </List>
          

        }/> 
    </>
  ); 
  
}



export default App;
