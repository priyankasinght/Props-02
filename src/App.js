import Card from "./components/Card";
import brightSrc from './assets/brightposter.jpg';
import trposter from './assets/tombraiderposter.jpg';
import brightbackground from './assets/brightbackground.jpg';
import tombraiderbackground from './assets/tombraiderbackground.jpg';
import shareIcon from './assets/share.svg';
import heartIcon from './assets/heart.svg';
import commentIcon from './assets/comment.svg';

function App() {

  const dataObj = {
    title: ['Bright', 'Tomb Raider'],
    directedBy: ['David Ayer', 'Roar Uthauy'],
    releaseYear: ['2017', '2018'],
    duration: ['117 min', '125 min'],
    description: ['Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.', 'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.'],
    posterSrc: [brightSrc, trposter],
    genre: ['Action, Crime, Fantasy', ['Action, Fantasy']],
    backgroundImageSrc: [brightbackground, tombraiderbackground],
    icon: [shareIcon, heartIcon, commentIcon],
    backgroundShadow: ['#1B0804', '#0A1512']
  }

  return (
    <div>

      <Card title={dataObj.title[0]} directedBy={dataObj.directedBy[0]} releaseYear={dataObj.releaseYear[0]} duration={dataObj.duration[0]} description={dataObj.description[0]} posterSrc={dataObj.posterSrc[0]} genre={dataObj.genre[0]} backgroundImageSrc={dataObj.backgroundImageSrc[0]} icon={dataObj.icon} backgroundShadow={dataObj.backgroundShadow[0]} />

      <Card title={dataObj.title[1]} directedBy={dataObj.directedBy[1]} releaseYear={dataObj.releaseYear[1]} duration={dataObj.duration[1]} description={dataObj.description[1]} posterSrc={dataObj.posterSrc[1]} genre={dataObj.genre[1]} backgroundImageSrc={dataObj.backgroundImageSrc[1]} icon={dataObj.icon} backgroundShadow={dataObj.backgroundShadow[1]} />

    </div>
  );
}

export default App;