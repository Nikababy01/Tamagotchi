import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './fight.scss';

const fightDomBuilder = () => {
  const fight = textData.getFightStatus();
  const domString = `<div>
      <h1>FIGHT</h1>
      <h2>Strength ${fight[0].strength}</h2>
      <div class= "container">
      <button id="run" class="btnstyle">Run Away</button>
      <button id="violent" class="btnstyle">Violent Attack</button>
      </div>
      </div>`;
  utils.printToDom('fight', domString);
  $('#run').click(() => {
    console.error('clicked');
  });
};


export default { fightDomBuilder };
