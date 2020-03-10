import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './fight.scss';

const fightDomBuilder = () => {
  const fight = textData.getFightStatus();
  let domString = '';
  fight.forEach((fightStatus) => {
    domString += '<div>';
    domString += '<h1>FIGHT</h1>';
    domString += `<h2>Strength ${fightStatus.strength}</h2>`;
    domString += '<div class= "container">';
    domString += '<button id="run" class="btnstyle">Run Away</button>';
    domString += '<button id="violent" class="btnstyle">Violent Attack</button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('fight', domString);
  $('#run').click(() => {
    console.error('clicked');
  });
};


export default { fightDomBuilder };
