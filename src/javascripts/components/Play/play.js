import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './play.scss';

const playDomBuilder = () => {
  const play = textData.getPlayStatus();
  let domString = '';
  play.forEach((playStatus) => {
    domString += '<div>';
    domString += '<h1>PLAY</h1>';
    domString += `<h2>Score ${playStatus.fun}</h2>`;
    domString += '<div class= "container">';
    domString += '<button id="super">Super Fun</button>';
    domString += '<button id="slightly">Slightly Fun</button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('play', domString);
  $('#super').click(() => {
    console.error('clicked');
  });
};

export default { playDomBuilder };
