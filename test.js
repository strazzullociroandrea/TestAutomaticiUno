import test from "ava";
import {generaPassword} from "./generaPassword.js"

/**
 * Funzione per eseguire un test con i vari controlli
 */
const eseguiTest = (message, func, tests) => {
  tests.forEach((testSingolo, index) => {
    test(`${message} - Test ${index + 1}`, async (t) => { 
      const result = await func(testSingolo);
      t.is(result.length, testSingolo);
    });
  });
};

/**
 * Richiamo di esegui test per verificare il funzionamento
 */
(() => {
  eseguiTest("Prova generazione password", generaPassword, [4, 5, 6,100]);
})();