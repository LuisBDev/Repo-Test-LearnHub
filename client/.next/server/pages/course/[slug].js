module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/course/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cards/SingleCourseJumbotron.js":
/*!***************************************************!*\
  !*** ./components/cards/SingleCourseJumbotron.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Developer\\Desktop\\testProject\\learnhub\\client\\components\\cards\\SingleCourseJumbotron.js";





const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled
}) => {
  var _lessons$, _lessons$$video;

  // Destructuración
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category
  } = course;
  let buttonText;

  if (user) {
    buttonText = enrolled.status ? "Ir al curso" : "Inscribirse";
  } else {
    buttonText = "Inicia sesión para inscribirte";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jumbotron bg-primary square",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-light font-weight-bold",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead",
          children: [description === null || description === void 0 ? void 0 : description.substring(0, 160), "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
          count: category,
          style: {
            backgroundColor: "#03a9f4"
          },
          className: "pb-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Creado por ", instructor.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\xDAltima actualizaci\xF3n ", new Date(updatedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "text-light",
          children: paid ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["currencyFormatter"])({
            amount: price,
            currency: "usd"
          }) : "Gratis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [(_lessons$ = lessons[0]) !== null && _lessons$ !== void 0 && (_lessons$$video = _lessons$.video) !== null && _lessons$$video !== void 0 && _lessons$$video.Location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => {
            setPreview(lessons[0].video.Location);
            setShowModal(!showModal);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_3___default.a, {
            className: "react-player-div",
            url: lessons[0].video.Location,
            light: image.Location,
            width: "100%",
            height: "225px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image ? image.Location : "/course.png",
            alt: name,
            className: "img img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }, undefined)
        }, void 0, false), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LoadingOutlined"], {
            className: "h1 text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          className: "mb-3 mt-3",
          type: "danger",
          block: true,
          shape: "round",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["SafetyOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 35
          }, undefined),
          size: "large",
          disabled: loading,
          onClick: paid ? handlePaidEnrollment : handleFreeEnrollment,
          children: buttonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleCourseJumbotron);

/***/ }),

/***/ "./components/cards/SingleCourseLessons.js":
/*!*************************************************!*\
  !*** ./components/cards/SingleCourseLessons.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Developer\\Desktop\\testProject\\learnhub\\client\\components\\cards\\SingleCourseLessons.js";

const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_1__["List"];

const SingleCourseLessons = ({
  lessons,
  setPreview,
  showModal,
  setShowModal
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col lesson-list",
        children: [lessons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: [lessons.length, " Lecciones"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 23
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
          itemLayout: "horizontal",
          dataSource: lessons,
          renderItem: (item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 27
              }, undefined),
              title: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, undefined), item.video && item.video !== null && item.free_preview && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "text-primary pointer",
              onClick: () => {
                setPreview(item.video.Location);
                setShowModal(!showModal);
              },
              children: "Vista previa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SingleCourseLessons);

/***/ }),

/***/ "./components/modal/PreviewModal.js":
/*!******************************************!*\
  !*** ./components/modal/PreviewModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Developer\\Desktop\\testProject\\learnhub\\client\\components\\modal\\PreviewModal.js";



const PreviewModal = ({
  showModal,
  setShowModal,
  preview
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Vista previa del curso",
      visible: showModal,
      onCancel: () => setShowModal(!showModal),
      width: 720,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
          url: preview,
          playing: showModal,
          controls: true,
          width: "100%",
          height: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (PreviewModal);

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: Context, Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Developer\\Desktop\\testProject\\learnhub\\client\\context\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // estado inicial

const initialState = {
  user: null
}; // crear contexto

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(); // reducer principal

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case "LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        user: null
      });

    default:
      return state;
  }
}; // proveedor de contexto


const Provider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(rootReducer, initialState); // router

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user"))
    });
  }, []);
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use(function (response) {
    // cualquier código de estado que esté dentro del rango 2XX activará esta función
    return response;
  }, function (error) {
    // cualquier código de estado que esté fuera del rango 2XX activará esta función
    let res = error.response;

    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
      return new Promise((resolve, reject) => {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/logout").then(data => {
          console.log("/401 error > logout");
          dispatch({
            type: "LOGOUT"
          });
          window.localStorage.removeItem("user");
          router.push("/login");
        }).catch(err => {
          console.log("AXIOS INTERCEPTORS ERR", err);
          reject(error);
        });
      });
    }

    return Promise.reject(error);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getCsrfToken = async () => {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/csrf-token");
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };

    getCsrfToken();
  }, []);
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined), [state, dispatch, children]);
};



/***/ }),

/***/ "./pages/course/[slug].js":
/*!********************************!*\
  !*** ./pages/course/[slug].js ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cards/SingleCourseJumbotron */ "./components/cards/SingleCourseJumbotron.js");
/* harmony import */ var _components_modal_PreviewModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal/PreviewModal */ "./components/modal/PreviewModal.js");
/* harmony import */ var _components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/SingleCourseLessons */ "./components/cards/SingleCourseLessons.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context */ "./context/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\Developer\\Desktop\\testProject\\learnhub\\client\\pages\\course\\[slug].js";









const SingleCourse = ({
  course
}) => {
  // estado
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: preview,
    1: setPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: enrolled,
    1: setEnrolled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}); // contexto

  const {
    state: {
      user
    }
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_7__["Context"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

  const checkEnrollment = async () => {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/check-enrollment/${course._id}`);
    console.log("VERIFICAR INSCRIPCIÓN", data);
    setEnrolled(data);
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handlePaidEnrollment = async () => {
    try {
      setLoading(true); // verificar si el usuario ha iniciado sesión

      if (!user) router.push("/login"); // verificar si ya está inscrito

      if (enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/paid-enrollment/${course._id}`);
      const stripe = await loadStripe("pk_test_51HZoxgBsTsYCoHZSqYQid5460oQ950uo4oQjucMQMRCJfZqkLzNP6okotutKUOV2EJtY20MtYItVZk60G775LyWQ00Pu3BjXCs");
      stripe.redirectToCheckout({
        sessionId: data
      });
    } catch (err) {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])("Error en la inscripción, inténtalo de nuevo.");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = async e => {
    e.preventDefault();

    try {
      // verificar si el usuario ha iniciado sesión
      if (!user) router.push("/login"); // verificar si ya está inscrito

      if (enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
      setLoading(true);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`/api/free-enrollment/${course._id}`);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])(data.message);
      setLoading(false);
      router.push(`/user/course/${data.course.slug}`);
    } catch (err) {
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"])("Error en la inscripción, inténtalo de nuevo.");
      console.log(err);
      setLoading(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_SingleCourseJumbotron__WEBPACK_IMPORTED_MODULE_4__["default"], {
      course: course,
      showModal: showModal,
      setShowModal: setShowModal,
      preview: preview,
      setPreview: setPreview,
      user: user,
      loading: loading,
      handlePaidEnrollment: handlePaidEnrollment,
      handleFreeEnrollment: handleFreeEnrollment,
      enrolled: enrolled,
      setEnrolled: setEnrolled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modal_PreviewModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showModal: showModal,
      setShowModal: setShowModal,
      preview: preview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, undefined), course.lessons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      lessons: course.lessons,
      setPreview: setPreview,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

async function getServerSideProps({
  query
}) {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (SingleCourse);

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: currencyFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyFormatter", function() { return currencyFormatter; });
// data { currency: '', amount: ''}
const currencyFormatter = data => {
  return (data.amount * 100 / 100).toLocaleString(data.currency, {
    style: "currency",
    currency: data.currency
  });
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VKdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VMZXNzb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291cnNlL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2luZ2xlQ291cnNlSnVtYm90cm9uIiwiY291cnNlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicHJldmlldyIsInNldFByZXZpZXciLCJsb2FkaW5nIiwidXNlciIsImhhbmRsZVBhaWRFbnJvbGxtZW50IiwiaGFuZGxlRnJlZUVucm9sbG1lbnQiLCJlbnJvbGxlZCIsInNldEVucm9sbGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW5zdHJ1Y3RvciIsInVwZGF0ZWRBdCIsImxlc3NvbnMiLCJpbWFnZSIsInByaWNlIiwicGFpZCIsImNhdGVnb3J5IiwiYnV0dG9uVGV4dCIsInN0YXR1cyIsInN1YnN0cmluZyIsImJhY2tncm91bmRDb2xvciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjdXJyZW5jeUZvcm1hdHRlciIsImFtb3VudCIsImN1cnJlbmN5IiwidmlkZW8iLCJMb2NhdGlvbiIsIkl0ZW0iLCJMaXN0IiwiU2luZ2xlQ291cnNlTGVzc29ucyIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiZnJlZV9wcmV2aWV3IiwiUHJldmlld01vZGFsIiwiaW5pdGlhbFN0YXRlIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJnZXRDc3JmVG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJ1c2VNZW1vIiwiU2luZ2xlQ291cnNlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwidXNlQ29udGV4dCIsImNoZWNrRW5yb2xsbWVudCIsIl9pZCIsInNsdWciLCJwb3N0Iiwic3RyaXBlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJzZXNzaW9uSWQiLCJ0b2FzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsImVu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OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2NvdXJzZS9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NvdXJzZS9bc2x1Z10uanNcIik7XG4iLCJpbXBvcnQgeyBjdXJyZW5jeUZvcm1hdHRlciB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBTYWZldHlPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgU2luZ2xlQ291cnNlSnVtYm90cm9uID0gKHtcclxuICAgIGNvdXJzZSxcclxuICAgIHNob3dNb2RhbCxcclxuICAgIHNldFNob3dNb2RhbCxcclxuICAgIHByZXZpZXcsXHJcbiAgICBzZXRQcmV2aWV3LFxyXG4gICAgbG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBoYW5kbGVQYWlkRW5yb2xsbWVudCxcclxuICAgIGhhbmRsZUZyZWVFbnJvbGxtZW50LFxyXG4gICAgZW5yb2xsZWQsXHJcbiAgICBzZXRFbnJvbGxlZCxcclxufSkgPT4ge1xyXG4gICAgLy8gRGVzdHJ1Y3R1cmFjacOzblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW5zdHJ1Y3RvcixcclxuICAgICAgICB1cGRhdGVkQXQsXHJcbiAgICAgICAgbGVzc29ucyxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBwYWlkLFxyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgfSA9IGNvdXJzZTtcclxuXHJcbiAgICBsZXQgYnV0dG9uVGV4dDtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgYnV0dG9uVGV4dCA9IGVucm9sbGVkLnN0YXR1cyA/IFwiSXIgYWwgY3Vyc29cIiA6IFwiSW5zY3JpYmlyc2VcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uVGV4dCA9IFwiSW5pY2lhIHNlc2nDs24gcGFyYSBpbnNjcmliaXJ0ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctcHJpbWFyeSBzcXVhcmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVMOtdHVsbyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1saWdodCBmb250LXdlaWdodC1ib2xkXCI+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRGVzY3JpcGNpw7NuICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uPy5zdWJzdHJpbmcoMCwgMTYwKX0uLi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENhdGVnb3LDrWEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwM2E5ZjRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi00IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEF1dG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWFkbyBwb3Ige2luc3RydWN0b3IubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZlY2hhIGRlIGFjdHVhbGl6YWNpw7NuICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPsOabHRpbWEgYWN0dWFsaXphY2nDs24ge25ldyBEYXRlKHVwZGF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcmVjaW8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVuY3lGb3JtYXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkdyYXRpc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVmlkZW8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAge2xlc3NvbnNbMF0/LnZpZGVvPy5Mb2NhdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcobGVzc29uc1swXS52aWRlby5Mb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtcGxheWVyLWRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtsZXNzb25zWzBdLnZpZGVvLkxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0PXtpbWFnZS5Mb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UgPyBpbWFnZS5Mb2NhdGlvbiA6IFwiL2NvdXJzZS5wbmdcIn0gYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJvdMOzbiBkZSBpbnNjcmlwY2nDs24gICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nT3V0bGluZWQgY2xhc3NOYW1lPVwiaDEgdGV4dC1kYW5nZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zIG10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8U2FmZXR5T3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwYWlkID8gaGFuZGxlUGFpZEVucm9sbG1lbnQgOiBoYW5kbGVGcmVlRW5yb2xsbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlSnVtYm90cm9uO1xyXG4iLCJpbXBvcnQgeyBMaXN0LCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBJdGVtIH0gPSBMaXN0O1xuXG5jb25zdCBTaW5nbGVDb3Vyc2VMZXNzb25zID0gKHtcbiAgbGVzc29ucyxcbiAgc2V0UHJldmlldyxcbiAgc2hvd01vZGFsLFxuICBzZXRTaG93TW9kYWwsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGxlc3Nvbi1saXN0XCI+XG4gICAgICAgICAge2xlc3NvbnMgJiYgPGg0PntsZXNzb25zLmxlbmd0aH0gTGVjY2lvbmVzPC9oND59XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xlc3NvbnN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgICAgICAgPEl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpbmRleCArIDF9PC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7aXRlbS52aWRlbyAmJiBpdGVtLnZpZGVvICE9PSBudWxsICYmIGl0ZW0uZnJlZV9wcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBwb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXcoaXRlbS52aWRlby5Mb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWaXN0YSBwcmV2aWFcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDb3Vyc2VMZXNzb25zO1xuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5cclxuY29uc3QgUHJldmlld01vZGFsID0gKHsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwsIHByZXZpZXcgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVmlzdGEgcHJldmlhIGRlbCBjdXJzb1wiXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezcyMH1cclxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17cHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZz17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZXZpZXdNb2RhbDtcclxuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuLy8gZXN0YWRvIGluaWNpYWxcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjogbnVsbCxcclxufTtcclxuXHJcbi8vIGNyZWFyIGNvbnRleHRvXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyByZWR1Y2VyIHByaW5jaXBhbFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBwcm92ZWVkb3IgZGUgY29udGV4dG9cclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vIGN1YWxxdWllciBjw7NkaWdvIGRlIGVzdGFkbyBxdWUgZXN0w6kgZGVudHJvIGRlbCByYW5nbyAyWFggYWN0aXZhcsOhIGVzdGEgZnVuY2nDs25cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGN1YWxxdWllciBjw7NkaWdvIGRlIGVzdGFkbyBxdWUgZXN0w6kgZnVlcmEgZGVsIHJhbmdvIDJYWCBhY3RpdmFyw6EgZXN0YSBmdW5jacOzblxyXG4gICAgICAgICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCIvYXBpL2xvZ291dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIvNDAxIGVycm9yID4gbG9nb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBWElPUyBJTlRFUkNFUFRPUlMgRVJSXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XHJcbiAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnNbXCJYLUNTUkYtVG9rZW5cIl0gPSBkYXRhLmdldENzcmZUb2tlbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGdldENzcmZUb2tlbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICksIFtzdGF0ZSwgZGlzcGF0Y2gsIGNoaWxkcmVuXSk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgQ29udGV4dCwgUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2luZ2xlQ291cnNlSnVtYm90cm9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NpbmdsZUNvdXJzZUp1bWJvdHJvblwiO1xyXG5pbXBvcnQgUHJldmlld01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFsL1ByZXZpZXdNb2RhbFwiO1xyXG5pbXBvcnQgU2luZ2xlQ291cnNlTGVzc29ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VMZXNzb25zXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuXHJcbmNvbnN0IFNpbmdsZUNvdXJzZSA9ICh7IGNvdXJzZSB9KSA9PiB7XHJcbiAgICAvLyBlc3RhZG9cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlbnJvbGxlZCwgc2V0RW5yb2xsZWRdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgLy8gY29udGV4dG9cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzdGF0ZTogeyB1c2VyIH0sXHJcbiAgICB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyICYmIGNvdXJzZSkgY2hlY2tFbnJvbGxtZW50KCk7XHJcbiAgICB9LCBbdXNlciwgY291cnNlXSk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tFbnJvbGxtZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NoZWNrLWVucm9sbG1lbnQvJHtjb3Vyc2UuX2lkfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVkVSSUZJQ0FSIElOU0NSSVBDScOTTlwiLCBkYXRhKTtcclxuICAgICAgICBzZXRFbnJvbGxlZChkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFpZEVucm9sbG1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgLy8gdmVyaWZpY2FyIHNpIGVsIHVzdWFyaW8gaGEgaW5pY2lhZG8gc2VzacOzblxyXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAvLyB2ZXJpZmljYXIgc2kgeWEgZXN0w6EgaW5zY3JpdG9cclxuICAgICAgICAgICAgaWYgKGVucm9sbGVkLnN0YXR1cylcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZW5yb2xsZWQuY291cnNlLnNsdWd9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wYWlkLWVucm9sbG1lbnQvJHtjb3Vyc2UuX2lkfWApO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xyXG4gICAgICAgICAgICBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkOiBkYXRhIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0b2FzdChcIkVycm9yIGVuIGxhIGluc2NyaXBjacOzbiwgaW50w6ludGFsbyBkZSBudWV2by5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRnJlZUVucm9sbG1lbnQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyB2ZXJpZmljYXIgc2kgZWwgdXN1YXJpbyBoYSBpbmljaWFkbyBzZXNpw7NuXHJcbiAgICAgICAgICAgIGlmICghdXNlcikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIC8vIHZlcmlmaWNhciBzaSB5YSBlc3TDoSBpbnNjcml0b1xyXG4gICAgICAgICAgICBpZiAoZW5yb2xsZWQuc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvdXNlci9jb3Vyc2UvJHtlbnJvbGxlZC5jb3Vyc2Uuc2x1Z31gKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ZyZWUtZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XHJcbiAgICAgICAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZGF0YS5jb3Vyc2Uuc2x1Z31gKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdG9hc3QoXCJFcnJvciBlbiBsYSBpbnNjcmlwY2nDs24sIGludMOpbnRhbG8gZGUgbnVldm8uXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvdXJzZSwgbnVsbCwgNCl9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICA8U2luZ2xlQ291cnNlSnVtYm90cm9uXHJcbiAgICAgICAgICAgICAgICBjb3Vyc2U9e2NvdXJzZX1cclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgc2V0UHJldmlldz17c2V0UHJldmlld31cclxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlUGFpZEVucm9sbG1lbnQ9e2hhbmRsZVBhaWRFbnJvbGxtZW50fVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRnJlZUVucm9sbG1lbnQ9e2hhbmRsZUZyZWVFbnJvbGxtZW50fVxyXG4gICAgICAgICAgICAgICAgZW5yb2xsZWQ9e2Vucm9sbGVkfVxyXG4gICAgICAgICAgICAgICAgc2V0RW5yb2xsZWQ9e3NldEVucm9sbGVkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFByZXZpZXdNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIHByZXZpZXc9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7Y291cnNlLmxlc3NvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNpbmdsZUNvdXJzZUxlc3NvbnNcclxuICAgICAgICAgICAgICAgICAgICBsZXNzb25zPXtjb3Vyc2UubGVzc29uc31cclxuICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3PXtzZXRQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQVBJfS9jb3Vyc2UvJHtxdWVyeS5zbHVnfWApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjb3Vyc2U6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZTtcclxuIiwiLy8gZGF0YSB7IGN1cnJlbmN5OiAnJywgYW1vdW50OiAnJ31cclxuZXhwb3J0IGNvbnN0IGN1cnJlbmN5Rm9ybWF0dGVyID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoKGRhdGEuYW1vdW50ICogMTAwKSAvIDEwMCkudG9Mb2NhbGVTdHJpbmcoZGF0YS5jdXJyZW5jeSwge1xyXG4gICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgY3VycmVuY3k6IGRhdGEuY3VycmVuY3ksXHJcbiAgICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=