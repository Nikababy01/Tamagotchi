import utils from '../helpers/utils';
import textData from '../helpers/data/textData';

const sleepDomBuilder = () => {
  const sleep = textData.getSleepStatus();
  let domString = '';
  sleep.forEach((sleepStatus) => {
    domString += '<div>';
    domString += `<h2>Sleep Energy ${sleepStatus.energy}</h2>`;
    domString += '<button id="nap">Nap</button>';
    domString += '<button id="deep">Deep Slumber</button>';
  });
  utils.printToDom('sleep', domString);
};

export default { sleepDomBuilder };