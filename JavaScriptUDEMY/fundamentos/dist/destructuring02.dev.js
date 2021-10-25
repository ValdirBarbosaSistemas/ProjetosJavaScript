"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//ARRAY
var a = 10;
console.log(a);
var _ref = [10, 7, 9, 8],
    n1 = _ref[0],
    n3 = _ref[2],
    n5 = _ref[4],
    _ref$ = _ref[5],
    n6 = _ref$ === void 0 ? 0 : _ref$;
console.log(n1, n3, n5, n6);

var _ref2 = [[, 8, 8], [9, 6, 8]],
    _ref2$ = _slicedToArray(_ref2[1], 2),
    nota = _ref2$[1];

console.log(nota);