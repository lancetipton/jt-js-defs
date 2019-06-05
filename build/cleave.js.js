((typeof self !== 'undefined' ? self : this)["webpackJsonp_name_"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_name_"] || []).push([["cleave.js"],{

/***/ "./node_modules/cleave.js/dist/cleave.js":
/*!***********************************************!*\
  !*** ./node_modules/cleave.js/dist/cleave.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return  (function(modules) {
 
 	var installedModules = {};

 
 	function __webpack_require__(moduleId) {

 	
 		if(installedModules[moduleId])
 			return installedModules[moduleId].exports;

 	
 		var module = installedModules[moduleId] = {
 			exports: {},
 			id: moduleId,
 			loaded: false
 		};

 	
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 	
 		module.loaded = true;

 	
 		return module.exports;
 	}


 
 	__webpack_require__.m = modules;

 
 	__webpack_require__.c = installedModules;

 
 	__webpack_require__.p = "";

 
 	return __webpack_require__(0);
 })
 ([
 (function(module, exports, __webpack_require__) {

	(function(global) {'use strict';

		var Cleave = function (element, opts) {
	    var owner = this;
	    var hasMultipleElements = false;

	    if (typeof element === 'string') {
	        owner.element = document.querySelector(element);
	        hasMultipleElements = document.querySelectorAll(element).length > 1;
	    } else {
	      if (typeof element.length !== 'undefined' && element.length > 0) {
	        owner.element = element[0];
	        hasMultipleElements = element.length > 1;
	      } else {
	        owner.element = element;
	      }
	    }

	    if (!owner.element) {
	        throw new Error('[cleave.js] Please check the element');
	    }

	    if (hasMultipleElements) {
	      try {
	       
	        console.warn('[cleave.js] Multiple input fields matched, cleave.js will only take the first one.');
	      } catch (e) {
	       
	      }
	    }

	    opts.initValue = owner.element.value;

	    owner.properties = Cleave.DefaultProperties.assign({}, opts);

	    owner.init();
	};

	Cleave.prototype = {
	    init: function () {
	        var owner = this, pps = owner.properties;

	       
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.time && !pps.date && (pps.blocksLength === 0 && !pps.prefix)) {
	            owner.onInput(pps.initValue);

	            return;
	        }

	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Cleave.Util.isAndroid();
	        owner.lastInputValue = '';

	        owner.onChangeListener = owner.onChange.bind(owner);
	        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
	        owner.onFocusListener = owner.onFocus.bind(owner);
	        owner.onCutListener = owner.onCut.bind(owner);
	        owner.onCopyListener = owner.onCopy.bind(owner);

	        owner.element.addEventListener('input', owner.onChangeListener);
	        owner.element.addEventListener('keydown', owner.onKeyDownListener);
	        owner.element.addEventListener('focus', owner.onFocusListener);
	        owner.element.addEventListener('cut', owner.onCutListener);
	        owner.element.addEventListener('copy', owner.onCopyListener);


	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initTimeFormatter();
	        owner.initNumeralFormatter();

	       
	       
	        if (pps.initValue || (pps.prefix && !pps.noImmediatePrefix)) {
	            owner.onInput(pps.initValue);
	        }
	    },

	    initNumeralFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new Cleave.NumeralFormatter(
	            pps.numeralDecimalMark,
	            pps.numeralIntegerScale,
	            pps.numeralDecimalScale,
	            pps.numeralThousandsGroupStyle,
	            pps.numeralPositiveOnly,
	            pps.stripLeadingZeroes,
	            pps.prefix,
	            pps.signBeforePrefix,
	            pps.delimiter
	        );
	    },

	    initTimeFormatter: function() {
	        var owner = this, pps = owner.properties;

	        if (!pps.time) {
	            return;
	        }

	        pps.timeFormatter = new Cleave.TimeFormatter(pps.timePattern, pps.timeFormat);
	        pps.blocks = pps.timeFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initDateFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern, pps.dateMin, pps.dateMax);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	       
	       
	        try {
	            pps.phoneFormatter = new Cleave.PhoneFormatter(
	                new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
	                pps.delimiter
	            );
	        } catch (ex) {
	            throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    onKeyDown: function (event) {
	        var owner = this, pps = owner.properties,
	            charCode = event.which || event.keyCode,
	            Util = Cleave.Util,
	            currentValue = owner.element.value;

	       
	       
	        owner.hasBackspaceSupport = owner.hasBackspaceSupport || charCode === 8;
	        if (!owner.hasBackspaceSupport
	          && Util.isAndroidBackspaceKeydown(owner.lastInputValue, currentValue)
	        ) {
	            charCode = 8;
	        }

	        owner.lastInputValue = currentValue;

	       
	        var postDelimiter = Util.getPostDelimiter(currentValue, pps.delimiter, pps.delimiters);
	        if (charCode === 8 && postDelimiter) {
	            pps.postDelimiterBackspace = postDelimiter;
	        } else {
	            pps.postDelimiterBackspace = false;
	        }
	    },

	    onChange: function () {
	        this.onInput(this.element.value);
	    },

	    onFocus: function () {
	        var owner = this,
	            pps = owner.properties;

	        Cleave.Util.fixPrefixCursor(owner.element, pps.prefix, pps.delimiter, pps.delimiters);
	    },

	    onCut: function (e) {
	        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
	        this.copyClipboardData(e);
	        this.onInput('');
	    },

	    onCopy: function (e) {
	        if (!Cleave.Util.checkFullSelection(this.element.value)) return;
	        this.copyClipboardData(e);
	    },

	    copyClipboardData: function (e) {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            inputValue = owner.element.value,
	            textToCopy = '';

	        if (!pps.copyDelimiter) {
	            textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
	        } else {
	            textToCopy = inputValue;
	        }

	        try {
	            if (e.clipboardData) {
	                e.clipboardData.setData('Text', textToCopy);
	            } else {
	                window.clipboardData.setData('Text', textToCopy);
	            }

	            e.preventDefault();
	        } catch (ex) {
	           
	        }
	    },

	    onInput: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util;

	       
	       
	       
	       
	       
	        var postDelimiterAfter = Util.getPostDelimiter(value, pps.delimiter, pps.delimiters);
	        if (!pps.numeral && pps.postDelimiterBackspace && !postDelimiterAfter) {
	            value = Util.headStr(value, value.length - pps.postDelimiterBackspace.length);
	        }

	       
	        if (pps.phone) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
	            } else {
	                pps.result = pps.phoneFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	       
	        if (pps.numeral) {
	           
	           
	            if (pps.prefix && pps.noImmediatePrefix && value.length === 0) {
	                pps.result = '';
	            } else {
	                pps.result = pps.numeralFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	       
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	       
	        if (pps.time) {
	            value = pps.timeFormatter.getValidatedTime(value);
	        }

	       
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	       
	       
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters);

	       
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	       
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	       
	        if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	            value = pps.prefix + value;

	           
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	       
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	       
	        value = Util.headStr(value, pps.maxLength);

	       
	        pps.result = Util.getFormattedValue(
	            value,
	            pps.blocks, pps.blocksLength,
	            pps.delimiter, pps.delimiters, pps.delimiterLazyShow
	        );

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util,
	            creditCardInfo;

	       
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	       
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    updateValueState: function () {
	        var owner = this,
	            Util = Cleave.Util,
	            pps = owner.properties;

	        if (!owner.element) {
	            return;
	        }

	        var endPos = owner.element.selectionEnd;
	        var oldValue = owner.element.value;
	        var newValue = pps.result;

	        endPos = Util.getNextCursorPosition(endPos, oldValue, newValue, pps.delimiter, pps.delimiters);

	       
	       
	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.element.value = newValue;
	                Util.setSelection(owner.element, endPos, pps.document, false);
	                owner.callOnValueChanged();
	            }, 1);

	            return;
	        }

	        owner.element.value = newValue;
	        Util.setSelection(owner.element, endPos, pps.document, false);
	        owner.callOnValueChanged();
	    },

	    callOnValueChanged: function () {
	        var owner = this,
	            pps = owner.properties;

	        pps.onValueChanged.call(owner, {
	            target: {
	                value: pps.result,
	                rawValue: owner.getRawValue()
	            }
	        });
	    },

	    setPhoneRegionCode: function (phoneRegionCode) {
	        var owner = this, pps = owner.properties;

	        pps.phoneRegionCode = phoneRegionCode;
	        owner.initPhoneFormatter();
	        owner.onChange();
	    },

	    setRawValue: function (value) {
	        var owner = this, pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        pps.postDelimiterBackspace = false;

	        owner.element.value = value;
	        owner.onInput(value);
	    },

	    getRawValue: function () {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            rawValue = owner.element.value;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength, pps.result, pps.delimiter, pps.delimiters);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter.getRawValue(rawValue);
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            pps = owner.properties;

	        return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	    },

	    getISOFormatTime: function () {
	        var owner = this,
	            pps = owner.properties;

	        return pps.time ? pps.timeFormatter.getISOFormatTime() : '';
	    },

	    getFormattedValue: function () {
	        return this.element.value;
	    },

	    destroy: function () {
	        var owner = this;

	        owner.element.removeEventListener('input', owner.onChangeListener);
	        owner.element.removeEventListener('keydown', owner.onKeyDownListener);
	        owner.element.removeEventListener('focus', owner.onFocusListener);
	        owner.element.removeEventListener('cut', owner.onCutListener);
	        owner.element.removeEventListener('copy', owner.onCopyListener);
	    },

	    toString: function () {
	        return '[Cleave Object]';
	    }
	};

	Cleave.NumeralFormatter = __webpack_require__(1);
	Cleave.DateFormatter = __webpack_require__(2);
	Cleave.TimeFormatter = __webpack_require__(3);
	Cleave.PhoneFormatter = __webpack_require__(4);
	Cleave.CreditCardDetector = __webpack_require__(5);
	Cleave.Util = __webpack_require__(6);
	Cleave.DefaultProperties = __webpack_require__(7);


	((typeof global === 'object' && global) ? global : window)['Cleave'] = Cleave;


	module.exports = Cleave;

	}.call(exports, (function() { return this; }())))

 }),
 (function(module, exports) {

	'use strict';

	var NumeralFormatter = function (numeralDecimalMark,
	                                 numeralIntegerScale,
	                                 numeralDecimalScale,
	                                 numeralThousandsGroupStyle,
	                                 numeralPositiveOnly,
	                                 stripLeadingZeroes,
	                                 prefix,
	                                 signBeforePrefix,
	                                 delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.prefix = (prefix || prefix === '') ? prefix : '';
	    owner.signBeforePrefix = !!signBeforePrefix;
	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh:     'lakh',
	    wan:      'wan',
	    none:     'none'    
	};

	NumeralFormatter.prototype = {
	    getRawValue: function (value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function (value) {
	        var owner = this, parts, partSign, partSignAndPrefix, partInteger, partDecimal = '';

	       
	        value = value.replace(/[A-Za-z]/g, '')
	           
	            .replace(owner.numeralDecimalMark, 'M')

	           
	           
	            .replace(/[^\dM-]/g, '')

	           
	            .replace(/^\-/, 'N')

	           
	            .replace(/\-/g, '')

	           
	            .replace('N', owner.numeralPositiveOnly ? '' : '-')

	           
	            .replace('M', owner.numeralDecimalMark);

	       
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partSign = value.slice(0, 1) === '-' ? '-' : '';
	        if (typeof owner.prefix != 'undefined') {
	            if (owner.signBeforePrefix) {
	                partSignAndPrefix = partSign + owner.prefix;
	            } else {
	                partSignAndPrefix = owner.prefix + partSign;
	            }
	        } else {
	            partSignAndPrefix = partSign;
	        }
	        
	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if(partSign === '-') {
	            partInteger = partInteger.slice(1);
	        }

	        if (owner.numeralIntegerScale > 0) {
	          partInteger = partInteger.slice(0, owner.numeralIntegerScale);
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	        case NumeralFormatter.groupStyle.lakh:
	            partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.wan:
	            partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.thousand:
	            partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	            break;
	        }

	        return partSignAndPrefix + partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;


 }),
 (function(module, exports) {

	'use strict';

	var DateFormatter = function (datePattern, dateMin, dateMax) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.dateMin = dateMin
	      .split('-')
	      .reverse()
	      .map(function(x) {
	        return parseInt(x, 10);
	      });
	    if (owner.dateMin.length === 2) owner.dateMin.unshift(0);

	    owner.dateMax = dateMax
	      .split('-')
	      .reverse()
	      .map(function(x) {
	        return parseInt(x, 10);
	      });
	    if (owner.dateMax.length === 2) owner.dateMax.unshift(0);
	    
	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? (
	            date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0])
	        ) : '';
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getValidatedDate: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                case 'd':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 3) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 31) {
	                        sub = '31';
	                    }

	                    break;

	                case 'm':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 1) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 12) {
	                        sub = '12';
	                    }

	                    break;
	                }

	                result += sub;

	               
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function (value) {
	        var owner = this, datePattern = owner.datePattern, date = [],
	            dayIndex = 0, monthIndex = 0, yearIndex = 0,
	            dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0,
	            day, month, year, fullYearDone = false;

	       
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	       
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                case 'd':
	                    dayIndex = index;
	                    break;
	                case 'm':
	                    monthIndex = index;
	                    break;
	                default:
	                    yearIndex = index;
	                    break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = (dayIndex <= yearIndex) ? dayIndex * 2 : (dayIndex * 2 + 2);
	            monthStartIndex = (monthIndex <= yearIndex) ? monthIndex * 2 : (monthIndex * 2 + 2);

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = this.getFixedDate(day, month, year);
	        }

	       
	        if (value.length === 4 && (datePattern[0] === 'y' || datePattern[1] === 'y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 2;
	            yearStartIndex = 2 - monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 2), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 2).length === 2;

	            date = [0, month, year];
	        }

	       
	        if (value.length === 6 && (datePattern[0] === 'Y' || datePattern[1] === 'Y')) {
	            monthStartIndex = datePattern[0] === 'm' ? 0 : 4;
	            yearStartIndex = 2 - 0.5 * monthStartIndex;
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            fullYearDone = value.slice(yearStartIndex, yearStartIndex + 4).length === 4;

	            date = [0, month, year];
	        }

	        date = owner.getRangeFixedDate(date);
	        owner.date = date;

	        var result = date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	            case 'd':
	                return previous + (date[0] === 0 ? '' : owner.addLeadingZero(date[0]));
	            case 'm':
	                return previous + (date[1] === 0 ? '' : owner.addLeadingZero(date[1]));
	            case 'y':
	                return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], false) : '');
	            case 'Y':
	                return previous + (fullYearDone ? owner.addLeadingZeroForYear(date[2], true) : '');
	            }
	        }, '');

	        return result;
	    },

	    getRangeFixedDate: function (date) {
	        var owner = this,
	            datePattern = owner.datePattern,
	            dateMin = owner.dateMin || [],
	            dateMax = owner.dateMax || [];

	        if (!date.length || (dateMin.length < 3 && dateMax.length < 3)) return date;

	        if (
	          datePattern.find(function(x) {
	            return x.toLowerCase() === 'y';
	          }) &&
	          date[2] === 0
	        ) return date;

	        if (dateMax.length && (dateMax[2] < date[2] || (
	          dateMax[2] === date[2] && (dateMax[1] < date[1] || (
	            dateMax[1] === date[1] && dateMax[0] < date[0]
	          ))
	        ))) return dateMax;

	        if (dateMin.length && (dateMin[2] > date[2] || (
	          dateMin[2] === date[2] && (dateMin[1] > date[1] || (
	            dateMin[1] === date[1] && dateMin[0] > date[0]
	          ))
	        ))) return dateMin;

	        return date;
	    },

	    getFixedDate: function (day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt((year || 0), 10);

	        if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
	            day = Math.min(day, month === 2 ? (this.isLeapYear(year) ? 29 : 28) : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function (year) {
	        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	    },

	    addLeadingZero: function (number) {
	        return (number < 10 ? '0' : '') + number;
	    },

	    addLeadingZeroForYear: function (number, fullYearMode) {
	        if (fullYearMode) {
	            return (number < 10 ? '000' : (number < 100 ? '00' : (number < 1000 ? '0' : ''))) + number;
	        }

	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;


 }),
 (function(module, exports) {

	'use strict';

	var TimeFormatter = function (timePattern, timeFormat) {
	    var owner = this;

	    owner.time = [];
	    owner.blocks = [];
	    owner.timePattern = timePattern;
	    owner.timeFormat = timeFormat;
	    owner.initBlocks();
	};

	TimeFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.timePattern.forEach(function () {
	            owner.blocks.push(2);
	        });
	    },

	    getISOFormatTime: function () {
	        var owner = this,
	            time = owner.time;

	        return time[2] ? (
	            owner.addLeadingZero(time[0]) + ':' + owner.addLeadingZero(time[1]) + ':' + owner.addLeadingZero(time[2])
	        ) : '';
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getTimeFormatOptions: function () {
	        var owner = this;
	        if (String(owner.timeFormat) === '12') {
	            return {
	                maxHourFirstDigit: 1,
	                maxHours: 12,
	                maxMinutesFirstDigit: 5,
	                maxMinutes: 60
	            };
	        }

	        return {
	            maxHourFirstDigit: 2,
	            maxHours: 23,
	            maxMinutesFirstDigit: 5,
	            maxMinutes: 60
	        };
	    },

	    getValidatedTime: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        var timeFormatOptions = owner.getTimeFormatOptions();

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.timePattern[index]) {

	                case 'h':
	                    if (parseInt(sub0, 10) > timeFormatOptions.maxHourFirstDigit) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > timeFormatOptions.maxHours) {
	                        sub = timeFormatOptions.maxHours + '';
	                    }

	                    break;

	                case 'm':
	                case 's':
	                    if (parseInt(sub0, 10) > timeFormatOptions.maxMinutesFirstDigit) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > timeFormatOptions.maxMinutes) {
	                        sub = timeFormatOptions.maxMinutes + '';
	                    }
	                    break;
	                }

	                result += sub;

	               
	                value = rest;
	            }
	        });

	        return this.getFixedTimeString(result);
	    },

	    getFixedTimeString: function (value) {
	        var owner = this, timePattern = owner.timePattern, time = [],
	            secondIndex = 0, minuteIndex = 0, hourIndex = 0,
	            secondStartIndex = 0, minuteStartIndex = 0, hourStartIndex = 0,
	            second, minute, hour;

	        if (value.length === 6) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                case 's':
	                    secondIndex = index * 2;
	                    break;
	                case 'm':
	                    minuteIndex = index * 2;
	                    break;
	                case 'h':
	                    hourIndex = index * 2;
	                    break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;
	            secondStartIndex = secondIndex;

	            second = parseInt(value.slice(secondStartIndex, secondStartIndex + 2), 10);
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        if (value.length === 4 && owner.timePattern.indexOf('s') < 0) {
	            timePattern.forEach(function (type, index) {
	                switch (type) {
	                case 'm':
	                    minuteIndex = index * 2;
	                    break;
	                case 'h':
	                    hourIndex = index * 2;
	                    break;
	                }
	            });

	            hourStartIndex = hourIndex;
	            minuteStartIndex = minuteIndex;

	            second = 0;
	            minute = parseInt(value.slice(minuteStartIndex, minuteStartIndex + 2), 10);
	            hour = parseInt(value.slice(hourStartIndex, hourStartIndex + 2), 10);

	            time = this.getFixedTime(hour, minute, second);
	        }

	        owner.time = time;

	        return time.length === 0 ? value : timePattern.reduce(function (previous, current) {
	            switch (current) {
	            case 's':
	                return previous + owner.addLeadingZero(time[2]);
	            case 'm':
	                return previous + owner.addLeadingZero(time[1]);
	            case 'h':
	                return previous + owner.addLeadingZero(time[0]);
	            }
	        }, '');
	    },

	    getFixedTime: function (hour, minute, second) {
	        second = Math.min(parseInt(second || 0, 10), 60);
	        minute = Math.min(minute, 60);
	        hour = Math.min(hour, 60);

	        return [hour, minute, second];
	    },

	    addLeadingZero: function (number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = TimeFormatter;


 }),
 (function(module, exports) {

	'use strict';

	var PhoneFormatter = function (formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function (formatter) {
	        this.formatter = formatter;
	    },

	    format: function (phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	       
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	       
	        phoneNumber = phoneNumber.replace(/^\+/, 'B').replace(/\+/g, '').replace('B', '+');

	       
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '', current, validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	           
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	               
	               
	            }
	        }

	       
	       
	        result = result.replace(/[()]/g, '');
	       
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;


 }),
 (function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp:          [4, 5, 6],
	        amex:          [4, 6, 5],
	        diners:        [4, 6, 4],
	        discover:      [4, 4, 4, 4],
	        mastercard:    [4, 4, 4, 4],
	        dankort:       [4, 4, 4, 4],
	        instapayment:  [4, 4, 4, 4],
	        jcb15:         [4, 6, 5],
	        jcb:           [4, 4, 4, 4],
	        maestro:       [4, 4, 4, 4],
	        visa:          [4, 4, 4, 4],
	        mir:           [4, 4, 4, 4],
	        unionPay:      [4, 4, 4, 4],
	        general:       [4, 4, 4, 4]
	    },

	    re: {
	       
	        uatp: /^(?!1800)1\d{0,14}/,

	       
	        amex: /^3[47]\d{0,13}/,

	       
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	       
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	       
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	       
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	       
	        instapayment: /^63[7-9]\d{0,13}/,

	       
	        jcb15: /^(?:2131|1800)\d{0,11}/,

	       
	        jcb: /^(?:35\d{0,2})\d{0,12}/,

	       
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

	       
	        mir: /^220[0-4]\d{0,12}/,

	       
	        visa: /^4\d{0,15}/,

	       
	        unionPay: /^62\d{0,14}/
	    },

	    getStrictBlocks: function (block) {
	      var total = block.reduce(function (prev, current) {
	        return prev + current;
	      }, 0);

	      return block.concat(19 - total);
	    },

	    getInfo: function (value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	       
	       
	       
	       
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var matchedBlocks = blocks[key];
	                return {
	                    type: key,
	                    blocks: strictMode ? this.getStrictBlocks(matchedBlocks) : matchedBlocks
	                };
	            }
	        }

	        return {
	            type: 'unknown',
	            blocks: strictMode ? this.getStrictBlocks(blocks.general) : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;


 }),
 (function(module, exports) {

	'use strict';

	var Util = {
	    noop: function () {
	    },

	    strip: function (value, re) {
	        return value.replace(re, '');
	    },

	    getPostDelimiter: function (value, delimiter, delimiters) {
	       
	        if (delimiters.length === 0) {
	            return value.slice(-delimiter.length) === delimiter ? delimiter : '';
	        }

	       
	        var matchedDelimiter = '';
	        delimiters.forEach(function (current) {
	            if (value.slice(-current.length) === current) {
	                matchedDelimiter = current;
	            }
	        });

	        return matchedDelimiter;
	    },

	    getDelimiterREByDelimiter: function (delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    getNextCursorPosition: function (prevPos, oldValue, newValue, delimiter, delimiters) {
	     
	     
	      if (oldValue.length === prevPos) {
	          return newValue.length;
	      }

	      return prevPos + this.getPositionOffset(prevPos, oldValue, newValue, delimiter ,delimiters);
	    },

	    getPositionOffset: function (prevPos, oldValue, newValue, delimiter, delimiters) {
	        var oldRawValue, newRawValue, lengthOffset;

	        oldRawValue = this.stripDelimiters(oldValue.slice(0, prevPos), delimiter, delimiters);
	        newRawValue = this.stripDelimiters(newValue.slice(0, prevPos), delimiter, delimiters);
	        lengthOffset = oldRawValue.length - newRawValue.length;

	        return (lengthOffset !== 0) ? (lengthOffset / Math.abs(lengthOffset)) : 0;
	    },

	    stripDelimiters: function (value, delimiter, delimiters) {
	        var owner = this;

	       
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	       
	        delimiters.forEach(function (current) {
	            current.split('').forEach(function (letter) {
	                value = value.replace(owner.getDelimiterREByDelimiter(letter), '');
	            });
	        });

	        return value;
	    },

	    headStr: function (str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function (blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	   
	   
	   
	   
	   
	   
	    getPrefixStrippedValue: function (value, prefix, prefixLength, prevResult, delimiter, delimiters) {
	       
	        if (prefixLength === 0) {
	          return value;
	        }

	       
	       
	        if (prevResult.slice(0, prefixLength) !== prefix) {
	          return '';
	        }

	        var prevValue = this.stripDelimiters(prevResult, delimiter, delimiters);

	       
	       
	        if (value.slice(0, prefixLength) !== prefix) {
	          return prevValue.slice(prefixLength);
	        }

	       
	        return value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function (prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function (value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter;

	       
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? (index - 1) : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	               
	                value = rest;
	            }
	        });

	        return result;
	    },

	   
	   
	    fixPrefixCursor: function (el, prefix, delimiter, delimiters) {
	        if (!el) {
	            return;
	        }

	        var val = el.value,
	            appendix = delimiter || (delimiters[0] || ' ');

	        if (!el.setSelectionRange || !prefix || (prefix.length + appendix.length) < val.length) {
	            return;
	        }

	        var len = val.length * 2;

	       
	        setTimeout(function () {
	            el.setSelectionRange(len, len);
	        }, 1);
	    },

	   
	    checkFullSelection: function(value) {
	      try {
	        var selection = window.getSelection() || document.getSelection() || {};
	        return selection.toString().length === value.length;
	      } catch (ex) {
	       
	      }

	      return false;
	    },

	    setSelection: function (element, position, doc) {
	        if (element !== this.getActiveElement(doc)) {
	            return;
	        }

	       
	        if (element && element.value.length <= position) {
	          return;
	        }

	        if (element.createTextRange) {
	            var range = element.createTextRange();

	            range.move('character', position);
	            range.select();
	        } else {
	            try {
	                element.setSelectionRange(position, position);
	            } catch (e) {
	               
	                console.warn('The input element type does not support selection');
	            }
	        }
	    },

	    getActiveElement: function(parent) {
	        var activeElement = parent.activeElement;
	        if (activeElement && activeElement.shadowRoot) {
	            return this.getActiveElement(activeElement.shadowRoot);
	        }
	        return activeElement;
	    },

	    isAndroid: function () {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	   
	   
	   
	   
	    isAndroidBackspaceKeydown: function (lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;


 }),
 (function(module, exports) {

	(function(global) {'use strict';

		var DefaultProperties = {
	   
	   
	    assign: function (target, opts) {
	        target = target || {};
	        opts = opts || {};

	       
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || (function () {});

	       
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	       
	        target.time = !!opts.time;
	        target.timePattern = opts.timePattern || ['h', 'm', 's'];
	        target.timeFormat = opts.timeFormat || '24';
	        target.timeFormatter = {};

	       
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateMin = opts.dateMin || '';
	        target.dateMax = opts.dateMax || '';
	        target.dateFormatter = {};

	       
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;
	        target.signBeforePrefix = !!opts.signBeforePrefix;

	       
	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = (target.creditCard || target.date) ? '' : (opts.prefix || '');
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = (opts.initValue !== undefined && opts.initValue !== null) ? opts.initValue.toString() : '';

	        target.delimiter =
	            (opts.delimiter || opts.delimiter === '') ? opts.delimiter :
	                (opts.date ? '/' :
	                    (opts.time ? ':' :
	                        (opts.numeral ? ',' :
	                            (opts.phone ? ' ' :
	                                ' '))));
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof global === 'object' && global) ? global : window;
	        target.document = opts.document || target.root.document;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        target.onValueChanged = opts.onValueChanged || (function () {});

	        return target;
	    }
	};

	module.exports = DefaultProperties;

	}.call(exports, (function() { return this; }())))

 })
 ])
});
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY2xlYXZlLmpzL2Rpc3QvY2xlYXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLdUI7QUFDN0IsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7OztBQUdBOzs7QUFHQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBOztBQUVBOztBQUVBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLCtFQUErRSxRQUFRO0FBQ3ZGO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7O0FBRUEsRUFBRSw0QkFBNEIsYUFBYSxFQUFFOztBQUU3QyxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOzs7QUFHQTs7QUFFQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkRBQTJELEVBQUU7O0FBRTdEOztBQUVBO0FBQ0EsMkRBQTJELEVBQUU7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVixNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLEVBQUU7QUFDRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7O0FBRUEsbURBQW1ELFVBQVU7QUFDN0Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBLDZCQUE2QixLQUFLOzs7QUFHbEMseUJBQXlCLEtBQUs7OztBQUc5QixrQ0FBa0MsSUFBSSxlQUFlLEtBQUs7OztBQUcxRCw4Q0FBOEMsS0FBSzs7O0FBR25ELGlDQUFpQyxJQUFJLFdBQVcsSUFBSSxVQUFVLElBQUksSUFBSSxLQUFLOzs7QUFHM0UsdUNBQXVDLEtBQUs7OztBQUc1QyxtQ0FBbUMsS0FBSzs7O0FBR3hDLGtDQUFrQyxLQUFLOzs7QUFHdkMsd0JBQXdCLElBQUksSUFBSSxLQUFLOzs7QUFHckMsaUNBQWlDLElBQUksV0FBVyxJQUFJLElBQUksS0FBSzs7O0FBRzdELDJCQUEyQixLQUFLOzs7QUFHaEMscUJBQXFCLEtBQUs7OztBQUcxQiwwQkFBMEIsS0FBSztBQUMvQixNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsRUFBRTtBQUNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7O0FBRVY7QUFDQSxNQUFNOztBQUVOO0FBQ0EsK0RBQStEO0FBQy9ELE1BQU07O0FBRU47OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOztBQUVOO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFVBQVU7O0FBRVY7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixNQUFNOzs7Ozs7OztBQVFOOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0EsTUFBTTs7OztBQUlOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNOzs7Ozs7QUFNTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLEVBQUU7QUFDRjs7QUFFQSxvQkFBb0I7O0FBRXBCOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5Rjs7O0FBR3pGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLDRCQUE0QixhQUFhLEVBQUU7O0FBRTdDLEVBQUU7QUFDRjtBQUNBLENBQUM7QUFDRCxDIiwiZmlsZSI6ImNsZWF2ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNsZWF2ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGVhdmVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAgKGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiBcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIH0pXG4gKFtcbiAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0KGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0JztcblxuXHRcdHZhciBDbGVhdmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0cykge1xuXHQgICAgdmFyIG93bmVyID0gdGhpcztcblx0ICAgIHZhciBoYXNNdWx0aXBsZUVsZW1lbnRzID0gZmFsc2U7XG5cblx0ICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBvd25lci5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcblx0ICAgICAgICBoYXNNdWx0aXBsZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KS5sZW5ndGggPiAxO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lmxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgb3duZXIuZWxlbWVudCA9IGVsZW1lbnRbMF07XG5cdCAgICAgICAgaGFzTXVsdGlwbGVFbGVtZW50cyA9IGVsZW1lbnQubGVuZ3RoID4gMTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBvd25lci5lbGVtZW50ID0gZWxlbWVudDtcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICBpZiAoIW93bmVyLmVsZW1lbnQpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tjbGVhdmUuanNdIFBsZWFzZSBjaGVjayB0aGUgZWxlbWVudCcpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoaGFzTXVsdGlwbGVFbGVtZW50cykge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgXG5cdCAgICAgICAgY29uc29sZS53YXJuKCdbY2xlYXZlLmpzXSBNdWx0aXBsZSBpbnB1dCBmaWVsZHMgbWF0Y2hlZCwgY2xlYXZlLmpzIHdpbGwgb25seSB0YWtlIHRoZSBmaXJzdCBvbmUuJyk7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgIFxuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIG9wdHMuaW5pdFZhbHVlID0gb3duZXIuZWxlbWVudC52YWx1ZTtcblxuXHQgICAgb3duZXIucHJvcGVydGllcyA9IENsZWF2ZS5EZWZhdWx0UHJvcGVydGllcy5hc3NpZ24oe30sIG9wdHMpO1xuXG5cdCAgICBvd25lci5pbml0KCk7XG5cdH07XG5cblx0Q2xlYXZlLnByb3RvdHlwZSA9IHtcblx0ICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAoIXBwcy5udW1lcmFsICYmICFwcHMucGhvbmUgJiYgIXBwcy5jcmVkaXRDYXJkICYmICFwcHMudGltZSAmJiAhcHBzLmRhdGUgJiYgKHBwcy5ibG9ja3NMZW5ndGggPT09IDAgJiYgIXBwcy5wcmVmaXgpKSB7XG5cdCAgICAgICAgICAgIG93bmVyLm9uSW5wdXQocHBzLmluaXRWYWx1ZSk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHBwcy5tYXhMZW5ndGggPSBDbGVhdmUuVXRpbC5nZXRNYXhMZW5ndGgocHBzLmJsb2Nrcyk7XG5cblx0ICAgICAgICBvd25lci5pc0FuZHJvaWQgPSBDbGVhdmUuVXRpbC5pc0FuZHJvaWQoKTtcblx0ICAgICAgICBvd25lci5sYXN0SW5wdXRWYWx1ZSA9ICcnO1xuXG5cdCAgICAgICAgb3duZXIub25DaGFuZ2VMaXN0ZW5lciA9IG93bmVyLm9uQ2hhbmdlLmJpbmQob3duZXIpO1xuXHQgICAgICAgIG93bmVyLm9uS2V5RG93bkxpc3RlbmVyID0gb3duZXIub25LZXlEb3duLmJpbmQob3duZXIpO1xuXHQgICAgICAgIG93bmVyLm9uRm9jdXNMaXN0ZW5lciA9IG93bmVyLm9uRm9jdXMuYmluZChvd25lcik7XG5cdCAgICAgICAgb3duZXIub25DdXRMaXN0ZW5lciA9IG93bmVyLm9uQ3V0LmJpbmQob3duZXIpO1xuXHQgICAgICAgIG93bmVyLm9uQ29weUxpc3RlbmVyID0gb3duZXIub25Db3B5LmJpbmQob3duZXIpO1xuXG5cdCAgICAgICAgb3duZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG93bmVyLm9uQ2hhbmdlTGlzdGVuZXIpO1xuXHQgICAgICAgIG93bmVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG93bmVyLm9uS2V5RG93bkxpc3RlbmVyKTtcblx0ICAgICAgICBvd25lci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb3duZXIub25Gb2N1c0xpc3RlbmVyKTtcblx0ICAgICAgICBvd25lci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2N1dCcsIG93bmVyLm9uQ3V0TGlzdGVuZXIpO1xuXHQgICAgICAgIG93bmVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIG93bmVyLm9uQ29weUxpc3RlbmVyKTtcblxuXG5cdCAgICAgICAgb3duZXIuaW5pdFBob25lRm9ybWF0dGVyKCk7XG5cdCAgICAgICAgb3duZXIuaW5pdERhdGVGb3JtYXR0ZXIoKTtcblx0ICAgICAgICBvd25lci5pbml0VGltZUZvcm1hdHRlcigpO1xuXHQgICAgICAgIG93bmVyLmluaXROdW1lcmFsRm9ybWF0dGVyKCk7XG5cblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKHBwcy5pbml0VmFsdWUgfHwgKHBwcy5wcmVmaXggJiYgIXBwcy5ub0ltbWVkaWF0ZVByZWZpeCkpIHtcblx0ICAgICAgICAgICAgb3duZXIub25JbnB1dChwcHMuaW5pdFZhbHVlKTtcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBpbml0TnVtZXJhbEZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cblx0ICAgICAgICBpZiAoIXBwcy5udW1lcmFsKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBwcHMubnVtZXJhbEZvcm1hdHRlciA9IG5ldyBDbGVhdmUuTnVtZXJhbEZvcm1hdHRlcihcblx0ICAgICAgICAgICAgcHBzLm51bWVyYWxEZWNpbWFsTWFyayxcblx0ICAgICAgICAgICAgcHBzLm51bWVyYWxJbnRlZ2VyU2NhbGUsXG5cdCAgICAgICAgICAgIHBwcy5udW1lcmFsRGVjaW1hbFNjYWxlLFxuXHQgICAgICAgICAgICBwcHMubnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGUsXG5cdCAgICAgICAgICAgIHBwcy5udW1lcmFsUG9zaXRpdmVPbmx5LFxuXHQgICAgICAgICAgICBwcHMuc3RyaXBMZWFkaW5nWmVyb2VzLFxuXHQgICAgICAgICAgICBwcHMucHJlZml4LFxuXHQgICAgICAgICAgICBwcHMuc2lnbkJlZm9yZVByZWZpeCxcblx0ICAgICAgICAgICAgcHBzLmRlbGltaXRlclxuXHQgICAgICAgICk7XG5cdCAgICB9LFxuXG5cdCAgICBpbml0VGltZUZvcm1hdHRlcjogZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIGlmICghcHBzLnRpbWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHBwcy50aW1lRm9ybWF0dGVyID0gbmV3IENsZWF2ZS5UaW1lRm9ybWF0dGVyKHBwcy50aW1lUGF0dGVybiwgcHBzLnRpbWVGb3JtYXQpO1xuXHQgICAgICAgIHBwcy5ibG9ja3MgPSBwcHMudGltZUZvcm1hdHRlci5nZXRCbG9ja3MoKTtcblx0ICAgICAgICBwcHMuYmxvY2tzTGVuZ3RoID0gcHBzLmJsb2Nrcy5sZW5ndGg7XG5cdCAgICAgICAgcHBzLm1heExlbmd0aCA9IENsZWF2ZS5VdGlsLmdldE1heExlbmd0aChwcHMuYmxvY2tzKTtcblx0ICAgIH0sXG5cblx0ICAgIGluaXREYXRlRm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIGlmICghcHBzLmRhdGUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHBwcy5kYXRlRm9ybWF0dGVyID0gbmV3IENsZWF2ZS5EYXRlRm9ybWF0dGVyKHBwcy5kYXRlUGF0dGVybiwgcHBzLmRhdGVNaW4sIHBwcy5kYXRlTWF4KTtcblx0ICAgICAgICBwcHMuYmxvY2tzID0gcHBzLmRhdGVGb3JtYXR0ZXIuZ2V0QmxvY2tzKCk7XG5cdCAgICAgICAgcHBzLmJsb2Nrc0xlbmd0aCA9IHBwcy5ibG9ja3MubGVuZ3RoO1xuXHQgICAgICAgIHBwcy5tYXhMZW5ndGggPSBDbGVhdmUuVXRpbC5nZXRNYXhMZW5ndGgocHBzLmJsb2Nrcyk7XG5cdCAgICB9LFxuXG5cdCAgICBpbml0UGhvbmVGb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzO1xuXG5cdCAgICAgICAgaWYgKCFwcHMucGhvbmUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBwcHMucGhvbmVGb3JtYXR0ZXIgPSBuZXcgQ2xlYXZlLlBob25lRm9ybWF0dGVyKFxuXHQgICAgICAgICAgICAgICAgbmV3IHBwcy5yb290LkNsZWF2ZS5Bc1lvdVR5cGVGb3JtYXR0ZXIocHBzLnBob25lUmVnaW9uQ29kZSksXG5cdCAgICAgICAgICAgICAgICBwcHMuZGVsaW1pdGVyXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbY2xlYXZlLmpzXSBQbGVhc2UgaW5jbHVkZSBwaG9uZS10eXBlLWZvcm1hdHRlci57Y291bnRyeX0uanMgbGliJyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzLFxuXHQgICAgICAgICAgICBjaGFyQ29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUsXG5cdCAgICAgICAgICAgIFV0aWwgPSBDbGVhdmUuVXRpbCxcblx0ICAgICAgICAgICAgY3VycmVudFZhbHVlID0gb3duZXIuZWxlbWVudC52YWx1ZTtcblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgICBvd25lci5oYXNCYWNrc3BhY2VTdXBwb3J0ID0gb3duZXIuaGFzQmFja3NwYWNlU3VwcG9ydCB8fCBjaGFyQ29kZSA9PT0gODtcblx0ICAgICAgICBpZiAoIW93bmVyLmhhc0JhY2tzcGFjZVN1cHBvcnRcblx0ICAgICAgICAgICYmIFV0aWwuaXNBbmRyb2lkQmFja3NwYWNlS2V5ZG93bihvd25lci5sYXN0SW5wdXRWYWx1ZSwgY3VycmVudFZhbHVlKVxuXHQgICAgICAgICkge1xuXHQgICAgICAgICAgICBjaGFyQ29kZSA9IDg7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgb3duZXIubGFzdElucHV0VmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHZhciBwb3N0RGVsaW1pdGVyID0gVXRpbC5nZXRQb3N0RGVsaW1pdGVyKGN1cnJlbnRWYWx1ZSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuXHQgICAgICAgIGlmIChjaGFyQ29kZSA9PT0gOCAmJiBwb3N0RGVsaW1pdGVyKSB7XG5cdCAgICAgICAgICAgIHBwcy5wb3N0RGVsaW1pdGVyQmFja3NwYWNlID0gcG9zdERlbGltaXRlcjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBwcHMucG9zdERlbGltaXRlckJhY2tzcGFjZSA9IGZhbHNlO1xuXHQgICAgICAgIH1cblx0ICAgIH0sXG5cblx0ICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdGhpcy5vbklucHV0KHRoaXMuZWxlbWVudC52YWx1ZSk7XG5cdCAgICB9LFxuXG5cdCAgICBvbkZvY3VzOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcyxcblx0ICAgICAgICAgICAgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIENsZWF2ZS5VdGlsLmZpeFByZWZpeEN1cnNvcihvd25lci5lbGVtZW50LCBwcHMucHJlZml4LCBwcHMuZGVsaW1pdGVyLCBwcHMuZGVsaW1pdGVycyk7XG5cdCAgICB9LFxuXG5cdCAgICBvbkN1dDogZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoIUNsZWF2ZS5VdGlsLmNoZWNrRnVsbFNlbGVjdGlvbih0aGlzLmVsZW1lbnQudmFsdWUpKSByZXR1cm47XG5cdCAgICAgICAgdGhpcy5jb3B5Q2xpcGJvYXJkRGF0YShlKTtcblx0ICAgICAgICB0aGlzLm9uSW5wdXQoJycpO1xuXHQgICAgfSxcblxuXHQgICAgb25Db3B5OiBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIGlmICghQ2xlYXZlLlV0aWwuY2hlY2tGdWxsU2VsZWN0aW9uKHRoaXMuZWxlbWVudC52YWx1ZSkpIHJldHVybjtcblx0ICAgICAgICB0aGlzLmNvcHlDbGlwYm9hcmREYXRhKGUpO1xuXHQgICAgfSxcblxuXHQgICAgY29weUNsaXBib2FyZERhdGE6IGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcyxcblx0ICAgICAgICAgICAgcHBzID0gb3duZXIucHJvcGVydGllcyxcblx0ICAgICAgICAgICAgVXRpbCA9IENsZWF2ZS5VdGlsLFxuXHQgICAgICAgICAgICBpbnB1dFZhbHVlID0gb3duZXIuZWxlbWVudC52YWx1ZSxcblx0ICAgICAgICAgICAgdGV4dFRvQ29weSA9ICcnO1xuXG5cdCAgICAgICAgaWYgKCFwcHMuY29weURlbGltaXRlcikge1xuXHQgICAgICAgICAgICB0ZXh0VG9Db3B5ID0gVXRpbC5zdHJpcERlbGltaXRlcnMoaW5wdXRWYWx1ZSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHRleHRUb0NvcHkgPSBpbnB1dFZhbHVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIGlmIChlLmNsaXBib2FyZERhdGEpIHtcblx0ICAgICAgICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdUZXh0JywgdGV4dFRvQ29weSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdUZXh0JywgdGV4dFRvQ29weSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXgpIHtcblx0ICAgICAgICAgICBcblx0ICAgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBvbklucHV0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzLFxuXHQgICAgICAgICAgICBVdGlsID0gQ2xlYXZlLlV0aWw7XG5cblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICAgdmFyIHBvc3REZWxpbWl0ZXJBZnRlciA9IFV0aWwuZ2V0UG9zdERlbGltaXRlcih2YWx1ZSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuXHQgICAgICAgIGlmICghcHBzLm51bWVyYWwgJiYgcHBzLnBvc3REZWxpbWl0ZXJCYWNrc3BhY2UgJiYgIXBvc3REZWxpbWl0ZXJBZnRlcikge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IFV0aWwuaGVhZFN0cih2YWx1ZSwgdmFsdWUubGVuZ3RoIC0gcHBzLnBvc3REZWxpbWl0ZXJCYWNrc3BhY2UubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChwcHMucGhvbmUpIHtcblx0ICAgICAgICAgICAgaWYgKHBwcy5wcmVmaXggJiYgKCFwcHMubm9JbW1lZGlhdGVQcmVmaXggfHwgdmFsdWUubGVuZ3RoKSkge1xuXHQgICAgICAgICAgICAgICAgcHBzLnJlc3VsdCA9IHBwcy5wcmVmaXggKyBwcHMucGhvbmVGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlKS5zbGljZShwcHMucHJlZml4Lmxlbmd0aCk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBwcHMucmVzdWx0ID0gcHBzLnBob25lRm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgb3duZXIudXBkYXRlVmFsdWVTdGF0ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChwcHMubnVtZXJhbCkge1xuXHQgICAgICAgICAgIFxuXHQgICAgICAgICAgIFxuXHQgICAgICAgICAgICBpZiAocHBzLnByZWZpeCAmJiBwcHMubm9JbW1lZGlhdGVQcmVmaXggJiYgdmFsdWUubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICAgICAgICBwcHMucmVzdWx0ID0gJyc7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBwcHMucmVzdWx0ID0gcHBzLm51bWVyYWxGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBvd25lci51cGRhdGVWYWx1ZVN0YXRlKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKHBwcy5kYXRlKSB7XG5cdCAgICAgICAgICAgIHZhbHVlID0gcHBzLmRhdGVGb3JtYXR0ZXIuZ2V0VmFsaWRhdGVkRGF0ZSh2YWx1ZSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAocHBzLnRpbWUpIHtcblx0ICAgICAgICAgICAgdmFsdWUgPSBwcHMudGltZUZvcm1hdHRlci5nZXRWYWxpZGF0ZWRUaW1lKHZhbHVlKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHZhbHVlID0gVXRpbC5zdHJpcERlbGltaXRlcnModmFsdWUsIHBwcy5kZWxpbWl0ZXIsIHBwcy5kZWxpbWl0ZXJzKTtcblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgICB2YWx1ZSA9IFV0aWwuZ2V0UHJlZml4U3RyaXBwZWRWYWx1ZSh2YWx1ZSwgcHBzLnByZWZpeCwgcHBzLnByZWZpeExlbmd0aCwgcHBzLnJlc3VsdCwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuXG5cdCAgICAgICBcblx0ICAgICAgICB2YWx1ZSA9IHBwcy5udW1lcmljT25seSA/IFV0aWwuc3RyaXAodmFsdWUsIC9bXlxcZF0vZykgOiB2YWx1ZTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgdmFsdWUgPSBwcHMudXBwZXJjYXNlID8gdmFsdWUudG9VcHBlckNhc2UoKSA6IHZhbHVlO1xuXHQgICAgICAgIHZhbHVlID0gcHBzLmxvd2VyY2FzZSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiB2YWx1ZTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKHBwcy5wcmVmaXggJiYgKCFwcHMubm9JbW1lZGlhdGVQcmVmaXggfHwgdmFsdWUubGVuZ3RoKSkge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHBwcy5wcmVmaXggKyB2YWx1ZTtcblxuXHQgICAgICAgICAgIFxuXHQgICAgICAgICAgICBpZiAocHBzLmJsb2Nrc0xlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgICAgICAgcHBzLnJlc3VsdCA9IHZhbHVlO1xuXHQgICAgICAgICAgICAgICAgb3duZXIudXBkYXRlVmFsdWVTdGF0ZSgpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChwcHMuY3JlZGl0Q2FyZCkge1xuXHQgICAgICAgICAgICBvd25lci51cGRhdGVDcmVkaXRDYXJkUHJvcHNCeVZhbHVlKHZhbHVlKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHZhbHVlID0gVXRpbC5oZWFkU3RyKHZhbHVlLCBwcHMubWF4TGVuZ3RoKTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgcHBzLnJlc3VsdCA9IFV0aWwuZ2V0Rm9ybWF0dGVkVmFsdWUoXG5cdCAgICAgICAgICAgIHZhbHVlLFxuXHQgICAgICAgICAgICBwcHMuYmxvY2tzLCBwcHMuYmxvY2tzTGVuZ3RoLFxuXHQgICAgICAgICAgICBwcHMuZGVsaW1pdGVyLCBwcHMuZGVsaW1pdGVycywgcHBzLmRlbGltaXRlckxhenlTaG93XG5cdCAgICAgICAgKTtcblxuXHQgICAgICAgIG93bmVyLnVwZGF0ZVZhbHVlU3RhdGUoKTtcblx0ICAgIH0sXG5cblx0ICAgIHVwZGF0ZUNyZWRpdENhcmRQcm9wc0J5VmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXMsXG5cdCAgICAgICAgICAgIFV0aWwgPSBDbGVhdmUuVXRpbCxcblx0ICAgICAgICAgICAgY3JlZGl0Q2FyZEluZm87XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChVdGlsLmhlYWRTdHIocHBzLnJlc3VsdCwgNCkgPT09IFV0aWwuaGVhZFN0cih2YWx1ZSwgNCkpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGNyZWRpdENhcmRJbmZvID0gQ2xlYXZlLkNyZWRpdENhcmREZXRlY3Rvci5nZXRJbmZvKHZhbHVlLCBwcHMuY3JlZGl0Q2FyZFN0cmljdE1vZGUpO1xuXG5cdCAgICAgICAgcHBzLmJsb2NrcyA9IGNyZWRpdENhcmRJbmZvLmJsb2Nrcztcblx0ICAgICAgICBwcHMuYmxvY2tzTGVuZ3RoID0gcHBzLmJsb2Nrcy5sZW5ndGg7XG5cdCAgICAgICAgcHBzLm1heExlbmd0aCA9IFV0aWwuZ2V0TWF4TGVuZ3RoKHBwcy5ibG9ja3MpO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAocHBzLmNyZWRpdENhcmRUeXBlICE9PSBjcmVkaXRDYXJkSW5mby50eXBlKSB7XG5cdCAgICAgICAgICAgIHBwcy5jcmVkaXRDYXJkVHlwZSA9IGNyZWRpdENhcmRJbmZvLnR5cGU7XG5cblx0ICAgICAgICAgICAgcHBzLm9uQ3JlZGl0Q2FyZFR5cGVDaGFuZ2VkLmNhbGwob3duZXIsIHBwcy5jcmVkaXRDYXJkVHlwZSk7XG5cdCAgICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgdXBkYXRlVmFsdWVTdGF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsXG5cdCAgICAgICAgICAgIFV0aWwgPSBDbGVhdmUuVXRpbCxcblx0ICAgICAgICAgICAgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIGlmICghb3duZXIuZWxlbWVudCkge1xuXHQgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIGVuZFBvcyA9IG93bmVyLmVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuXHQgICAgICAgIHZhciBvbGRWYWx1ZSA9IG93bmVyLmVsZW1lbnQudmFsdWU7XG5cdCAgICAgICAgdmFyIG5ld1ZhbHVlID0gcHBzLnJlc3VsdDtcblxuXHQgICAgICAgIGVuZFBvcyA9IFV0aWwuZ2V0TmV4dEN1cnNvclBvc2l0aW9uKGVuZFBvcywgb2xkVmFsdWUsIG5ld1ZhbHVlLCBwcHMuZGVsaW1pdGVyLCBwcHMuZGVsaW1pdGVycyk7XG5cblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKG93bmVyLmlzQW5kcm9pZCkge1xuXHQgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICBvd25lci5lbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG5cdCAgICAgICAgICAgICAgICBVdGlsLnNldFNlbGVjdGlvbihvd25lci5lbGVtZW50LCBlbmRQb3MsIHBwcy5kb2N1bWVudCwgZmFsc2UpO1xuXHQgICAgICAgICAgICAgICAgb3duZXIuY2FsbE9uVmFsdWVDaGFuZ2VkKCk7XG5cdCAgICAgICAgICAgIH0sIDEpO1xuXG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBvd25lci5lbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG5cdCAgICAgICAgVXRpbC5zZXRTZWxlY3Rpb24ob3duZXIuZWxlbWVudCwgZW5kUG9zLCBwcHMuZG9jdW1lbnQsIGZhbHNlKTtcblx0ICAgICAgICBvd25lci5jYWxsT25WYWx1ZUNoYW5nZWQoKTtcblx0ICAgIH0sXG5cblx0ICAgIGNhbGxPblZhbHVlQ2hhbmdlZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsXG5cdCAgICAgICAgICAgIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cblx0ICAgICAgICBwcHMub25WYWx1ZUNoYW5nZWQuY2FsbChvd25lciwge1xuXHQgICAgICAgICAgICB0YXJnZXQ6IHtcblx0ICAgICAgICAgICAgICAgIHZhbHVlOiBwcHMucmVzdWx0LFxuXHQgICAgICAgICAgICAgICAgcmF3VmFsdWU6IG93bmVyLmdldFJhd1ZhbHVlKClcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgfSxcblxuXHQgICAgc2V0UGhvbmVSZWdpb25Db2RlOiBmdW5jdGlvbiAocGhvbmVSZWdpb25Db2RlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIHBwcy5waG9uZVJlZ2lvbkNvZGUgPSBwaG9uZVJlZ2lvbkNvZGU7XG5cdCAgICAgICAgb3duZXIuaW5pdFBob25lRm9ybWF0dGVyKCk7XG5cdCAgICAgICAgb3duZXIub25DaGFuZ2UoKTtcblx0ICAgIH0sXG5cblx0ICAgIHNldFJhd1ZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzO1xuXG5cdCAgICAgICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsID8gdmFsdWUudG9TdHJpbmcoKSA6ICcnO1xuXG5cdCAgICAgICAgaWYgKHBwcy5udW1lcmFsKSB7XG5cdCAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnLicsIHBwcy5udW1lcmFsRGVjaW1hbE1hcmspO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHBwcy5wb3N0RGVsaW1pdGVyQmFja3NwYWNlID0gZmFsc2U7XG5cblx0ICAgICAgICBvd25lci5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG5cdCAgICAgICAgb3duZXIub25JbnB1dCh2YWx1ZSk7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRSYXdWYWx1ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsXG5cdCAgICAgICAgICAgIHBwcyA9IG93bmVyLnByb3BlcnRpZXMsXG5cdCAgICAgICAgICAgIFV0aWwgPSBDbGVhdmUuVXRpbCxcblx0ICAgICAgICAgICAgcmF3VmFsdWUgPSBvd25lci5lbGVtZW50LnZhbHVlO1xuXG5cdCAgICAgICAgaWYgKHBwcy5yYXdWYWx1ZVRyaW1QcmVmaXgpIHtcblx0ICAgICAgICAgICAgcmF3VmFsdWUgPSBVdGlsLmdldFByZWZpeFN0cmlwcGVkVmFsdWUocmF3VmFsdWUsIHBwcy5wcmVmaXgsIHBwcy5wcmVmaXhMZW5ndGgsIHBwcy5yZXN1bHQsIHBwcy5kZWxpbWl0ZXIsIHBwcy5kZWxpbWl0ZXJzKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBpZiAocHBzLm51bWVyYWwpIHtcblx0ICAgICAgICAgICAgcmF3VmFsdWUgPSBwcHMubnVtZXJhbEZvcm1hdHRlci5nZXRSYXdWYWx1ZShyYXdWYWx1ZSk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmF3VmFsdWUgPSBVdGlsLnN0cmlwRGVsaW1pdGVycyhyYXdWYWx1ZSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiByYXdWYWx1ZTtcblx0ICAgIH0sXG5cblx0ICAgIGdldElTT0Zvcm1hdERhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLFxuXHQgICAgICAgICAgICBwcHMgPSBvd25lci5wcm9wZXJ0aWVzO1xuXG5cdCAgICAgICAgcmV0dXJuIHBwcy5kYXRlID8gcHBzLmRhdGVGb3JtYXR0ZXIuZ2V0SVNPRm9ybWF0RGF0ZSgpIDogJyc7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRJU09Gb3JtYXRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcyxcblx0ICAgICAgICAgICAgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuXHQgICAgICAgIHJldHVybiBwcHMudGltZSA/IHBwcy50aW1lRm9ybWF0dGVyLmdldElTT0Zvcm1hdFRpbWUoKSA6ICcnO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0Rm9ybWF0dGVkVmFsdWU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuXHQgICAgfSxcblxuXHQgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXM7XG5cblx0ICAgICAgICBvd25lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb3duZXIub25DaGFuZ2VMaXN0ZW5lcik7XG5cdCAgICAgICAgb3duZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb3duZXIub25LZXlEb3duTGlzdGVuZXIpO1xuXHQgICAgICAgIG93bmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvd25lci5vbkZvY3VzTGlzdGVuZXIpO1xuXHQgICAgICAgIG93bmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY3V0Jywgb3duZXIub25DdXRMaXN0ZW5lcik7XG5cdCAgICAgICAgb3duZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb3B5Jywgb3duZXIub25Db3B5TGlzdGVuZXIpO1xuXHQgICAgfSxcblxuXHQgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gJ1tDbGVhdmUgT2JqZWN0XSc7XG5cdCAgICB9XG5cdH07XG5cblx0Q2xlYXZlLk51bWVyYWxGb3JtYXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRDbGVhdmUuRGF0ZUZvcm1hdHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdENsZWF2ZS5UaW1lRm9ybWF0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0Q2xlYXZlLlBob25lRm9ybWF0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblx0Q2xlYXZlLkNyZWRpdENhcmREZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdENsZWF2ZS5VdGlsID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblx0Q2xlYXZlLkRlZmF1bHRQcm9wZXJ0aWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuXG5cdCgodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsKSA/IGdsb2JhbCA6IHdpbmRvdylbJ0NsZWF2ZSddID0gQ2xlYXZlO1xuXG5cblx0bW9kdWxlLmV4cG9ydHMgPSBDbGVhdmU7XG5cblx0fS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4gfSksXG4gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgTnVtZXJhbEZvcm1hdHRlciA9IGZ1bmN0aW9uIChudW1lcmFsRGVjaW1hbE1hcmssXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYWxJbnRlZ2VyU2NhbGUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYWxEZWNpbWFsU2NhbGUsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlLFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcmFsUG9zaXRpdmVPbmx5LFxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcExlYWRpbmdaZXJvZXMsXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbkJlZm9yZVByZWZpeCxcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyKSB7XG5cdCAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG5cdCAgICBvd25lci5udW1lcmFsRGVjaW1hbE1hcmsgPSBudW1lcmFsRGVjaW1hbE1hcmsgfHwgJy4nO1xuXHQgICAgb3duZXIubnVtZXJhbEludGVnZXJTY2FsZSA9IG51bWVyYWxJbnRlZ2VyU2NhbGUgPiAwID8gbnVtZXJhbEludGVnZXJTY2FsZSA6IDA7XG5cdCAgICBvd25lci5udW1lcmFsRGVjaW1hbFNjYWxlID0gbnVtZXJhbERlY2ltYWxTY2FsZSA+PSAwID8gbnVtZXJhbERlY2ltYWxTY2FsZSA6IDI7XG5cdCAgICBvd25lci5udW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZSA9IG51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlIHx8IE51bWVyYWxGb3JtYXR0ZXIuZ3JvdXBTdHlsZS50aG91c2FuZDtcblx0ICAgIG93bmVyLm51bWVyYWxQb3NpdGl2ZU9ubHkgPSAhIW51bWVyYWxQb3NpdGl2ZU9ubHk7XG5cdCAgICBvd25lci5zdHJpcExlYWRpbmdaZXJvZXMgPSBzdHJpcExlYWRpbmdaZXJvZXMgIT09IGZhbHNlO1xuXHQgICAgb3duZXIucHJlZml4ID0gKHByZWZpeCB8fCBwcmVmaXggPT09ICcnKSA/IHByZWZpeCA6ICcnO1xuXHQgICAgb3duZXIuc2lnbkJlZm9yZVByZWZpeCA9ICEhc2lnbkJlZm9yZVByZWZpeDtcblx0ICAgIG93bmVyLmRlbGltaXRlciA9IChkZWxpbWl0ZXIgfHwgZGVsaW1pdGVyID09PSAnJykgPyBkZWxpbWl0ZXIgOiAnLCc7XG5cdCAgICBvd25lci5kZWxpbWl0ZXJSRSA9IGRlbGltaXRlciA/IG5ldyBSZWdFeHAoJ1xcXFwnICsgZGVsaW1pdGVyLCAnZycpIDogJyc7XG5cdH07XG5cblx0TnVtZXJhbEZvcm1hdHRlci5ncm91cFN0eWxlID0ge1xuXHQgICAgdGhvdXNhbmQ6ICd0aG91c2FuZCcsXG5cdCAgICBsYWtoOiAgICAgJ2xha2gnLFxuXHQgICAgd2FuOiAgICAgICd3YW4nLFxuXHQgICAgbm9uZTogICAgICdub25lJyAgICBcblx0fTtcblxuXHROdW1lcmFsRm9ybWF0dGVyLnByb3RvdHlwZSA9IHtcblx0ICAgIGdldFJhd1ZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLmRlbGltaXRlclJFLCAnJykucmVwbGFjZSh0aGlzLm51bWVyYWxEZWNpbWFsTWFyaywgJy4nKTtcblx0ICAgIH0sXG5cblx0ICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcGFydHMsIHBhcnRTaWduLCBwYXJ0U2lnbkFuZFByZWZpeCwgcGFydEludGVnZXIsIHBhcnREZWNpbWFsID0gJyc7XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW0EtWmEtel0vZywgJycpXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgIC5yZXBsYWNlKG93bmVyLm51bWVyYWxEZWNpbWFsTWFyaywgJ00nKVxuXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcZE0tXS9nLCAnJylcblxuXHQgICAgICAgICAgIFxuXHQgICAgICAgICAgICAucmVwbGFjZSgvXlxcLS8sICdOJylcblxuXHQgICAgICAgICAgIFxuXHQgICAgICAgICAgICAucmVwbGFjZSgvXFwtL2csICcnKVxuXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgIC5yZXBsYWNlKCdOJywgb3duZXIubnVtZXJhbFBvc2l0aXZlT25seSA/ICcnIDogJy0nKVxuXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgIC5yZXBsYWNlKCdNJywgb3duZXIubnVtZXJhbERlY2ltYWxNYXJrKTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKG93bmVyLnN0cmlwTGVhZGluZ1plcm9lcykge1xuXHQgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oLSk/MCsoPz1cXGQpLywgJyQxJyk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcGFydFNpZ24gPSB2YWx1ZS5zbGljZSgwLCAxKSA9PT0gJy0nID8gJy0nIDogJyc7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBvd25lci5wcmVmaXggIT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICAgICAgaWYgKG93bmVyLnNpZ25CZWZvcmVQcmVmaXgpIHtcblx0ICAgICAgICAgICAgICAgIHBhcnRTaWduQW5kUHJlZml4ID0gcGFydFNpZ24gKyBvd25lci5wcmVmaXg7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBwYXJ0U2lnbkFuZFByZWZpeCA9IG93bmVyLnByZWZpeCArIHBhcnRTaWduO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcGFydFNpZ25BbmRQcmVmaXggPSBwYXJ0U2lnbjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgXG5cdCAgICAgICAgcGFydEludGVnZXIgPSB2YWx1ZTtcblxuXHQgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKG93bmVyLm51bWVyYWxEZWNpbWFsTWFyaykgPj0gMCkge1xuXHQgICAgICAgICAgICBwYXJ0cyA9IHZhbHVlLnNwbGl0KG93bmVyLm51bWVyYWxEZWNpbWFsTWFyayk7XG5cdCAgICAgICAgICAgIHBhcnRJbnRlZ2VyID0gcGFydHNbMF07XG5cdCAgICAgICAgICAgIHBhcnREZWNpbWFsID0gb3duZXIubnVtZXJhbERlY2ltYWxNYXJrICsgcGFydHNbMV0uc2xpY2UoMCwgb3duZXIubnVtZXJhbERlY2ltYWxTY2FsZSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYocGFydFNpZ24gPT09ICctJykge1xuXHQgICAgICAgICAgICBwYXJ0SW50ZWdlciA9IHBhcnRJbnRlZ2VyLnNsaWNlKDEpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmIChvd25lci5udW1lcmFsSW50ZWdlclNjYWxlID4gMCkge1xuXHQgICAgICAgICAgcGFydEludGVnZXIgPSBwYXJ0SW50ZWdlci5zbGljZSgwLCBvd25lci5udW1lcmFsSW50ZWdlclNjYWxlKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBzd2l0Y2ggKG93bmVyLm51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlKSB7XG5cdCAgICAgICAgY2FzZSBOdW1lcmFsRm9ybWF0dGVyLmdyb3VwU3R5bGUubGFraDpcblx0ICAgICAgICAgICAgcGFydEludGVnZXIgPSBwYXJ0SW50ZWdlci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGQpK1xcZCQpL2csICckMScgKyBvd25lci5kZWxpbWl0ZXIpO1xuXG5cdCAgICAgICAgICAgIGJyZWFrO1xuXG5cdCAgICAgICAgY2FzZSBOdW1lcmFsRm9ybWF0dGVyLmdyb3VwU3R5bGUud2FuOlxuXHQgICAgICAgICAgICBwYXJ0SW50ZWdlciA9IHBhcnRJbnRlZ2VyLnJlcGxhY2UoLyhcXGQpKD89KFxcZHs0fSkrJCkvZywgJyQxJyArIG93bmVyLmRlbGltaXRlcik7XG5cblx0ICAgICAgICAgICAgYnJlYWs7XG5cblx0ICAgICAgICBjYXNlIE51bWVyYWxGb3JtYXR0ZXIuZ3JvdXBTdHlsZS50aG91c2FuZDpcblx0ICAgICAgICAgICAgcGFydEludGVnZXIgPSBwYXJ0SW50ZWdlci5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMScgKyBvd25lci5kZWxpbWl0ZXIpO1xuXG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBwYXJ0U2lnbkFuZFByZWZpeCArIHBhcnRJbnRlZ2VyLnRvU3RyaW5nKCkgKyAob3duZXIubnVtZXJhbERlY2ltYWxTY2FsZSA+IDAgPyBwYXJ0RGVjaW1hbC50b1N0cmluZygpIDogJycpO1xuXHQgICAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gTnVtZXJhbEZvcm1hdHRlcjtcblxuXG4gfSksXG4gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgRGF0ZUZvcm1hdHRlciA9IGZ1bmN0aW9uIChkYXRlUGF0dGVybiwgZGF0ZU1pbiwgZGF0ZU1heCkge1xuXHQgICAgdmFyIG93bmVyID0gdGhpcztcblxuXHQgICAgb3duZXIuZGF0ZSA9IFtdO1xuXHQgICAgb3duZXIuYmxvY2tzID0gW107XG5cdCAgICBvd25lci5kYXRlUGF0dGVybiA9IGRhdGVQYXR0ZXJuO1xuXHQgICAgb3duZXIuZGF0ZU1pbiA9IGRhdGVNaW5cblx0ICAgICAgLnNwbGl0KCctJylcblx0ICAgICAgLnJldmVyc2UoKVxuXHQgICAgICAubWFwKGZ1bmN0aW9uKHgpIHtcblx0ICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuXHQgICAgICB9KTtcblx0ICAgIGlmIChvd25lci5kYXRlTWluLmxlbmd0aCA9PT0gMikgb3duZXIuZGF0ZU1pbi51bnNoaWZ0KDApO1xuXG5cdCAgICBvd25lci5kYXRlTWF4ID0gZGF0ZU1heFxuXHQgICAgICAuc3BsaXQoJy0nKVxuXHQgICAgICAucmV2ZXJzZSgpXG5cdCAgICAgIC5tYXAoZnVuY3Rpb24oeCkge1xuXHQgICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG5cdCAgICAgIH0pO1xuXHQgICAgaWYgKG93bmVyLmRhdGVNYXgubGVuZ3RoID09PSAyKSBvd25lci5kYXRlTWF4LnVuc2hpZnQoMCk7XG5cdCAgICBcblx0ICAgIG93bmVyLmluaXRCbG9ja3MoKTtcblx0fTtcblxuXHREYXRlRm9ybWF0dGVyLnByb3RvdHlwZSA9IHtcblx0ICAgIGluaXRCbG9ja3M6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xuXHQgICAgICAgIG93bmVyLmRhdGVQYXR0ZXJuLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ1knKSB7XG5cdCAgICAgICAgICAgICAgICBvd25lci5ibG9ja3MucHVzaCg0KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIG93bmVyLmJsb2Nrcy5wdXNoKDIpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRJU09Gb3JtYXREYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcyxcblx0ICAgICAgICAgICAgZGF0ZSA9IG93bmVyLmRhdGU7XG5cblx0ICAgICAgICByZXR1cm4gZGF0ZVsyXSA/IChcblx0ICAgICAgICAgICAgZGF0ZVsyXSArICctJyArIG93bmVyLmFkZExlYWRpbmdaZXJvKGRhdGVbMV0pICsgJy0nICsgb3duZXIuYWRkTGVhZGluZ1plcm8oZGF0ZVswXSlcblx0ICAgICAgICApIDogJyc7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRCbG9ja3M6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5ibG9ja3M7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRWYWxpZGF0ZWREYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCByZXN1bHQgPSAnJztcblxuXHQgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW15cXGRdL2csICcnKTtcblxuXHQgICAgICAgIG93bmVyLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChsZW5ndGgsIGluZGV4KSB7XG5cdCAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgc3ViID0gdmFsdWUuc2xpY2UoMCwgbGVuZ3RoKSxcblx0ICAgICAgICAgICAgICAgICAgICBzdWIwID0gc3ViLnNsaWNlKDAsIDEpLFxuXHQgICAgICAgICAgICAgICAgICAgIHJlc3QgPSB2YWx1ZS5zbGljZShsZW5ndGgpO1xuXG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmRhdGVQYXR0ZXJuW2luZGV4XSkge1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnZCc6XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gJzAwJykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMDEnO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc3ViMCwgMTApID4gMykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMCcgKyBzdWIwO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc3ViLCAxMCkgPiAzMSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMzEnO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cdCAgICAgICAgICAgICAgICBjYXNlICdtJzpcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoc3ViID09PSAnMDAnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9ICcwMSc7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChzdWIwLCAxMCkgPiAxKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9ICcwJyArIHN1YjA7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChzdWIsIDEwKSA+IDEyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9ICcxMic7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdWI7XG5cblx0ICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3Q7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIHJldHVybiB0aGlzLmdldEZpeGVkRGF0ZVN0cmluZyhyZXN1bHQpO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0Rml4ZWREYXRlU3RyaW5nOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBkYXRlUGF0dGVybiA9IG93bmVyLmRhdGVQYXR0ZXJuLCBkYXRlID0gW10sXG5cdCAgICAgICAgICAgIGRheUluZGV4ID0gMCwgbW9udGhJbmRleCA9IDAsIHllYXJJbmRleCA9IDAsXG5cdCAgICAgICAgICAgIGRheVN0YXJ0SW5kZXggPSAwLCBtb250aFN0YXJ0SW5kZXggPSAwLCB5ZWFyU3RhcnRJbmRleCA9IDAsXG5cdCAgICAgICAgICAgIGRheSwgbW9udGgsIHllYXIsIGZ1bGxZZWFyRG9uZSA9IGZhbHNlO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA0ICYmIGRhdGVQYXR0ZXJuWzBdLnRvTG93ZXJDYXNlKCkgIT09ICd5JyAmJiBkYXRlUGF0dGVyblsxXS50b0xvd2VyQ2FzZSgpICE9PSAneScpIHtcblx0ICAgICAgICAgICAgZGF5U3RhcnRJbmRleCA9IGRhdGVQYXR0ZXJuWzBdID09PSAnZCcgPyAwIDogMjtcblx0ICAgICAgICAgICAgbW9udGhTdGFydEluZGV4ID0gMiAtIGRheVN0YXJ0SW5kZXg7XG5cdCAgICAgICAgICAgIGRheSA9IHBhcnNlSW50KHZhbHVlLnNsaWNlKGRheVN0YXJ0SW5kZXgsIGRheVN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXHQgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHZhbHVlLnNsaWNlKG1vbnRoU3RhcnRJbmRleCwgbW9udGhTdGFydEluZGV4ICsgMiksIDEwKTtcblxuXHQgICAgICAgICAgICBkYXRlID0gdGhpcy5nZXRGaXhlZERhdGUoZGF5LCBtb250aCwgMCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA4KSB7XG5cdCAgICAgICAgICAgIGRhdGVQYXR0ZXJuLmZvckVhY2goZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxuXHQgICAgICAgICAgICAgICAgICAgIGRheUluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICdtJzpcblx0ICAgICAgICAgICAgICAgICAgICBtb250aEluZGV4ID0gaW5kZXg7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICAgICAgICAgIHllYXJJbmRleCA9IGluZGV4O1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICB5ZWFyU3RhcnRJbmRleCA9IHllYXJJbmRleCAqIDI7XG5cdCAgICAgICAgICAgIGRheVN0YXJ0SW5kZXggPSAoZGF5SW5kZXggPD0geWVhckluZGV4KSA/IGRheUluZGV4ICogMiA6IChkYXlJbmRleCAqIDIgKyAyKTtcblx0ICAgICAgICAgICAgbW9udGhTdGFydEluZGV4ID0gKG1vbnRoSW5kZXggPD0geWVhckluZGV4KSA/IG1vbnRoSW5kZXggKiAyIDogKG1vbnRoSW5kZXggKiAyICsgMik7XG5cblx0ICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQodmFsdWUuc2xpY2UoZGF5U3RhcnRJbmRleCwgZGF5U3RhcnRJbmRleCArIDIpLCAxMCk7XG5cdCAgICAgICAgICAgIG1vbnRoID0gcGFyc2VJbnQodmFsdWUuc2xpY2UobW9udGhTdGFydEluZGV4LCBtb250aFN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXHQgICAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQodmFsdWUuc2xpY2UoeWVhclN0YXJ0SW5kZXgsIHllYXJTdGFydEluZGV4ICsgNCksIDEwKTtcblxuXHQgICAgICAgICAgICBmdWxsWWVhckRvbmUgPSB2YWx1ZS5zbGljZSh5ZWFyU3RhcnRJbmRleCwgeWVhclN0YXJ0SW5kZXggKyA0KS5sZW5ndGggPT09IDQ7XG5cblx0ICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0Rml4ZWREYXRlKGRheSwgbW9udGgsIHllYXIpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNCAmJiAoZGF0ZVBhdHRlcm5bMF0gPT09ICd5JyB8fCBkYXRlUGF0dGVyblsxXSA9PT0gJ3knKSkge1xuXHQgICAgICAgICAgICBtb250aFN0YXJ0SW5kZXggPSBkYXRlUGF0dGVyblswXSA9PT0gJ20nID8gMCA6IDI7XG5cdCAgICAgICAgICAgIHllYXJTdGFydEluZGV4ID0gMiAtIG1vbnRoU3RhcnRJbmRleDtcblx0ICAgICAgICAgICAgbW9udGggPSBwYXJzZUludCh2YWx1ZS5zbGljZShtb250aFN0YXJ0SW5kZXgsIG1vbnRoU3RhcnRJbmRleCArIDIpLCAxMCk7XG5cdCAgICAgICAgICAgIHllYXIgPSBwYXJzZUludCh2YWx1ZS5zbGljZSh5ZWFyU3RhcnRJbmRleCwgeWVhclN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXG5cdCAgICAgICAgICAgIGZ1bGxZZWFyRG9uZSA9IHZhbHVlLnNsaWNlKHllYXJTdGFydEluZGV4LCB5ZWFyU3RhcnRJbmRleCArIDIpLmxlbmd0aCA9PT0gMjtcblxuXHQgICAgICAgICAgICBkYXRlID0gWzAsIG1vbnRoLCB5ZWFyXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDYgJiYgKGRhdGVQYXR0ZXJuWzBdID09PSAnWScgfHwgZGF0ZVBhdHRlcm5bMV0gPT09ICdZJykpIHtcblx0ICAgICAgICAgICAgbW9udGhTdGFydEluZGV4ID0gZGF0ZVBhdHRlcm5bMF0gPT09ICdtJyA/IDAgOiA0O1xuXHQgICAgICAgICAgICB5ZWFyU3RhcnRJbmRleCA9IDIgLSAwLjUgKiBtb250aFN0YXJ0SW5kZXg7XG5cdCAgICAgICAgICAgIG1vbnRoID0gcGFyc2VJbnQodmFsdWUuc2xpY2UobW9udGhTdGFydEluZGV4LCBtb250aFN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXHQgICAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQodmFsdWUuc2xpY2UoeWVhclN0YXJ0SW5kZXgsIHllYXJTdGFydEluZGV4ICsgNCksIDEwKTtcblxuXHQgICAgICAgICAgICBmdWxsWWVhckRvbmUgPSB2YWx1ZS5zbGljZSh5ZWFyU3RhcnRJbmRleCwgeWVhclN0YXJ0SW5kZXggKyA0KS5sZW5ndGggPT09IDQ7XG5cblx0ICAgICAgICAgICAgZGF0ZSA9IFswLCBtb250aCwgeWVhcl07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZGF0ZSA9IG93bmVyLmdldFJhbmdlRml4ZWREYXRlKGRhdGUpO1xuXHQgICAgICAgIG93bmVyLmRhdGUgPSBkYXRlO1xuXG5cdCAgICAgICAgdmFyIHJlc3VsdCA9IGRhdGUubGVuZ3RoID09PSAwID8gdmFsdWUgOiBkYXRlUGF0dGVybi5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudCkge1xuXHQgICAgICAgICAgICBjYXNlICdkJzpcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIChkYXRlWzBdID09PSAwID8gJycgOiBvd25lci5hZGRMZWFkaW5nWmVybyhkYXRlWzBdKSk7XG5cdCAgICAgICAgICAgIGNhc2UgJ20nOlxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgKGRhdGVbMV0gPT09IDAgPyAnJyA6IG93bmVyLmFkZExlYWRpbmdaZXJvKGRhdGVbMV0pKTtcblx0ICAgICAgICAgICAgY2FzZSAneSc6XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyAoZnVsbFllYXJEb25lID8gb3duZXIuYWRkTGVhZGluZ1plcm9Gb3JZZWFyKGRhdGVbMl0sIGZhbHNlKSA6ICcnKTtcblx0ICAgICAgICAgICAgY2FzZSAnWSc6XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyAoZnVsbFllYXJEb25lID8gb3duZXIuYWRkTGVhZGluZ1plcm9Gb3JZZWFyKGRhdGVbMl0sIHRydWUpIDogJycpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSwgJycpO1xuXG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH0sXG5cblx0ICAgIGdldFJhbmdlRml4ZWREYXRlOiBmdW5jdGlvbiAoZGF0ZSkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsXG5cdCAgICAgICAgICAgIGRhdGVQYXR0ZXJuID0gb3duZXIuZGF0ZVBhdHRlcm4sXG5cdCAgICAgICAgICAgIGRhdGVNaW4gPSBvd25lci5kYXRlTWluIHx8IFtdLFxuXHQgICAgICAgICAgICBkYXRlTWF4ID0gb3duZXIuZGF0ZU1heCB8fCBbXTtcblxuXHQgICAgICAgIGlmICghZGF0ZS5sZW5ndGggfHwgKGRhdGVNaW4ubGVuZ3RoIDwgMyAmJiBkYXRlTWF4Lmxlbmd0aCA8IDMpKSByZXR1cm4gZGF0ZTtcblxuXHQgICAgICAgIGlmIChcblx0ICAgICAgICAgIGRhdGVQYXR0ZXJuLmZpbmQoZnVuY3Rpb24oeCkge1xuXHQgICAgICAgICAgICByZXR1cm4geC50b0xvd2VyQ2FzZSgpID09PSAneSc7XG5cdCAgICAgICAgICB9KSAmJlxuXHQgICAgICAgICAgZGF0ZVsyXSA9PT0gMFxuXHQgICAgICAgICkgcmV0dXJuIGRhdGU7XG5cblx0ICAgICAgICBpZiAoZGF0ZU1heC5sZW5ndGggJiYgKGRhdGVNYXhbMl0gPCBkYXRlWzJdIHx8IChcblx0ICAgICAgICAgIGRhdGVNYXhbMl0gPT09IGRhdGVbMl0gJiYgKGRhdGVNYXhbMV0gPCBkYXRlWzFdIHx8IChcblx0ICAgICAgICAgICAgZGF0ZU1heFsxXSA9PT0gZGF0ZVsxXSAmJiBkYXRlTWF4WzBdIDwgZGF0ZVswXVxuXHQgICAgICAgICAgKSlcblx0ICAgICAgICApKSkgcmV0dXJuIGRhdGVNYXg7XG5cblx0ICAgICAgICBpZiAoZGF0ZU1pbi5sZW5ndGggJiYgKGRhdGVNaW5bMl0gPiBkYXRlWzJdIHx8IChcblx0ICAgICAgICAgIGRhdGVNaW5bMl0gPT09IGRhdGVbMl0gJiYgKGRhdGVNaW5bMV0gPiBkYXRlWzFdIHx8IChcblx0ICAgICAgICAgICAgZGF0ZU1pblsxXSA9PT0gZGF0ZVsxXSAmJiBkYXRlTWluWzBdID4gZGF0ZVswXVxuXHQgICAgICAgICAgKSlcblx0ICAgICAgICApKSkgcmV0dXJuIGRhdGVNaW47XG5cblx0ICAgICAgICByZXR1cm4gZGF0ZTtcblx0ICAgIH0sXG5cblx0ICAgIGdldEZpeGVkRGF0ZTogZnVuY3Rpb24gKGRheSwgbW9udGgsIHllYXIpIHtcblx0ICAgICAgICBkYXkgPSBNYXRoLm1pbihkYXksIDMxKTtcblx0ICAgICAgICBtb250aCA9IE1hdGgubWluKG1vbnRoLCAxMik7XG5cdCAgICAgICAgeWVhciA9IHBhcnNlSW50KCh5ZWFyIHx8IDApLCAxMCk7XG5cblx0ICAgICAgICBpZiAoKG1vbnRoIDwgNyAmJiBtb250aCAlIDIgPT09IDApIHx8IChtb250aCA+IDggJiYgbW9udGggJSAyID09PSAxKSkge1xuXHQgICAgICAgICAgICBkYXkgPSBNYXRoLm1pbihkYXksIG1vbnRoID09PSAyID8gKHRoaXMuaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjgpIDogMzApO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG5cdCAgICB9LFxuXG5cdCAgICBpc0xlYXBZZWFyOiBmdW5jdGlvbiAoeWVhcikge1xuXHQgICAgICAgIHJldHVybiAoKHllYXIgJSA0ID09PSAwKSAmJiAoeWVhciAlIDEwMCAhPT0gMCkpIHx8ICh5ZWFyICUgNDAwID09PSAwKTtcblx0ICAgIH0sXG5cblx0ICAgIGFkZExlYWRpbmdaZXJvOiBmdW5jdGlvbiAobnVtYmVyKSB7XG5cdCAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxMCA/ICcwJyA6ICcnKSArIG51bWJlcjtcblx0ICAgIH0sXG5cblx0ICAgIGFkZExlYWRpbmdaZXJvRm9yWWVhcjogZnVuY3Rpb24gKG51bWJlciwgZnVsbFllYXJNb2RlKSB7XG5cdCAgICAgICAgaWYgKGZ1bGxZZWFyTW9kZSkge1xuXHQgICAgICAgICAgICByZXR1cm4gKG51bWJlciA8IDEwID8gJzAwMCcgOiAobnVtYmVyIDwgMTAwID8gJzAwJyA6IChudW1iZXIgPCAxMDAwID8gJzAnIDogJycpKSkgKyBudW1iZXI7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIChudW1iZXIgPCAxMCA/ICcwJyA6ICcnKSArIG51bWJlcjtcblx0ICAgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IERhdGVGb3JtYXR0ZXI7XG5cblxuIH0pLFxuIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIFRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiAodGltZVBhdHRlcm4sIHRpbWVGb3JtYXQpIHtcblx0ICAgIHZhciBvd25lciA9IHRoaXM7XG5cblx0ICAgIG93bmVyLnRpbWUgPSBbXTtcblx0ICAgIG93bmVyLmJsb2NrcyA9IFtdO1xuXHQgICAgb3duZXIudGltZVBhdHRlcm4gPSB0aW1lUGF0dGVybjtcblx0ICAgIG93bmVyLnRpbWVGb3JtYXQgPSB0aW1lRm9ybWF0O1xuXHQgICAgb3duZXIuaW5pdEJsb2NrcygpO1xuXHR9O1xuXG5cdFRpbWVGb3JtYXR0ZXIucHJvdG90eXBlID0ge1xuXHQgICAgaW5pdEJsb2NrczogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXM7XG5cdCAgICAgICAgb3duZXIudGltZVBhdHRlcm4uZm9yRWFjaChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIG93bmVyLmJsb2Nrcy5wdXNoKDIpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0SVNPRm9ybWF0VGltZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHZhciBvd25lciA9IHRoaXMsXG5cdCAgICAgICAgICAgIHRpbWUgPSBvd25lci50aW1lO1xuXG5cdCAgICAgICAgcmV0dXJuIHRpbWVbMl0gPyAoXG5cdCAgICAgICAgICAgIG93bmVyLmFkZExlYWRpbmdaZXJvKHRpbWVbMF0pICsgJzonICsgb3duZXIuYWRkTGVhZGluZ1plcm8odGltZVsxXSkgKyAnOicgKyBvd25lci5hZGRMZWFkaW5nWmVybyh0aW1lWzJdKVxuXHQgICAgICAgICkgOiAnJztcblx0ICAgIH0sXG5cblx0ICAgIGdldEJsb2NrczogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLmJsb2Nrcztcblx0ICAgIH0sXG5cblx0ICAgIGdldFRpbWVGb3JtYXRPcHRpb25zOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcztcblx0ICAgICAgICBpZiAoU3RyaW5nKG93bmVyLnRpbWVGb3JtYXQpID09PSAnMTInKSB7XG5cdCAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICBtYXhIb3VyRmlyc3REaWdpdDogMSxcblx0ICAgICAgICAgICAgICAgIG1heEhvdXJzOiAxMixcblx0ICAgICAgICAgICAgICAgIG1heE1pbnV0ZXNGaXJzdERpZ2l0OiA1LFxuXHQgICAgICAgICAgICAgICAgbWF4TWludXRlczogNjBcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICBtYXhIb3VyRmlyc3REaWdpdDogMixcblx0ICAgICAgICAgICAgbWF4SG91cnM6IDIzLFxuXHQgICAgICAgICAgICBtYXhNaW51dGVzRmlyc3REaWdpdDogNSxcblx0ICAgICAgICAgICAgbWF4TWludXRlczogNjBcblx0ICAgICAgICB9O1xuXHQgICAgfSxcblxuXHQgICAgZ2V0VmFsaWRhdGVkVGltZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcmVzdWx0ID0gJyc7XG5cblx0ICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XG5cblx0ICAgICAgICB2YXIgdGltZUZvcm1hdE9wdGlvbnMgPSBvd25lci5nZXRUaW1lRm9ybWF0T3B0aW9ucygpO1xuXG5cdCAgICAgICAgb3duZXIuYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGxlbmd0aCwgaW5kZXgpIHtcblx0ICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgIHZhciBzdWIgPSB2YWx1ZS5zbGljZSgwLCBsZW5ndGgpLFxuXHQgICAgICAgICAgICAgICAgICAgIHN1YjAgPSBzdWIuc2xpY2UoMCwgMSksXG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdCA9IHZhbHVlLnNsaWNlKGxlbmd0aCk7XG5cblx0ICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIudGltZVBhdHRlcm5baW5kZXhdKSB7XG5cblx0ICAgICAgICAgICAgICAgIGNhc2UgJ2gnOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChzdWIwLCAxMCkgPiB0aW1lRm9ybWF0T3B0aW9ucy5tYXhIb3VyRmlyc3REaWdpdCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMCcgKyBzdWIwO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc3ViLCAxMCkgPiB0aW1lRm9ybWF0T3B0aW9ucy5tYXhIb3Vycykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSB0aW1lRm9ybWF0T3B0aW9ucy5tYXhIb3VycyArICcnO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cdCAgICAgICAgICAgICAgICBjYXNlICdtJzpcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChzdWIwLCAxMCkgPiB0aW1lRm9ybWF0T3B0aW9ucy5tYXhNaW51dGVzRmlyc3REaWdpdCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMCcgKyBzdWIwO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc3ViLCAxMCkgPiB0aW1lRm9ybWF0T3B0aW9ucy5tYXhNaW51dGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9IHRpbWVGb3JtYXRPcHRpb25zLm1heE1pbnV0ZXMgKyAnJztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdWI7XG5cblx0ICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3Q7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIHJldHVybiB0aGlzLmdldEZpeGVkVGltZVN0cmluZyhyZXN1bHQpO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0Rml4ZWRUaW1lU3RyaW5nOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCB0aW1lUGF0dGVybiA9IG93bmVyLnRpbWVQYXR0ZXJuLCB0aW1lID0gW10sXG5cdCAgICAgICAgICAgIHNlY29uZEluZGV4ID0gMCwgbWludXRlSW5kZXggPSAwLCBob3VySW5kZXggPSAwLFxuXHQgICAgICAgICAgICBzZWNvbmRTdGFydEluZGV4ID0gMCwgbWludXRlU3RhcnRJbmRleCA9IDAsIGhvdXJTdGFydEluZGV4ID0gMCxcblx0ICAgICAgICAgICAgc2Vjb25kLCBtaW51dGUsIGhvdXI7XG5cblx0ICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSA2KSB7XG5cdCAgICAgICAgICAgIHRpbWVQYXR0ZXJuLmZvckVhY2goZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuXHQgICAgICAgICAgICAgICAgICAgIHNlY29uZEluZGV4ID0gaW5kZXggKiAyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnbSc6XG5cdCAgICAgICAgICAgICAgICAgICAgbWludXRlSW5kZXggPSBpbmRleCAqIDI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICBjYXNlICdoJzpcblx0ICAgICAgICAgICAgICAgICAgICBob3VySW5kZXggPSBpbmRleCAqIDI7XG5cdCAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIGhvdXJTdGFydEluZGV4ID0gaG91ckluZGV4O1xuXHQgICAgICAgICAgICBtaW51dGVTdGFydEluZGV4ID0gbWludXRlSW5kZXg7XG5cdCAgICAgICAgICAgIHNlY29uZFN0YXJ0SW5kZXggPSBzZWNvbmRJbmRleDtcblxuXHQgICAgICAgICAgICBzZWNvbmQgPSBwYXJzZUludCh2YWx1ZS5zbGljZShzZWNvbmRTdGFydEluZGV4LCBzZWNvbmRTdGFydEluZGV4ICsgMiksIDEwKTtcblx0ICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQodmFsdWUuc2xpY2UobWludXRlU3RhcnRJbmRleCwgbWludXRlU3RhcnRJbmRleCArIDIpLCAxMCk7XG5cdCAgICAgICAgICAgIGhvdXIgPSBwYXJzZUludCh2YWx1ZS5zbGljZShob3VyU3RhcnRJbmRleCwgaG91clN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXG5cdCAgICAgICAgICAgIHRpbWUgPSB0aGlzLmdldEZpeGVkVGltZShob3VyLCBtaW51dGUsIHNlY29uZCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNCAmJiBvd25lci50aW1lUGF0dGVybi5pbmRleE9mKCdzJykgPCAwKSB7XG5cdCAgICAgICAgICAgIHRpbWVQYXR0ZXJuLmZvckVhY2goZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG5cdCAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblx0ICAgICAgICAgICAgICAgIGNhc2UgJ20nOlxuXHQgICAgICAgICAgICAgICAgICAgIG1pbnV0ZUluZGV4ID0gaW5kZXggKiAyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgY2FzZSAnaCc6XG5cdCAgICAgICAgICAgICAgICAgICAgaG91ckluZGV4ID0gaW5kZXggKiAyO1xuXHQgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9KTtcblxuXHQgICAgICAgICAgICBob3VyU3RhcnRJbmRleCA9IGhvdXJJbmRleDtcblx0ICAgICAgICAgICAgbWludXRlU3RhcnRJbmRleCA9IG1pbnV0ZUluZGV4O1xuXG5cdCAgICAgICAgICAgIHNlY29uZCA9IDA7XG5cdCAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KHZhbHVlLnNsaWNlKG1pbnV0ZVN0YXJ0SW5kZXgsIG1pbnV0ZVN0YXJ0SW5kZXggKyAyKSwgMTApO1xuXHQgICAgICAgICAgICBob3VyID0gcGFyc2VJbnQodmFsdWUuc2xpY2UoaG91clN0YXJ0SW5kZXgsIGhvdXJTdGFydEluZGV4ICsgMiksIDEwKTtcblxuXHQgICAgICAgICAgICB0aW1lID0gdGhpcy5nZXRGaXhlZFRpbWUoaG91ciwgbWludXRlLCBzZWNvbmQpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIG93bmVyLnRpbWUgPSB0aW1lO1xuXG5cdCAgICAgICAgcmV0dXJuIHRpbWUubGVuZ3RoID09PSAwID8gdmFsdWUgOiB0aW1lUGF0dGVybi5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG5cdCAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudCkge1xuXHQgICAgICAgICAgICBjYXNlICdzJzpcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIG93bmVyLmFkZExlYWRpbmdaZXJvKHRpbWVbMl0pO1xuXHQgICAgICAgICAgICBjYXNlICdtJzpcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIG93bmVyLmFkZExlYWRpbmdaZXJvKHRpbWVbMV0pO1xuXHQgICAgICAgICAgICBjYXNlICdoJzpcblx0ICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIG93bmVyLmFkZExlYWRpbmdaZXJvKHRpbWVbMF0pO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSwgJycpO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0Rml4ZWRUaW1lOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBzZWNvbmQpIHtcblx0ICAgICAgICBzZWNvbmQgPSBNYXRoLm1pbihwYXJzZUludChzZWNvbmQgfHwgMCwgMTApLCA2MCk7XG5cdCAgICAgICAgbWludXRlID0gTWF0aC5taW4obWludXRlLCA2MCk7XG5cdCAgICAgICAgaG91ciA9IE1hdGgubWluKGhvdXIsIDYwKTtcblxuXHQgICAgICAgIHJldHVybiBbaG91ciwgbWludXRlLCBzZWNvbmRdO1xuXHQgICAgfSxcblxuXHQgICAgYWRkTGVhZGluZ1plcm86IGZ1bmN0aW9uIChudW1iZXIpIHtcblx0ICAgICAgICByZXR1cm4gKG51bWJlciA8IDEwID8gJzAnIDogJycpICsgbnVtYmVyO1xuXHQgICAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gVGltZUZvcm1hdHRlcjtcblxuXG4gfSksXG4gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgUGhvbmVGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoZm9ybWF0dGVyLCBkZWxpbWl0ZXIpIHtcblx0ICAgIHZhciBvd25lciA9IHRoaXM7XG5cblx0ICAgIG93bmVyLmRlbGltaXRlciA9IChkZWxpbWl0ZXIgfHwgZGVsaW1pdGVyID09PSAnJykgPyBkZWxpbWl0ZXIgOiAnICc7XG5cdCAgICBvd25lci5kZWxpbWl0ZXJSRSA9IGRlbGltaXRlciA/IG5ldyBSZWdFeHAoJ1xcXFwnICsgZGVsaW1pdGVyLCAnZycpIDogJyc7XG5cblx0ICAgIG93bmVyLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcblx0fTtcblxuXHRQaG9uZUZvcm1hdHRlci5wcm90b3R5cGUgPSB7XG5cdCAgICBzZXRGb3JtYXR0ZXI6IGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcblx0ICAgICAgICB0aGlzLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcblx0ICAgIH0sXG5cblx0ICAgIGZvcm1hdDogZnVuY3Rpb24gKHBob25lTnVtYmVyKSB7XG5cdCAgICAgICAgdmFyIG93bmVyID0gdGhpcztcblxuXHQgICAgICAgIG93bmVyLmZvcm1hdHRlci5jbGVhcigpO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoL1teXFxkK10vZywgJycpO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoL15cXCsvLCAnQicpLnJlcGxhY2UoL1xcKy9nLCAnJykucmVwbGFjZSgnQicsICcrJyk7XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIucmVwbGFjZShvd25lci5kZWxpbWl0ZXJSRSwgJycpO1xuXG5cdCAgICAgICAgdmFyIHJlc3VsdCA9ICcnLCBjdXJyZW50LCB2YWxpZGF0ZWQgPSBmYWxzZTtcblxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBpTWF4ID0gcGhvbmVOdW1iZXIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGN1cnJlbnQgPSBvd25lci5mb3JtYXR0ZXIuaW5wdXREaWdpdChwaG9uZU51bWJlci5jaGFyQXQoaSkpO1xuXG5cdCAgICAgICAgICAgXG5cdCAgICAgICAgICAgIGlmICgvW1xccygpLV0vZy50ZXN0KGN1cnJlbnQpKSB7XG5cdCAgICAgICAgICAgICAgICByZXN1bHQgPSBjdXJyZW50O1xuXG5cdCAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSB0cnVlO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZWQpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjdXJyZW50O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICBcblx0ICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1soKV0vZywgJycpO1xuXHQgICAgICAgXG5cdCAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL1tcXHMtXS9nLCBvd25lci5kZWxpbWl0ZXIpO1xuXG5cdCAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0ICAgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFBob25lRm9ybWF0dGVyO1xuXG5cbiB9KSxcbiAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBDcmVkaXRDYXJkRGV0ZWN0b3IgPSB7XG5cdCAgICBibG9ja3M6IHtcblx0ICAgICAgICB1YXRwOiAgICAgICAgICBbNCwgNSwgNl0sXG5cdCAgICAgICAgYW1leDogICAgICAgICAgWzQsIDYsIDVdLFxuXHQgICAgICAgIGRpbmVyczogICAgICAgIFs0LCA2LCA0XSxcblx0ICAgICAgICBkaXNjb3ZlcjogICAgICBbNCwgNCwgNCwgNF0sXG5cdCAgICAgICAgbWFzdGVyY2FyZDogICAgWzQsIDQsIDQsIDRdLFxuXHQgICAgICAgIGRhbmtvcnQ6ICAgICAgIFs0LCA0LCA0LCA0XSxcblx0ICAgICAgICBpbnN0YXBheW1lbnQ6ICBbNCwgNCwgNCwgNF0sXG5cdCAgICAgICAgamNiMTU6ICAgICAgICAgWzQsIDYsIDVdLFxuXHQgICAgICAgIGpjYjogICAgICAgICAgIFs0LCA0LCA0LCA0XSxcblx0ICAgICAgICBtYWVzdHJvOiAgICAgICBbNCwgNCwgNCwgNF0sXG5cdCAgICAgICAgdmlzYTogICAgICAgICAgWzQsIDQsIDQsIDRdLFxuXHQgICAgICAgIG1pcjogICAgICAgICAgIFs0LCA0LCA0LCA0XSxcblx0ICAgICAgICB1bmlvblBheTogICAgICBbNCwgNCwgNCwgNF0sXG5cdCAgICAgICAgZ2VuZXJhbDogICAgICAgWzQsIDQsIDQsIDRdXG5cdCAgICB9LFxuXG5cdCAgICByZToge1xuXHQgICAgICAgXG5cdCAgICAgICAgdWF0cDogL14oPyExODAwKTFcXGR7MCwxNH0vLFxuXG5cdCAgICAgICBcblx0ICAgICAgICBhbWV4OiAvXjNbNDddXFxkezAsMTN9LyxcblxuXHQgICAgICAgXG5cdCAgICAgICAgZGlzY292ZXI6IC9eKD86NjAxMXw2NVxcZHswLDJ9fDY0WzQtOV1cXGQ/KVxcZHswLDEyfS8sXG5cblx0ICAgICAgIFxuXHQgICAgICAgIGRpbmVyczogL14zKD86MChbMC01XXw5KXxbNjg5XVxcZD8pXFxkezAsMTF9LyxcblxuXHQgICAgICAgXG5cdCAgICAgICAgbWFzdGVyY2FyZDogL14oNVsxLTVdXFxkezAsMn18MjJbMi05XVxcZHswLDF9fDJbMy03XVxcZHswLDJ9KVxcZHswLDEyfS8sXG5cblx0ICAgICAgIFxuXHQgICAgICAgIGRhbmtvcnQ6IC9eKDUwMTl8NDE3NXw0NTcxKVxcZHswLDEyfS8sXG5cblx0ICAgICAgIFxuXHQgICAgICAgIGluc3RhcGF5bWVudDogL142M1s3LTldXFxkezAsMTN9LyxcblxuXHQgICAgICAgXG5cdCAgICAgICAgamNiMTU6IC9eKD86MjEzMXwxODAwKVxcZHswLDExfS8sXG5cblx0ICAgICAgIFxuXHQgICAgICAgIGpjYjogL14oPzozNVxcZHswLDJ9KVxcZHswLDEyfS8sXG5cblx0ICAgICAgIFxuXHQgICAgICAgIG1hZXN0cm86IC9eKD86NVswNjc4XVxcZHswLDJ9fDYzMDR8NjdcXGR7MCwyfSlcXGR7MCwxMn0vLFxuXG5cdCAgICAgICBcblx0ICAgICAgICBtaXI6IC9eMjIwWzAtNF1cXGR7MCwxMn0vLFxuXG5cdCAgICAgICBcblx0ICAgICAgICB2aXNhOiAvXjRcXGR7MCwxNX0vLFxuXG5cdCAgICAgICBcblx0ICAgICAgICB1bmlvblBheTogL142MlxcZHswLDE0fS9cblx0ICAgIH0sXG5cblx0ICAgIGdldFN0cmljdEJsb2NrczogZnVuY3Rpb24gKGJsb2NrKSB7XG5cdCAgICAgIHZhciB0b3RhbCA9IGJsb2NrLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuXHQgICAgICAgIHJldHVybiBwcmV2ICsgY3VycmVudDtcblx0ICAgICAgfSwgMCk7XG5cblx0ICAgICAgcmV0dXJuIGJsb2NrLmNvbmNhdCgxOSAtIHRvdGFsKTtcblx0ICAgIH0sXG5cblx0ICAgIGdldEluZm86IGZ1bmN0aW9uICh2YWx1ZSwgc3RyaWN0TW9kZSkge1xuXHQgICAgICAgIHZhciBibG9ja3MgPSBDcmVkaXRDYXJkRGV0ZWN0b3IuYmxvY2tzLFxuXHQgICAgICAgICAgICByZSA9IENyZWRpdENhcmREZXRlY3Rvci5yZTtcblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgIFxuXHQgICAgICAgXG5cdCAgICAgICAgc3RyaWN0TW9kZSA9ICEhc3RyaWN0TW9kZTtcblxuXHQgICAgICAgIGZvciAodmFyIGtleSBpbiByZSkge1xuXHQgICAgICAgICAgICBpZiAocmVba2V5XS50ZXN0KHZhbHVlKSkge1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hdGNoZWRCbG9ja3MgPSBibG9ja3Nba2V5XTtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgICAgICAgICAgdHlwZToga2V5LFxuXHQgICAgICAgICAgICAgICAgICAgIGJsb2Nrczogc3RyaWN0TW9kZSA/IHRoaXMuZ2V0U3RyaWN0QmxvY2tzKG1hdGNoZWRCbG9ja3MpIDogbWF0Y2hlZEJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIHR5cGU6ICd1bmtub3duJyxcblx0ICAgICAgICAgICAgYmxvY2tzOiBzdHJpY3RNb2RlID8gdGhpcy5nZXRTdHJpY3RCbG9ja3MoYmxvY2tzLmdlbmVyYWwpIDogYmxvY2tzLmdlbmVyYWxcblx0ICAgICAgICB9O1xuXHQgICAgfVxuXHR9O1xuXG5cdG1vZHVsZS5leHBvcnRzID0gQ3JlZGl0Q2FyZERldGVjdG9yO1xuXG5cbiB9KSxcbiAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBVdGlsID0ge1xuXHQgICAgbm9vcDogZnVuY3Rpb24gKCkge1xuXHQgICAgfSxcblxuXHQgICAgc3RyaXA6IGZ1bmN0aW9uICh2YWx1ZSwgcmUpIHtcblx0ICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgJycpO1xuXHQgICAgfSxcblxuXHQgICAgZ2V0UG9zdERlbGltaXRlcjogZnVuY3Rpb24gKHZhbHVlLCBkZWxpbWl0ZXIsIGRlbGltaXRlcnMpIHtcblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChkZWxpbWl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXIgPyBkZWxpbWl0ZXIgOiAnJztcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHZhciBtYXRjaGVkRGVsaW1pdGVyID0gJyc7XG5cdCAgICAgICAgZGVsaW1pdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50KSB7XG5cdCAgICAgICAgICAgIGlmICh2YWx1ZS5zbGljZSgtY3VycmVudC5sZW5ndGgpID09PSBjdXJyZW50KSB7XG5cdCAgICAgICAgICAgICAgICBtYXRjaGVkRGVsaW1pdGVyID0gY3VycmVudDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXG5cdCAgICAgICAgcmV0dXJuIG1hdGNoZWREZWxpbWl0ZXI7XG5cdCAgICB9LFxuXG5cdCAgICBnZXREZWxpbWl0ZXJSRUJ5RGVsaW1pdGVyOiBmdW5jdGlvbiAoZGVsaW1pdGVyKSB7XG5cdCAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoZGVsaW1pdGVyLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyksICdnJyk7XG5cdCAgICB9LFxuXG5cdCAgICBnZXROZXh0Q3Vyc29yUG9zaXRpb246IGZ1bmN0aW9uIChwcmV2UG9zLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIGRlbGltaXRlciwgZGVsaW1pdGVycykge1xuXHQgICAgIFxuXHQgICAgIFxuXHQgICAgICBpZiAob2xkVmFsdWUubGVuZ3RoID09PSBwcmV2UG9zKSB7XG5cdCAgICAgICAgICByZXR1cm4gbmV3VmFsdWUubGVuZ3RoO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIHByZXZQb3MgKyB0aGlzLmdldFBvc2l0aW9uT2Zmc2V0KHByZXZQb3MsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgZGVsaW1pdGVyICxkZWxpbWl0ZXJzKTtcblx0ICAgIH0sXG5cblx0ICAgIGdldFBvc2l0aW9uT2Zmc2V0OiBmdW5jdGlvbiAocHJldlBvcywgb2xkVmFsdWUsIG5ld1ZhbHVlLCBkZWxpbWl0ZXIsIGRlbGltaXRlcnMpIHtcblx0ICAgICAgICB2YXIgb2xkUmF3VmFsdWUsIG5ld1Jhd1ZhbHVlLCBsZW5ndGhPZmZzZXQ7XG5cblx0ICAgICAgICBvbGRSYXdWYWx1ZSA9IHRoaXMuc3RyaXBEZWxpbWl0ZXJzKG9sZFZhbHVlLnNsaWNlKDAsIHByZXZQb3MpLCBkZWxpbWl0ZXIsIGRlbGltaXRlcnMpO1xuXHQgICAgICAgIG5ld1Jhd1ZhbHVlID0gdGhpcy5zdHJpcERlbGltaXRlcnMobmV3VmFsdWUuc2xpY2UoMCwgcHJldlBvcyksIGRlbGltaXRlciwgZGVsaW1pdGVycyk7XG5cdCAgICAgICAgbGVuZ3RoT2Zmc2V0ID0gb2xkUmF3VmFsdWUubGVuZ3RoIC0gbmV3UmF3VmFsdWUubGVuZ3RoO1xuXG5cdCAgICAgICAgcmV0dXJuIChsZW5ndGhPZmZzZXQgIT09IDApID8gKGxlbmd0aE9mZnNldCAvIE1hdGguYWJzKGxlbmd0aE9mZnNldCkpIDogMDtcblx0ICAgIH0sXG5cblx0ICAgIHN0cmlwRGVsaW1pdGVyczogZnVuY3Rpb24gKHZhbHVlLCBkZWxpbWl0ZXIsIGRlbGltaXRlcnMpIHtcblx0ICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAoZGVsaW1pdGVycy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgICAgdmFyIGRlbGltaXRlclJFID0gZGVsaW1pdGVyID8gb3duZXIuZ2V0RGVsaW1pdGVyUkVCeURlbGltaXRlcihkZWxpbWl0ZXIpIDogJyc7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoZGVsaW1pdGVyUkUsICcnKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGRlbGltaXRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCkge1xuXHQgICAgICAgICAgICBjdXJyZW50LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0ICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShvd25lci5nZXREZWxpbWl0ZXJSRUJ5RGVsaW1pdGVyKGxldHRlciksICcnKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICB9LFxuXG5cdCAgICBoZWFkU3RyOiBmdW5jdGlvbiAoc3RyLCBsZW5ndGgpIHtcblx0ICAgICAgICByZXR1cm4gc3RyLnNsaWNlKDAsIGxlbmd0aCk7XG5cdCAgICB9LFxuXG5cdCAgICBnZXRNYXhMZW5ndGg6IGZ1bmN0aW9uIChibG9ja3MpIHtcblx0ICAgICAgICByZXR1cm4gYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcblx0ICAgICAgICB9LCAwKTtcblx0ICAgIH0sXG5cblx0ICAgXG5cdCAgIFxuXHQgICBcblx0ICAgXG5cdCAgIFxuXHQgICBcblx0ICAgIGdldFByZWZpeFN0cmlwcGVkVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4LCBwcmVmaXhMZW5ndGgsIHByZXZSZXN1bHQsIGRlbGltaXRlciwgZGVsaW1pdGVycykge1xuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKHByZWZpeExlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAocHJldlJlc3VsdC5zbGljZSgwLCBwcmVmaXhMZW5ndGgpICE9PSBwcmVmaXgpIHtcblx0ICAgICAgICAgIHJldHVybiAnJztcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgcHJldlZhbHVlID0gdGhpcy5zdHJpcERlbGltaXRlcnMocHJldlJlc3VsdCwgZGVsaW1pdGVyLCBkZWxpbWl0ZXJzKTtcblxuXHQgICAgICAgXG5cdCAgICAgICBcblx0ICAgICAgICBpZiAodmFsdWUuc2xpY2UoMCwgcHJlZml4TGVuZ3RoKSAhPT0gcHJlZml4KSB7XG5cdCAgICAgICAgICByZXR1cm4gcHJldlZhbHVlLnNsaWNlKHByZWZpeExlbmd0aCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICBcblx0ICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UocHJlZml4TGVuZ3RoKTtcblx0ICAgIH0sXG5cblx0ICAgIGdldEZpcnN0RGlmZkluZGV4OiBmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuXHQgICAgICAgIHZhciBpbmRleCA9IDA7XG5cblx0ICAgICAgICB3aGlsZSAocHJldi5jaGFyQXQoaW5kZXgpID09PSBjdXJyZW50LmNoYXJBdChpbmRleCkpIHtcblx0ICAgICAgICAgICAgaWYgKHByZXYuY2hhckF0KGluZGV4KyspID09PSAnJykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIGluZGV4O1xuXHQgICAgfSxcblxuXHQgICAgZ2V0Rm9ybWF0dGVkVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgYmxvY2tzLCBibG9ja3NMZW5ndGgsIGRlbGltaXRlciwgZGVsaW1pdGVycywgZGVsaW1pdGVyTGF6eVNob3cpIHtcblx0ICAgICAgICB2YXIgcmVzdWx0ID0gJycsXG5cdCAgICAgICAgICAgIG11bHRpcGxlRGVsaW1pdGVycyA9IGRlbGltaXRlcnMubGVuZ3RoID4gMCxcblx0ICAgICAgICAgICAgY3VycmVudERlbGltaXRlcjtcblxuXHQgICAgICAgXG5cdCAgICAgICAgaWYgKGJsb2Nrc0xlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGxlbmd0aCwgaW5kZXgpIHtcblx0ICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcblx0ICAgICAgICAgICAgICAgIHZhciBzdWIgPSB2YWx1ZS5zbGljZSgwLCBsZW5ndGgpLFxuXHQgICAgICAgICAgICAgICAgICAgIHJlc3QgPSB2YWx1ZS5zbGljZShsZW5ndGgpO1xuXG5cdCAgICAgICAgICAgICAgICBpZiAobXVsdGlwbGVEZWxpbWl0ZXJzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY3VycmVudERlbGltaXRlciA9IGRlbGltaXRlcnNbZGVsaW1pdGVyTGF6eVNob3cgPyAoaW5kZXggLSAxKSA6IGluZGV4XSB8fCBjdXJyZW50RGVsaW1pdGVyO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVsaW1pdGVyID0gZGVsaW1pdGVyO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICBpZiAoZGVsaW1pdGVyTGF6eVNob3cpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjdXJyZW50RGVsaW1pdGVyO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdWI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzdWI7XG5cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoc3ViLmxlbmd0aCA9PT0gbGVuZ3RoICYmIGluZGV4IDwgYmxvY2tzTGVuZ3RoIC0gMSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gY3VycmVudERlbGltaXRlcjtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgXG5cdCAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3Q7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdCAgICB9LFxuXG5cdCAgIFxuXHQgICBcblx0ICAgIGZpeFByZWZpeEN1cnNvcjogZnVuY3Rpb24gKGVsLCBwcmVmaXgsIGRlbGltaXRlciwgZGVsaW1pdGVycykge1xuXHQgICAgICAgIGlmICghZWwpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciB2YWwgPSBlbC52YWx1ZSxcblx0ICAgICAgICAgICAgYXBwZW5kaXggPSBkZWxpbWl0ZXIgfHwgKGRlbGltaXRlcnNbMF0gfHwgJyAnKTtcblxuXHQgICAgICAgIGlmICghZWwuc2V0U2VsZWN0aW9uUmFuZ2UgfHwgIXByZWZpeCB8fCAocHJlZml4Lmxlbmd0aCArIGFwcGVuZGl4Lmxlbmd0aCkgPCB2YWwubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICB2YXIgbGVuID0gdmFsLmxlbmd0aCAqIDI7XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShsZW4sIGxlbik7XG5cdCAgICAgICAgfSwgMSk7XG5cdCAgICB9LFxuXG5cdCAgIFxuXHQgICAgY2hlY2tGdWxsU2VsZWN0aW9uOiBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIHZhciBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkgfHwgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkgfHwge307XG5cdCAgICAgICAgcmV0dXJuIHNlbGVjdGlvbi50b1N0cmluZygpLmxlbmd0aCA9PT0gdmFsdWUubGVuZ3RoO1xuXHQgICAgICB9IGNhdGNoIChleCkge1xuXHQgICAgICAgXG5cdCAgICAgIH1cblxuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9LFxuXG5cdCAgICBzZXRTZWxlY3Rpb246IGZ1bmN0aW9uIChlbGVtZW50LCBwb3NpdGlvbiwgZG9jKSB7XG5cdCAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuZ2V0QWN0aXZlRWxlbWVudChkb2MpKSB7XG5cdCAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cblx0ICAgICAgIFxuXHQgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQudmFsdWUubGVuZ3RoIDw9IHBvc2l0aW9uKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgaWYgKGVsZW1lbnQuY3JlYXRlVGV4dFJhbmdlKSB7XG5cdCAgICAgICAgICAgIHZhciByYW5nZSA9IGVsZW1lbnQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cblx0ICAgICAgICAgICAgcmFuZ2UubW92ZSgnY2hhcmFjdGVyJywgcG9zaXRpb24pO1xuXHQgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgIFxuXHQgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5wdXQgZWxlbWVudCB0eXBlIGRvZXMgbm90IHN1cHBvcnQgc2VsZWN0aW9uJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9LFxuXG5cdCAgICBnZXRBY3RpdmVFbGVtZW50OiBmdW5jdGlvbihwYXJlbnQpIHtcblx0ICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHBhcmVudC5hY3RpdmVFbGVtZW50O1xuXHQgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmVFbGVtZW50KGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCk7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50O1xuXHQgICAgfSxcblxuXHQgICAgaXNBbmRyb2lkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIG5hdmlnYXRvciAmJiAvYW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cdCAgICB9LFxuXG5cdCAgIFxuXHQgICBcblx0ICAgXG5cdCAgIFxuXHQgICAgaXNBbmRyb2lkQmFja3NwYWNlS2V5ZG93bjogZnVuY3Rpb24gKGxhc3RJbnB1dFZhbHVlLCBjdXJyZW50SW5wdXRWYWx1ZSkge1xuXHQgICAgICAgIGlmICghdGhpcy5pc0FuZHJvaWQoKSB8fCAhbGFzdElucHV0VmFsdWUgfHwgIWN1cnJlbnRJbnB1dFZhbHVlKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gY3VycmVudElucHV0VmFsdWUgPT09IGxhc3RJbnB1dFZhbHVlLnNsaWNlKDAsIC0xKTtcblx0ICAgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFV0aWw7XG5cblxuIH0pLFxuIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQoZnVuY3Rpb24oZ2xvYmFsKSB7J3VzZSBzdHJpY3QnO1xuXG5cdFx0dmFyIERlZmF1bHRQcm9wZXJ0aWVzID0ge1xuXHQgICBcblx0ICAgXG5cdCAgICBhc3NpZ246IGZ1bmN0aW9uICh0YXJnZXQsIG9wdHMpIHtcblx0ICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cdCAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHRhcmdldC5jcmVkaXRDYXJkID0gISFvcHRzLmNyZWRpdENhcmQ7XG5cdCAgICAgICAgdGFyZ2V0LmNyZWRpdENhcmRTdHJpY3RNb2RlID0gISFvcHRzLmNyZWRpdENhcmRTdHJpY3RNb2RlO1xuXHQgICAgICAgIHRhcmdldC5jcmVkaXRDYXJkVHlwZSA9ICcnO1xuXHQgICAgICAgIHRhcmdldC5vbkNyZWRpdENhcmRUeXBlQ2hhbmdlZCA9IG9wdHMub25DcmVkaXRDYXJkVHlwZUNoYW5nZWQgfHwgKGZ1bmN0aW9uICgpIHt9KTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgdGFyZ2V0LnBob25lID0gISFvcHRzLnBob25lO1xuXHQgICAgICAgIHRhcmdldC5waG9uZVJlZ2lvbkNvZGUgPSBvcHRzLnBob25lUmVnaW9uQ29kZSB8fCAnQVUnO1xuXHQgICAgICAgIHRhcmdldC5waG9uZUZvcm1hdHRlciA9IHt9O1xuXG5cdCAgICAgICBcblx0ICAgICAgICB0YXJnZXQudGltZSA9ICEhb3B0cy50aW1lO1xuXHQgICAgICAgIHRhcmdldC50aW1lUGF0dGVybiA9IG9wdHMudGltZVBhdHRlcm4gfHwgWydoJywgJ20nLCAncyddO1xuXHQgICAgICAgIHRhcmdldC50aW1lRm9ybWF0ID0gb3B0cy50aW1lRm9ybWF0IHx8ICcyNCc7XG5cdCAgICAgICAgdGFyZ2V0LnRpbWVGb3JtYXR0ZXIgPSB7fTtcblxuXHQgICAgICAgXG5cdCAgICAgICAgdGFyZ2V0LmRhdGUgPSAhIW9wdHMuZGF0ZTtcblx0ICAgICAgICB0YXJnZXQuZGF0ZVBhdHRlcm4gPSBvcHRzLmRhdGVQYXR0ZXJuIHx8IFsnZCcsICdtJywgJ1knXTtcblx0ICAgICAgICB0YXJnZXQuZGF0ZU1pbiA9IG9wdHMuZGF0ZU1pbiB8fCAnJztcblx0ICAgICAgICB0YXJnZXQuZGF0ZU1heCA9IG9wdHMuZGF0ZU1heCB8fCAnJztcblx0ICAgICAgICB0YXJnZXQuZGF0ZUZvcm1hdHRlciA9IHt9O1xuXG5cdCAgICAgICBcblx0ICAgICAgICB0YXJnZXQubnVtZXJhbCA9ICEhb3B0cy5udW1lcmFsO1xuXHQgICAgICAgIHRhcmdldC5udW1lcmFsSW50ZWdlclNjYWxlID0gb3B0cy5udW1lcmFsSW50ZWdlclNjYWxlID4gMCA/IG9wdHMubnVtZXJhbEludGVnZXJTY2FsZSA6IDA7XG5cdCAgICAgICAgdGFyZ2V0Lm51bWVyYWxEZWNpbWFsU2NhbGUgPSBvcHRzLm51bWVyYWxEZWNpbWFsU2NhbGUgPj0gMCA/IG9wdHMubnVtZXJhbERlY2ltYWxTY2FsZSA6IDI7XG5cdCAgICAgICAgdGFyZ2V0Lm51bWVyYWxEZWNpbWFsTWFyayA9IG9wdHMubnVtZXJhbERlY2ltYWxNYXJrIHx8ICcuJztcblx0ICAgICAgICB0YXJnZXQubnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGUgPSBvcHRzLm51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlIHx8ICd0aG91c2FuZCc7XG5cdCAgICAgICAgdGFyZ2V0Lm51bWVyYWxQb3NpdGl2ZU9ubHkgPSAhIW9wdHMubnVtZXJhbFBvc2l0aXZlT25seTtcblx0ICAgICAgICB0YXJnZXQuc3RyaXBMZWFkaW5nWmVyb2VzID0gb3B0cy5zdHJpcExlYWRpbmdaZXJvZXMgIT09IGZhbHNlO1xuXHQgICAgICAgIHRhcmdldC5zaWduQmVmb3JlUHJlZml4ID0gISFvcHRzLnNpZ25CZWZvcmVQcmVmaXg7XG5cblx0ICAgICAgIFxuXHQgICAgICAgIHRhcmdldC5udW1lcmljT25seSA9IHRhcmdldC5jcmVkaXRDYXJkIHx8IHRhcmdldC5kYXRlIHx8ICEhb3B0cy5udW1lcmljT25seTtcblxuXHQgICAgICAgIHRhcmdldC51cHBlcmNhc2UgPSAhIW9wdHMudXBwZXJjYXNlO1xuXHQgICAgICAgIHRhcmdldC5sb3dlcmNhc2UgPSAhIW9wdHMubG93ZXJjYXNlO1xuXG5cdCAgICAgICAgdGFyZ2V0LnByZWZpeCA9ICh0YXJnZXQuY3JlZGl0Q2FyZCB8fCB0YXJnZXQuZGF0ZSkgPyAnJyA6IChvcHRzLnByZWZpeCB8fCAnJyk7XG5cdCAgICAgICAgdGFyZ2V0Lm5vSW1tZWRpYXRlUHJlZml4ID0gISFvcHRzLm5vSW1tZWRpYXRlUHJlZml4O1xuXHQgICAgICAgIHRhcmdldC5wcmVmaXhMZW5ndGggPSB0YXJnZXQucHJlZml4Lmxlbmd0aDtcblx0ICAgICAgICB0YXJnZXQucmF3VmFsdWVUcmltUHJlZml4ID0gISFvcHRzLnJhd1ZhbHVlVHJpbVByZWZpeDtcblx0ICAgICAgICB0YXJnZXQuY29weURlbGltaXRlciA9ICEhb3B0cy5jb3B5RGVsaW1pdGVyO1xuXG5cdCAgICAgICAgdGFyZ2V0LmluaXRWYWx1ZSA9IChvcHRzLmluaXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG9wdHMuaW5pdFZhbHVlICE9PSBudWxsKSA/IG9wdHMuaW5pdFZhbHVlLnRvU3RyaW5nKCkgOiAnJztcblxuXHQgICAgICAgIHRhcmdldC5kZWxpbWl0ZXIgPVxuXHQgICAgICAgICAgICAob3B0cy5kZWxpbWl0ZXIgfHwgb3B0cy5kZWxpbWl0ZXIgPT09ICcnKSA/IG9wdHMuZGVsaW1pdGVyIDpcblx0ICAgICAgICAgICAgICAgIChvcHRzLmRhdGUgPyAnLycgOlxuXHQgICAgICAgICAgICAgICAgICAgIChvcHRzLnRpbWUgPyAnOicgOlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAob3B0cy5udW1lcmFsID8gJywnIDpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLnBob25lID8gJyAnIDpcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcpKSkpO1xuXHQgICAgICAgIHRhcmdldC5kZWxpbWl0ZXJMZW5ndGggPSB0YXJnZXQuZGVsaW1pdGVyLmxlbmd0aDtcblx0ICAgICAgICB0YXJnZXQuZGVsaW1pdGVyTGF6eVNob3cgPSAhIW9wdHMuZGVsaW1pdGVyTGF6eVNob3c7XG5cdCAgICAgICAgdGFyZ2V0LmRlbGltaXRlcnMgPSBvcHRzLmRlbGltaXRlcnMgfHwgW107XG5cblx0ICAgICAgICB0YXJnZXQuYmxvY2tzID0gb3B0cy5ibG9ja3MgfHwgW107XG5cdCAgICAgICAgdGFyZ2V0LmJsb2Nrc0xlbmd0aCA9IHRhcmdldC5ibG9ja3MubGVuZ3RoO1xuXG5cdCAgICAgICAgdGFyZ2V0LnJvb3QgPSAodHlwZW9mIGdsb2JhbCA9PT0gJ29iamVjdCcgJiYgZ2xvYmFsKSA/IGdsb2JhbCA6IHdpbmRvdztcblx0ICAgICAgICB0YXJnZXQuZG9jdW1lbnQgPSBvcHRzLmRvY3VtZW50IHx8IHRhcmdldC5yb290LmRvY3VtZW50O1xuXG5cdCAgICAgICAgdGFyZ2V0Lm1heExlbmd0aCA9IDA7XG5cblx0ICAgICAgICB0YXJnZXQuYmFja3NwYWNlID0gZmFsc2U7XG5cdCAgICAgICAgdGFyZ2V0LnJlc3VsdCA9ICcnO1xuXG5cdCAgICAgICAgdGFyZ2V0Lm9uVmFsdWVDaGFuZ2VkID0gb3B0cy5vblZhbHVlQ2hhbmdlZCB8fCAoZnVuY3Rpb24gKCkge30pO1xuXG5cdCAgICAgICAgcmV0dXJuIHRhcmdldDtcblx0ICAgIH1cblx0fTtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRQcm9wZXJ0aWVzO1xuXG5cdH0uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuIH0pXG4gXSlcbn0pO1xuOyJdLCJzb3VyY2VSb290IjoiIn0=