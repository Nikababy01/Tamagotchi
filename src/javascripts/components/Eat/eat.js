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
    console.error('button clicked');
  });
};

export default { eatDomBuilder };
