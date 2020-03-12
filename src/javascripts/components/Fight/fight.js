import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './fight.scss';

const fightDomBuilder = () => {
  const fight = textData.getFightStatus();
  const domString = `<div>
      <h1>FIGHT</h1>
      <h2>Strength ${fight[0].strength}</h2>
      <div class= "container">
      <button id="run">Run Away</button>
      <button id="violent">Violent Attack</button>
      </div>
      </div>`;
  utils.printToDom('fight', domString);
  $('#run').click(() => {
    if (fight[0].strength <= 99) {
      fight[0].strength += 1;
      fightDomBuilder(fight);
    }
  });
  $('#violent').click(() => {
    fight[0].strength -= 10;
    fightDomBuilder(fight);
  });
};

export default { fightDomBuilder };
