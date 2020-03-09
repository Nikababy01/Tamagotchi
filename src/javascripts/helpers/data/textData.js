// eatstatus array
const eatStatus = [
  {
    full: 100,
  },
];

const getEatStatus = () => eatStatus;

// playstatus array
const playStatus = [
  {
    fun: 50,
  },
];

const getPlayStatus = () => playStatus;


// fight status array
const fightStatus = [
  {
    strength: 100,
  },
];

const getFightStatus = () => fightStatus;

// sleep status array

const sleepStatus = [
  {
    energy: 50,
  },
];

const getSleepStatus = () => sleepStatus;

export default {
  getEatStatus, getPlayStatus, getFightStatus, getSleepStatus,
};
