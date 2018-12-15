(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue_native_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-native-websocket */ \"./node_modules/vue-native-websocket/dist/build.js\");\n/* harmony import */ var vue_native_websocket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_native_websocket__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App.vue */ \"./components/App.vue\");\n/* harmony import */ var _components_TopNav_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TopNav.vue */ \"./components/TopNav.vue\");\n/* harmony import */ var _components_MainContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MainContent.vue */ \"./components/MainContent.vue\");\n/* harmony import */ var _components_SearchBox_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SearchBox.vue */ \"./components/SearchBox.vue\");\n/* harmony import */ var _components_Chart_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Chart.vue */ \"./components/Chart.vue\");\n/* harmony import */ var _components_SearchResults_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SearchResults.vue */ \"./components/SearchResults.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_native_websocket__WEBPACK_IMPORTED_MODULE_2___default.a, 'ws://0.0.0.0:3333', { format: 'json' });\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('app', _components_App_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('top-nav', _components_TopNav_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('main-content', _components_MainContent_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('search-box', _components_SearchBox_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('chart', _components_Chart_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nvue__WEBPACK_IMPORTED_MODULE_0___default.a.component('search-results', _components_SearchResults_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\nconst store = new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n    state: {\n        search: {\n            query: '',\n            results: [],\n            duration: null\n        }\n    },\n    mutations: {\n        setQuery(state, query) {\n            state.query = query\n        },\n        clearResults(state) {\n            state.search.results = []\n        },\n        addResult(state, result) {\n            state.search.results.push(result)\n        },\n        setDuration(state, duration) {\n            state.search.duration = duration\n        }\n    },\n    actions: {\n        setQuery(context, query) {\n            context.commit('setQuery', query)\n        },\n        clearResults(context) {\n            context.commit('clearResults')\n        },\n        addResult(context, result) {\n            context.commit('addResult', result)\n        },\n        setDuration(context, duration) {\n            context.commit('setDuration', duration)\n        }\n    }\n})\n\nvar app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({\n    store\n}).$mount('#app');\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./common/charts.js":
/*!**************************!*\
  !*** ./common/charts.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nlet App = {};\n\nApp.charts = {\n    randValue: function() {\n        return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;\n    },\n\n    //Bar Chart 2\n    widget_barchart2: function(){\n\n        var color1 = '#cc1723';\n        var color2 = tinycolor( color1 ).lighten( 22 ).toString();\n\n        var plot_statistics = $.plot($(\"#bar-chart2\"), [\n            {\n                data: [\n                    [0, 7], [1, 13], [2, 17], [3, 20], [4, 26], [5, 37], [6, 35], [7, 28], [8, 38], [9, 38], [10, 32]\n                ],\n                label: \"Page Views\"\n            },\n        ], {\n            series: {\n                bars: {\n                    order: 2,\n                    align: 'center',\n                    show: true,\n                    lineWidth: 1,\n                    barWidth: 1,\n                    fill: true,\n                    fillColor: {\n                        colors: [{\n                            opacity: 0.75\n                        }, {\n                            opacity: 0.75\n                        }\n                        ]\n                    }\n                },\n                shadowSize: 2\n            },\n            legend:{\n                show: false\n            },\n            grid: {\n                margin: {\n                    left: 23,\n                    right: 30,\n                    top: 20,\n                    botttom: 40\n                },\n                labelMargin: 10,\n                axisMargin: 200,\n                hoverable: true,\n                clickable: true,\n                tickColor: \"rgba(0,0,0,0.15)\",\n                borderWidth: 1,\n                borderColor: \"rgba(0,0,0,0.15)\"\n            },\n            tooltip:{\n                show: true,\n                cssClass: \"tooltip-chart\",\n                content: \"<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>\",\n                defaultTheme: false\n            },\n            colors: [color1, color2],\n            xaxis: {\n                ticks: [],\n            },\n            yaxis: {\n                ticks: 4,\n                tickDecimals: 0\n            }\n        });\n\n        widget_tooltipPosition('bar-chart2', 60);\n    },\n\n    //Positioning tooltip\n    widget_tooltipPosition: function(id, top){\n        $('#'+id).bind(\"plothover\", function (event, pos, item) {\n            var widthToolTip = $('.tooltip-chart').width();\n            if(item){\n                $(\".tooltip-chart\")\n                    .css({top: item.pageY - top, left: item.pageX - (widthToolTip / 2)})\n                    .fadeIn(200);\n            }else{\n                $(\".tooltip-chart\").hide();\n            }\n        });\n    },\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./common/charts.js?");

/***/ }),

/***/ "./components/App.vue":
/*!****************************!*\
  !*** ./components/App.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=45ba5ed4&scoped=true& */ \"./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./components/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& */ \"./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"45ba5ed4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/App.vue?");

/***/ }),

/***/ "./components/App.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./components/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/App.vue?");

/***/ }),

/***/ "./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/*!*************************************************************************************!*\
  !*** ./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_45ba5ed4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/App.vue?");

/***/ }),

/***/ "./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/*!***********************************************************************!*\
  !*** ./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=45ba5ed4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_45ba5ed4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/App.vue?");

/***/ }),

/***/ "./components/Chart.vue":
/*!******************************!*\
  !*** ./components/Chart.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=63806493&scoped=true& */ \"./components/Chart.vue?vue&type=template&id=63806493&scoped=true&\");\n/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ \"./components/Chart.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& */ \"./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"63806493\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/Chart.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/Chart.vue?");

/***/ }),

/***/ "./components/Chart.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./components/Chart.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/Chart.vue?");

/***/ }),

/***/ "./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&":
/*!***************************************************************************************!*\
  !*** ./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_style_index_0_id_63806493_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/Chart.vue?");

/***/ }),

/***/ "./components/Chart.vue?vue&type=template&id=63806493&scoped=true&":
/*!*************************************************************************!*\
  !*** ./components/Chart.vue?vue&type=template&id=63806493&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=63806493&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=template&id=63806493&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_63806493_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/Chart.vue?");

/***/ }),

/***/ "./components/MainContent.vue":
/*!************************************!*\
  !*** ./components/MainContent.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContent.vue?vue&type=template&id=06941316&scoped=true& */ \"./components/MainContent.vue?vue&type=template&id=06941316&scoped=true&\");\n/* harmony import */ var _MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContent.vue?vue&type=script&lang=js& */ \"./components/MainContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& */ \"./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"06941316\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/MainContent.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/MainContent.vue?");

/***/ }),

/***/ "./components/MainContent.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./components/MainContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/MainContent.vue?");

/***/ }),

/***/ "./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_style_index_0_id_06941316_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/MainContent.vue?");

/***/ }),

/***/ "./components/MainContent.vue?vue&type=template&id=06941316&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./components/MainContent.vue?vue&type=template&id=06941316&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=template&id=06941316&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=template&id=06941316&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainContent_vue_vue_type_template_id_06941316_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/MainContent.vue?");

/***/ }),

/***/ "./components/SearchBox.vue":
/*!**********************************!*\
  !*** ./components/SearchBox.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBox.vue?vue&type=template&id=33090a90&scoped=true& */ \"./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true&\");\n/* harmony import */ var _SearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox.vue?vue&type=script&lang=js& */ \"./components/SearchBox.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& */ \"./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"33090a90\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/SearchBox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/SearchBox.vue?");

/***/ }),

/***/ "./components/SearchBox.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./components/SearchBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./SearchBox.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/SearchBox.vue?");

/***/ }),

/***/ "./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_style_index_0_id_33090a90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/SearchBox.vue?");

/***/ }),

/***/ "./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./SearchBox.vue?vue&type=template&id=33090a90&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBox_vue_vue_type_template_id_33090a90_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/SearchBox.vue?");

/***/ }),

/***/ "./components/SearchResults.vue":
/*!**************************************!*\
  !*** ./components/SearchResults.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true& */ \"./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true&\");\n/* harmony import */ var _SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=script&lang=js& */ \"./components/SearchResults.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& */ \"./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e3fb8e3a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/SearchResults.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/SearchResults.vue?");

/***/ }),

/***/ "./components/SearchResults.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./components/SearchResults.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/SearchResults.vue?");

/***/ }),

/***/ "./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_style_index_0_id_e3fb8e3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/SearchResults.vue?");

/***/ }),

/***/ "./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_template_id_e3fb8e3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/SearchResults.vue?");

/***/ }),

/***/ "./components/TopNav.vue":
/*!*******************************!*\
  !*** ./components/TopNav.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=46f24cae&scoped=true& */ \"./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true&\");\n/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ \"./components/TopNav.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& */ \"./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"46f24cae\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/TopNav.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/TopNav.vue?");

/***/ }),

/***/ "./components/TopNav.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./components/TopNav.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/TopNav.vue?");

/***/ }),

/***/ "./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&":
/*!****************************************************************************************!*\
  !*** ./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_style_index_0_id_46f24cae_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./components/TopNav.vue?");

/***/ }),

/***/ "./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true&":
/*!**************************************************************************!*\
  !*** ./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=46f24cae&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_46f24cae_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/TopNav.vue?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/App.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/Chart.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/MainContent.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/SearchBox.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/SearchResults.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./components/TopNav.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=style&index=0&id=45ba5ed4&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/App.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=style&index=0&id=63806493&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/Chart.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=style&index=0&id=06941316&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/MainContent.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=style&index=0&id=33090a90&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/SearchBox.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=style&index=0&id=e3fb8e3a&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/SearchResults.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=style&index=0&id=46f24cae&scoped=true&lang=css&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./components/TopNav.vue?./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n});\n\n\n//# sourceURL=webpack:///./components/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/charts */ \"./common/charts.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        name: \"Chart\",\n        computed: {\n            results() {\n                return this.$store.state.search.results\n            }\n        },\n        methods: {\n            renderChart() {\n                _common_charts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].charts.widget_barchart2();\n            }\n        },\n    });\n\n\n//# sourceURL=webpack:///./components/Chart.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/MainContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        name: \"MainContent\",\n    });\n\n\n//# sourceURL=webpack:///./components/MainContent.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        name: \"SearchBox\",\n        data() {\n            return {\n                query: '',\n            }\n        },\n        computed: {\n            results() {\n                return this.$store.state.search.results\n            },\n            duration() {\n                return this.$store.state.search.duration\n            },\n            durationForHumans() {\n                if (this.duration < 1000) {\n                    return this.duration + ' milliseconds';\n                } else {\n                    return (this.duration / 1000) + ' seconds';\n                }\n            },\n        },\n        methods: {\n            clickButton() {\n                this.$store.dispatch('setDuration', null);\n                this.$store.dispatch('setQuery', this.query);\n                this.$store.dispatch('clearResults');\n\n                this.$socket.sendObj({query: this.query, from: '', to: ''})\n            }\n        },\n        created() {\n            this.$options.sockets.onmessage = (data) => {\n                console.log(data);\n\n                if (data.data.substring(0, 4) === 'done') {\n                    let parts = data.data.split('|');\n                    this.$store.dispatch('setDuration', parts[1]);\n                    return;\n                }\n\n                this.$store.dispatch('addResult', data.data);\n            }\n        }\n    });\n\n\n//# sourceURL=webpack:///./components/SearchBox.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/SearchResults.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        name: \"Results\",\n        computed: {\n            results() {\n                return this.$store.state.search.results\n            }\n        }\n    });\n\n\n//# sourceURL=webpack:///./components/SearchResults.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = ({\n        name: \"Nav\",\n        mounted() {\n            console.log('TopNav mounted');\n        }\n    });\n\n\n//# sourceURL=webpack:///./components/TopNav.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/App.vue?vue&type=template&id=45ba5ed4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"be-wrapper\" },\n    [_c(\"top-nav\"), _vm._v(\" \"), _c(\"main-content\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/Chart.vue?vue&type=template&id=63806493&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Chart.vue?vue&type=template&id=63806493&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.results.length > 0\n    ? _c(\"div\", { staticClass: \"row\" }, [_vm._m(0)])\n    : _vm._e()\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-md-12\" }, [\n      _c(\"div\", { staticClass: \"card\" }, [\n        _c(\"div\", { staticClass: \"widget-chart-container\" }, [\n          _c(\"div\", {\n            staticClass: \"pb-2\",\n            staticStyle: { height: \"110px\" },\n            attrs: { id: \"bar-chart2\" }\n          })\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/Chart.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/MainContent.vue?vue&type=template&id=06941316&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/MainContent.vue?vue&type=template&id=06941316&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"main-content container-fluid\" },\n      [_c(\"search-box\"), _vm._v(\" \"), _c(\"search-results\")],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/MainContent.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchBox.vue?vue&type=template&id=33090a90&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"row\" }, [\n    _c(\"div\", { staticClass: \"col-md-12\" }, [\n      _c(\"div\", { staticClass: \"card\" }, [\n        _c(\"div\", { staticClass: \"card-body\" }, [\n          _c(\"form\", [\n            _c(\"div\", { staticClass: \"form-group row\" }, [\n              _c(\"div\", { staticClass: \"col-12 col-sm-12 col-lg-12\" }, [\n                _c(\"div\", { staticClass: \"input-group\" }, [\n                  _c(\"input\", {\n                    directives: [\n                      {\n                        name: \"model\",\n                        rawName: \"v-model\",\n                        value: _vm.query,\n                        expression: \"query\"\n                      }\n                    ],\n                    staticClass: \"form-control\",\n                    attrs: { id: \"inputText3\", type: \"text\" },\n                    domProps: { value: _vm.query },\n                    on: {\n                      input: function($event) {\n                        if ($event.target.composing) {\n                          return\n                        }\n                        _vm.query = $event.target.value\n                      }\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _vm._m(0),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"input-group-append\" }, [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"btn btn-primary px-3\",\n                        attrs: { type: \"button\" },\n                        on: { click: _vm.clickButton }\n                      },\n                      [_vm._v(\"SEARCH\")]\n                    )\n                  ])\n                ])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _vm.duration\n            ? _c(\"div\", [\n                _vm._v(\n                  \"\\n                        Found \" +\n                    _vm._s(_vm.results.length) +\n                    \" results in \" +\n                    _vm._s(_vm.durationForHumans) +\n                    \"\\n                    \"\n                )\n              ])\n            : _vm._e()\n        ])\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"input-group-append be-addon\" }, [\n      _c(\n        \"button\",\n        {\n          staticClass: \"btn btn-secondary dropdown-toggle px-3\",\n          attrs: { type: \"button\", \"data-toggle\": \"dropdown\" }\n        },\n        [\n          _vm._v(\n            \"\\n                                            Today\\n                                        \"\n          )\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"dropdown-menu\" }, [\n        _c(\"a\", { staticClass: \"dropdown-item\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Yesterday\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"dropdown-item\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Last 3 days\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"dropdown-item\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Last 7 days\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"dropdown-divider\" }),\n        _vm._v(\" \"),\n        _c(\"a\", { staticClass: \"dropdown-item\", attrs: { href: \"#\" } }, [\n          _vm._v(\"Custom Date Range\")\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/SearchBox.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchResults.vue?vue&type=template&id=e3fb8e3a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm.results.length > 0\n    ? _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-md-12\" }, [\n          _c(\"div\", { staticClass: \"card\" }, [\n            _c(\"div\", { staticClass: \"card-body\" }, [\n              _c(\n                \"table\",\n                {\n                  staticClass:\n                    \"table table-striped table-hover table-fw-widget\",\n                  attrs: { id: \"table2\" }\n                },\n                [\n                  _vm._m(0),\n                  _vm._v(\" \"),\n                  _c(\n                    \"tbody\",\n                    _vm._l(_vm.results, function(result) {\n                      return _c(\"tr\", [_c(\"td\", [_vm._v(_vm._s(result))])])\n                    })\n                  )\n                ]\n              )\n            ])\n          ])\n        ])\n      ])\n    : _vm._e()\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [_c(\"tr\", [_c(\"th\", [_vm._v(\"Data\")])])])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/SearchResults.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=template&id=46f24cae&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"nav\",\n      { staticClass: \"navbar navbar-expand fixed-top be-top-header\" },\n      [\n        _c(\"div\", { staticClass: \"container-fluid\" }, [\n          _c(\"div\", { staticClass: \"be-navbar-header\" }, [\n            _c(\n              \"a\",\n              { staticClass: \"navbar-brand\", attrs: { href: \"index.html\" } },\n              [_vm._v(\"\\n                    Hatchet\\n                \")]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"be-right-navbar\" }, [\n            _c(\n              \"ul\",\n              { staticClass: \"nav navbar-nav float-right be-user-nav\" },\n              [\n                _c(\"li\", { staticClass: \"nav-item dropdown\" }, [\n                  _c(\n                    \"a\",\n                    {\n                      staticClass: \"nav-link dropdown-toggle\",\n                      attrs: {\n                        href: \"#\",\n                        \"data-toggle\": \"dropdown\",\n                        role: \"button\",\n                        \"aria-expanded\": \"false\"\n                      }\n                    },\n                    [\n                      _c(\"img\", {\n                        attrs: { src: \"assets/img/avatar.png\", alt: \"Avatar\" }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"span\", { staticClass: \"user-name\" }, [\n                        _vm._v(\"Túpac Amaru\")\n                      ])\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"dropdown-menu\", attrs: { role: \"menu\" } },\n                    [\n                      _c(\"div\", { staticClass: \"user-info\" }, [\n                        _c(\"div\", { staticClass: \"user-name\" }, [\n                          _vm._v(\"Túpac Amaru\")\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"user-position online\" }, [\n                          _vm._v(\"Available\")\n                        ])\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\n                        \"a\",\n                        {\n                          staticClass: \"dropdown-item\",\n                          attrs: { href: \"pages-profile.html\" }\n                        },\n                        [\n                          _c(\"span\", { staticClass: \"icon mdi mdi-face\" }),\n                          _vm._v(\"Account\\n                            \")\n                        ]\n                      ),\n                      _vm._v(\" \"),\n                      _c(\n                        \"a\",\n                        { staticClass: \"dropdown-item\", attrs: { href: \"#\" } },\n                        [\n                          _c(\"span\", { staticClass: \"icon mdi mdi-settings\" }),\n                          _vm._v(\"Settings\\n                            \")\n                        ]\n                      ),\n                      _vm._v(\" \"),\n                      _c(\n                        \"a\",\n                        {\n                          staticClass: \"dropdown-item\",\n                          attrs: { href: \"pages-login.html\" }\n                        },\n                        [\n                          _c(\"span\", { staticClass: \"icon mdi mdi-power\" }),\n                          _vm._v(\"Logout\\n                            \")\n                        ]\n                      )\n                    ]\n                  )\n                ])\n              ]\n            )\n          ])\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/TopNav.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

},[["./app.js","runtime","vendors"]]]);