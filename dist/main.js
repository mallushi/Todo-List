/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n}\n\nbody{\n    display: grid;\n    grid-template-areas: 'header header'\n                         'sidebar section'\n                         'footer footer';\n    grid-template-rows: 1fr 3fr 40px ;\n    grid-template-columns: 1fr 2fr;\n    height: 100vh;\n}\n\nheader{ \n    grid-area: header;\n    background-color: rgb(98, 101, 184);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsidebar{ \n    grid-area: sidebar;\n    background-color: rgb(207, 199, 199);\n}\n\nsection{ \n    grid-area: section;\n\n}\n\nfooter{\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(98, 101, 184);\n    height: 40px;\n}\n\nimg{\n    height: 20px;\n    width: 20px;\n}\n\na{\n    text-decoration: none;\n}\n\n.project_container{\n    margin: 10px;\n    display: flex;\n    justify-content: space-between;\n    background-color: beige;\n    padding: 10px;\n    border-style: solid;\n    border-color: brown;\n    border-radius: 5px;\n}\n\n.task_container{\n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    background-color: beige;\n    border-style: solid;\n    border-radius: 5px;\n    border-color: blue;\n}\n\n.title{\n    font-size: 50px;\n}\n\n#add_project, .h1_add_project{\n    margin: 10px;\n}\n\n#add_task, .h1_add_task{\n    margin: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _project_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_display */ \"./src/project_display.js\");\n/* harmony import */ var _task_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task_display */ \"./src/task_display.js\");\n\n\n\nconst task_dialog = document.getElementById('task_dialog');\nconst project_dialog = document.getElementById('project_dialog');\nconst add_task = document.getElementById('add_task');\nconst add_project = document.getElementById('add_project');\nconst project_close = document.getElementById('project_close');\nconst task_close = document.getElementById('task_close');\nconst task_form = document.getElementById('task_form');\nconst project_form = document.getElementById('project_form');\n\nlet todos = JSON.parse(localStorage.getItem(\"taskdata\")) || [];\nlet projects = JSON.parse(localStorage.getItem(\"projectdata\")) || [];\nlet isEditingProject = false;\nlet currentEditingProjectIndex = -1;\nlet isEdit = false;\nlet currentEditingIndex = -1;\nclass Project {\n    constructor(project_title){\n        this.id = Date.now().toString();\n        this.project_title = project_title;\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', ()=>{\n    (0,_project_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects);\n    (0,_task_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todos, isEdit= false, currentEditingIndex = null);\n    updateProjectSelect();\n})\n\nconst resetTaskForm = ()=>{\n    document.getElementById('title').value = \"\";\n    document.getElementById('description').value = \"\";\n    document.getElementById('date').value = \"\";\n    document.querySelector('#project').value = \"\";\n    document.querySelector('input[name=\"priority_radio\"]:checked').checked = false;\n    task_dialog.close();\n    isEdit = false;\n}\n\nconst resetProjectForm = ()=>{\n    document.getElementById('project_title').value = \"\";\n    project_dialog.close();\n    isEditingProject = false;\n    currentEditingProjectIndex = -1;\n}\n\nadd_project.addEventListener('click', ()=>{\n    resetProjectForm();\n    project_dialog.show();\n})\n\nproject_close.addEventListener('click', ()=>{\n    //project_dialog.close();\n    resetProjectForm();\n})\n\nproject_form.addEventListener('submit', (event)=>{\n    event.preventDefault();\n\n    const project_title = document.getElementById('project_title').value;\n    const project_object = new Project(project_title);\n    if (isEditingProject && currentEditingProjectIndex !== -1) {\n        projects[currentEditingProjectIndex] = project_object;\n    } else {\n        projects.unshift(project_object);\n    }\n    localStorage.setItem(\"projectdata\", JSON.stringify(projects));\n    (0,_project_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects);\n    updateProjectSelect();\n    resetProjectForm();\n})\n\nfunction updateProjectSelect(){\n    const project_options = document.getElementById('project');\n    project_options.innerHTML = \"\";\n\n    projects.forEach(project => {\n        const option = document.createElement('option');\n        option.value = project.id;\n        option.textContent = project.project_title;\n        project_options.appendChild(option);\n    })\n}\nclass Todo {\n    constructor(title, description, date, projectId, priority){\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.projectId = projectId;\n        this.priority = priority;\n    }\n}\n\nadd_task.addEventListener('click', ()=>{\n    task_dialog.show();\n})\n\ntask_close.addEventListener('click', ()=>{\n    task_dialog.close();\n    resetTaskForm();\n})\n\ntask_form.addEventListener('submit', (event)=>{\n    event.preventDefault();\n\n    const title = document.getElementById('title').value;\n    const description = document.getElementById('description').value;\n    const date = document.getElementById('date').value;\n    const projectId = document.querySelector('#project').value;\n    const priority = document.querySelector('input[name=\"priority_radio\"]:checked').value;\n\n    const to_do = new Todo(title, description, date, projectId, priority);\n    \n    if(isEdit){\n        todos[currentEditingIndex] = to_do;\n    }else{\n        todos.unshift(to_do);\n    }\n    \n    localStorage.setItem(\"taskdata\", JSON.stringify(todos));\n    (0,_task_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todos, isEdit= false, currentEditingIndex = null);\n    resetTaskForm();\n})\nconsole.log(\"this is full array:\",todos);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project_display.js":
/*!********************************!*\
  !*** ./src/project_display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectDisplay)\n/* harmony export */ });\nfunction addProjectDisplay(projects, isEditingProject = false, currentEditingProjectIndex = null){\n    const project_display = document.getElementById('project_display');\n    project_display.innerHTML = '';\n    \n    projects.forEach((project)=>{\n        project_display.innerHTML += \n            `<div class=\"project_container\" data-id=\"${project.id}\">\n                <h3>${project.project_title}</h3>\n                <div class=\"project_btns\">\n                    <button class=\"project_edit\" data-id=\"${project.id}\">Edit</button>\n                    <button class=\"project_delete\" data-id=\"${project.id}\">Delete</button>\n                <div>\n            </div>`\n    })\n    console.log(projects)\n\n    const projectDelete = document.querySelectorAll('.project_delete');\n    projectDelete.forEach((button)=> {\n        button.addEventListener('click', (e)=>{\n            const index = e.target.getAttribute('data-id');\n            const projectIndex = projects.findIndex(project => project.id === index);\n            projects.splice(projectIndex, 1)\n            localStorage.setItem(\"projectdata\", JSON.stringify(projects))\n            addProjectDisplay(projects);\n        })\n    })\n\n    const projectEdit = document.querySelectorAll('.project_edit');\n    projectEdit.forEach((edit)=>{\n        edit.addEventListener('click', (e)=>{\n            const index = e.target.getAttribute('data-id');\n            const projectIndex = projects.findIndex(project => project.id === index);\n            const currentProject = projects[projectIndex];\n            document.getElementById('project_title').value = currentProject.project_title;\n            isEditingProject = true;\n            currentEditingProjectIndex = index;\n            project_dialog.showModal();\n            document.getElementById('project_submit').value = \"Update\";\n            document.getElementById('project_submit').type = \"button\";\n            document.getElementById('project_submit').addEventListener('click', ()=>{\n                currentProject.project_title = document.getElementById('project_title').value;\n                localStorage.setItem(\"projectdata\", JSON.stringify(projects));\n                addProjectDisplay(projects);\n                project_dialog.close();\n            }, {once: true});\n        })\n    })\n};\n\n//# sourceURL=webpack://todo-list/./src/project_display.js?");

/***/ }),

/***/ "./src/task_display.js":
/*!*****************************!*\
  !*** ./src/task_display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTaskDisplay)\n/* harmony export */ });\nfunction addTaskDisplay(todos, isEdit= false, currentEditingIndex = null){\n    const project_display = document.getElementById('project_display');\n\n    project_display.addEventListener('click', function(e) {\n        if (e.target.closest('.project_container')) {\n            const projectid = e.target.getAttribute('data-id'); // Use data-id to store project ID\n            console.log(\"Clicked project ID:\", projectid);\n            displayTodosByProject(projectid);\n        }\n    });\n\n    function displayTodosByProject(projectid) {\n        console.log(\"this is todos:\",todos)\n        const filteredTodos = todos.filter(todo => todo.projectId === projectid);\n        console.log(\"Filtered todos:\", filteredTodos);\n        const task_display = document.getElementById('task_display');\n        task_display.innerHTML = '';\n\n        filteredTodos.forEach((todo, index) => {\n            const tasksHTML =`\n            <div class=\"task_container\">\n                <ul>\n                    <strong>Title:</strong> ${todo.title} <br>\n                    <strong>Date:</strong> ${todo.date} <br>\n                    <div class=\"hidden_content\" style=\"display: none;\">\n                        <strong>Description:</strong> ${todo.description} <br>\n                        <strong>Priority:</strong> ${todo.priority} <br>\n                    </div>\n                </ul>\n                <div class=\"buttons_div\">\n                    <button class=\"view_task\" data-project=\"${todo.projectId}\" data-index=\"${index}\">View</button>\n                    <button class=\"edit_task\" data-project=\"${todo.projectId}\" data-index=\"${index}\">Edit</button>\n                    <button class=\"delete_task\" data-project=\"${todo.projectId}\" data-index=\"${index}\">Delete</button>\n                </div>\n                </div>\n            `\n            task_display.innerHTML += tasksHTML;\n        })\n\n        document.querySelectorAll('.delete_task').forEach(button => {\n            button.addEventListener('click', (e)=>{\n                const projectId = e.target.getAttribute('data-project');\n                const index = e.target.getAttribute('data-index');\n                deleteTask(projectId, index);\n            });\n        });\n\n        document.querySelectorAll('.edit_task').forEach(task_button=> {\n            task_button.addEventListener('click', (e)=>{\n                const index = e.target.getAttribute('data-index');\n                const projectId = e.target.getAttribute('data-project');\n                editTask(projectId, index);\n            })\n        })\n\n        document.querySelectorAll('.view_task').forEach(button => {\n            button.addEventListener('click', (event) => {\n                const taskContainer = event.target.closest('.task_container');\n                const hiddenContent = taskContainer.querySelector('.hidden_content');\n        \n                // Toggle the display property\n                if (hiddenContent.style.display === 'none') {\n                    hiddenContent.style.display = 'block';  // Show the content\n                    event.target.textContent = 'Hide';      // Change button text\n                } else {\n                    hiddenContent.style.display = 'none';   // Hide the content\n                    event.target.textContent = 'View';      // Change button text back to 'View'\n                }\n            });\n        });\n    };\n\nfunction viewTask(projectId, index){\n\n};\n\nfunction deleteTask(projectId, index){\n    index = parseInt(index);\n    todos = todos.filter((todo, i) => !(todo.projectId === projectId && i === index));\n    localStorage.setItem(\"taskdata\", JSON.stringify(todos));\n    displayTodosByProject(projectId);\n};\n\nfunction editTask(projectId, index) {\n    index = parseInt(index);\n    const currentTask = todos[index];    console.log(currentTask);\n    \n    document.getElementById('title').value = currentTask.title;\n    document.getElementById('description').value = currentTask.description;\n    document.getElementById('date').value = currentTask.date;\n    document.querySelector('#project').value = currentTask.projectId;\n    \n    document.querySelectorAll('input[name=\"priority_radio\"]').forEach(radio => {\n        if (radio.value === currentTask.priority) {\n            radio.checked = true;\n        }\n    });\n\n    // Show the task dialog and handle form submission for editing\n    task_dialog.showModal();\n    isEdit = true;\n    currentEditingIndex = index;\n    document.getElementById('task_submit').value = \"Update\";\n    document.getElementById('task_submit').type = \"button\";\n    document.getElementById('task_submit').addEventListener('click', ()=>{\n        currentTask.title = document.getElementById('title').value;\n        currentTask.description = document.getElementById('description').value;\n        currentTask.date = document.getElementById('date').value;\n        currentTask.project = document.querySelector('#project').value;\n        currentTask.priority = document.querySelector('input[name=\"priority_radio\"]:checked').value;\n\n        localStorage.setItem(\"taskdata\", JSON.stringify(todos));\n        displayTodosByProject(currentTask.projectId);\n        task_dialog.close();\n    }, {once: true});\n};\n};\n\n//# sourceURL=webpack://todo-list/./src/task_display.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;