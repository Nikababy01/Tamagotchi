import utils from '../helpers/utils';
import textData from '../helpers/data/textData';

const fightDomBuilder = () => {
  const fight = textData.getFightStatus();
  let domString = '';
  fight.forEach((fightStatus) => {
    domString += '<div>';
    domString += `<h2>Fight Strength ${fightStatus.strength}</h2>`;
    domString += '<button id="run">Run Away</button>';
    domString += '<button id="violent">Violent Attack</button>';
  });
  utils.printToDom('fight', domString);
};

export default { fightDomBuilder };
