const ava = require("ava");

/**
 * Funzione per eseguire un test con i vari controlli
 */
const eseguiTest = (message, func, ...tests) => {
  tests.forEach((testSingolo, index) => {
    ava.test(`${message} - Test ${index + 1}`, (t) => {
      t.is(func(), testSingolo);
    });
  });
};

module.exports = eseguiTest;
