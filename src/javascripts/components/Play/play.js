import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './play.scss';

const playDomBuilder = () => {
  const play = textData.getPlayStatus();
  const domString = `<div>
   <h1>PLAY</h1>
   <h2>Score ${play[0].fun}</h2>
   <div class = "container">
   <button id="super">Super Fun</button>
   <button id="slightly">Slightly Fun</button>
   </div>
   </div>`;
  utils.printToDom('play', domString);
  $('#super').click(() => {
    console.error('clicked');
  });
};


export default { playDomBuilder };
