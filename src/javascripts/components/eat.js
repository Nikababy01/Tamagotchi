import utils from '../helpers/utils';
import textData from '../helpers/data/textData';

// const unhealthyFoodBtn = (e) => {
// if (e.target.id === 'unhealthy') {
//  return 'unhealthy button clicked';
//  $('#healthy').click(unhealthyFoodBtn);
// }
// };


// const healthyFoodBtn = (e) => {
//  if (e.target.id === 'healthy') {
//    const eatStatus = textData.getEatStatus();
//    const newScore = eatStatus += 10;
//    eatStatus.full = newScore;
//    eat.eatDomBuilder();
//    $('#healthy').click(healthyFoodBtn);

//  }healthyFoodBtn();
// };


const eatDomBuilder = () => {
  const eat = textData.getEatStatus();
  let domString = '';
  eat.forEach((eatStatus) => {
    domString += '<div>';
    domString += `<h2>Fullness Score ${eatStatus.full}</h2>`;
    domString += '<button id="healthy">Healthy Food</button>';
    domString += '<button id="unhealthy">Unhealthy Food</button>';
  });
  utils.printToDom('eat', domString);
};

export default { eatDomBuilder };
