/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/*cabeçalho*/
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: poppinsmedium, sans-serif;
  width: 43.75em;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2.5em;
}

.menu-icon-container {
  display: flex;
  align-items: center;
  height: 16px;
  width: 30px;
  top: 0px;
  left: 0px;
  padding-top: 16px;
  cursor: pointer;
  border-radius: 2px;
}

.fa-bars {
  font-weight: 600;
  font-size: 36px;
  color: #2F435A;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-bars:hover {
  font-weight: 600;
  color: #FDCE6D;
  transition: .2s all;
}

.menu-icon-container > button {
  background-color: transparent;
  width: 34px;
  height: 30px;
  outline: 0;
  border: none;
  cursor: pointer;
}

/*menu-lateral*/
#slide {
  display: none;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  align-items: flex-start;
  top: 0;
  left: 0;
  padding: 40px 20px;
  background-color: #FDCE6D;
  height: 100%;
  width: 250px;
  font-family: poppinssemibold, sans-serif;
  z-index: 1000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-radius: 0px 10px 10px 0px;
}

.animate__animated.animate__fadeInLeft::before {
  --animate-duration: .5s;
}

#slide>li {
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-bottom: 20px;
}

#slide>li:hover>.drop-down-agenda {
  display: block;
  position: absolute;
  left: 210px;
  top: 95px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li:hover>.drop-down-cadastro {
  display: block;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 90;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li>a {
  line-height: 18px;
  color: #2f435a;
  text-decoration: none;
  font-size: 20px;
  margin-left: 10px;
}

.menu-container {
  display: flex;
}

.um {
  margin-left: 75px;
}

.dois {
  margin-left: 45px;
}

.drop-down-agenda {
  display: none;
  position: absolute;
  left: 210px;
  top: 90px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-agenda>ul {
  list-style-type: none;
}

.drop-down-agenda>ul>li {
  margin-bottom: 8px;
}

.drop-down-agenda>ul>li>a {
  color: #2F435A;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-agenda>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.drop-down-cadastro {
  display: none;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-cadastro>ul {
  list-style-type: none;
}

.drop-down-cadastro>ul>li {
  margin-bottom: 8px;
}

.drop-down-cadastro>ul>li>a {
  color: #2F435A;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-cadastro>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.fa-home,
.fa-power-off {
  color: #2f435a;
  font-size: 24px;
}

.fa-headset {
  font-size: 23px;
  color: #2f435a;
}

.fa-calendar {
  font-size: 23px;
  padding-left: 3px;
  color: #2f435a;
}

.fa-user-group {
  font-size: 22px;
  color: #2f435a;
}

.fa-file-lines {
  font-size: 25px;
  padding-left: 3px;
  color: #2f435a;
}

/*menu-lateral*/

.title-principal {
  display: block;
  align-items: center;
  color: #2F435A;
  font-family: poppinsmedium, sans-serif;
}

.logo {
  display: flex;
  border: none;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}
/* FIM CABEÇALHO */

/*formulário*/
form {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* SERVIÇO */
.label-title-servico {
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  width: 700px;
  height: 30px;
  border-radius: 50px;
  align-items: center;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.text-title-servico {
  display: flex;
  height: 20px;
  padding-top: 1px;
  margin-left: 10px;
  align-items: center;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 20px;
}

/*--> preço servico <--*/
.preco-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.preco-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.preco-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#precoServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> categoria servico <--*/
.categoria-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.categoria-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.categoria-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#categoriaServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> duracao servico <--*/
.duracao-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.duracao-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.duracao-servico-container input {
  color: #FDCE6D;
  height: 30px;
}

#duracaoServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> servico-pai servico <--*/
.servico-pai-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.servico-pai-servico-icon {
  color: #2F435A;
  font-size: 1.78125em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.servico-pai-container input {
  color: #FDCE6D;
  height: 30px;
}

#servicoPaiServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.08em;
  padding-top: 1px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> nome do serviço <--*/
.nome-servico-container {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  align-items: center;
  width: 42.5em;
  height: 30px;
  gap: 0.15625em;
}

.nome-servico-icon {
  color: #2F435A;
  font-size: 1.7em;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.nome-servico-container input {
  color: #FDCE6D;
}

#nomeServico {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  padding-left: 8px;
  width: 644px;
  height: 30px;
  color: rgb(47, 67, 90);
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  border: none;
  background-color: rgba(255, 231, 190, 0.79);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  outline: 0;
}

/*--> AÇOES <--*/
#actions {
  display: flex;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  gap: 34px;
}

#novo-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#novo-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#alterar-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#alterar-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#excluir-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
  cursor: pointer;
}

#excluir-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}

#aceitar-solicitacao {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: #2F435A;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #FDCE6D;
  font-family: poppinssemibold, sans-serif;
  font-size: 16px;
  transition: 0.2s;
}

#aceitar-solicitacao:hover {
  display: flex;
  background-color: #FDCE6D;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 0;
  border: none;
  border-radius: 50px;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
  font-size: 17px;
  transition: 0.2s;
  cursor: pointer;
}


@media screen and (max-width: 414px) {
    /* INICIO CABEÇALHO */
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-family: poppinsmedium, sans-serif;
      margin-left: auto;
      margin-right: auto;
      width: 25em;
      height: 3.125em;
      margin-top: 1.5625em;
  }
  
  .menu-icon-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-top: 0.1875em;
      width: 2.5em;
      height: 1.875em;
  }
  
  .fa-bars {
      font-weight: 600;
      font-size: 1.875em;
      color: #2F435A;
      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }
  
  .fa-bars:hover {
      font-weight: 600;
      color: #FDCE6D;
      transition: .2s all;
  }
  
  .title-principal {
      display: flex;
      width: 8.75em;
      align-items: center;
      text-align: center;
      color: #2F435A;
      font-family: poppinsmedium, sans-serif;
      font-size: 0.9375em;
  }
  
  .logo {
      display: flex;
      justify-content: flex-start;
      width: 3.125em;
      height: 2.3125em;
      border: none;
      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }
  /* FIM CABEÇALHO */
  /*formulário*/
  form {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  /* SERVIÇO */
  .label-title-servico {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-top: 25px;
    width: 400px;
    height: 25px;
    border-radius: 50px;
    align-items: center;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .text-title-servico {
    display: flex;
    height: 20px;
    padding-top: 1px;
    margin-left: 10px;
    align-items: center;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
  }
  
  /*--> preço serviço <--*/
  .preco-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .preco-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .preco-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #precoServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> duracao serviço <--*/
  .duracao-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .duracao-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .duracao-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #duracaoServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> categoria serviço <--*/
  .categoria-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .categoria-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .categoria-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #categoriaServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }
  
  /*--> servico pai serviço <--*/
  .servico-pai-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .servico-pai-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  .servico-pai-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  #servicoPaiServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> nome do serviço <--*/
  .nome-servico-container {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    align-items: center;
    width: 23.75em;
    height: 25px;
    gap: 0.15625em;
  }

  .nome-servico-container input {
    color: #FDCE6D;
    height: 25px;
  }

  .nome-servico-icon {
    color: #2F435A;
    font-size: 20px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  }

  #nomeServico {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.08em;
    padding-top: 1px;
    padding-left: 5px;
    width: 644px;
    height: 25px;
    color: rgb(47, 67, 90);
    font-family: poppinsmedium, sans-serif;
    font-size: 14px;
    border: none;
    background-color: rgba(255, 231, 190, 0.79);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: 0;
  }

  /*--> AÇOES <--*/
  #actions {
    display: none;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: row;
    gap: 34px;
  }

  #novo-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #novo-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #alterar-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #alterar-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #excluir-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
    cursor: pointer;
  }

  #excluir-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }

  #aceitar-solicitacao {
    display: none;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
    background-color: #2F435A;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #FDCE6D;
    font-family: poppinssemibold, sans-serif;
    font-size: 16px;
    transition: 0.2s;
  }

  #aceitar-solicitacao:hover {
    display: none;
    background-color: #FDCE6D;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    outline: 0;
    border: none;
    border-radius: 50px;
    color: #2F435A;
    font-family: poppinssemibold, sans-serif;
    font-size: 17px;
    transition: 0.2s;
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/CadastroServicos/CadastroServicos.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/*cabeçalho*/\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: poppinsmedium, sans-serif;\r\n  width: 43.75em;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 2.5em;\r\n}\r\n\r\n.menu-icon-container {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 16px;\r\n  width: 30px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding-top: 16px;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n}\r\n\r\n.fa-bars {\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  color: #2F435A;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-bars:hover {\r\n  font-weight: 600;\r\n  color: #FDCE6D;\r\n  transition: .2s all;\r\n}\r\n\r\n.menu-icon-container > button {\r\n  background-color: transparent;\r\n  width: 34px;\r\n  height: 30px;\r\n  outline: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/*menu-lateral*/\r\n#slide {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  position: fixed;\r\n  align-items: flex-start;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 40px 20px;\r\n  background-color: #FDCE6D;\r\n  height: 100%;\r\n  width: 250px;\r\n  font-family: poppinssemibold, sans-serif;\r\n  z-index: 1000;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n.animate__animated.animate__fadeInLeft::before {\r\n  --animate-duration: .5s;\r\n}\r\n\r\n#slide>li {\r\n  display: flex;\r\n  list-style-type: none;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#slide>li:hover>.drop-down-agenda {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 95px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li:hover>.drop-down-cadastro {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 90;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li>a {\r\n  line-height: 18px;\r\n  color: #2f435a;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n}\r\n\r\n.um {\r\n  margin-left: 75px;\r\n}\r\n\r\n.dois {\r\n  margin-left: 45px;\r\n}\r\n\r\n.drop-down-agenda {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 90px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-agenda>ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-agenda>ul>li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a {\r\n  color: #2F435A;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.drop-down-cadastro {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-cadastro>ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a {\r\n  color: #2F435A;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.fa-home,\r\n.fa-power-off {\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.fa-headset {\r\n  font-size: 23px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-calendar {\r\n  font-size: 23px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-user-group {\r\n  font-size: 22px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-file-lines {\r\n  font-size: 25px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n/*menu-lateral*/\r\n\r\n.title-principal {\r\n  display: block;\r\n  align-items: center;\r\n  color: #2F435A;\r\n  font-family: poppinsmedium, sans-serif;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: none;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n/* FIM CABEÇALHO */\r\n\r\n/*formulário*/\r\nform {\r\n  width: 700px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/* SERVIÇO */\r\n.label-title-servico {\r\n  display: flex;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 40px;\r\n  width: 700px;\r\n  height: 30px;\r\n  border-radius: 50px;\r\n  align-items: center;\r\n  background-color: #2F435A;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.text-title-servico {\r\n  display: flex;\r\n  height: 20px;\r\n  padding-top: 1px;\r\n  margin-left: 10px;\r\n  align-items: center;\r\n  color: #FDCE6D;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n/*--> preço servico <--*/\r\n.preco-servico-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  width: 42.5em;\r\n  height: 30px;\r\n  gap: 0.15625em;\r\n}\r\n\r\n.preco-servico-icon {\r\n  color: #2F435A;\r\n  font-size: 1.78125em;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.preco-servico-container input {\r\n  color: #FDCE6D;\r\n  height: 30px;\r\n}\r\n\r\n#precoServico {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 0.08em;\r\n  padding-top: 1px;\r\n  padding-left: 8px;\r\n  width: 644px;\r\n  height: 30px;\r\n  color: rgb(47, 67, 90);\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  border: none;\r\n  background-color: rgba(255, 231, 190, 0.79);\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  outline: 0;\r\n}\r\n\r\n/*--> categoria servico <--*/\r\n.categoria-servico-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  width: 42.5em;\r\n  height: 30px;\r\n  gap: 0.15625em;\r\n}\r\n\r\n.categoria-servico-icon {\r\n  color: #2F435A;\r\n  font-size: 1.78125em;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.categoria-servico-container input {\r\n  color: #FDCE6D;\r\n  height: 30px;\r\n}\r\n\r\n#categoriaServico {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 0.08em;\r\n  padding-top: 1px;\r\n  padding-left: 8px;\r\n  width: 644px;\r\n  height: 30px;\r\n  color: rgb(47, 67, 90);\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  border: none;\r\n  background-color: rgba(255, 231, 190, 0.79);\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  outline: 0;\r\n}\r\n\r\n/*--> duracao servico <--*/\r\n.duracao-servico-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  width: 42.5em;\r\n  height: 30px;\r\n  gap: 0.15625em;\r\n}\r\n\r\n.duracao-servico-icon {\r\n  color: #2F435A;\r\n  font-size: 1.78125em;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.duracao-servico-container input {\r\n  color: #FDCE6D;\r\n  height: 30px;\r\n}\r\n\r\n#duracaoServico {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 0.08em;\r\n  padding-top: 1px;\r\n  padding-left: 8px;\r\n  width: 644px;\r\n  height: 30px;\r\n  color: rgb(47, 67, 90);\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  border: none;\r\n  background-color: rgba(255, 231, 190, 0.79);\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  outline: 0;\r\n}\r\n\r\n/*--> servico-pai servico <--*/\r\n.servico-pai-servico-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  width: 42.5em;\r\n  height: 30px;\r\n  gap: 0.15625em;\r\n}\r\n\r\n.servico-pai-servico-icon {\r\n  color: #2F435A;\r\n  font-size: 1.78125em;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.servico-pai-container input {\r\n  color: #FDCE6D;\r\n  height: 30px;\r\n}\r\n\r\n#servicoPaiServico {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 0.08em;\r\n  padding-top: 1px;\r\n  padding-left: 8px;\r\n  width: 644px;\r\n  height: 30px;\r\n  color: rgb(47, 67, 90);\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  border: none;\r\n  background-color: rgba(255, 231, 190, 0.79);\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  outline: 0;\r\n}\r\n\r\n/*--> nome do serviço <--*/\r\n.nome-servico-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  width: 42.5em;\r\n  height: 30px;\r\n  gap: 0.15625em;\r\n}\r\n\r\n.nome-servico-icon {\r\n  color: #2F435A;\r\n  font-size: 1.7em;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.nome-servico-container input {\r\n  color: #FDCE6D;\r\n}\r\n\r\n#nomeServico {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 3px;\r\n  padding-left: 8px;\r\n  width: 644px;\r\n  height: 30px;\r\n  color: rgb(47, 67, 90);\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  border: none;\r\n  background-color: rgba(255, 231, 190, 0.79);\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  outline: 0;\r\n}\r\n\r\n/*--> AÇOES <--*/\r\n#actions {\r\n  display: flex;\r\n  margin-top: 30px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  flex-direction: row;\r\n  gap: 34px;\r\n}\r\n\r\n#novo-solicitacao {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  height: 30px;\r\n  background-color: #2F435A;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #FDCE6D;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 16px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#novo-solicitacao:hover {\r\n  display: flex;\r\n  background-color: #FDCE6D;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#alterar-solicitacao {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  height: 30px;\r\n  background-color: #2F435A;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #FDCE6D;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 16px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#alterar-solicitacao:hover {\r\n  display: flex;\r\n  background-color: #FDCE6D;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#excluir-solicitacao {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  height: 30px;\r\n  background-color: #2F435A;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #FDCE6D;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 16px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#excluir-solicitacao:hover {\r\n  display: flex;\r\n  background-color: #FDCE6D;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n#aceitar-solicitacao {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 150px;\r\n  height: 30px;\r\n  background-color: #2F435A;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #FDCE6D;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 16px;\r\n  transition: 0.2s;\r\n}\r\n\r\n#aceitar-solicitacao:hover {\r\n  display: flex;\r\n  background-color: #FDCE6D;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 50px;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 17px;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n@media screen and (max-width: 414px) {\r\n    /* INICIO CABEÇALHO */\r\n    .header {\r\n      display: flex;\r\n      flex-direction: row;\r\n      align-items: center;\r\n      justify-content: space-around;\r\n      font-family: poppinsmedium, sans-serif;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      width: 25em;\r\n      height: 3.125em;\r\n      margin-top: 1.5625em;\r\n  }\r\n  \r\n  .menu-icon-container {\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      align-items: center;\r\n      padding-top: 0.1875em;\r\n      width: 2.5em;\r\n      height: 1.875em;\r\n  }\r\n  \r\n  .fa-bars {\r\n      font-weight: 600;\r\n      font-size: 1.875em;\r\n      color: #2F435A;\r\n      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n  \r\n  .fa-bars:hover {\r\n      font-weight: 600;\r\n      color: #FDCE6D;\r\n      transition: .2s all;\r\n  }\r\n  \r\n  .title-principal {\r\n      display: flex;\r\n      width: 8.75em;\r\n      align-items: center;\r\n      text-align: center;\r\n      color: #2F435A;\r\n      font-family: poppinsmedium, sans-serif;\r\n      font-size: 0.9375em;\r\n  }\r\n  \r\n  .logo {\r\n      display: flex;\r\n      justify-content: flex-start;\r\n      width: 3.125em;\r\n      height: 2.3125em;\r\n      border: none;\r\n      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n  /* FIM CABEÇALHO */\r\n  /*formulário*/\r\n  form {\r\n    width: 400px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  /* SERVIÇO */\r\n  .label-title-servico {\r\n    display: flex;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    margin-top: 25px;\r\n    width: 400px;\r\n    height: 25px;\r\n    border-radius: 50px;\r\n    align-items: center;\r\n    background-color: #2F435A;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n  .text-title-servico {\r\n    display: flex;\r\n    height: 20px;\r\n    padding-top: 1px;\r\n    margin-left: 10px;\r\n    align-items: center;\r\n    color: #FDCE6D;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  /*--> preço serviço <--*/\r\n  .preco-servico-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n    width: 23.75em;\r\n    height: 25px;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .preco-servico-icon {\r\n    color: #2F435A;\r\n    font-size: 20px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .preco-servico-container input {\r\n    color: #FDCE6D;\r\n    height: 25px;\r\n  }\r\n\r\n  #precoServico {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 0.08em;\r\n    padding-top: 1px;\r\n    padding-left: 5px;\r\n    width: 644px;\r\n    height: 25px;\r\n    color: rgb(47, 67, 90);\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 14px;\r\n    border: none;\r\n    background-color: rgba(255, 231, 190, 0.79);\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    outline: 0;\r\n  }\r\n\r\n  /*--> duracao serviço <--*/\r\n  .duracao-servico-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n    width: 23.75em;\r\n    height: 25px;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .duracao-servico-icon {\r\n    color: #2F435A;\r\n    font-size: 20px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .duracao-servico-container input {\r\n    color: #FDCE6D;\r\n    height: 25px;\r\n  }\r\n\r\n  #duracaoServico {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 0.08em;\r\n    padding-top: 1px;\r\n    padding-left: 5px;\r\n    width: 644px;\r\n    height: 25px;\r\n    color: rgb(47, 67, 90);\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 14px;\r\n    border: none;\r\n    background-color: rgba(255, 231, 190, 0.79);\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    outline: 0;\r\n  }\r\n\r\n  /*--> categoria serviço <--*/\r\n  .categoria-servico-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n    width: 23.75em;\r\n    height: 25px;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .categoria-servico-icon {\r\n    color: #2F435A;\r\n    font-size: 20px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .categoria-servico-container input {\r\n    color: #FDCE6D;\r\n    height: 25px;\r\n  }\r\n\r\n  #categoriaServico {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 0.08em;\r\n    padding-top: 1px;\r\n    padding-left: 5px;\r\n    width: 644px;\r\n    height: 25px;\r\n    color: rgb(47, 67, 90);\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 14px;\r\n    border: none;\r\n    background-color: rgba(255, 231, 190, 0.79);\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    outline: 0;\r\n  }\r\n  \r\n  /*--> servico pai serviço <--*/\r\n  .servico-pai-servico-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    align-items: center;\r\n    width: 23.75em;\r\n    height: 25px;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .servico-pai-servico-icon {\r\n    color: #2F435A;\r\n    font-size: 20px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  .servico-pai-servico-container input {\r\n    color: #FDCE6D;\r\n    height: 25px;\r\n  }\r\n\r\n  #servicoPaiServico {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 0.08em;\r\n    padding-top: 1px;\r\n    padding-left: 5px;\r\n    width: 644px;\r\n    height: 25px;\r\n    color: rgb(47, 67, 90);\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 14px;\r\n    border: none;\r\n    background-color: rgba(255, 231, 190, 0.79);\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    outline: 0;\r\n  }\r\n\r\n  /*--> nome do serviço <--*/\r\n  .nome-servico-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    align-items: center;\r\n    width: 23.75em;\r\n    height: 25px;\r\n    gap: 0.15625em;\r\n  }\r\n\r\n  .nome-servico-container input {\r\n    color: #FDCE6D;\r\n    height: 25px;\r\n  }\r\n\r\n  .nome-servico-icon {\r\n    color: #2F435A;\r\n    font-size: 20px;\r\n    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  }\r\n\r\n  #nomeServico {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 0.08em;\r\n    padding-top: 1px;\r\n    padding-left: 5px;\r\n    width: 644px;\r\n    height: 25px;\r\n    color: rgb(47, 67, 90);\r\n    font-family: poppinsmedium, sans-serif;\r\n    font-size: 14px;\r\n    border: none;\r\n    background-color: rgba(255, 231, 190, 0.79);\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    outline: 0;\r\n  }\r\n\r\n  /*--> AÇOES <--*/\r\n  #actions {\r\n    display: none;\r\n    margin-top: 30px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    flex-direction: row;\r\n    gap: 34px;\r\n  }\r\n\r\n  #novo-solicitacao {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 150px;\r\n    height: 30px;\r\n    background-color: #2F435A;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #FDCE6D;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 16px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #novo-solicitacao:hover {\r\n    display: none;\r\n    background-color: #FDCE6D;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #2F435A;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 17px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #alterar-solicitacao {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 150px;\r\n    height: 30px;\r\n    background-color: #2F435A;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #FDCE6D;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 16px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #alterar-solicitacao:hover {\r\n    display: none;\r\n    background-color: #FDCE6D;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #2F435A;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 17px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #excluir-solicitacao {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 150px;\r\n    height: 30px;\r\n    background-color: #2F435A;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #FDCE6D;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 16px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #excluir-solicitacao:hover {\r\n    display: none;\r\n    background-color: #FDCE6D;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #2F435A;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 17px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n\r\n  #aceitar-solicitacao {\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 150px;\r\n    height: 30px;\r\n    background-color: #2F435A;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #FDCE6D;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 16px;\r\n    transition: 0.2s;\r\n  }\r\n\r\n  #aceitar-solicitacao:hover {\r\n    display: none;\r\n    background-color: #FDCE6D;\r\n    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 50px;\r\n    color: #2F435A;\r\n    font-family: poppinssemibold, sans-serif;\r\n    font-size: 17px;\r\n    transition: 0.2s;\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/*cabeçalho*/
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: poppinsmedium, sans-serif;
  width: 43.75em;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2.5em;
}

.menu-icon-container {
  display: flex;
  align-items: center;
  height: 16px;
  width: 30px;
  top: 0px;
  left: 0px;
  padding-top: 16px;
  cursor: pointer;
  border-radius: 2px;
}

.fa-bars {
  font-weight: 600;
  font-size: 36px;
  color: #2F435A;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.fa-bars:hover {
  font-weight: 600;
  color: #FDCE6D;
  transition: .2s all;
}

.menu-icon-container > button {
  background-color: transparent;
  width: 34px;
  height: 30px;
  outline: 0;
  border: none;
  cursor: pointer;
}

/*menu-lateral*/
#slide {
  display: none;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  align-items: flex-start;
  top: 0;
  left: 0;
  padding: 40px 20px;
  background-color: #FDCE6D;
  height: 100%;
  width: 250px;
  font-family: poppinssemibold, sans-serif;
  z-index: 1000;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
  border-radius: 0px 10px 10px 0px;
}

.animate__animated.animate__fadeInLeft::before {
  --animate-duration: .5s;
}

#slide>li {
  display: flex;
  list-style-type: none;
  align-items: center;
  margin-bottom: 20px;
}

#slide>li:hover>.drop-down-agenda {
  display: block;
  position: absolute;
  left: 210px;
  top: 95px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li:hover>.drop-down-cadastro {
  display: block;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 90;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

#slide>li>a {
  line-height: 18px;
  color: #2f435a;
  text-decoration: none;
  font-size: 20px;
  margin-left: 10px;
}

.menu-container {
  display: flex;
}

.um {
  margin-left: 75px;
}

.dois {
  margin-left: 45px;
}

.drop-down-agenda {
  display: none;
  position: absolute;
  left: 210px;
  top: 90px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  z-index: 100;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-agenda>ul {
  list-style-type: none;
}

.drop-down-agenda>ul>li {
  margin-bottom: 8px;
}

.drop-down-agenda>ul>li>a {
  color: #2F435A;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-agenda>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.drop-down-cadastro {
  display: none;
  position: absolute;
  left: 210px;
  top: 135px;
  width: 210px;
  background-color: rgb(255, 231, 190);
  padding: 7px;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
}

.drop-down-cadastro>ul {
  list-style-type: none;
}

.drop-down-cadastro>ul>li {
  margin-bottom: 8px;
}

.drop-down-cadastro>ul>li>a {
  color: #2F435A;
  font-size: 18px;
  text-decoration: none;
}

.drop-down-cadastro>ul>li>a:hover {
  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));
}

.fa-home,
.fa-power-off {
  color: #2f435a;
  font-size: 24px;
}

.fa-headset {
  font-size: 23px;
  color: #2f435a;
}

.fa-calendar {
  font-size: 23px;
  padding-left: 3px;
  color: #2f435a;
}

.fa-user-group {
  font-size: 22px;
  color: #2f435a;
}

.fa-file-lines {
  font-size: 25px;
  padding-left: 3px;
  color: #2f435a;
}

/*menu-lateral*/

.title-principal {
  display: block;
  align-items: center;
  color: #2F435A;
  font-family: poppinsmedium, sans-serif;
}

.logo {
  display: flex;
  border: none;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}
/* FIM CABEÇALHO */


/*lista*/
/*cabeçalho da lista*/
.list-container {
  display: flex;
  width: 1020px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
}

.title {
  display: flex;
  width: 1020px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 232px;
  height: 20px;
  font-family: poppinssemibold, sans-serif;
  font-size: 20px;
  color: #2F435A;
  border-bottom: 2px solid #FDCE6D;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));
}

.search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search-bar input {
  color: #FDCE6D;
}

#searchBarList {
  display: flex;
  justify-content: center;
  padding-left: 15px;
  width: 405px;
  height: 30px;
  color: #fddb89;
  font-family: poppinsmedium, sans-serif;
  font-size: 16px;
  background: #2F435A;
  border: none;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  outline: 0;
}

#searchBarList::placeholder {
  color: rgba(255, 231, 190, 0.79);
  font-family: poppinsregular, sans-serif;
}

.material-symbols-rounded {
  margin-right: 10px;
  color: #FDCE6D;
  position: absolute;
}


/*titulo da lista*/
.box-list {
  display: flex;
  position: absolute;
  margin-top: 50px;
  width: 63.75em;
  height: 20.25em;
  background-color: rgba(47, 67, 90, 0.05);
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

.box-title {
  display: flex;
  margin-top: 0.3125em;
  width: 63.75em;
  height: 1em;
  flex-direction: row;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
}

.box-title-name {
  display: flex;
  margin-left: 1.5625em;
  width: 3.375em;
  height: 1em;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
}

.box-title-email {
  display: flex;
  margin-left: 18.75em;
  width: 3.9375em;
  height: 1em;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
}

.box-title-fone {
  display: flex;
  margin-left: 18.75em;
  width: 5.6875em;
  height: 1em;
  color: #2F435A;
  font-family: poppinssemibold, sans-serif;
}

.border-box-list {
  box-sizing: border-box;
  position: absolute;
  width: 62.5em;
  height: 17.9375em;
  margin-left: 0.625em;
  margin-right: 0.625em;
  margin-top: 1.5625em;
  border: 2px solid #2F435A;
  border-radius: 10px;
}

/*listagem*/
.lista {
  display: flex;
  position: absolute;
  justify-content: flex-start;
  margin-top: 1.8em;
  margin-left: 0.15625em;
  width: 62.5em;
  height: 17.5em;
  color: #2F435A;
  overflow-y: auto;
}

/*scroll da tabela*/
.lista::-webkit-scrollbar {
  width: 10px;
  justify-content: flex-end;
}

.lista::-moz-list-bullet {
  width: 10px;
  justify-content: flex-end;
}

.lista::-webkit-scrollbar-track {
  background-color: rgba(253, 206, 109, 0.3);
  border-radius: 6px;
}

.lista::-webkit-scrollbar-thumb {
  background-color: #2F435A;
  border-radius: 6px;
}

/*lista nome*/
.listNameClient {
  display: flex;
  position: absolute;
  margin-left: 1.40625em;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
}

.list-name-item {
  list-style-type: none;
  font-family: poppinsregular, sans-serif;
  font-size: 16px;
}

/*lista email*/
.listEmailClient {
  display: flex;
  position: absolute;
  margin-left: 23.5625em;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
}

.list-email-item {
  list-style-type: none;
  font-family: poppinsregular, sans-serif;
  font-size: 16px;
}

/*lista telefone*/
.listFoneClient {
  display: flex;
  position: absolute;
  margin-left: 46.1875em;
  flex-direction: column;
  gap: 5px;
  max-width: 21.5625em;
}

.list-fone-item {
  list-style-type: none;
  font-family: poppinsregular, sans-serif;
  font-size: 16px;
}


@media screen and (max-width: 730px) {

  .menu-lateral ul {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  .open {
    display: block;
  }
}
`, "",{"version":3,"sources":["webpack://./src/CadastroServicos/ListagemCadastroServicos.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/*cabeçalho*/\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: poppinsmedium, sans-serif;\r\n  width: 43.75em;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 2.5em;\r\n}\r\n\r\n.menu-icon-container {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 16px;\r\n  width: 30px;\r\n  top: 0px;\r\n  left: 0px;\r\n  padding-top: 16px;\r\n  cursor: pointer;\r\n  border-radius: 2px;\r\n}\r\n\r\n.fa-bars {\r\n  font-weight: 600;\r\n  font-size: 36px;\r\n  color: #2F435A;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.fa-bars:hover {\r\n  font-weight: 600;\r\n  color: #FDCE6D;\r\n  transition: .2s all;\r\n}\r\n\r\n.menu-icon-container > button {\r\n  background-color: transparent;\r\n  width: 34px;\r\n  height: 30px;\r\n  outline: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n/*menu-lateral*/\r\n#slide {\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  position: fixed;\r\n  align-items: flex-start;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 40px 20px;\r\n  background-color: #FDCE6D;\r\n  height: 100%;\r\n  width: 250px;\r\n  font-family: poppinssemibold, sans-serif;\r\n  z-index: 1000;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n  border-radius: 0px 10px 10px 0px;\r\n}\r\n\r\n.animate__animated.animate__fadeInLeft::before {\r\n  --animate-duration: .5s;\r\n}\r\n\r\n#slide>li {\r\n  display: flex;\r\n  list-style-type: none;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#slide>li:hover>.drop-down-agenda {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 95px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li:hover>.drop-down-cadastro {\r\n  display: block;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 90;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n#slide>li>a {\r\n  line-height: 18px;\r\n  color: #2f435a;\r\n  text-decoration: none;\r\n  font-size: 20px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu-container {\r\n  display: flex;\r\n}\r\n\r\n.um {\r\n  margin-left: 75px;\r\n}\r\n\r\n.dois {\r\n  margin-left: 45px;\r\n}\r\n\r\n.drop-down-agenda {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 90px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  z-index: 100;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-agenda>ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-agenda>ul>li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a {\r\n  color: #2F435A;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-agenda>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.drop-down-cadastro {\r\n  display: none;\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 135px;\r\n  width: 210px;\r\n  background-color: rgb(255, 231, 190);\r\n  padding: 7px;\r\n  border-radius: 8px;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\n.drop-down-cadastro>ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a {\r\n  color: #2F435A;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.drop-down-cadastro>ul>li>a:hover {\r\n  filter: drop-shadow(1px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n.fa-home,\r\n.fa-power-off {\r\n  color: #2f435a;\r\n  font-size: 24px;\r\n}\r\n\r\n.fa-headset {\r\n  font-size: 23px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-calendar {\r\n  font-size: 23px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-user-group {\r\n  font-size: 22px;\r\n  color: #2f435a;\r\n}\r\n\r\n.fa-file-lines {\r\n  font-size: 25px;\r\n  padding-left: 3px;\r\n  color: #2f435a;\r\n}\r\n\r\n/*menu-lateral*/\r\n\r\n.title-principal {\r\n  display: block;\r\n  align-items: center;\r\n  color: #2F435A;\r\n  font-family: poppinsmedium, sans-serif;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  border: none;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n/* FIM CABEÇALHO */\r\n\r\n\r\n/*lista*/\r\n/*cabeçalho da lista*/\r\n.list-container {\r\n  display: flex;\r\n  width: 1020px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  margin-top: 60px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  width: 1020px;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.title-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  width: 232px;\r\n  height: 20px;\r\n  font-family: poppinssemibold, sans-serif;\r\n  font-size: 20px;\r\n  color: #2F435A;\r\n  border-bottom: 2px solid #FDCE6D;\r\n  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.search-bar input {\r\n  color: #FDCE6D;\r\n}\r\n\r\n#searchBarList {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-left: 15px;\r\n  width: 405px;\r\n  height: 30px;\r\n  color: #fddb89;\r\n  font-family: poppinsmedium, sans-serif;\r\n  font-size: 16px;\r\n  background: #2F435A;\r\n  border: none;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n  border-radius: 50px;\r\n  outline: 0;\r\n}\r\n\r\n#searchBarList::placeholder {\r\n  color: rgba(255, 231, 190, 0.79);\r\n  font-family: poppinsregular, sans-serif;\r\n}\r\n\r\n.material-symbols-rounded {\r\n  margin-right: 10px;\r\n  color: #FDCE6D;\r\n  position: absolute;\r\n}\r\n\r\n\r\n/*titulo da lista*/\r\n.box-list {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-top: 50px;\r\n  width: 63.75em;\r\n  height: 20.25em;\r\n  background-color: rgba(47, 67, 90, 0.05);\r\n  border-radius: 10px;\r\n  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.box-title {\r\n  display: flex;\r\n  margin-top: 0.3125em;\r\n  width: 63.75em;\r\n  height: 1em;\r\n  flex-direction: row;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n}\r\n\r\n.box-title-name {\r\n  display: flex;\r\n  margin-left: 1.5625em;\r\n  width: 3.375em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n}\r\n\r\n.box-title-email {\r\n  display: flex;\r\n  margin-left: 18.75em;\r\n  width: 3.9375em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n}\r\n\r\n.box-title-fone {\r\n  display: flex;\r\n  margin-left: 18.75em;\r\n  width: 5.6875em;\r\n  height: 1em;\r\n  color: #2F435A;\r\n  font-family: poppinssemibold, sans-serif;\r\n}\r\n\r\n.border-box-list {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  width: 62.5em;\r\n  height: 17.9375em;\r\n  margin-left: 0.625em;\r\n  margin-right: 0.625em;\r\n  margin-top: 1.5625em;\r\n  border: 2px solid #2F435A;\r\n  border-radius: 10px;\r\n}\r\n\r\n/*listagem*/\r\n.lista {\r\n  display: flex;\r\n  position: absolute;\r\n  justify-content: flex-start;\r\n  margin-top: 1.8em;\r\n  margin-left: 0.15625em;\r\n  width: 62.5em;\r\n  height: 17.5em;\r\n  color: #2F435A;\r\n  overflow-y: auto;\r\n}\r\n\r\n/*scroll da tabela*/\r\n.lista::-webkit-scrollbar {\r\n  width: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.lista::-moz-list-bullet {\r\n  width: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.lista::-webkit-scrollbar-track {\r\n  background-color: rgba(253, 206, 109, 0.3);\r\n  border-radius: 6px;\r\n}\r\n\r\n.lista::-webkit-scrollbar-thumb {\r\n  background-color: #2F435A;\r\n  border-radius: 6px;\r\n}\r\n\r\n/*lista nome*/\r\n.listNameClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: 1.40625em;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n}\r\n\r\n.list-name-item {\r\n  list-style-type: none;\r\n  font-family: poppinsregular, sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n/*lista email*/\r\n.listEmailClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: 23.5625em;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n}\r\n\r\n.list-email-item {\r\n  list-style-type: none;\r\n  font-family: poppinsregular, sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n/*lista telefone*/\r\n.listFoneClient {\r\n  display: flex;\r\n  position: absolute;\r\n  margin-left: 46.1875em;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  max-width: 21.5625em;\r\n}\r\n\r\n.list-fone-item {\r\n  list-style-type: none;\r\n  font-family: poppinsregular, sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\n\r\n@media screen and (max-width: 730px) {\r\n\r\n  .menu-lateral ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: start;\r\n  }\r\n\r\n  .open {\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/svg/petPuc.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/petPuc.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/svg/petPuc.svg");

/***/ }),

/***/ "./src/CadastroServicos/CadastroServicos.css":
/*!***************************************************!*\
  !*** ./src/CadastroServicos/CadastroServicos.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./CadastroServicos.css */ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/CadastroServicos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/CadastroServicos/ListagemCadastroServicos.css":
/*!***********************************************************!*\
  !*** ./src/CadastroServicos/ListagemCadastroServicos.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ListagemCadastroServicos.css */ "./node_modules/css-loader/dist/cjs.js!./src/CadastroServicos/ListagemCadastroServicos.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/CadastroServicos/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CadastroServicos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CadastroServicos.css */ "./src/CadastroServicos/CadastroServicos.css");
/* harmony import */ var _ListagemCadastroServicos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListagemCadastroServicos.css */ "./src/CadastroServicos/ListagemCadastroServicos.css");
/* harmony import */ var _assets_svg_petPuc_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/petPuc.svg */ "./src/assets/svg/petPuc.svg");



// OPEN CLOSE
var openSlide = document.querySelector("#ativar");

openSlide.addEventListener("click", function () {
  var slide = document.querySelector("#slide");

  if (slide.style.display === "block") {
    slide.style.display = "none";
  } else {
    slide.style.display = "block";
  }
});


})();

/******/ })()
;
//# sourceMappingURL=cadastroServicos.js.map