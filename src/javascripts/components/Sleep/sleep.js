import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './sleep.scss';

const sleepDomBuilder = () => {
  const sleep = textData.getSleepStatus();
  const domString = `<div>
    <h1>SLEEP</h1>
    <h2>Energy ${sleep[0].energy}</h2>
    <div class= "container">
    <button id="nap" >Nap</button>
    <button id="deep">Deep Slumber</button>
    </div>
    </div>`;
  utils.printToDom('sleep', domString);
  $('#nap').click(() => {
    if (sleep[0].energy <= 50) {
      sleep[0].energy += 50;
      sleepDomBuilder(sleep);
    }
  });
  $('#deep').click(() => {
    if (sleep[0].energy <= 40) {
      sleep[0].energy += 60;
      sleepDomBuilder(sleep);
    }
  });
};


export default { sleepDomBuilder };
