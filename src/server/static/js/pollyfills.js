// Si no existe el startsWith lo defino (IE11 y anteriores)
if (String && String.prototype && !String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

// Si no existe el endsWith lo defino (IE11 y anteriores)
if (String && String.prototype && !String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

// Si no existe el Object.keys lo creo (IE 9 y anteriores)
if (Object && !Object.keys) {
    Object.keys = (function() {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable("toString");
        var dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ];
        var dontEnumsLength = dontEnums.length;
        return function (obj) {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
                throw new TypeError("Object.keys called on non-object");
            }
            var result = [];
            var prop;
            var i;
            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }());
}

// Si no existe el addEventListener lo creo (IE8 y anteriores)
if (window && !window.addEventListener && typeof Window !== "undefined") {
    (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
        WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
            var target = this;
            registry.unshift([target, type, listener, function (event) {
                event.currentTarget = target;
                event.preventDefault = function () { event.returnValue = false; };
                event.stopPropagation = function () { event.cancelBubble = true; };
                event.target = event.srcElement || target;

                listener.call(target, event);
            }]);
            this.attachEvent("on" + type, registry[0][3]);
        };
        WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
            for (var index = 0, register; register = registry[index]; ++index) {
                if (register[0] === this && register[1] === type && register[2] === listener) {
                    return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
                }
            }
        };

        WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
            return this.fireEvent("on" + eventObject.type, eventObject);
        };
    })(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
}

// Si no existe el getElementsByClassName lo creo (IE8 y anteriores)
if (document && !document.getElementsByClassName) {
    document.getElementsByClassName = function (search) {
        var d = document;
        var elements;
        var pattern;
        var i;
        var results = [];
        if (d.querySelectorAll) { // IE8
            return d.querySelectorAll("." + search);
        }
        if (d.evaluate) { // IE6, IE7
            pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
            elements = d.evaluate(pattern, d, null, 0, null);
            while ((i = elements.iterateNext())) {
                results.push(i);
            }
        } else {
            elements = d.getElementsByTagName("*");
            pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
            for (i = 0; i < elements.length; i++) {
                if (pattern.test(elements[i].className)) {
                    results.push(elements[i]);
                }
            }
        }
        return results;
    };
}

// Si no existe el Date.now lo creo (IE8 y anteriores)
if (Date && !Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

// Si no existe la funcion bind la creo (IE8 y anteriores)
if (Function && Function.prototype && !Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var aArgs = Array.prototype.slice.call(arguments, 1);
        var fToBind = this;
        var fNOP = function () {
            //
        };
        var fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    };
}

// Si no existe la funcion indexOf la creo (IE8 y anteriores)
if (Array && Array.prototype && !Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0) from += len;
        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

// Si no existe la funcion forEach la creo (IE8 y anteriores)
if (Array && Array.prototype && !Array.prototype.forEach) {
    Array.prototype.forEach = function forEach(callback, thisArg) {
        "use strict";
        var T;
        var k;
        if (this == null) {
            throw new TypeError("this is null or not defined");
        }
        var kValue;
        var O = Object(this);
        var len = O.length >>> 0;
        if ({}.toString.call(callback) !== "[object Function]") {
            throw new TypeError(callback + " is not a function");
        }
        if (arguments.length >= 2) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

// Si no existe el map lo creo (IE 9 y anteriores)
if (Array && Array.prototype && !Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
        var T;
        var A;
        var k;
        if (this == null) {
            throw new TypeError("this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue;
            var mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}

// Si no existe el find lo creo (IE 9 y anteriores)
if (Array && Array.prototype && !Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    "use strict";
    if (this == null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;
    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}
