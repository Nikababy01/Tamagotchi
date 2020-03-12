import utils from '../../helpers/utils';
import './pet.scss';

const petBuilder = () => {
  const domString = '<img src = "https://2.bp.blogspot.com/-sdfj34yF0B8/TwkZgU_94XI/AAAAAAAAAKU/WFqVzgW0Ihg/s1600/Hapihapitchi_anime.PNG"/>';
  utils.printToDom('pet', domString);
};

export default { petBuilder };
