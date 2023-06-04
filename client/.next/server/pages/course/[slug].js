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
/* harmony import */ var _pages_course_slug___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/course/[slug] */ "./pages/course/[slug].js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);


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
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead",
          children: [description && description.substring(0, 160), "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
          count: category,
          style: {
            backgroundColor: "#03a9f4"
          },
          className: "pb-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Creado por ", instructor.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\xDAltima actualizaci\xF3n ", new Date(updatedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "text-light",
          children: paid ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["currencyFormatter"])({
            amount: price,
            currency: "usd"
          }) : "Gratis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [lessons[0].video && lessons[0].video.Location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => {
            setPreview(lessons[0].video.Location);
            setShowModal(!showModal);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: "react-player-div",
            url: lessons[0].video.Location,
            light: image.Location,
            width: "100%",
            height: "225px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image.Location,
            alt: name,
            className: "img img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 29
          }, undefined)
        }, void 0, false), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LoadingOutlined"], {
            className: "h1 text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "mb-3 mt-3",
          type: "danger",
          block: true,
          shape: "round",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SafetyOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 35
          }, undefined),
          size: "large",
          disabled: loading,
          onClick: paid ? handlePaidEnrollment : handleFreeEnrollment,
          children: user ? enrolled.status ? "Ir al curso" : "Inscribirse" : "Inicia sesión para inscribirte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/csrf-token"); // console.log("CSRF", data);

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };

    getCsrfToken();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 9
  }, undefined);
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
  const {
    slug
  } = router.query;

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
      lineNumber: 76,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modal_PreviewModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showModal: showModal,
      setShowModal: setShowModal,
      preview: preview
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, undefined), course.lessons && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_cards_SingleCourseLessons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      lessons: course.lessons,
      setPreview: setPreview,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VKdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VMZXNzb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291cnNlL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2luZ2xlQ291cnNlSnVtYm90cm9uIiwiY291cnNlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicHJldmlldyIsInNldFByZXZpZXciLCJsb2FkaW5nIiwidXNlciIsImhhbmRsZVBhaWRFbnJvbGxtZW50IiwiaGFuZGxlRnJlZUVucm9sbG1lbnQiLCJlbnJvbGxlZCIsInNldEVucm9sbGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW5zdHJ1Y3RvciIsInVwZGF0ZWRBdCIsImxlc3NvbnMiLCJpbWFnZSIsInByaWNlIiwicGFpZCIsImNhdGVnb3J5Iiwic3Vic3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImN1cnJlbmN5Rm9ybWF0dGVyIiwiYW1vdW50IiwiY3VycmVuY3kiLCJ2aWRlbyIsIkxvY2F0aW9uIiwic3RhdHVzIiwiSXRlbSIsIkxpc3QiLCJTaW5nbGVDb3Vyc2VMZXNzb25zIiwibGVuZ3RoIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJmcmVlX3ByZXZpZXciLCJQcmV2aWV3TW9kYWwiLCJpbml0aWFsU3RhdGUiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlSXRlbSIsInB1c2giLCJjYXRjaCIsImVyciIsImdldENzcmZUb2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsIlNpbmdsZUNvdXJzZSIsInVzZVN0YXRlIiwic2V0TG9hZGluZyIsInVzZUNvbnRleHQiLCJjaGVja0Vucm9sbG1lbnQiLCJfaWQiLCJzbHVnIiwicXVlcnkiLCJwb3N0Iiwic3RyaXBlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJzZXNzaW9uSWQiLCJ0b2FzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJlbnYiLCJBUEkiLCJwcm9wcyIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLHFCQUFxQixHQUFHLENBQUM7QUFDM0JDLFFBRDJCO0FBRTNCQyxXQUYyQjtBQUczQkMsY0FIMkI7QUFJM0JDLFNBSjJCO0FBSzNCQyxZQUwyQjtBQU0zQkMsU0FOMkI7QUFPM0JDLE1BUDJCO0FBUTNCQyxzQkFSMkI7QUFTM0JDLHNCQVQyQjtBQVUzQkMsVUFWMkI7QUFXM0JDO0FBWDJCLENBQUQsS0FZeEI7QUFDRjtBQUNBLFFBQU07QUFDRkMsUUFERTtBQUVGQyxlQUZFO0FBR0ZDLGNBSEU7QUFJRkMsYUFKRTtBQUtGQyxXQUxFO0FBTUZDLFNBTkU7QUFPRkMsU0FQRTtBQVFGQyxRQVJFO0FBU0ZDO0FBVEUsTUFVRm5CLE1BVko7QUFZQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUVJO0FBQUksbUJBQVMsRUFBQyw2QkFBZDtBQUFBLG9CQUE2Q1c7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUlJO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUEscUJBQ0tDLFdBQVcsSUFBSUEsV0FBVyxDQUFDUSxTQUFaLENBQXNCLENBQXRCLEVBQXlCLEdBQXpCLENBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQVFJLHFFQUFDLDBDQUFEO0FBQ0ksZUFBSyxFQUFFRCxRQURYO0FBRUksZUFBSyxFQUFFO0FBQUVFLDJCQUFlLEVBQUU7QUFBbkIsV0FGWDtBQUdJLG1CQUFTLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJKLGVBY0k7QUFBQSxvQ0FBZVIsVUFBVSxDQUFDRixJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEosZUFnQkk7QUFBQSxvREFBeUIsSUFBSVcsSUFBSixDQUFTUixTQUFULEVBQW9CUyxrQkFBcEIsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCSixlQWtCSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBLG9CQUNLTCxJQUFJLEdBQ0NNLHdFQUFpQixDQUFDO0FBQ2hCQyxrQkFBTSxFQUFFUixLQURRO0FBRWhCUyxvQkFBUSxFQUFFO0FBRk0sV0FBRCxDQURsQixHQUtDO0FBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBNEJJO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsbUJBR0tYLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1ksS0FBWCxJQUFvQlosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXWSxLQUFYLENBQWlCQyxRQUFyQyxnQkFDRztBQUNJLGlCQUFPLEVBQUUsTUFBTTtBQUNYeEIsc0JBQVUsQ0FBQ1csT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXWSxLQUFYLENBQWlCQyxRQUFsQixDQUFWO0FBQ0ExQix3QkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNILFdBSkw7QUFBQSxpQ0FNSSxxRUFBQyxtREFBRDtBQUNJLHFCQUFTLEVBQUMsa0JBRGQ7QUFFSSxlQUFHLEVBQUVjLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV1ksS0FBWCxDQUFpQkMsUUFGMUI7QUFHSSxpQkFBSyxFQUFFWixLQUFLLENBQUNZLFFBSGpCO0FBSUksaUJBQUssRUFBQyxNQUpWO0FBS0ksa0JBQU0sRUFBQztBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGdCQWdCRztBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFFWixLQUFLLENBQUNZLFFBQWhCO0FBQTBCLGVBQUcsRUFBRWpCLElBQS9CO0FBQXFDLHFCQUFTLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHlCQW5CUixFQXdCS04sT0FBTyxnQkFDSjtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBQSxpQ0FDSSxxRUFBQyxpRUFBRDtBQUFpQixxQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURJLGdCQUtKLHFFQUFDLDJDQUFEO0FBQ0ksbUJBQVMsRUFBQyxXQURkO0FBRUksY0FBSSxFQUFDLFFBRlQ7QUFHSSxlQUFLLE1BSFQ7QUFJSSxlQUFLLEVBQUMsT0FKVjtBQUtJLGNBQUksZUFBRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxWO0FBTUksY0FBSSxFQUFDLE9BTlQ7QUFPSSxrQkFBUSxFQUFFQSxPQVBkO0FBUUksaUJBQU8sRUFBRWEsSUFBSSxHQUFHWCxvQkFBSCxHQUEwQkMsb0JBUjNDO0FBQUEsb0JBVUtGLElBQUksR0FDQ0csUUFBUSxDQUFDb0IsTUFBVCxHQUNJLGFBREosR0FFSSxhQUhMLEdBSUM7QUFkVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdGSCxDQTFHRDs7QUE0R2U5QixvRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0EsTUFBTTtBQUFFK0I7QUFBRixJQUFXQyx5Q0FBakI7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQztBQUMzQmpCLFNBRDJCO0FBRTNCWCxZQUYyQjtBQUczQkgsV0FIMkI7QUFJM0JDO0FBSjJCLENBQUQsS0FLdEI7QUFDSixzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLG1CQUNHYSxPQUFPLGlCQUFJO0FBQUEscUJBQUtBLE9BQU8sQ0FBQ2tCLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURkLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLHlDQUFEO0FBQ0Usb0JBQVUsRUFBQyxZQURiO0FBRUUsb0JBQVUsRUFBRWxCLE9BRmQ7QUFHRSxvQkFBVSxFQUFFLENBQUNtQixJQUFELEVBQU9DLEtBQVAsa0JBQ1YscUVBQUMsSUFBRDtBQUFBLG9DQUNFLHFFQUFDLElBQUQsQ0FBTSxJQUFOO0FBQ0Usb0JBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFBLDBCQUFTQSxLQUFLLEdBQUc7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEVjtBQUVFLG1CQUFLLEVBQUVELElBQUksQ0FBQ0U7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBS0dGLElBQUksQ0FBQ1AsS0FBTCxJQUFjTyxJQUFJLENBQUNQLEtBQUwsS0FBZSxJQUE3QixJQUFxQ08sSUFBSSxDQUFDRyxZQUExQyxpQkFDQztBQUNFLHVCQUFTLEVBQUMsc0JBRFo7QUFFRSxxQkFBTyxFQUFFLE1BQU07QUFDYmpDLDBCQUFVLENBQUM4QixJQUFJLENBQUNQLEtBQUwsQ0FBV0MsUUFBWixDQUFWO0FBQ0ExQiw0QkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNELGVBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBdkNEOztBQXlDZStCLGtGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTs7QUFFQSxNQUFNTSxZQUFZLEdBQUcsQ0FBQztBQUFFckMsV0FBRjtBQUFhQyxjQUFiO0FBQTJCQztBQUEzQixDQUFELEtBQTBDO0FBQzNELHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsMENBQUQ7QUFDSSxXQUFLLEVBQUMsd0JBRFY7QUFFSSxhQUFPLEVBQUVGLFNBRmI7QUFHSSxjQUFRLEVBQUUsTUFBTUMsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FIaEM7QUFJSSxXQUFLLEVBQUUsR0FKWDtBQUtJLFlBQU0sRUFBRSxJQUxaO0FBQUEsNkJBT0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSwrQkFDSSxxRUFBQyxtREFBRDtBQUNJLGFBQUcsRUFBRUUsT0FEVDtBQUVJLGlCQUFPLEVBQUVGLFNBRmI7QUFHSSxrQkFBUSxFQUFFLElBSGQ7QUFJSSxlQUFLLEVBQUMsTUFKVjtBQUtJLGdCQUFNLEVBQUM7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXFCSCxDQXRCRDs7QUF3QmVxQywyRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCakMsTUFBSSxFQUFFO0FBRFcsQ0FBckIsQyxDQUlBOztBQUNBLE1BQU1rQyxPQUFPLGdCQUFHQywyREFBYSxFQUE3QixDLENBRUE7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNuQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLE9BQUw7QUFDSSw2Q0FBWUYsS0FBWjtBQUFtQnJDLFlBQUksRUFBRXNDLE1BQU0sQ0FBQ0U7QUFBaEM7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksNkNBQVlILEtBQVo7QUFBbUJyQyxZQUFJLEVBQUU7QUFBekI7O0FBQ0o7QUFDSSxhQUFPcUMsS0FBUDtBQU5SO0FBUUgsQ0FURCxDLENBV0E7OztBQUNBLE1BQU1JLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUMvQixRQUFNO0FBQUEsT0FBQ0wsS0FBRDtBQUFBLE9BQVFNO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNSLFdBQUQsRUFBY0gsWUFBZCxDQUFwQyxDQUQrQixDQUcvQjs7QUFDQSxRQUFNWSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNaSixZQUFRLENBQUM7QUFDTEosVUFBSSxFQUFFLE9BREQ7QUFFTEMsYUFBTyxFQUFFUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QixDQUFYO0FBRkosS0FBRCxDQUFSO0FBSUgsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BQyw4Q0FBSyxDQUFDQyxZQUFOLENBQW1CQyxRQUFuQixDQUE0QkMsR0FBNUIsQ0FDSSxVQUFVRCxRQUFWLEVBQW9CO0FBQ2hCO0FBQ0EsV0FBT0EsUUFBUDtBQUNILEdBSkwsRUFLSSxVQUFVRSxLQUFWLEVBQWlCO0FBQ2I7QUFDQSxRQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBaEI7O0FBQ0EsUUFBSUcsR0FBRyxDQUFDbkMsTUFBSixLQUFlLEdBQWYsSUFBc0JtQyxHQUFHLENBQUNDLE1BQTFCLElBQW9DLENBQUNELEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxnQkFBcEQsRUFBc0U7QUFDbEUsYUFBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDVixvREFBSyxDQUNBVyxHQURMLENBQ1MsYUFEVCxFQUVLQyxJQUZMLENBRVdDLElBQUQsSUFBVTtBQUNaQyxpQkFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQXpCLGtCQUFRLENBQUM7QUFBRUosZ0JBQUksRUFBRTtBQUFSLFdBQUQsQ0FBUjtBQUNBVyxnQkFBTSxDQUFDQyxZQUFQLENBQW9Ca0IsVUFBcEIsQ0FBK0IsTUFBL0I7QUFDQXhCLGdCQUFNLENBQUN5QixJQUFQLENBQVksUUFBWjtBQUNILFNBUEwsRUFRS0MsS0FSTCxDQVFZQyxHQUFELElBQVM7QUFDWkwsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDSSxHQUF0QztBQUNBVCxnQkFBTSxDQUFDTixLQUFELENBQU47QUFDSCxTQVhMO0FBWUgsT0FiTSxDQUFQO0FBY0g7O0FBQ0QsV0FBT0ksT0FBTyxDQUFDRSxNQUFSLENBQWVOLEtBQWYsQ0FBUDtBQUNILEdBekJMO0FBNEJBVix5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNMEIsWUFBWSxHQUFHLFlBQVk7QUFDN0IsWUFBTTtBQUFFUDtBQUFGLFVBQVcsTUFBTWIsNENBQUssQ0FBQ1csR0FBTixDQUFVLGlCQUFWLENBQXZCLENBRDZCLENBRTdCOztBQUNBWCxrREFBSyxDQUFDcUIsUUFBTixDQUFlQyxPQUFmLENBQXVCLGNBQXZCLElBQXlDVCxJQUFJLENBQUNPLFlBQTlDO0FBQ0gsS0FKRDs7QUFLQUEsZ0JBQVk7QUFDZixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0kscUVBQUMsT0FBRCxDQUFTLFFBQVQ7QUFBa0IsU0FBSyxFQUFFO0FBQUVwQyxXQUFGO0FBQVNNO0FBQVQsS0FBekI7QUFBQSxjQUErQ0Q7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FyREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1rQyxZQUFZLEdBQUcsQ0FBQztBQUFFbEY7QUFBRixDQUFELEtBQWdCO0FBQ2pDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCaUYsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNoRixPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QitFLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDOUUsT0FBRDtBQUFBLE9BQVUrRTtBQUFWLE1BQXdCRCxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQzFFLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCeUUsc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBTGlDLENBTWpDOztBQUNBLFFBQU07QUFDRnhDLFNBQUssRUFBRTtBQUFFckM7QUFBRjtBQURMLE1BRUYrRSx3REFBVSxDQUFDN0MsZ0RBQUQsQ0FGZDtBQUlBYSx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJL0MsSUFBSSxJQUFJTixNQUFaLEVBQW9Cc0YsZUFBZTtBQUN0QyxHQUZRLEVBRU4sQ0FBQ2hGLElBQUQsRUFBT04sTUFBUCxDQUZNLENBQVQ7O0FBSUEsUUFBTXNGLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFVBQU07QUFBRWQ7QUFBRixRQUFXLE1BQU1iLDRDQUFLLENBQUNXLEdBQU4sQ0FBVyx5QkFBd0J0RSxNQUFNLENBQUN1RixHQUFJLEVBQTlDLENBQXZCO0FBQ0FkLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDRixJQUFyQztBQUNBOUQsZUFBVyxDQUFDOEQsSUFBRCxDQUFYO0FBQ0gsR0FKRDs7QUFNQSxRQUFNckIsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRW9DO0FBQUYsTUFBV3JDLE1BQU0sQ0FBQ3NDLEtBQXhCOztBQUVBLFFBQU1sRixvQkFBb0IsR0FBRyxZQUFZO0FBQ3JDLFFBQUk7QUFDQTZFLGdCQUFVLENBQUMsSUFBRCxDQUFWLENBREEsQ0FFQTs7QUFDQSxVQUFJLENBQUM5RSxJQUFMLEVBQVc2QyxNQUFNLENBQUN5QixJQUFQLENBQVksUUFBWixFQUhYLENBSUE7O0FBQ0EsVUFBSW5FLFFBQVEsQ0FBQ29CLE1BQWIsRUFDSSxPQUFPc0IsTUFBTSxDQUFDeUIsSUFBUCxDQUFhLGdCQUFlbkUsUUFBUSxDQUFDVCxNQUFULENBQWdCd0YsSUFBSyxFQUFqRCxDQUFQO0FBQ0osWUFBTTtBQUFFaEI7QUFBRixVQUFXLE1BQU1iLDRDQUFLLENBQUMrQixJQUFOLENBQVksd0JBQXVCMUYsTUFBTSxDQUFDdUYsR0FBSSxFQUE5QyxDQUF2QjtBQUNBLFlBQU1JLE1BQU0sR0FBRyxNQUFNQyxVQUFVLENBQUNDLDZHQUFELENBQS9CO0FBQ0FGLFlBQU0sQ0FBQ0csa0JBQVAsQ0FBMEI7QUFBRUMsaUJBQVMsRUFBRXZCO0FBQWIsT0FBMUI7QUFDSCxLQVZELENBVUUsT0FBT00sR0FBUCxFQUFZO0FBQ1ZrQixrRUFBSyxDQUFDLDhDQUFELENBQUw7QUFDQXZCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0FNLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7QUFDSixHQWhCRDs7QUFrQkEsUUFBTTVFLG9CQUFvQixHQUFHLE1BQU95RixDQUFQLElBQWE7QUFDdENBLEtBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJO0FBQ0E7QUFDQSxVQUFJLENBQUM1RixJQUFMLEVBQVc2QyxNQUFNLENBQUN5QixJQUFQLENBQVksUUFBWixFQUZYLENBR0E7O0FBQ0EsVUFBSW5FLFFBQVEsQ0FBQ29CLE1BQWIsRUFDSSxPQUFPc0IsTUFBTSxDQUFDeUIsSUFBUCxDQUFhLGdCQUFlbkUsUUFBUSxDQUFDVCxNQUFULENBQWdCd0YsSUFBSyxFQUFqRCxDQUFQO0FBQ0pKLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsWUFBTTtBQUFFWjtBQUFGLFVBQVcsTUFBTWIsNENBQUssQ0FBQytCLElBQU4sQ0FBWSx3QkFBdUIxRixNQUFNLENBQUN1RixHQUFJLEVBQTlDLENBQXZCO0FBQ0FTLGtFQUFLLENBQUN4QixJQUFJLENBQUMyQixPQUFOLENBQUw7QUFDQWYsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQWpDLFlBQU0sQ0FBQ3lCLElBQVAsQ0FBYSxnQkFBZUosSUFBSSxDQUFDeEUsTUFBTCxDQUFZd0YsSUFBSyxFQUE3QztBQUNILEtBWEQsQ0FXRSxPQUFPVixHQUFQLEVBQVk7QUFDVmtCLGtFQUFLLENBQUMsOENBQUQsQ0FBTDtBQUNBdkIsYUFBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDQU0sZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSDtBQUNKLEdBbEJEOztBQW9CQSxzQkFDSTtBQUFBLDRCQUVJLHFFQUFDLCtFQUFEO0FBQ0ksWUFBTSxFQUFFcEYsTUFEWjtBQUVJLGVBQVMsRUFBRUMsU0FGZjtBQUdJLGtCQUFZLEVBQUVDLFlBSGxCO0FBSUksYUFBTyxFQUFFQyxPQUpiO0FBS0ksZ0JBQVUsRUFBRUMsVUFMaEI7QUFNSSxVQUFJLEVBQUVFLElBTlY7QUFPSSxhQUFPLEVBQUVELE9BUGI7QUFRSSwwQkFBb0IsRUFBRUUsb0JBUjFCO0FBU0ksMEJBQW9CLEVBQUVDLG9CQVQxQjtBQVVJLGNBQVEsRUFBRUMsUUFWZDtBQVdJLGlCQUFXLEVBQUVDO0FBWGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFnQkkscUVBQUMsc0VBQUQ7QUFDSSxlQUFTLEVBQUVULFNBRGY7QUFFSSxrQkFBWSxFQUFFQyxZQUZsQjtBQUdJLGFBQU8sRUFBRUM7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSixFQXNCS0gsTUFBTSxDQUFDZSxPQUFQLGlCQUNHLHFFQUFDLDZFQUFEO0FBQ0ksYUFBTyxFQUFFZixNQUFNLENBQUNlLE9BRHBCO0FBRUksZ0JBQVUsRUFBRVgsVUFGaEI7QUFHSSxlQUFTLEVBQUVILFNBSGY7QUFJSSxrQkFBWSxFQUFFQztBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCUjtBQUFBLGtCQURKO0FBaUNILENBL0ZEOztBQWlHTyxlQUFla0csa0JBQWYsQ0FBa0M7QUFBRVg7QUFBRixDQUFsQyxFQUE2QztBQUNoRCxRQUFNO0FBQUVqQjtBQUFGLE1BQVcsTUFBTWIsNENBQUssQ0FBQ1csR0FBTixDQUFXLEdBQUV1QixPQUFPLENBQUNRLEdBQVIsQ0FBWUMsR0FBSSxXQUFVYixLQUFLLENBQUNELElBQUssRUFBbEQsQ0FBdkI7QUFDQSxTQUFPO0FBQ0hlLFNBQUssRUFBRTtBQUNIdkcsWUFBTSxFQUFFd0U7QUFETDtBQURKLEdBQVA7QUFLSDtBQUVjVSwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQ08sTUFBTTFELGlCQUFpQixHQUFJZ0QsSUFBRCxJQUFVO0FBQ3ZDLFNBQU8sQ0FBRUEsSUFBSSxDQUFDL0MsTUFBTCxHQUFjLEdBQWYsR0FBc0IsR0FBdkIsRUFBNEIrRSxjQUE1QixDQUEyQ2hDLElBQUksQ0FBQzlDLFFBQWhELEVBQTBEO0FBQzdEK0UsU0FBSyxFQUFFLFVBRHNEO0FBRTdEL0UsWUFBUSxFQUFFOEMsSUFBSSxDQUFDOUM7QUFGOEMsR0FBMUQsQ0FBUDtBQUlILENBTE0sQzs7Ozs7Ozs7Ozs7QUNEUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9jb3Vyc2UvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jb3Vyc2UvW3NsdWddLmpzXCIpO1xuIiwiaW1wb3J0IFNpbmdsZUNvdXJzZSBmcm9tIFwiLi4vLi4vcGFnZXMvY291cnNlL1tzbHVnXVwiO1xyXG5pbXBvcnQgeyBjdXJyZW5jeUZvcm1hdHRlciB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ091dGxpbmVkLCBTYWZldHlPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgU2luZ2xlQ291cnNlSnVtYm90cm9uID0gKHtcclxuICAgIGNvdXJzZSxcclxuICAgIHNob3dNb2RhbCxcclxuICAgIHNldFNob3dNb2RhbCxcclxuICAgIHByZXZpZXcsXHJcbiAgICBzZXRQcmV2aWV3LFxyXG4gICAgbG9hZGluZyxcclxuICAgIHVzZXIsXHJcbiAgICBoYW5kbGVQYWlkRW5yb2xsbWVudCxcclxuICAgIGhhbmRsZUZyZWVFbnJvbGxtZW50LFxyXG4gICAgZW5yb2xsZWQsXHJcbiAgICBzZXRFbnJvbGxlZCxcclxufSkgPT4ge1xyXG4gICAgLy8gRGVzdHJ1Y3R1cmFjacOzblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaW5zdHJ1Y3RvcixcclxuICAgICAgICB1cGRhdGVkQXQsXHJcbiAgICAgICAgbGVzc29ucyxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgICBwcmljZSxcclxuICAgICAgICBwYWlkLFxyXG4gICAgICAgIGNhdGVnb3J5LFxyXG4gICAgfSA9IGNvdXJzZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLXByaW1hcnkgc3F1YXJlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFTDrXR1bG8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGlnaHQgZm9udC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIERlc2NyaXBjacOzbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMTYwKX0uLi5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENhdGVnb3LDrWEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwM2E5ZjRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYi00IG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEF1dG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWFkbyBwb3Ige2luc3RydWN0b3IubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEZlY2hhIGRlIGFjdHVhbGl6YWNpw7NuICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPsOabHRpbWEgYWN0dWFsaXphY2nDs24ge25ldyBEYXRlKHVwZGF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBQcmVjaW8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY3VycmVuY3lGb3JtYXR0ZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwidXNkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkdyYXRpc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGxlc3NvbnNbMF0pfSAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogTW9zdHJhciB2aXN0YSBwcmV2aWEgZGVsIHZpZGVvIG8gaW1hZ2VuIGRlbCBjdXJzbyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bGVzc29uc1swXS52aWRlbyAmJiBsZXNzb25zWzBdLnZpZGVvLkxvY2F0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlldyhsZXNzb25zWzBdLnZpZGVvLkxvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWFjdC1wbGF5ZXItZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2xlc3NvbnNbMF0udmlkZW8uTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e2ltYWdlLkxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5Mb2NhdGlvbn0gYWx0PXtuYW1lfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7LyogQm90w7NuIGRlIGluc2NyaXBjacOzbiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIGNsYXNzTmFtZT1cImgxIHRleHQtZGFuZ2VyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMyBtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFNhZmV0eU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cGFpZCA/IGhhbmRsZVBhaWRFbnJvbGxtZW50IDogaGFuZGxlRnJlZUVucm9sbG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBlbnJvbGxlZC5zdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIklyIGFsIGN1cnNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkluc2NyaWJpcnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiSW5pY2lhIHNlc2nDs24gcGFyYSBpbnNjcmliaXJ0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZUp1bWJvdHJvbjtcclxuIiwiaW1wb3J0IHsgTGlzdCwgQXZhdGFyIH0gZnJvbSBcImFudGRcIjtcbmNvbnN0IHsgSXRlbSB9ID0gTGlzdDtcblxuY29uc3QgU2luZ2xlQ291cnNlTGVzc29ucyA9ICh7XG4gIGxlc3NvbnMsXG4gIHNldFByZXZpZXcsXG4gIHNob3dNb2RhbCxcbiAgc2V0U2hvd01vZGFsLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBsZXNzb24tbGlzdFwiPlxuICAgICAgICAgIHtsZXNzb25zICYmIDxoND57bGVzc29ucy5sZW5ndGh9IExlY2Npb25lczwvaDQ+fVxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBkYXRhU291cmNlPXtsZXNzb25zfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgIDxJdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aW5kZXggKyAxfTwvQXZhdGFyPn1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2l0ZW0udmlkZW8gJiYgaXRlbS52aWRlbyAhPT0gbnVsbCAmJiBpdGVtLmZyZWVfcHJldmlldyAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KGl0ZW0udmlkZW8uTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbCghc2hvd01vZGFsKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlzdGEgcHJldmlhXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlTGVzc29ucztcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuXHJcbmNvbnN0IFByZXZpZXdNb2RhbCA9ICh7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsLCBwcmV2aWV3IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlZpc3RhIHByZXZpYSBkZWwgY3Vyc29cIlxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFNob3dNb2RhbCghc2hvd01vZGFsKX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs3MjB9XHJcbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlpbmc9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3TW9kYWw7XHJcbiIsImltcG9ydCB7IHVzZVJlZHVjZXIsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gZXN0YWRvIGluaWNpYWxcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcjogbnVsbCxcclxufTtcclxuXHJcbi8vIGNyZWFyIGNvbnRleHRvXHJcbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyByZWR1Y2VyIHByaW5jaXBhbFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkxPR0lOXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBwcm92ZWVkb3IgZGUgY29udGV4dG9cclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gICAgLy8gcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIC8vIGN1YWxxdWllciBjw7NkaWdvIGRlIGVzdGFkbyBxdWUgZXN0w6kgZGVudHJvIGRlbCByYW5nbyAyWFggYWN0aXZhcsOhIGVzdGEgZnVuY2nDs25cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGN1YWxxdWllciBjw7NkaWdvIGRlIGVzdGFkbyBxdWUgZXN0w6kgZnVlcmEgZGVsIHJhbmdvIDJYWCBhY3RpdmFyw6EgZXN0YSBmdW5jacOzblxyXG4gICAgICAgICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCIvYXBpL2xvZ291dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIvNDAxIGVycm9yID4gbG9nb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkxPR09VVFwiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBWElPUyBJTlRFUkNFUFRPUlMgRVJSXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldENzcmZUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2NzcmYtdG9rZW5cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1NSRlwiLCBkYXRhKTtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVyc1tcIlgtQ1NSRi1Ub2tlblwiXSA9IGRhdGEuZ2V0Q3NyZlRva2VuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0Q3NyZlRva2VuKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaW5nbGVDb3Vyc2VKdW1ib3Ryb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvU2luZ2xlQ291cnNlSnVtYm90cm9uXCI7XHJcbmltcG9ydCBQcmV2aWV3TW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsXCI7XHJcbmltcG9ydCBTaW5nbGVDb3Vyc2VMZXNzb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NpbmdsZUNvdXJzZUxlc3NvbnNcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5cclxuY29uc3QgU2luZ2xlQ291cnNlID0gKHsgY291cnNlIH0pID0+IHtcclxuICAgIC8vIGVzdGFkb1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICAvLyBjb250ZXh0b1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHN0YXRlOiB7IHVzZXIgfSxcclxuICAgIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgY291cnNlKSBjaGVja0Vucm9sbG1lbnQoKTtcclxuICAgIH0sIFt1c2VyLCBjb3Vyc2VdKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0Vucm9sbG1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2hlY2stZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWRVJJRklDQVIgSU5TQ1JJUENJw5NOXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldEVucm9sbGVkKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhaWRFbnJvbGxtZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIHZlcmlmaWNhciBzaSBlbCB1c3VhcmlvIGhhIGluaWNpYWRvIHNlc2nDs25cclxuICAgICAgICAgICAgaWYgKCF1c2VyKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgLy8gdmVyaWZpY2FyIHNpIHlhIGVzdMOhIGluc2NyaXRvXHJcbiAgICAgICAgICAgIGlmIChlbnJvbGxlZC5zdGF0dXMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goYC91c2VyL2NvdXJzZS8ke2Vucm9sbGVkLmNvdXJzZS5zbHVnfWApO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcGFpZC1lbnJvbGxtZW50LyR7Y291cnNlLl9pZH1gKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcclxuICAgICAgICAgICAgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZDogZGF0YSB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdG9hc3QoXCJFcnJvciBlbiBsYSBpbnNjcmlwY2nDs24sIGludMOpbnRhbG8gZGUgbnVldm8uXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUZyZWVFbnJvbGxtZW50ID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdmVyaWZpY2FyIHNpIGVsIHVzdWFyaW8gaGEgaW5pY2lhZG8gc2VzacOzblxyXG4gICAgICAgICAgICBpZiAoIXVzZXIpIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICAvLyB2ZXJpZmljYXIgc2kgeWEgZXN0w6EgaW5zY3JpdG9cclxuICAgICAgICAgICAgaWYgKGVucm9sbGVkLnN0YXR1cylcclxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3VzZXIvY291cnNlLyR7ZW5yb2xsZWQuY291cnNlLnNsdWd9YCk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9mcmVlLWVucm9sbG1lbnQvJHtjb3Vyc2UuX2lkfWApO1xyXG4gICAgICAgICAgICB0b2FzdChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL2NvdXJzZS8ke2RhdGEuY291cnNlLnNsdWd9YCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KFwiRXJyb3IgZW4gbGEgaW5zY3JpcGNpw7NuLCBpbnTDqW50YWxvIGRlIG51ZXZvLlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShjb3Vyc2UsIG51bGwsIDQpfTwvcHJlPiAqL31cclxuICAgICAgICAgICAgPFNpbmdsZUNvdXJzZUp1bWJvdHJvblxyXG4gICAgICAgICAgICAgICAgY291cnNlPXtjb3Vyc2V9XHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgcHJldmlldz17cHJldmlld31cclxuICAgICAgICAgICAgICAgIHNldFByZXZpZXc9e3NldFByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIGhhbmRsZVBhaWRFbnJvbGxtZW50PXtoYW5kbGVQYWlkRW5yb2xsbWVudH1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUZyZWVFbnJvbGxtZW50PXtoYW5kbGVGcmVlRW5yb2xsbWVudH1cclxuICAgICAgICAgICAgICAgIGVucm9sbGVkPXtlbnJvbGxlZH1cclxuICAgICAgICAgICAgICAgIHNldEVucm9sbGVkPXtzZXRFbnJvbGxlZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxQcmV2aWV3TW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3PXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge2NvdXJzZS5sZXNzb25zICYmIChcclxuICAgICAgICAgICAgICAgIDxTaW5nbGVDb3Vyc2VMZXNzb25zXHJcbiAgICAgICAgICAgICAgICAgICAgbGVzc29ucz17Y291cnNlLmxlc3NvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlldz17c2V0UHJldmlld31cclxuICAgICAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkFQSX0vY291cnNlLyR7cXVlcnkuc2x1Z31gKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY291cnNlOiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDb3Vyc2U7XHJcbiIsIi8vIGRhdGEgeyBjdXJyZW5jeTogJycsIGFtb3VudDogJyd9XHJcbmV4cG9ydCBjb25zdCBjdXJyZW5jeUZvcm1hdHRlciA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gKChkYXRhLmFtb3VudCAqIDEwMCkgLyAxMDApLnRvTG9jYWxlU3RyaW5nKGRhdGEuY3VycmVuY3ksIHtcclxuICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgIGN1cnJlbmN5OiBkYXRhLmN1cnJlbmN5LFxyXG4gICAgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9