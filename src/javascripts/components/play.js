import utils from '../helpers/utils';
import textData from '../helpers/data/textData';

const playDomBuilder = () => {
  const play = textData.getPlayStatus();
  let domString = '';
  play.forEach((playStatus) => {
    domString += '<div>';
    domString += `<h2>Play Score ${playStatus.fun}</h2>`;
    domString += '<button id="super">Super Fun</button>';
    domString += '<button id="slightly">Slightly Fun</button>';
  });
  utils.printToDom('play', domString);
};

export default { playDomBuilder };
