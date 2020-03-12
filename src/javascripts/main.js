import '../styles/main.scss';
import eat from './components/Eat/eat';
import play from './components/Play/play';
import fight from './components/Fight/fight';
import sleep from './components/Sleep/sleep';
import pet from './components/Pet/pet';
// import progress from './components/progress';

const init = () => {
  eat.eatDomBuilder();
  play.playDomBuilder();
  fight.fightDomBuilder();
  sleep.sleepDomBuilder();
  pet.petBuilder();
  // progress.showProgress();
};

init();

export default { init };
