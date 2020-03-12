import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './eat.scss';

const eatDomBuilder = () => {
  const eat = textData.getEatStatus();
  const domString = `<div>
  <h1>EAT</h1>
  <h2>Score ${eat[0].full}</h2>
  <div class= "container">
  <button id="healthy">Healthy Food</button>
  <button id="unhealthy">Unhealthy Food</button>
  </div>
  </div>`;
  utils.printToDom('eat', domString);
  $('#healthy').click(() => {
    if (eat[0].full <= 90) {
      eat[0].full += 10;
      eatDomBuilder(eat);
    }
  });
  $('#unhealthy').click(() => {
    eat[0].full -= 3;
    eatDomBuilder(eat);
  });
};

export default { eatDomBuilder };
