import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './sleep.scss';

const sleepDomBuilder = () => {
  const sleep = textData.getSleepStatus();
  let domString = '';
  sleep.forEach((sleepStatus) => {
    domString += '<div>';
    domString += '<h1>SLEEP</h1>';
    domString += `<h2>Energy ${sleepStatus.energy}</h2>`;
    domString += '<div class= "container">';
    domString += '<button id="nap" class="btnstyle">Nap</button>';
    domString += '<button id="deep" class="btnstyle">Deep Slumber</button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('sleep', domString);
  $('#nap').click(() => {
    console.error('clicked');
  });
};

export default { sleepDomBuilder };
