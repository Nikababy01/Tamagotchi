import utils from '../../helpers/utils';
import textData from '../../helpers/data/textData';
import './eat.scss';

// const unhealthyFoodBtn = (e) => {
// if (e.target.id === 'unhealthy') {
//  return 'unhealthy button clicked';
//  $('#healthy').click(unhealthyFoodBtn);
// }
// };


// const healthyFoodBtn = (e) => {
// if (e.target.id === 'healthy') {
// console.error('clicked');
//   }
//   $('#healthy').click(healthyFoodBtn);
// };


const eatDomBuilder = () => {
  const eat = textData.getEatStatus();
  let domString = '';
  eat.forEach((eatStatus) => {
    domString += '<div>';
    domString += '<h1>EAT</h1>';
    domString += `<h2>Score ${eatStatus.full}</h2>`;
    domString += '<div class= "container">';
    domString += '<button id="healthy">Healthy Food</button>';
    domString += '<button id="unhealthy">Unhealthy Food</button>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('eat', domString);
  $('#healthy').click(() => {
    console.error('button clicked');
  });
};


export default { eatDomBuilder };
