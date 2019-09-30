/**
 * Arquivo: calculadora-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'calculadora.js'
 * Data: 30/03/2018
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */

const chai = require("chai");
const calculadora = require("../demo-1/calculadora");

const assert = chai.assert;
const app = require("../app");

chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("TDD de Operações da Calculadora", () => {
  it("Teste: Deve Somar 2 Números", async () => {
    result = await chai
      .request(app)
      .post("/add")
      .send({ n1: 700, n2: 31 });

    //console.log(result.body.result);
    assert.equal(result.body.result, 731, "## Numeros Somados Sem Suceso");
  });

  it("Teste: Não Deve Somar com Campos Vazios", async () => {
    result = await chai
      .request(app)
      .post("/add")
      .send({ n1: 700, n2: "" });
    //console.log(result.status);
    assert.equal(result.status, 400, "## Tentando somar int com string");
  });
});
