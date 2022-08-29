"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* pour les API */
(0, _vue.createApp)(_App["default"]).use(_vueAxios["default"], _axios["default"]).mount("#app");