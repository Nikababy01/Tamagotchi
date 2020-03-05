import textData from '../helpers/data/textData';
import utils from '../helpers/utils';

const showDisplay = () => {
  const text = textData.getText();
  const domString = `<h2>${text}</h2>`;
  utils.printToDom('progress', domString);
};

export default { showDisplay };
