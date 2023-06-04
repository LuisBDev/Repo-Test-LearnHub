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
          lineNumber: 45,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "lead",
          children: [description === null || description === void 0 ? void 0 : description.substring(0, 160), "..."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
          count: category,
          style: {
            backgroundColor: "#03a9f4"
          },
          className: "pb-4 mr-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Creado por ", instructor.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["\xDAltima actualizaci\xF3n ", new Date(updatedAt).toLocaleDateString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "text-light",
          children: paid ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["currencyFormatter"])({
            amount: price,
            currency: "usd"
          }) : "Gratis"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [(_lessons$ = lessons[0]) !== null && _lessons$ !== void 0 && (_lessons$$video = _lessons$.video) !== null && _lessons$$video !== void 0 && _lessons$$video.Location ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
            lineNumber: 79,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: image.Location,
            alt: name,
            className: "img img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 29
          }, undefined)
        }, void 0, false), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["LoadingOutlined"], {
            className: "h1 text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 25
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "mb-3 mt-3",
          type: "danger",
          block: true,
          shape: "round",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SafetyOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 35
          }, undefined),
          size: "large",
          disabled: loading,
          onClick: paid ? handlePaidEnrollment : handleFreeEnrollment,
          children: buttonText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VKdW1ib3Ryb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkcy9TaW5nbGVDb3Vyc2VMZXNzb25zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY291cnNlL1tzbHVnXS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2luZ2xlQ291cnNlSnVtYm90cm9uIiwiY291cnNlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicHJldmlldyIsInNldFByZXZpZXciLCJsb2FkaW5nIiwidXNlciIsImhhbmRsZVBhaWRFbnJvbGxtZW50IiwiaGFuZGxlRnJlZUVucm9sbG1lbnQiLCJlbnJvbGxlZCIsInNldEVucm9sbGVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW5zdHJ1Y3RvciIsInVwZGF0ZWRBdCIsImxlc3NvbnMiLCJpbWFnZSIsInByaWNlIiwicGFpZCIsImNhdGVnb3J5IiwiYnV0dG9uVGV4dCIsInN0YXR1cyIsInN1YnN0cmluZyIsImJhY2tncm91bmRDb2xvciIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjdXJyZW5jeUZvcm1hdHRlciIsImFtb3VudCIsImN1cnJlbmN5IiwidmlkZW8iLCJMb2NhdGlvbiIsIkl0ZW0iLCJMaXN0IiwiU2luZ2xlQ291cnNlTGVzc29ucyIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwiZnJlZV9wcmV2aWV3IiwiUHJldmlld01vZGFsIiwiaW5pdGlhbFN0YXRlIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF4aW9zIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJnZXRDc3JmVG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJ1c2VNZW1vIiwiU2luZ2xlQ291cnNlIiwidXNlU3RhdGUiLCJzZXRMb2FkaW5nIiwidXNlQ29udGV4dCIsImNoZWNrRW5yb2xsbWVudCIsIl9pZCIsInNsdWciLCJwb3N0Iiwic3RyaXBlIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJzZXNzaW9uSWQiLCJ0b2FzdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJxdWVyeSIsImVu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Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY291cnNlL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY291cnNlL1tzbHVnXS5qc1wiKTtcbiIsImltcG9ydCBTaW5nbGVDb3Vyc2UgZnJvbSBcIi4uLy4uL3BhZ2VzL2NvdXJzZS9bc2x1Z11cIjtcclxuaW1wb3J0IHsgY3VycmVuY3lGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBCYWRnZSwgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCwgU2FmZXR5T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IFNpbmdsZUNvdXJzZUp1bWJvdHJvbiA9ICh7XHJcbiAgICBjb3Vyc2UsXHJcbiAgICBzaG93TW9kYWwsXHJcbiAgICBzZXRTaG93TW9kYWwsXHJcbiAgICBwcmV2aWV3LFxyXG4gICAgc2V0UHJldmlldyxcclxuICAgIGxvYWRpbmcsXHJcbiAgICB1c2VyLFxyXG4gICAgaGFuZGxlUGFpZEVucm9sbG1lbnQsXHJcbiAgICBoYW5kbGVGcmVlRW5yb2xsbWVudCxcclxuICAgIGVucm9sbGVkLFxyXG4gICAgc2V0RW5yb2xsZWQsXHJcbn0pID0+IHtcclxuICAgIC8vIERlc3RydWN0dXJhY2nDs25cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGluc3RydWN0b3IsXHJcbiAgICAgICAgdXBkYXRlZEF0LFxyXG4gICAgICAgIGxlc3NvbnMsXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgcGFpZCxcclxuICAgICAgICBjYXRlZ29yeSxcclxuICAgIH0gPSBjb3Vyc2U7XHJcblxyXG4gICAgbGV0IGJ1dHRvblRleHQ7XHJcbiAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGJ1dHRvblRleHQgPSBlbnJvbGxlZC5zdGF0dXMgPyBcIklyIGFsIGN1cnNvXCIgOiBcIkluc2NyaWJpcnNlXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1dHRvblRleHQgPSBcIkluaWNpYSBzZXNpw7NuIHBhcmEgaW5zY3JpYmlydGVcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLXByaW1hcnkgc3F1YXJlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFTDrXR1bG8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGlnaHQgZm9udC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIERlc2NyaXBjacOzbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbj8uc3Vic3RyaW5nKDAsIDE2MCl9Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDYXRlZ29yw61hICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDNhOWY0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGItNCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBdXRvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cD5DcmVhZG8gcG9yIHtpbnN0cnVjdG9yLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBGZWNoYSBkZSBhY3R1YWxpemFjacOzbiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cD7Dmmx0aW1hIGFjdHVhbGl6YWNpw7NuIHtuZXcgRGF0ZSh1cGRhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUHJlY2lvICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbmN5Rm9ybWF0dGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcInVzZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJHcmF0aXNcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFZpZGVvICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtsZXNzb25zWzBdPy52aWRlbz8uTG9jYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KGxlc3NvbnNbMF0udmlkZW8uTG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbCghc2hvd01vZGFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LXBsYXllci1kaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17bGVzc29uc1swXS52aWRlby5Mb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodD17aW1hZ2UuTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLkxvY2F0aW9ufSBhbHQ9e25hbWV9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogQm90w7NuIGRlIGluc2NyaXBjacOzbiAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJoMSB0ZXh0LWRhbmdlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgbXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxTYWZldHlPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3BhaWQgPyBoYW5kbGVQYWlkRW5yb2xsbWVudCA6IGhhbmRsZUZyZWVFbnJvbGxtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDb3Vyc2VKdW1ib3Ryb247XHJcbiIsImltcG9ydCB7IExpc3QsIEF2YXRhciB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCB7IEl0ZW0gfSA9IExpc3Q7XG5cbmNvbnN0IFNpbmdsZUNvdXJzZUxlc3NvbnMgPSAoe1xuICBsZXNzb25zLFxuICBzZXRQcmV2aWV3LFxuICBzaG93TW9kYWwsXG4gIHNldFNob3dNb2RhbCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbGVzc29uLWxpc3RcIj5cbiAgICAgICAgICB7bGVzc29ucyAmJiA8aDQ+e2xlc3NvbnMubGVuZ3RofSBMZWNjaW9uZXM8L2g0Pn1cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgZGF0YVNvdXJjZT17bGVzc29uc31cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICA8SXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2luZGV4ICsgMX08L0F2YXRhcj59XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtpdGVtLnZpZGVvICYmIGl0ZW0udmlkZW8gIT09IG51bGwgJiYgaXRlbS5mcmVlX3ByZXZpZXcgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0UHJldmlldyhpdGVtLnZpZGVvLkxvY2F0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZpc3RhIHByZXZpYVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUNvdXJzZUxlc3NvbnM7XG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcblxyXG5jb25zdCBQcmV2aWV3TW9kYWwgPSAoeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCwgcHJldmlldyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJWaXN0YSBwcmV2aWEgZGVsIGN1cnNvXCJcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRTaG93TW9kYWwoIXNob3dNb2RhbCl9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NzIwfVxyXG4gICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtwcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJldmlld01vZGFsO1xyXG4iLCJpbXBvcnQgeyB1c2VSZWR1Y2VyLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG4vLyBlc3RhZG8gaW5pY2lhbFxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG59O1xyXG5cclxuLy8gY3JlYXIgY29udGV4dG9cclxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIHJlZHVjZXIgcHJpbmNpcGFsXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiTE9HSU5cIjpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgY2FzZSBcIkxPR09VVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogbnVsbCB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vIHByb3ZlZWRvciBkZSBjb250ZXh0b1xyXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICAvLyByb3V0ZXJcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxPR0lOXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgLy8gY3VhbHF1aWVyIGPDs2RpZ28gZGUgZXN0YWRvIHF1ZSBlc3TDqSBkZW50cm8gZGVsIHJhbmdvIDJYWCBhY3RpdmFyw6EgZXN0YSBmdW5jacOzblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gY3VhbHF1aWVyIGPDs2RpZ28gZGUgZXN0YWRvIHF1ZSBlc3TDqSBmdWVyYSBkZWwgcmFuZ28gMlhYIGFjdGl2YXLDoSBlc3RhIGZ1bmNpw7NuXHJcbiAgICAgICAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcIi9hcGkvbG9nb3V0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi80MDEgZXJyb3IgPiBsb2dvdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFYSU9TIElOVEVSQ0VQVE9SUyBFUlJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0Q3NyZlRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvY3NyZi10b2tlblwiKTtcclxuICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVyc1tcIlgtQ1NSRi1Ub2tlblwiXSA9IGRhdGEuZ2V0Q3NyZlRva2VuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0Q3NyZlRva2VuKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKSwgW3N0YXRlLCBkaXNwYXRjaCwgY2hpbGRyZW5dKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBDb250ZXh0LCBQcm92aWRlciB9O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaW5nbGVDb3Vyc2VKdW1ib3Ryb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvU2luZ2xlQ291cnNlSnVtYm90cm9uXCI7XHJcbmltcG9ydCBQcmV2aWV3TW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWwvUHJldmlld01vZGFsXCI7XHJcbmltcG9ydCBTaW5nbGVDb3Vyc2VMZXNzb25zIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NpbmdsZUNvdXJzZUxlc3NvbnNcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5cclxuY29uc3QgU2luZ2xlQ291cnNlID0gKHsgY291cnNlIH0pID0+IHtcclxuICAgIC8vIGVzdGFkb1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vucm9sbGVkLCBzZXRFbnJvbGxlZF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICAvLyBjb250ZXh0b1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHN0YXRlOiB7IHVzZXIgfSxcclxuICAgIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgY291cnNlKSBjaGVja0Vucm9sbG1lbnQoKTtcclxuICAgIH0sIFt1c2VyLCBjb3Vyc2VdKTtcclxuXHJcbiAgICBjb25zdCBjaGVja0Vucm9sbG1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2hlY2stZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWRVJJRklDQVIgSU5TQ1JJUENJw5NOXCIsIGRhdGEpO1xyXG4gICAgICAgIHNldEVucm9sbGVkKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWlkRW5yb2xsbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAvLyB2ZXJpZmljYXIgc2kgZWwgdXN1YXJpbyBoYSBpbmljaWFkbyBzZXNpw7NuXHJcbiAgICAgICAgICAgIGlmICghdXNlcikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIC8vIHZlcmlmaWNhciBzaSB5YSBlc3TDoSBpbnNjcml0b1xyXG4gICAgICAgICAgICBpZiAoZW5yb2xsZWQuc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvdXNlci9jb3Vyc2UvJHtlbnJvbGxlZC5jb3Vyc2Uuc2x1Z31gKTtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3BhaWQtZW5yb2xsbWVudC8ke2NvdXJzZS5faWR9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcbiAgICAgICAgICAgIHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoeyBzZXNzaW9uSWQ6IGRhdGEgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KFwiRXJyb3IgZW4gbGEgaW5zY3JpcGNpw7NuLCBpbnTDqW50YWxvIGRlIG51ZXZvLlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGcmVlRW5yb2xsbWVudCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHZlcmlmaWNhciBzaSBlbCB1c3VhcmlvIGhhIGluaWNpYWRvIHNlc2nDs25cclxuICAgICAgICAgICAgaWYgKCF1c2VyKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgLy8gdmVyaWZpY2FyIHNpIHlhIGVzdMOhIGluc2NyaXRvXHJcbiAgICAgICAgICAgIGlmIChlbnJvbGxlZC5zdGF0dXMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goYC91c2VyL2NvdXJzZS8ke2Vucm9sbGVkLmNvdXJzZS5zbHVnfWApO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvZnJlZS1lbnJvbGxtZW50LyR7Y291cnNlLl9pZH1gKTtcclxuICAgICAgICAgICAgdG9hc3QoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvdXNlci9jb3Vyc2UvJHtkYXRhLmNvdXJzZS5zbHVnfWApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0b2FzdChcIkVycm9yIGVuIGxhIGluc2NyaXBjacOzbiwgaW50w6ludGFsbyBkZSBudWV2by5cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkoY291cnNlLCBudWxsLCA0KX08L3ByZT4gKi99XHJcbiAgICAgICAgICAgIDxTaW5nbGVDb3Vyc2VKdW1ib3Ryb25cclxuICAgICAgICAgICAgICAgIGNvdXJzZT17Y291cnNlfVxyXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIHByZXZpZXc9e3ByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICBzZXRQcmV2aWV3PXtzZXRQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVQYWlkRW5yb2xsbWVudD17aGFuZGxlUGFpZEVucm9sbG1lbnR9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVGcmVlRW5yb2xsbWVudD17aGFuZGxlRnJlZUVucm9sbG1lbnR9XHJcbiAgICAgICAgICAgICAgICBlbnJvbGxlZD17ZW5yb2xsZWR9XHJcbiAgICAgICAgICAgICAgICBzZXRFbnJvbGxlZD17c2V0RW5yb2xsZWR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8UHJldmlld01vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgcHJldmlldz17cHJldmlld31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtjb3Vyc2UubGVzc29ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U2luZ2xlQ291cnNlTGVzc29uc1xyXG4gICAgICAgICAgICAgICAgICAgIGxlc3NvbnM9e2NvdXJzZS5sZXNzb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFByZXZpZXc9e3NldFByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5BUEl9L2NvdXJzZS8ke3F1ZXJ5LnNsdWd9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNvdXJzZTogZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlO1xyXG4iLCIvLyBkYXRhIHsgY3VycmVuY3k6ICcnLCBhbW91bnQ6ICcnfVxyXG5leHBvcnQgY29uc3QgY3VycmVuY3lGb3JtYXR0ZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuICgoZGF0YS5hbW91bnQgKiAxMDApIC8gMTAwKS50b0xvY2FsZVN0cmluZyhkYXRhLmN1cnJlbmN5LCB7XHJcbiAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSxcclxuICAgIH0pO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==