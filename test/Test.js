'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('java.io.IOException');

require('org.apache.lucene.analysis.Tokenizer');

require('org.apache.lucene.analysis.tokenattributes.CharTermAttribute');

require('org.apache.lucene.analysis.tokenattributes.OffsetAttribute');

require('org.apache.lucene.analysis.tokenattributes.PositionIncrementAttribute');

require('org.apache.lucene.analysis.tokenattributes.TypeAttribute');

require('org.apache.lucene.util.AttributeFactory');

require('java.io.Reader');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StandardTokenizer = function (_Tokenizer) {
    _inherits(StandardTokenizer, _Tokenizer);

    function StandardTokenizer() {
        _classCallCheck(this, StandardTokenizer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StandardTokenizer).apply(this, arguments));
    }

    _createClass(StandardTokenizer, [{
        key: 'scanner',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$scanner') ? this._$esjava$scanner : this._$esjava$scanner = null;
        },
        set: function set(v) {
            this._$esjava$scanner = v;
        }
    }], [{
        key: 'ALPHANUM',
        get: function get() {
            return 0;
        }
    }, {
        key: 'APOSTROPHE',
        get: function get() {
            return 1;
        }
    }, {
        key: 'ACRONYM',
        get: function get() {
            return 2;
        }
    }, {
        key: 'COMPANY',
        get: function get() {
            return 3;
        }
    }, {
        key: 'EMAIL',
        get: function get() {
            return 4;
        }
    }, {
        key: 'HOST',
        get: function get() {
            return 5;
        }
    }, {
        key: 'NUM',
        get: function get() {
            return 6;
        }
    }, {
        key: 'CJ',
        get: function get() {
            return 7;
        }
    }, {
        key: 'ACRONYM_DEP',
        get: function get() {
            return 8;
        }
    }, {
        key: 'SOUTHEAST_ASIAN',
        get: function get() {
            return 9;
        }
    }, {
        key: 'IDEOGRAPHIC',
        get: function get() {
            return 10;
        }
    }, {
        key: 'HIRAGANA',
        get: function get() {
            return 11;
        }
    }, {
        key: 'KATAKANA',
        get: function get() {
            return 12;
        }
    }, {
        key: 'HANGUL',
        get: function get() {
            return 13;
        }
    }, {
        key: 'TOKEN_TYPES',
        get: function get() {
            delete StandardTokenizer.TOKEN_TYPES;
            return StandardTokenizer.TOKEN_TYPES = ["<ALPHANUM>", "<APOSTROPHE>", "<ACRONYM>", "<COMPANY>", "<EMAIL>", "<HOST>", "<NUM>", "<CJ>", "<ACRONYM_DEP>", "<SOUTHEAST_ASIAN>", "<IDEOGRAPHIC>", "<HIRAGANA>", "<KATAKANA>", "<HANGUL>"];
        }
    }, {
        key: 'MAX_TOKEN_LENGTH_LIMIT',
        get: function get() {
            return 1024 * 1024;
        }
    }]);

    return StandardTokenizer;
}(Tokenizer);

var ClassicTokenizerImpl = function () {
    _createClass(ClassicTokenizerImpl, [{
        key: 'yychar_fix$esjava$0',
        value: function yychar_fix$esjava$0() {
            return this.yychar;
        }
    }, {
        key: 'getText$esjava$1',
        value: function getText$esjava$1(t) {
            t.copyBuffer(this.zzBuffer, this.zzStartRead, this.zzMarkedPos - this.zzStartRead);
        }
    }, {
        key: 'setBufferSize$esjava$1',
        value: function setBufferSize$esjava$1(numChars) {
            throw new UnsupportedOperationException();
        }
    }, {
        key: 'zzReader',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzReader') ? this._$esjava$zzReader : this._$esjava$zzReader = null;
        },
        set: function set(v) {
            this._$esjava$zzReader = v;
        }
    }, {
        key: 'zzState',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzState') ? this._$esjava$zzState : this._$esjava$zzState = 0;
        },
        set: function set(v) {
            this._$esjava$zzState = v;
        }
    }, {
        key: 'zzLexicalState',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzLexicalState') ? this._$esjava$zzLexicalState : this._$esjava$zzLexicalState = ClassicTokenizerImpl.YYINITIAL;
        },
        set: function set(v) {
            this._$esjava$zzLexicalState = v;
        }
    }, {
        key: 'zzBuffer',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzBuffer') ? this._$esjava$zzBuffer : this._$esjava$zzBuffer = new Array(ClassicTokenizerImpl.ZZ_BUFFERSIZE);
        },
        set: function set(v) {
            this._$esjava$zzBuffer = v;
        }
    }, {
        key: 'zzMarkedPos',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzMarkedPos') ? this._$esjava$zzMarkedPos : this._$esjava$zzMarkedPos = 0;
        },
        set: function set(v) {
            this._$esjava$zzMarkedPos = v;
        }
    }, {
        key: 'zzCurrentPos',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzCurrentPos') ? this._$esjava$zzCurrentPos : this._$esjava$zzCurrentPos = 0;
        },
        set: function set(v) {
            this._$esjava$zzCurrentPos = v;
        }
    }, {
        key: 'zzStartRead',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzStartRead') ? this._$esjava$zzStartRead : this._$esjava$zzStartRead = 0;
        },
        set: function set(v) {
            this._$esjava$zzStartRead = v;
        }
    }, {
        key: 'zzEndRead',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzEndRead') ? this._$esjava$zzEndRead : this._$esjava$zzEndRead = 0;
        },
        set: function set(v) {
            this._$esjava$zzEndRead = v;
        }
    }, {
        key: 'yyline',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$yyline') ? this._$esjava$yyline : this._$esjava$yyline = 0;
        },
        set: function set(v) {
            this._$esjava$yyline = v;
        }
    }, {
        key: 'yychar',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$yychar') ? this._$esjava$yychar : this._$esjava$yychar = 0;
        },
        set: function set(v) {
            this._$esjava$yychar = v;
        }
    }, {
        key: 'yycolumn',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$yycolumn') ? this._$esjava$yycolumn : this._$esjava$yycolumn = 0;
        },
        set: function set(v) {
            this._$esjava$yycolumn = v;
        }
    }, {
        key: 'zzAtBOL',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzAtBOL') ? this._$esjava$zzAtBOL : this._$esjava$zzAtBOL = true;
        },
        set: function set(v) {
            this._$esjava$zzAtBOL = v;
        }
    }, {
        key: 'zzAtEOF',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzAtEOF') ? this._$esjava$zzAtEOF : this._$esjava$zzAtEOF = false;
        },
        set: function set(v) {
            this._$esjava$zzAtEOF = v;
        }
    }, {
        key: 'zzEOFDone',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzEOFDone') ? this._$esjava$zzEOFDone : this._$esjava$zzEOFDone = false;
        },
        set: function set(v) {
            this._$esjava$zzEOFDone = v;
        }
    }, {
        key: 'zzFinalHighSurrogate',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzFinalHighSurrogate') ? this._$esjava$zzFinalHighSurrogate : this._$esjava$zzFinalHighSurrogate = 0;
        },
        set: function set(v) {
            this._$esjava$zzFinalHighSurrogate = v;
        }
    }], [{
        key: 'zzUnpackAction$esjava$0',
        value: function zzUnpackAction$esjava$0() {
            var result = new Array(50);
            var offset = 0;
            offset = ClassicTokenizerImpl.zzUnpackAction$esjava$3(ClassicTokenizerImpl.ZZ_ACTION_PACKED_0, offset, result);
            return result;
        }
    }, {
        key: 'zzUnpackAction$esjava$3',
        value: function zzUnpackAction$esjava$3(packed, offset, result) {
            var i = 0;
            var j = offset;
            var l = packed.length;
            while (i < l) {
                var count = packed.charCodeAt(i++);
                var value = packed.charCodeAt(i++);
                do {
                    result[j++] = value;
                } while (--count > 0);
            }
            return j;
        }
    }, {
        key: 'zzUnpackRowMap$esjava$0',
        value: function zzUnpackRowMap$esjava$0() {
            var result = new Array(50);
            var offset = 0;
            offset = ClassicTokenizerImpl.zzUnpackRowMap$esjava$3(ClassicTokenizerImpl.ZZ_ROWMAP_PACKED_0, offset, result);
            return result;
        }
    }, {
        key: 'zzUnpackRowMap$esjava$3',
        value: function zzUnpackRowMap$esjava$3(packed, offset, result) {
            var i = 0;
            var j = offset;
            var l = packed.length;
            while (i < l) {
                var high = packed.charCodeAt(i++) << 16;
                result[j++] = high | packed.charCodeAt(i++);
            }
            return j;
        }
    }, {
        key: 'zzUnpackTrans$esjava$0',
        value: function zzUnpackTrans$esjava$0() {
            var result = new Array(552);
            var offset = 0;
            offset = ClassicTokenizerImpl.zzUnpackTrans$esjava$3(ClassicTokenizerImpl.ZZ_TRANS_PACKED_0, offset, result);
            return result;
        }
    }, {
        key: 'zzUnpackTrans$esjava$3',
        value: function zzUnpackTrans$esjava$3(packed, offset, result) {
            var i = 0;
            var j = offset;
            var l = packed.length;
            while (i < l) {
                var count = packed.charCodeAt(i++);
                var value = packed.charCodeAt(i++);
                value--;
                do {
                    result[j++] = value;
                } while (--count > 0);
            }
            return j;
        }
    }, {
        key: 'zzUnpackAttribute$esjava$0',
        value: function zzUnpackAttribute$esjava$0() {
            var result = new Array(50);
            var offset = 0;
            offset = ClassicTokenizerImpl.zzUnpackAttribute$esjava$3(ClassicTokenizerImpl.ZZ_ATTRIBUTE_PACKED_0, offset, result);
            return result;
        }
    }, {
        key: 'zzUnpackAttribute$esjava$3',
        value: function zzUnpackAttribute$esjava$3(packed, offset, result) {
            var i = 0;
            var j = offset;
            var l = packed.length;
            while (i < l) {
                var count = packed.charCodeAt(i++);
                var value = packed.charCodeAt(i++);
                do {
                    result[j++] = value;
                } while (--count > 0);
            }
            return j;
        }
    }, {
        key: 'YYEOF',
        get: function get() {
            return -1;
        }
    }, {
        key: 'ZZ_BUFFERSIZE',
        get: function get() {
            return 4096;
        }
    }, {
        key: 'YYINITIAL',
        get: function get() {
            return 0;
        }
    }, {
        key: 'ZZ_LEXSTATE',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_LEXSTATE;
            return ClassicTokenizerImpl.ZZ_LEXSTATE = [0, 0];
        }
    }, {
        key: 'ZZ_CMAP_PACKED',
        get: function get() {
            return '&\u0000\u0001\u0005\u0001\u0003\u0004\u0000\u0001\t\u0001\u0007\u0001\u0004\u0001\t\n\u0002\u0006\u0000' + '\u0001\u0006\u001a\n\u0004\u0000\u0001\b\u0001\u0000\u001a\n/\u0000\u0001\n\n\u0000\u0001\n' + '\u0004\u0000\u0001\n\u0005\u0000\u0017\n\u0001\u0000\u001f\n\u0001\u0000Ĩ\n\u0002\u0000\u0012\n' + '\u001c\u0000^\n\u0002\u0000\t\n\u0002\u0000\u0007\n\u000e\u0000\u0002\n\u000e\u0000\u0005\n' + '\t\u0000\u0001\n\u0000\u0001\n\u000b\u0000\u0001\n\u0001\u0000\u0003\n\u0001\u0000\u0001\n' + '\u0001\u0000\u0014\n\u0001\u0000,\n\u0001\u0000\b\n\u0002\u0000\u001a\n\f\u0000\n' + '\n\u00009\n\u0002\u0000\u0002\n\u0002\u0000\u0002\n\u0003\u0000&\n\u0002\u0000\u0002\n' + '7\u0000&\n\u0002\u0000\u0001\n\u0007\u0000\'\nH\u0000\u001b\n\u0005\u0000\u0003\n' + '.\u0000\u001a\n\u0005\u0000\u000b\n\u0015\u0000\n\u0002\u0007\u0000c\n\u0001\u0000\u0001\n' + '\u000f\u0000\u0002\n\t\u0000\n\u0002\u0003\n\u0013\u0000\u0001\n\u0001\u0000\u001b\nS\u0000' + '&\nş\u00005\n\u0003\u0000\u0001\n\u0012\u0000\u0001\n\u0007\u0000\n\n\u0004\u0000' + '\n\u0002\u0015\u0000\b\n\u0002\u0000\u0002\n\u0002\u0000\u0016\n\u0001\u0000\u0007\n\u0001\u0000' + '\u0001\n\u0003\u0000\u0004\n"\u0000\u0002\n\u0001\u0000\u0003\n\u0004\u0000\n\u0002\u0002\n' + '\u0013\u0000\u0006\n\u0004\u0000\u0002\n\u0002\u0000\u0016\n\u0001\u0000\u0007\n\u0001\u0000\u0002\n' + '\u0001\u0000\u0002\n\u0001\u0000\u0002\n\u001f\u0000\u0004\n\u0001\u0000\u0001\n\u0007\u0000\n\u0002' + '\u0002\u0000\u0003\n\u0010\u0000\u0007\n\u0001\u0000\u0001\n\u0001\u0000\u0003\n\u0001\u0000\u0016\n' + '\u0001\u0000\u0007\n\u0001\u0000\u0002\n\u0001\u0000\u0005\n\u0003\u0000\u0001\n\u0012\u0000\u0001\n' + '\u000f\u0000\u0001\n\u0005\u0000\n\u0002\u0015\u0000\b\n\u0002\u0000\u0002\n\u0002\u0000\u0016\n' + '\u0001\u0000\u0007\n\u0001\u0000\u0002\n\u0002\u0000\u0004\n\u0003\u0000\u0001\n\u001e\u0000\u0002\n' + '\u0001\u0000\u0003\n\u0004\u0000\n\u0002\u0015\u0000\u0006\n\u0003\u0000\u0003\n\u0001\u0000\u0004\n' + '\u0003\u0000\u0002\n\u0001\u0000\u0001\n\u0001\u0000\u0002\n\u0003\u0000\u0002\n\u0003\u0000\u0003\n' + '\u0003\u0000\b\n\u0001\u0000\u0003\n-\u0000\t\u0002\u0015\u0000\b\n\u0001\u0000\u0003\n' + '\u0001\u0000\u0017\n\u0001\u0000\n\n\u0001\u0000\u0005\n&\u0000\u0002\n\u0004\u0000\n\u0002' + '\u0015\u0000\b\n\u0001\u0000\u0003\n\u0001\u0000\u0017\n\u0001\u0000\n\n\u0001\u0000\u0005\n' + '$\u0000\u0001\n\u0001\u0000\u0002\n\u0004\u0000\n\u0002\u0015\u0000\b\n\u0001\u0000\u0003\n' + '\u0001\u0000\u0017\n\u0001\u0000\u0010\n&\u0000\u0002\n\u0004\u0000\n\u0002\u0015\u0000\u0012\n' + '\u0003\u0000\u0018\n\u0001\u0000\t\n\u0001\u0000\u0001\n\u0002\u0000\u0007\n9\u0000\u0001\u0001' + '0\n\u0001\u0001\u0002\n\f\u0001\u0007\n\t\u0001\n\u0002\'\u0000\u0002\n\u0001\u0000' + '\u0001\n\u0002\u0000\u0002\n\u0001\u0000\u0001\n\u0002\u0000\u0001\n\u0006\u0000\u0004\n\u0001\u0000' + '\u0007\n\u0001\u0000\u0003\n\u0001\u0000\u0001\n\u0001\u0000\u0001\n\u0002\u0000\u0002\n\u0001\u0000' + '\u0004\n\u0001\u0000\u0002\n\t\u0000\u0001\n\u0002\u0000\u0005\n\u0001\u0000\u0001\n\t\u0000' + '\n\u0002\u0002\u0000\u0002\n"\u0000\u0001\n\u001f\u0000\n\u0002\u0016\u0000\b\n\u0001\u0000' + '"\n\u001d\u0000\u0004\nt\u0000"\n\u0001\u0000\u0005\n\u0001\u0000\u0002\n\u0015\u0000' + '\n\u0002\u0006\u0000\u0006\nJ\u0000&\n\n\u0000\'\n\t\u0000Z\n\u0005\u0000' + 'D\n\u0005\u0000R\n\u0006\u0000\u0007\n\u0001\u0000?\n\u0001\u0000\u0001\n\u0001\u0000' + '\u0004\n\u0002\u0000\u0007\n\u0001\u0000\u0001\n\u0001\u0000\u0004\n\u0002\u0000\'\n\u0001\u0000' + '\u0001\n\u0001\u0000\u0004\n\u0002\u0000\u001f\n\u0001\u0000\u0001\n\u0001\u0000\u0004\n\u0002\u0000' + '\u0007\n\u0001\u0000\u0001\n\u0001\u0000\u0004\n\u0002\u0000\u0007\n\u0001\u0000\u0007\n\u0001\u0000' + '\u0017\n\u0001\u0000\u001f\n\u0001\u0000\u0001\n\u0001\u0000\u0004\n\u0002\u0000\u0007\n\u0001\u0000' + '\'\n\u0001\u0000\u0013\n\u000e\u0000\t\u0002.\u0000U\n\f\u0000ɬ\n\u0002\u0000' + '\b\n\n\u0000\u001a\n\u0005\u0000K\n\u00004\n,\u0000\n\u0002&\u0000' + '\n\u0002\u0006\u0000X\n\b\u0000)\n՗\u0000\n\u0004\u0000Z\n\u0006\u0000' + '\u0016\n\u0002\u0000\u0006\n\u0002\u0000&\n\u0002\u0000\u0006\n\u0002\u0000\b\n\u0001\u0000' + '\u0001\n\u0001\u0000\u0001\n\u0001\u0000\u0001\n\u0001\u0000\u001f\n\u0002\u00005\n\u0001\u0000' + '\u0007\n\u0001\u0000\u0001\n\u0003\u0000\u0003\n\u0001\u0000\u0007\n\u0003\u0000\u0004\n\u0002\u0000' + '\u0006\n\u0004\u0000\r\n\u0005\u0000\u0003\n\u0001\u0000\u0007\n\u0000\u0001\n\u0000' + '\u0001\n\u0004\u0000\u0001\n\u0002\u0000\n\n\u0001\u0000\u0001\n\u0003\u0000\u0005\n\u0006\u0000' + '\u0001\n\u0001\u0000\u0001\n\u0001\u0000\u0001\n\u0001\u0000\u0004\n\u0001\u0000\u0003\n\u0001\u0000' + '\u0007\n໋\u0000\u0002\n*\u0000\u0005\n\n\u0000\u0001\u000bT\u000b\b\u000b\u0002\u000b' + '\u0002\u000bZ\u000b\u0001\u000b\u0003\u000b\u0006\u000b(\u000b\u0003\u000b\u0001\u0000^\n\u0011\u0000' + '\u0018\n8\u0000\u0010\u000bĀ\u0000\u000b\u0000ᦶ\u000b\n\u000b@\u0000冦\u000b' + 'Z\u000bҍ\nݳ\u0000⮤\n⅜\u0000Į\u000bÒ\u000b\u0007\n\f\u0000\u0005\n' + '\u0005\u0000\u0001\n\u0001\u0000\n\n\u0001\u0000\r\n\u0001\u0000\u0005\n\u0001\u0000\u0001\n' + '\u0001\u0000\u0002\n\u0001\u0000\u0002\n\u0001\u0000l\n!\u0000ū\n\u0012\u0000@\n' + '\u0002\u00006\n(\u0000\f\nt\u0000\u0003\n\u0001\u0000\u0001\n\u0001\u0000\n' + '\u0013\u0000\n\u0002\u0007\u0000\u001a\n\u0006\u0000\u001a\n\n\u0000\u0001\u000b:\u000b\u001f\n' + '\u0003\u0000\u0006\n\u0002\u0000\u0006\n\u0002\u0000\u0006\n\u0002\u0000\u0003\n￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u0000￿\u00003\u0000';
        }
    }, {
        key: 'ZZ_CMAP',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_CMAP;
            return ClassicTokenizerImpl.ZZ_CMAP = ClassicTokenizerImpl.zzUnpackCMap$esjava$1(ClassicTokenizerImpl.ZZ_CMAP_PACKED);
        }
    }, {
        key: 'ZZ_ACTION',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_ACTION;
            return ClassicTokenizerImpl.ZZ_ACTION = ClassicTokenizerImpl.zzUnpackAction$esjava$0();
        }
    }, {
        key: 'ZZ_ACTION_PACKED_0',
        get: function get() {
            return '\u0001\u0000\u0001\u0001\u0003\u0002\u0001\u0003\u000b\u0000\u0001\u0002\u0003\u0004\u0002\u0000' + '\u0001\u0005\u0001\u0000\u0001\u0005\u0003\u0004\u0006\u0005\u0001\u0006\u0001\u0004\u0002\u0007' + '\u0001\b\u0001\u0000\u0001\b\u0003\u0000\u0002\b\u0001\t\u0001\n\u0001\u0004';
        }
    }, {
        key: 'ZZ_ROWMAP',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_ROWMAP;
            return ClassicTokenizerImpl.ZZ_ROWMAP = ClassicTokenizerImpl.zzUnpackRowMap$esjava$0();
        }
    }, {
        key: 'ZZ_ROWMAP_PACKED_0',
        get: function get() {
            return '\u0000\u0000\u0000\f\u0000\u0018\u0000$\u00000\u0000\f\u0000<\u0000H' + '\u0000T\u0000`\u0000l\u0000x\u0000\u0000\u0000\u0000¨' + '\u0000´\u0000À\u0000Ì\u0000Ø\u0000ä\u0000ð\u0000ü\u0000Ĉ' + '\u0000Ĕ\u0000Ġ\u0000Ĭ\u0000ĸ\u0000ń\u0000Ő\u0000Ŝ\u0000Ũ' + '\u0000Ŵ\u0000ƀ\u0000ƌ\u0000Ƙ\u0000Ƥ\u0000¨\u0000ư\u0000Ƽ' + '\u0000ǈ\u0000ǔ\u0000Ǡ\u0000Ǭ\u0000Ǹ\u0000<\u0000l\u0000Ȅ' + '\u0000Ȑ\u0000Ȝ';
        }
    }, {
        key: 'ZZ_TRANS',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_TRANS;
            return ClassicTokenizerImpl.ZZ_TRANS = ClassicTokenizerImpl.zzUnpackTrans$esjava$0();
        }
    }, {
        key: 'ZZ_TRANS_PACKED_0',
        get: function get() {
            return '\u0001\u0002\u0001\u0003\u0001\u0004\u0007\u0002\u0001\u0005\u0001\u0006\r\u0000\u0002\u0003' + '\u0001\u0000\u0001\u0007\u0001\u0000\u0001\b\u0002\t\u0001\n\u0001\u0003\u0002\u0000' + '\u0001\u0003\u0001\u0004\u0001\u0000\u0001\u000b\u0001\u0000\u0001\b\u0002\f\u0001\r' + '\u0001\u0004\u0002\u0000\u0001\u0003\u0001\u0004\u0001\u000e\u0001\u000f\u0001\u0010\u0001\u0011' + '\u0002\t\u0001\n\u0001\u0012\u0002\u0000\u0001\u0013\u0001\u0014\u0007\u0000\u0001\u0015' + '\u0002\u0000\u0002\u0016\u0007\u0000\u0001\u0016\u0002\u0000\u0001\u0017\u0001\u0018\u0007\u0000' + '\u0001\u0019\u0003\u0000\u0001\u001a\u0007\u0000\u0001\n\u0002\u0000\u0001\u001b\u0001\u001c' + '\u0007\u0000\u0001\u001d\u0002\u0000\u0001\u001e\u0001\u001f\u0007\u0000\u0001 \u0002\u0000' + '\u0001!\u0001"\u0007\u0000\u0001#\u000b\u0000\u0001$\u0002\u0000\u0001\u0013' + '\u0001\u0014\u0007\u0000\u0001%\u000b\u0000\u0001&\u0002\u0000\u0002\u0016\u0007\u0000' + '\u0001\'\u0002\u0000\u0001\u0003\u0001\u0004\u0001\u000e\u0001\u0007\u0001\u0010\u0001\u0011' + '\u0002\t\u0001\n\u0001\u0012\u0002\u0000\u0002\u0013\u0001\u0000\u0001(\u0001\u0000' + '\u0001\b\u0002)\u0001\u0000\u0001\u0013\u0002\u0000\u0001\u0013\u0001\u0014\u0001\u0000' + '\u0001*\u0001\u0000\u0001\b\u0002+\u0001,\u0001\u0014\u0002\u0000\u0001\u0013' + '\u0001\u0014\u0001\u0000\u0001(\u0001\u0000\u0001\b\u0002)\u0001\u0000\u0001\u0015' + '\u0002\u0000\u0002\u0016\u0001\u0000\u0001-\u0002\u0000\u0001-\u0002\u0000\u0001\u0016' + '\u0002\u0000\u0002\u0017\u0001\u0000\u0001)\u0001\u0000\u0001\b\u0002)\u0001\u0000' + '\u0001\u0017\u0002\u0000\u0001\u0017\u0001\u0018\u0001\u0000\u0001+\u0001\u0000\u0001\b' + '\u0002+\u0001,\u0001\u0018\u0002\u0000\u0001\u0017\u0001\u0018\u0001\u0000\u0001)' + '\u0001\u0000\u0001\b\u0002)\u0001\u0000\u0001\u0019\u0003\u0000\u0001\u001a\u0001\u0000' + '\u0001,\u0002\u0000\u0003,\u0001\u001a\u0002\u0000\u0002\u001b\u0001\u0000\u0001.' + '\u0001\u0000\u0001\b\u0002\t\u0001\n\u0001\u001b\u0002\u0000\u0001\u001b\u0001\u001c' + '\u0001\u0000\u0001/\u0001\u0000\u0001\b\u0002\f\u0001\r\u0001\u001c\u0002\u0000' + '\u0001\u001b\u0001\u001c\u0001\u0000\u0001.\u0001\u0000\u0001\b\u0002\t\u0001\n' + '\u0001\u001d\u0002\u0000\u0002\u001e\u0001\u0000\u0001\t\u0001\u0000\u0001\b\u0002\t' + '\u0001\n\u0001\u001e\u0002\u0000\u0001\u001e\u0001\u001f\u0001\u0000\u0001\f\u0001\u0000' + '\u0001\b\u0002\f\u0001\r\u0001\u001f\u0002\u0000\u0001\u001e\u0001\u001f\u0001\u0000' + '\u0001\t\u0001\u0000\u0001\b\u0002\t\u0001\n\u0001 \u0002\u0000\u0002!' + '\u0001\u0000\u0001\n\u0002\u0000\u0003\n\u0001!\u0002\u0000\u0001!\u0001"' + '\u0001\u0000\u0001\r\u0002\u0000\u0003\r\u0001"\u0002\u0000\u0001!\u0001"' + '\u0001\u0000\u0001\n\u0002\u0000\u0003\n\u0001#\u0004\u0000\u0001\u000e\u0006\u0000' + '\u0001$\u0002\u0000\u0001\u0013\u0001\u0014\u0001\u0000\u00010\u0001\u0000\u0001\b' + '\u0002)\u0001\u0000\u0001\u0015\u0002\u0000\u0002\u0016\u0001\u0000\u0001-\u0002\u0000' + '\u0001-\u0002\u0000\u0001\'\u0002\u0000\u0002\u0013\u0007\u0000\u0001\u0013\u0002\u0000' + '\u0002\u0017\u0007\u0000\u0001\u0017\u0002\u0000\u0002\u001b\u0007\u0000\u0001\u001b\u0002\u0000' + '\u0002\u001e\u0007\u0000\u0001\u001e\u0002\u0000\u0002!\u0007\u0000\u0001!\u0002\u0000' + '\u00021\u0007\u0000\u00011\u0002\u0000\u0002\u0013\u0007\u0000\u00012\u0002\u0000' + '\u00021\u0001\u0000\u0001-\u0002\u0000\u0001-\u0002\u0000\u00011\u0002\u0000' + '\u0002\u0013\u0001\u0000\u00010\u0001\u0000\u0001\b\u0002)\u0001\u0000\u0001\u0013' + '\u0001\u0000';
        }
    }, {
        key: 'ZZ_UNKNOWN_ERROR',
        get: function get() {
            return 0;
        }
    }, {
        key: 'ZZ_NO_MATCH',
        get: function get() {
            return 1;
        }
    }, {
        key: 'ZZ_PUSHBACK_2BIG',
        get: function get() {
            return 2;
        }
    }, {
        key: 'ZZ_ERROR_MSG',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_ERROR_MSG;
            return ClassicTokenizerImpl.ZZ_ERROR_MSG = ["Unkown internal scanner error", "Error: could not match input", "Error: pushback value was too large"];
        }
    }, {
        key: 'ZZ_ATTRIBUTE',
        get: function get() {
            delete ClassicTokenizerImpl.ZZ_ATTRIBUTE;
            return ClassicTokenizerImpl.ZZ_ATTRIBUTE = ClassicTokenizerImpl.zzUnpackAttribute$esjava$0();
        }
    }, {
        key: 'ZZ_ATTRIBUTE_PACKED_0',
        get: function get() {
            return '\u0001\u0000\u0001\t\u0003\u0001\u0001\t\u000b\u0000\u0004\u0001\u0002\u0000\u0001\u0001' + '\u0001\u0000\u000f\u0001\u0001\u0000\u0001\u0001\u0003\u0000\u0005\u0001';
        }
    }, {
        key: 'ALPHANUM',
        get: function get() {
            return StandardTokenizer.ALPHANUM;
        }
    }, {
        key: 'APOSTROPHE',
        get: function get() {
            return StandardTokenizer.APOSTROPHE;
        }
    }, {
        key: 'ACRONYM',
        get: function get() {
            return StandardTokenizer.ACRONYM;
        }
    }, {
        key: 'COMPANY',
        get: function get() {
            return StandardTokenizer.COMPANY;
        }
    }, {
        key: 'EMAIL',
        get: function get() {
            return StandardTokenizer.EMAIL;
        }
    }, {
        key: 'HOST',
        get: function get() {
            return StandardTokenizer.HOST;
        }
    }, {
        key: 'NUM',
        get: function get() {
            return StandardTokenizer.NUM;
        }
    }, {
        key: 'CJ',
        get: function get() {
            return StandardTokenizer.CJ;
        }
    }, {
        key: 'ACRONYM_DEP',
        get: function get() {
            return StandardTokenizer.ACRONYM_DEP;
        }
    }, {
        key: 'TOKEN_TYPES',
        get: function get() {
            delete ClassicTokenizerImpl.TOKEN_TYPES;
            return ClassicTokenizerImpl.TOKEN_TYPES = StandardTokenizer.TOKEN_TYPES;
        }
    }]);

    function ClassicTokenizerImpl(in$esjava) {
        _classCallCheck(this, ClassicTokenizerImpl);

        this.zzReader = in$esjava;
        var x = 42;
    }

    _createClass(ClassicTokenizerImpl, [{
        key: 'zzRefill$esjava$0',
        value: function zzRefill$esjava$0() {
            if (this.zzStartRead > 0) {
                this.zzEndRead += this.zzFinalHighSurrogate;
                this.zzFinalHighSurrogate = 0;
                System.arraycopy(this.zzBuffer, this.zzStartRead, this.zzBuffer, 0, this.zzEndRead - this.zzStartRead);
                this.zzEndRead -= this.zzStartRead;
                this.zzCurrentPos -= this.zzStartRead;
                this.zzMarkedPos -= this.zzStartRead;
                this.zzStartRead = 0;
            }
            if (this.zzCurrentPos >= this.zzBuffer.length - this.zzFinalHighSurrogate) {
                var newBuffer = new Array(this.zzBuffer.length * 2);
                System.arraycopy(this.zzBuffer, 0, newBuffer, 0, this.zzBuffer.length);
                this.zzBuffer = newBuffer;
                this.zzEndRead += this.zzFinalHighSurrogate;
                this.zzFinalHighSurrogate = 0;
            }
            var requested = this.zzBuffer.length - this.zzEndRead;
            var totalRead = 0;
            while (totalRead < requested) {
                var numRead = this.zzReader.read(this.zzBuffer, this.zzEndRead + totalRead, requested - totalRead);
                if (numRead === -1) {
                    break;
                }
                totalRead += numRead;
            }
            if (totalRead > 0) {
                this.zzEndRead += totalRead;
                if (totalRead === requested) {
                    if (Character.isHighSurrogate(this.zzBuffer[this.zzEndRead - 1])) {
                        --this.zzEndRead;
                        this.zzFinalHighSurrogate = 1;
                    }
                }
                return false;
            }
            return true;
        }
    }, {
        key: 'yyclose$esjava$0',
        value: function yyclose$esjava$0() {
            this.zzAtEOF = true;
            this.zzEndRead = this.zzStartRead;
            if (this.zzReader !== null) this.zzReader.close();
        }
    }, {
        key: 'yyreset$esjava$1',
        value: function yyreset$esjava$1(reader) {
            this.zzReader = reader;
            this.zzAtBOL = true;
            this.zzAtEOF = false;
            this.zzEOFDone = false;
            this.zzEndRead = this.zzStartRead = 0;
            this.zzCurrentPos = this.zzMarkedPos = 0;
            this.zzFinalHighSurrogate = 0;
            this.yyline = this.yychar = this.yycolumn = 0;
            this.zzLexicalState = ClassicTokenizerImpl.YYINITIAL;
            if (this.zzBuffer.length > ClassicTokenizerImpl.ZZ_BUFFERSIZE) this.zzBuffer = new Array(ClassicTokenizerImpl.ZZ_BUFFERSIZE);
        }
    }, {
        key: 'yystate$esjava$0',
        value: function yystate$esjava$0() {
            return this.zzLexicalState;
        }
    }, {
        key: 'yybegin$esjava$1',
        value: function yybegin$esjava$1(newState) {
            this.zzLexicalState = newState;
        }
    }, {
        key: 'yytext$esjava$0',
        value: function yytext$esjava$0() {
            return new String(this.zzBuffer, this.zzStartRead, this.zzMarkedPos - this.zzStartRead);
        }
    }, {
        key: 'yycharat$esjava$1',
        value: function yycharat$esjava$1(pos) {
            return this.zzBuffer[this.zzStartRead + pos];
        }
    }, {
        key: 'yylength$esjava$0',
        value: function yylength$esjava$0() {
            return this.zzMarkedPos - this.zzStartRead;
        }
    }, {
        key: 'zzScanError$esjava$1',
        value: function zzScanError$esjava$1(errorCode) {
            var message = void 0;
            try {
                message = ClassicTokenizerImpl.ZZ_ERROR_MSG[errorCode];
            } catch (e) {
                if (e instanceof ArrayIndexOutOfBoundsException) {
                    message = ClassicTokenizerImpl.ZZ_ERROR_MSG[ClassicTokenizerImpl.ZZ_UNKNOWN_ERROR];
                } else throw e;
            }
            throw new Error(message);
        }
    }, {
        key: 'yypushback$esjava$1',
        value: function yypushback$esjava$1(number) {
            if (number > this.yylength$esjava$0()) this.zzScanError$esjava$1(ClassicTokenizerImpl.ZZ_PUSHBACK_2BIG);
            this.zzMarkedPos -= number;
        }
    }, {
        key: 'getNextToken$esjava$0',
        value: function getNextToken$esjava$0() {
            var zzInput = void 0;
            var zzAction = void 0;
            var zzCurrentPosL = void 0;
            var zzMarkedPosL = void 0;
            var zzEndReadL = this.zzEndRead;
            var zzBufferL = this.zzBuffer;
            var zzCMapL = ClassicTokenizerImpl.ZZ_CMAP;
            var zzTransL = ClassicTokenizerImpl.ZZ_TRANS;
            var zzRowMapL = ClassicTokenizerImpl.ZZ_ROWMAP;
            var zzAttrL = ClassicTokenizerImpl.ZZ_ATTRIBUTE;
            while (true) {
                zzMarkedPosL = this.zzMarkedPos;
                this.yychar += zzMarkedPosL - this.zzStartRead;
                zzAction = -1;
                zzCurrentPosL = this.zzCurrentPos = this.zzStartRead = zzMarkedPosL;
                this.zzState = ClassicTokenizerImpl.ZZ_LEXSTATE[this.zzLexicalState];
                var zzAttributes = zzAttrL[this.zzState];
                if ((zzAttributes & 1) === 1) {
                    zzAction = this.zzState;
                }
                zzForAction: {
                    while (true) {
                        if (zzCurrentPosL < zzEndReadL) {
                            zzInput = Character.codePointAt(zzBufferL, zzCurrentPosL, zzEndReadL);
                            zzCurrentPosL += Character.charCount(zzInput);
                        } else if (this.zzAtEOF) {
                            zzInput = ClassicTokenizerImpl.YYEOF;
                            break zzForAction;
                        } else {
                            this.zzCurrentPos = zzCurrentPosL;
                            this.zzMarkedPos = zzMarkedPosL;
                            var eof = this.zzRefill$esjava$0();
                            zzCurrentPosL = this.zzCurrentPos;
                            zzMarkedPosL = this.zzMarkedPos;
                            zzBufferL = this.zzBuffer;
                            zzEndReadL = this.zzEndRead;
                            if (eof) {
                                zzInput = ClassicTokenizerImpl.YYEOF;
                                break zzForAction;
                            } else {
                                zzInput = Character.codePointAt(zzBufferL, zzCurrentPosL, zzEndReadL);
                                zzCurrentPosL += Character.charCount(zzInput);
                            }
                        }
                        var zzNext = zzTransL[zzRowMapL[this.zzState] + zzCMapL[zzInput]];
                        if (zzNext === -1) break zzForAction;
                        this.zzState = zzNext;
                        zzAttributes = zzAttrL[this.zzState];
                        if ((zzAttributes & 1) === 1) {
                            zzAction = this.zzState;
                            zzMarkedPosL = zzCurrentPosL;
                            if ((zzAttributes & 8) === 8) break zzForAction;
                        }
                    }
                }
                this.zzMarkedPos = zzMarkedPosL;
                switch (zzAction < 0 ? zzAction : ClassicTokenizerImpl.ZZ_ACTION[zzAction]) {
                    case 1:
                        {
                            break;
                        }
                    case 11:
                        break;
                    case 2:
                        {
                            return ClassicTokenizerImpl.ALPHANUM;
                        }
                    case 12:
                        break;
                    case 3:
                        {
                            return ClassicTokenizerImpl.CJ;
                        }
                    case 13:
                        break;
                    case 4:
                        {
                            return ClassicTokenizerImpl.HOST;
                        }
                    case 14:
                        break;
                    case 5:
                        {
                            return ClassicTokenizerImpl.NUM;
                        }
                    case 15:
                        break;
                    case 6:
                        {
                            return ClassicTokenizerImpl.APOSTROPHE;
                        }
                    case 16:
                        break;
                    case 7:
                        {
                            return ClassicTokenizerImpl.COMPANY;
                        }
                    case 17:
                        break;
                    case 8:
                        {
                            return ClassicTokenizerImpl.ACRONYM_DEP;
                        }
                    case 18:
                        break;
                    case 9:
                        {
                            return ClassicTokenizerImpl.ACRONYM;
                        }
                    case 19:
                        break;
                    case 10:
                        {
                            return ClassicTokenizerImpl.EMAIL;
                        }
                    case 20:
                        break;
                    default:
                        if (zzInput === ClassicTokenizerImpl.YYEOF && this.zzStartRead === this.zzCurrentPos) {
                            this.zzAtEOF = true;
                            return ClassicTokenizerImpl.YYEOF;
                        } else {
                            this.zzScanError$esjava$1(ClassicTokenizerImpl.ZZ_NO_MATCH);
                        }
                }
            }
        }
    }, {
        key: 'ddd$esjava$0',
        value: function ddd$esjava$0() {}
    }, {
        key: 'ddd$esjava$1',
        value: function ddd$esjava$1(a) {}
    }, {
        key: 'yychar_fix',
        value: function yychar_fix() {
            var _get2;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            switch (args.length) {
                case 0:
                    return this.yychar_fix$esjava$0.apply(this, args);
            }
            return (_get2 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yychar_fix', this)).call.apply(_get2, [this].concat(args));
        }
    }, {
        key: 'getText',
        value: function getText() {
            var _get3;

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            switch (args.length) {
                case 1:
                    return this.getText$esjava$1.apply(this, args);
            }
            return (_get3 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'getText', this)).call.apply(_get3, [this].concat(args));
        }
    }, {
        key: 'setBufferSize',
        value: function setBufferSize() {
            var _get4;

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            switch (args.length) {
                case 1:
                    return this.setBufferSize$esjava$1.apply(this, args);
            }
            return (_get4 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'setBufferSize', this)).call.apply(_get4, [this].concat(args));
        }
    }, {
        key: 'yyclose',
        value: function yyclose() {
            var _get5;

            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            switch (args.length) {
                case 0:
                    return this.yyclose$esjava$0.apply(this, args);
            }
            return (_get5 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yyclose', this)).call.apply(_get5, [this].concat(args));
        }
    }, {
        key: 'yyreset',
        value: function yyreset() {
            var _get6;

            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

            switch (args.length) {
                case 1:
                    return this.yyreset$esjava$1.apply(this, args);
            }
            return (_get6 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yyreset', this)).call.apply(_get6, [this].concat(args));
        }
    }, {
        key: 'yystate',
        value: function yystate() {
            var _get7;

            for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
            }

            switch (args.length) {
                case 0:
                    return this.yystate$esjava$0.apply(this, args);
            }
            return (_get7 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yystate', this)).call.apply(_get7, [this].concat(args));
        }
    }, {
        key: 'yybegin',
        value: function yybegin() {
            var _get8;

            for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
            }

            switch (args.length) {
                case 1:
                    return this.yybegin$esjava$1.apply(this, args);
            }
            return (_get8 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yybegin', this)).call.apply(_get8, [this].concat(args));
        }
    }, {
        key: 'yytext',
        value: function yytext() {
            var _get9;

            for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                args[_key8] = arguments[_key8];
            }

            switch (args.length) {
                case 0:
                    return this.yytext$esjava$0.apply(this, args);
            }
            return (_get9 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yytext', this)).call.apply(_get9, [this].concat(args));
        }
    }, {
        key: 'yycharat',
        value: function yycharat() {
            var _get10;

            for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                args[_key9] = arguments[_key9];
            }

            switch (args.length) {
                case 1:
                    return this.yycharat$esjava$1.apply(this, args);
            }
            return (_get10 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yycharat', this)).call.apply(_get10, [this].concat(args));
        }
    }, {
        key: 'yylength',
        value: function yylength() {
            var _get11;

            for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                args[_key10] = arguments[_key10];
            }

            switch (args.length) {
                case 0:
                    return this.yylength$esjava$0.apply(this, args);
            }
            return (_get11 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yylength', this)).call.apply(_get11, [this].concat(args));
        }
    }, {
        key: 'yypushback',
        value: function yypushback() {
            var _get12;

            for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                args[_key11] = arguments[_key11];
            }

            switch (args.length) {
                case 1:
                    return this.yypushback$esjava$1.apply(this, args);
            }
            return (_get12 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'yypushback', this)).call.apply(_get12, [this].concat(args));
        }
    }, {
        key: 'getNextToken',
        value: function getNextToken() {
            var _get13;

            for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                args[_key12] = arguments[_key12];
            }

            switch (args.length) {
                case 0:
                    return this.getNextToken$esjava$0.apply(this, args);
            }
            return (_get13 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'getNextToken', this)).call.apply(_get13, [this].concat(args));
        }
    }, {
        key: 'ddd',
        value: function ddd() {
            var _get14;

            for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                args[_key13] = arguments[_key13];
            }

            switch (args.length) {
                case 0:
                    return this.ddd$esjava$0.apply(this, args);
                case 1:
                    return this.ddd$esjava$1.apply(this, args);
            }
            return (_get14 = _get(Object.getPrototypeOf(ClassicTokenizerImpl.prototype), 'ddd', this)).call.apply(_get14, [this].concat(args));
        }
    }, {
        key: 'uuuuuuu',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$uuuuuuu') ? this._$esjava$uuuuuuu : this._$esjava$uuuuuuu = null;
        },
        set: function set(v) {
            this._$esjava$uuuuuuu = v;
        }
    }, {
        key: 'zzzzzzzzz',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$zzzzzzzzz') ? this._$esjava$zzzzzzzzz : this._$esjava$zzzzzzzzz = null;
        },
        set: function set(v) {
            this._$esjava$zzzzzzzzz = v;
        }
    }], [{
        key: 'zzUnpackCMap$esjava$1',
        value: function zzUnpackCMap$esjava$1(packed) {
            var map = new Array(0x110000);
            var i = 0;
            var j = 0;
            while (i < 1170) {
                var count = packed.charCodeAt(i++);
                var value = packed.charCodeAt(i++);
                do {
                    map[j++] = value;
                } while (--count > 0);
            }
            return map;
        }
    }, {
        key: 'dddstatic$esjava$1',
        value: function dddstatic$esjava$1(a) {}
    }, {
        key: 'overstatic$esjava$1',
        value: function overstatic$esjava$1(a) {}
    }, {
        key: 'overstatic$esjava$0',
        value: function overstatic$esjava$0() {}
    }, {
        key: 'zzUnpackAction$esjava$2',
        value: function zzUnpackAction$esjava$2(packed1, offset) {
            var i = 0;
            var j = offset;
            var l = packed1.charCodeAt(1);
            packed1.length;
            packed1.packed1.charAt(1);
            l.charAt();
            this.uuuuuuu.charCodeAt(42);
            packed.x.length();
            l = this.ddd$esjava$1(1).ff.ddd().length();
            this.ddd$esjava$0().length.charAt(42);
            l = ddd(4, 5).charAt(1);
            l = ["aaa"][0].length();
            while (i < l) {
                var count = packed.ZZ_ACTION.charAt(i++).ZZ_ACTION.i.a.ZZ_ACTION(ClassicTokenizerImpl.ZZ_ACTION);
                var count1 = packed.ZZ_ACTION.charAt(i++).i;
                var count3 = this.zzzzzzzzz.charCodeAt(i++).i;
                var count4 = this.zzzzzzzzz.zzzzzzzzz;
                var value = ClassicTokenizerImpl.ZZ_ACTION.packeddfdfdfd.charAt(i++);
                var _x = ClassicTokenizerImpl.ZZ_ACTION.packeddfdfdfd.ZZ_ACTION(c.i++);
                var f = ClassicTokenizerImpl.ZZ_ACTION[c.ZZ_ACTION].ZZ_ACTION[ClassicTokenizerImpl.ZZ_ACTION]++;
            }
            ClassicTokenizerImpl.uuuuuuustatic.charCodeAt(42);
            ClassicTokenizerImpl.uuuuuuustatic.charCodeAt(42);
            ClassicTokenizerImpl.ClassicTokenizerImpl.uuuuuuustatic.charAt(42);
            ClassicTokenizerImpl.uuuuuuustatic.x.charAt(42);
            ClassicTokenizerImpl.uuuuuuustatic.x.charAt(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.charCodeAt(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.charCodeAt(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.x.charAt(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.x.charAt(42);
            ClassicTokenizerImpl.dddstatic$esjava$1(1).ff.dddstatic().length();
            ClassicTokenizerImpl.dddstatic$esjava$1(42).length.charAt(42);
            ClassicTokenizerImpl.dddstatic$esjava$0().length().charAt(42);
            ClassicTokenizerImpl.uuuuuuustatic.uuuuuuustatic(42);
            ClassicTokenizerImpl.uuuuuuustatic.uuuuuuustatic(42);
            ClassicTokenizerImpl.uuuuuuustatic.ClassicTokenizerImpl.uuuuuuustatic(42);
            ClassicTokenizerImpl.uuuuuuustatic.x.uuuuuuustatic(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.dddstatic(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.dddstatic(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.x.dddstatic(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.dddstatic.uuuuuuustatic(42);
            ClassicTokenizerImpl.dddstatic$esjava$1(1).ff.dddstatic().charAt();
            ClassicTokenizerImpl.dddstatic$esjava$1(42).charCodeAt().ClassicTokenizerImpl(42).dddstatic();
            ClassicTokenizerImpl.dddstatic$esjava$0().length().charAt(42).dddstatic();
            ClassicTokenizerImpl.uuuuuuustatic.uuuuuuustatic(42);
            this.uuuuuuustatic.uuuuuuustatic(42);
            ClassicTokenizerImpl.uuuuuuustatic.x.uuuuuuustatic(42);
            this.uuuuuuustatic.x.uuuuuuustatic(42);
            ClassicTokenizerImpl.zzzzzzzzzstatic.dddstatic(42).length();
            this.zzzzzzzzzstatic.dddstatic(42).length();
            ClassicTokenizerImpl.zzzzzzzzzstatic.x.dddstatic(42).length();
            this.zzzzzzzzzstatic.dddstatic.uuuuuuustatic(42);
            ClassicTokenizerImpl.dddstatic$esjava$1(1).length.length();
            this.dddstatic$esjava$1(42).length.charAt(42).dddstatic();
            this.dddstatic$esjava$0().length().charAt(42).dddstatic();
            ClassicTokenizerImpl.overstatic$esjava$0().charCodeAt(42);
            ClassicTokenizerImpl.overstatic$esjava$1(42).length;
            this.aaaaaa = 0;
            this.zzzzzzzzzstatic = 0;
            return j;
        }
    }, {
        key: 'dddstatic',
        value: function dddstatic() {
            var _get15;

            for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                args[_key14] = arguments[_key14];
            }

            switch (args.length) {
                case 1:
                    return ClassicTokenizerImpl.dddstatic$esjava$1.apply(ClassicTokenizerImpl, args);
            }
            return (_get15 = _get(Object.getPrototypeOf(ClassicTokenizerImpl), 'dddstatic', this)).call.apply(_get15, [this].concat(args));
        }
    }, {
        key: 'overstatic',
        value: function overstatic() {
            var _get16;

            for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                args[_key15] = arguments[_key15];
            }

            switch (args.length) {
                case 1:
                    return ClassicTokenizerImpl.overstatic$esjava$1.apply(ClassicTokenizerImpl, args);
                case 0:
                    return ClassicTokenizerImpl.overstatic$esjava$0.apply(ClassicTokenizerImpl, args);
            }
            return (_get16 = _get(Object.getPrototypeOf(ClassicTokenizerImpl), 'overstatic', this)).call.apply(_get16, [this].concat(args));
        }
    }, {
        key: 'zzzzzzzzzstatic',
        get: function get() {
            delete ClassicTokenizerImpl.zzzzzzzzzstatic;
            return ClassicTokenizerImpl.zzzzzzzzzstatic = "hello";
        }
    }, {
        key: 'uuuuuuustatic',
        get: function get() {
            delete ClassicTokenizerImpl.uuuuuuustatic;
            return ClassicTokenizerImpl.uuuuuuustatic = null;
        },
        set: function set(v) {
            delete ClassicTokenizerImpl.uuuuuuustatic;
            ClassicTokenizerImpl.uuuuuuustatic = v;
        }
    }]);

    return ClassicTokenizerImpl;
}();

var Test = function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    _createClass(Test, [{
        key: 'test_instanceof$esjava$0',
        value: function test_instanceof$esjava$0() {
            x instanceof ZZ_CMAP_PACKED;
            x instanceof rwggbdhdfhjukgjsdgfsagdhjdjh;
            if (Test.ZZ_CMAP_PACKED++) {}
            if (Test.ZZ_CMAP_PACKED instanceof ZZ_CMAP_PACKED) {}
            Test.ZZ_CMAP_PACKED = 42;
            var ZZ_CMAP_PACKED = 0;
            ZZ_CMAP_PACKED = 42;
        }
    }, {
        key: 'testyychar1$esjava$0',
        value: function testyychar1$esjava$0() {
            return this.testyychar;
        }
    }, {
        key: 'testyycharover1$esjava$0',
        value: function testyycharover1$esjava$0() {
            return this.testyycharover;
        }
    }, {
        key: 'testyycharover1$esjava$1',
        value: function testyycharover1$esjava$1(x) {
            return this.testyycharover;
        }
    }, {
        key: 'test_abstract$esjava$0',
        value: function test_abstract$esjava$0() {
            throw 'NotImpl < test_abstract$esjava$0 >';
        }
    }, {
        key: 'test_instanceof',
        value: function test_instanceof() {
            var _get17;

            for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
                args[_key16] = arguments[_key16];
            }

            switch (args.length) {
                case 0:
                    return this.test_instanceof$esjava$0.apply(this, args);
            }
            return (_get17 = _get(Object.getPrototypeOf(Test.prototype), 'test_instanceof', this)).call.apply(_get17, [this].concat(args));
        }
    }, {
        key: 'testyychar1',
        value: function testyychar1() {
            var _get18;

            for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
                args[_key17] = arguments[_key17];
            }

            switch (args.length) {
                case 0:
                    return this.testyychar1$esjava$0.apply(this, args);
            }
            return (_get18 = _get(Object.getPrototypeOf(Test.prototype), 'testyychar1', this)).call.apply(_get18, [this].concat(args));
        }
    }, {
        key: 'testyycharover1',
        value: function testyycharover1() {
            var _get19;

            for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
                args[_key18] = arguments[_key18];
            }

            switch (args.length) {
                case 0:
                    return this.testyycharover1$esjava$0.apply(this, args);
                case 1:
                    return this.testyycharover1$esjava$1.apply(this, args);
            }
            return (_get19 = _get(Object.getPrototypeOf(Test.prototype), 'testyycharover1', this)).call.apply(_get19, [this].concat(args));
        }
    }, {
        key: 'test_abstract',
        value: function test_abstract() {
            var _get20;

            for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
                args[_key19] = arguments[_key19];
            }

            switch (args.length) {
                case 0:
                    return this.test_abstract$esjava$0.apply(this, args);
            }
            return (_get20 = _get(Object.getPrototypeOf(Test.prototype), 'test_abstract', this)).call.apply(_get20, [this].concat(args));
        }
    }, {
        key: 'double_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$double_init_test') ? this._$esjava$double_init_test : this._$esjava$double_init_test = 0.0;
        },
        set: function set(v) {
            this._$esjava$double_init_test = v;
        }
    }, {
        key: 'float_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$float_init_test') ? this._$esjava$float_init_test : this._$esjava$float_init_test = 0.0;
        },
        set: function set(v) {
            this._$esjava$float_init_test = v;
        }
    }, {
        key: 'char_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$char_init_test') ? this._$esjava$char_init_test : this._$esjava$char_init_test = '\u0000';
        },
        set: function set(v) {
            this._$esjava$char_init_test = v;
        }
    }, {
        key: 'string_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$string_init_test') ? this._$esjava$string_init_test : this._$esjava$string_init_test = null;
        },
        set: function set(v) {
            this._$esjava$string_init_test = v;
        }
    }, {
        key: 'boolean_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$boolean_init_test') ? this._$esjava$boolean_init_test : this._$esjava$boolean_init_test = false;
        },
        set: function set(v) {
            this._$esjava$boolean_init_test = v;
        }
    }, {
        key: 'int_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$int_init_test') ? this._$esjava$int_init_test : this._$esjava$int_init_test = 0;
        },
        set: function set(v) {
            this._$esjava$int_init_test = v;
        }
    }, {
        key: 'short_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$short_init_test') ? this._$esjava$short_init_test : this._$esjava$short_init_test = 0;
        },
        set: function set(v) {
            this._$esjava$short_init_test = v;
        }
    }, {
        key: 'long_init_test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$long_init_test') ? this._$esjava$long_init_test : this._$esjava$long_init_test = 0;
        },
        set: function set(v) {
            this._$esjava$long_init_test = v;
        }
    }, {
        key: 'testyychar',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$testyychar') ? this._$esjava$testyychar : this._$esjava$testyychar = 0;
        },
        set: function set(v) {
            this._$esjava$testyychar = v;
        }
    }, {
        key: 'testyycharover',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$testyycharover') ? this._$esjava$testyycharover : this._$esjava$testyycharover = 0;
        },
        set: function set(v) {
            this._$esjava$testyycharover = v;
        }
    }], [{
        key: 'kewords_scope$esjava$2',
        value: function kewords_scope$esjava$2(x, var$esjava) {
            var in$esjava = 42;
            x += var$esjava++;
            in$esjava++;
            in$esjava[in$esjava++] = 42;
            test(in$esjava[in$esjava++], in$esjava, var$esjava);
        }
    }, {
        key: 'test_scope$esjava$0',
        value: function test_scope$esjava$0() {
            Test.ZZ_CMAP_PACKED = 42;
            var ZZ_CMAP_PACKED = 0;
            ZZ_CMAP_PACKED = 42;
        }
    }, {
        key: 'test_params_scope$esjava$2',
        value: function test_params_scope$esjava$2(ZZ_CMAP_PACKED, x) {
            ZZ_CMAP_PACKED = 42;
            ZZ_CMAP_PACKED.charAt();
            x.charCodeAt();
        }
    }, {
        key: 'test_while_scope$esjava$0',
        value: function test_while_scope$esjava$0() {
            while (true) {
                Test.ZZ_CMAP_PACKED = 42;
                var _ZZ_CMAP_PACKED = 0;
                _ZZ_CMAP_PACKED = 42;
            }
            Test.ZZ_CMAP_PACKED = 42;
        }
    }, {
        key: 'test_catch_scope$esjava$0',
        value: function test_catch_scope$esjava$0() {
            Test.ZZ_CMAP_PACKED = 42;
            try {
                Test.ZZ_CMAP_PACKED = 42;
                var _ZZ_CMAP_PACKED2 = 0;
                _ZZ_CMAP_PACKED2 = 42;
            } catch (var$esjava) {
                if (var$esjava instanceof String) {
                    var _x2 = var$esjava;
                    Test.ZZ_CMAP_PACKED.charAt();
                    _x2.charCodeAt();
                } else if (var$esjava instanceof Ex) {
                    Test.ZZ_CMAP_PACKED = 42;
                    var _ZZ_CMAP_PACKED3 = 0;
                    _ZZ_CMAP_PACKED3 = 42;
                    var$esjava++;
                } else throw var$esjava;
            }
            Test.ZZ_CMAP_PACKED = 42;
            try {
                Test.ZZ_CMAP_PACKED = 42;
            } catch (ZZ_CMAP_PACKED) {
                if (ZZ_CMAP_PACKED instanceof aaa) {
                    _ZZ_CMAP_PACKED4 = 42;
                    var _ZZ_CMAP_PACKED4 = 0;
                    _ZZ_CMAP_PACKED4 = 42;
                } else throw ZZ_CMAP_PACKED;
            }
            Test.ZZ_CMAP_PACKED = 42;
            try {
                Test.ZZ_CMAP_PACKED = 42;
            } catch (ex) {
                if (ex instanceof ZZ_CMAP_PACKED) {
                    Test.ZZ_CMAP_PACKED = 42;
                    var _ZZ_CMAP_PACKED5 = 0;
                    _ZZ_CMAP_PACKED5 = 42;
                } else throw ex;
            }
            Test.ZZ_CMAP_PACKED = 42;
            var ZZ_CMAP_PACKED = 0;
            ZZ_CMAP_PACKED = 42;
        }
    }, {
        key: 'test_for_scope$esjava$0',
        value: function test_for_scope$esjava$0() {
            Test.ZZ_CMAP_PACKED = 42;
            ;
            for (; x < 1; x++) {
                Test.ZZ_CMAP_PACKED = 42;
                var _ZZ_CMAP_PACKED6 = 0;
                _ZZ_CMAP_PACKED6 = 42;
            }
            Test.ZZ_CMAP_PACKED = 42;
            for (var ZZ_CMAP_PACKED = 1; x;) {
                _ZZ_CMAP_PACKED7 = 42;
                var _ZZ_CMAP_PACKED7 = 0;
                _ZZ_CMAP_PACKED7 = 42;
            }
            for (var _x3 = "hello"; _x3;) {
                _x3.charCodeAt();
            }
            Test.ZZ_CMAP_PACKED = 42;
            for (var _ZZ_CMAP_PACKED8 = 1; _ZZ_CMAP_PACKED8 < 1; _ZZ_CMAP_PACKED8++) {
                _ZZ_CMAP_PACKED8 = 42;
            }
            for (var _x4 = YYEOF, var$esjava = 42; var$esjava > 0 && _x4 < 1; _x4++, var$esjava++) {}
            Test.ZZ_CMAP_PACKED = 42;
            var ZZ_CMAP_PACKED = 0;
            ZZ_CMAP_PACKED = 42;
        }
    }, {
        key: 'ZZ_CMAP_PACKED',
        get: function get() {
            delete Test.ZZ_CMAP_PACKED;
            return Test.ZZ_CMAP_PACKED = 0;
        },
        set: function set(v) {
            delete Test.ZZ_CMAP_PACKED;
            Test.ZZ_CMAP_PACKED = v;
        }
    }, {
        key: 'static_double_init_test',
        get: function get() {
            delete Test.static_double_init_test;
            return Test.static_double_init_test = 0.0;
        },
        set: function set(v) {
            delete Test.static_double_init_test;
            Test.static_double_init_test = v;
        }
    }, {
        key: 'static_float_init_test',
        get: function get() {
            delete Test.static_float_init_test;
            return Test.static_float_init_test = 0.0;
        },
        set: function set(v) {
            delete Test.static_float_init_test;
            Test.static_float_init_test = v;
        }
    }, {
        key: 'static_char_init_test',
        get: function get() {
            delete Test.static_char_init_test;
            return Test.static_char_init_test = '\u0000';
        },
        set: function set(v) {
            delete Test.static_char_init_test;
            Test.static_char_init_test = v;
        }
    }, {
        key: 'static_string_init_test',
        get: function get() {
            delete Test.static_string_init_test;
            return Test.static_string_init_test = null;
        },
        set: function set(v) {
            delete Test.static_string_init_test;
            Test.static_string_init_test = v;
        }
    }, {
        key: 'static_boolean_init_test',
        get: function get() {
            delete Test.static_boolean_init_test;
            return Test.static_boolean_init_test = false;
        },
        set: function set(v) {
            delete Test.static_boolean_init_test;
            Test.static_boolean_init_test = v;
        }
    }, {
        key: 'static_int_init_test',
        get: function get() {
            delete Test.static_int_init_test;
            return Test.static_int_init_test = 0;
        },
        set: function set(v) {
            delete Test.static_int_init_test;
            Test.static_int_init_test = v;
        }
    }, {
        key: 'static_short_init_test',
        get: function get() {
            delete Test.static_short_init_test;
            return Test.static_short_init_test = 0;
        },
        set: function set(v) {
            delete Test.static_short_init_test;
            Test.static_short_init_test = v;
        }
    }, {
        key: 'static_long_init_test',
        get: function get() {
            delete Test.static_long_init_test;
            return Test.static_long_init_test = 0;
        },
        set: function set(v) {
            delete Test.static_long_init_test;
            Test.static_long_init_test = v;
        }
    }]);

    return Test;
}();

var TestInterface = function () {
    function TestInterface() {
        _classCallCheck(this, TestInterface);
    }

    _createClass(TestInterface, [{
        key: 'test$esjava$0',
        value: function test$esjava$0() {
            throw 'NotImpl < test$esjava$0 >';
        }
    }, {
        key: 'test',
        value: function test() {
            var _get21;

            for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
                args[_key20] = arguments[_key20];
            }

            switch (args.length) {
                case 0:
                    return this.test$esjava$0.apply(this, args);
            }
            return (_get21 = _get(Object.getPrototypeOf(TestInterface.prototype), 'test', this)).call.apply(_get21, [this].concat(args));
        }
    }]);

    return TestInterface;
}();

var TestInterfaceClass = function (_TestInterface) {
    _inherits(TestInterfaceClass, _TestInterface);

    function TestInterfaceClass() {
        _classCallCheck(this, TestInterfaceClass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestInterfaceClass).apply(this, arguments));
    }

    return TestInterfaceClass;
}(TestInterface);

var TestExtendsClass = function (_TestInterface2) {
    _inherits(TestExtendsClass, _TestInterface2);

    function TestExtendsClass() {
        _classCallCheck(this, TestExtendsClass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestExtendsClass).apply(this, arguments));
    }

    return TestExtendsClass;
}(TestInterface);

var NumberExtendsClass = function (_TestInterface3) {
    _inherits(NumberExtendsClass, _TestInterface3);

    function NumberExtendsClass() {
        _classCallCheck(this, NumberExtendsClass);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberExtendsClass).apply(this, arguments));
    }

    _createClass(NumberExtendsClass, [{
        key: 'x',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$x') ? this._$esjava$x : this._$esjava$x = 42;
        },
        set: function set(v) {
            this._$esjava$x = v;
        }
    }, {
        key: 'y',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$y') ? this._$esjava$y : this._$esjava$y = 11;
        },
        set: function set(v) {
            this._$esjava$y = v;
        }
    }, {
        key: 'z',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$z') ? this._$esjava$z : this._$esjava$z = 42;
        },
        set: function set(v) {
            this._$esjava$z = v;
        }
    }, {
        key: 'k',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$k') ? this._$esjava$k : this._$esjava$k = 0xa5;
        },
        set: function set(v) {
            this._$esjava$k = v;
        }
    }, {
        key: 'd1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d1') ? this._$esjava$d1 : this._$esjava$d1 = 0.0;
        },
        set: function set(v) {
            this._$esjava$d1 = v;
        }
    }, {
        key: 'd2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d2') ? this._$esjava$d2 : this._$esjava$d2 = 34324.34;
        },
        set: function set(v) {
            this._$esjava$d2 = v;
        }
    }, {
        key: 'd3',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d3') ? this._$esjava$d3 : this._$esjava$d3 = 1.2e34;
        },
        set: function set(v) {
            this._$esjava$d3 = v;
        }
    }, {
        key: 'f1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f1') ? this._$esjava$f1 : this._$esjava$f1 = 2.34E+22;
        },
        set: function set(v) {
            this._$esjava$f1 = v;
        }
    }, {
        key: 'f2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f2') ? this._$esjava$f2 : this._$esjava$f2 = 1.0;
        },
        set: function set(v) {
            this._$esjava$f2 = v;
        }
    }, {
        key: 'f3',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f3') ? this._$esjava$f3 : this._$esjava$f3 = 0.0;
        },
        set: function set(v) {
            this._$esjava$f3 = v;
        }
    }, {
        key: 'd11',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d11') ? this._$esjava$d11 : this._$esjava$d11 = -0.0;
        },
        set: function set(v) {
            this._$esjava$d11 = v;
        }
    }, {
        key: 'd22',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d22') ? this._$esjava$d22 : this._$esjava$d22 = -34324.34;
        },
        set: function set(v) {
            this._$esjava$d22 = v;
        }
    }, {
        key: 'd33',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$d33') ? this._$esjava$d33 : this._$esjava$d33 = -1.2e34;
        },
        set: function set(v) {
            this._$esjava$d33 = v;
        }
    }, {
        key: 'f11',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f11') ? this._$esjava$f11 : this._$esjava$f11 = -2.34E+22;
        },
        set: function set(v) {
            this._$esjava$f11 = v;
        }
    }, {
        key: 'f22',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f22') ? this._$esjava$f22 : this._$esjava$f22 = -1.0;
        },
        set: function set(v) {
            this._$esjava$f22 = v;
        }
    }, {
        key: 'f33',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$f33') ? this._$esjava$f33 : this._$esjava$f33 = -0.0;
        },
        set: function set(v) {
            this._$esjava$f33 = v;
        }
    }, {
        key: 'x1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$x1') ? this._$esjava$x1 : this._$esjava$x1 = -42;
        },
        set: function set(v) {
            this._$esjava$x1 = v;
        }
    }, {
        key: 'y1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$y1') ? this._$esjava$y1 : this._$esjava$y1 = -11;
        },
        set: function set(v) {
            this._$esjava$y1 = v;
        }
    }, {
        key: 'z1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$z1') ? this._$esjava$z1 : this._$esjava$z1 = -42;
        },
        set: function set(v) {
            this._$esjava$z1 = v;
        }
    }, {
        key: 'k1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$k1') ? this._$esjava$k1 : this._$esjava$k1 = -0xa5;
        },
        set: function set(v) {
            this._$esjava$k1 = v;
        }
    }, {
        key: 'x2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$x2') ? this._$esjava$x2 : this._$esjava$x2 = +42;
        },
        set: function set(v) {
            this._$esjava$x2 = v;
        }
    }, {
        key: 'y2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$y2') ? this._$esjava$y2 : this._$esjava$y2 = +11;
        },
        set: function set(v) {
            this._$esjava$y2 = v;
        }
    }, {
        key: 'z2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$z2') ? this._$esjava$z2 : this._$esjava$z2 = +42;
        },
        set: function set(v) {
            this._$esjava$z2 = v;
        }
    }, {
        key: 'k2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$k2') ? this._$esjava$k2 : this._$esjava$k2 = +0xa5;
        },
        set: function set(v) {
            this._$esjava$k2 = v;
        }
    }, {
        key: 't1',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$t1') ? this._$esjava$t1 : this._$esjava$t1 = 0xDFFF;
        },
        set: function set(v) {
            this._$esjava$t1 = v;
        }
    }, {
        key: 't2',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$t2') ? this._$esjava$t2 : this._$esjava$t2 = 0xDFFF;
        },
        set: function set(v) {
            this._$esjava$t2 = v;
        }
    }, {
        key: 't3',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$t3') ? this._$esjava$t3 : this._$esjava$t3 = 0xDFFd;
        },
        set: function set(v) {
            this._$esjava$t3 = v;
        }
    }, {
        key: 't4',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$t4') ? this._$esjava$t4 : this._$esjava$t4 = 0xDFFD;
        },
        set: function set(v) {
            this._$esjava$t4 = v;
        }
    }]);

    return NumberExtendsClass;
}(TestInterface);

var Animal = function () {
    _createClass(Animal, [{
        key: 'name',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$name') ? this._$esjava$name : this._$esjava$name = null;
        },
        set: function set(v) {
            this._$esjava$name = v;
        }
    }]);

    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: 'move$esjava$1',
        value: function move$esjava$1(meters) {
            Animal.MessageBox$esjava$1(this.name + ' #moved ' + meters + "m.");
        }
    }, {
        key: 'move$esjava$0',
        value: function move$esjava$0() {
            throw 'NotImpl < move$esjava$0 >';
        }
    }, {
        key: 'move',
        value: function move() {
            var _get22;

            for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
                args[_key21] = arguments[_key21];
            }

            switch (args.length) {
                case 1:
                    return this.move$esjava$1.apply(this, args);
                case 0:
                    return this.move$esjava$0.apply(this, args);
            }
            return (_get22 = _get(Object.getPrototypeOf(Animal.prototype), 'move', this)).call.apply(_get22, [this].concat(args));
        }
    }], [{
        key: 'MessageBox$esjava$1',
        value: function MessageBox$esjava$1(msg) {
            alert(msg);
        }
    }, {
        key: 'MessageBox',
        value: function MessageBox() {
            var _get23;

            for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
                args[_key22] = arguments[_key22];
            }

            switch (args.length) {
                case 1:
                    return Animal.MessageBox$esjava$1.apply(Animal, args);
            }
            return (_get23 = _get(Object.getPrototypeOf(Animal), 'MessageBox', this)).call.apply(_get23, [this].concat(args));
        }
    }, {
        key: 'U_YIN_YANG',
        get: function get() {
            return '☯';
        }
    }, {
        key: 'U_CAUTION_SIGN',
        get: function get() {
            return '☡';
        }
    }, {
        key: 'test_octal',
        get: function get() {
            return '#';
        }
    }, {
        key: 'test_octal1',
        get: function get() {
            return '\u0000';
        }
    }, {
        key: 'test_not_final',
        get: function get() {
            delete Animal.test_not_final;
            return Animal.test_not_final = 'a';
        },
        set: function set(v) {
            delete Animal.test_not_final;
            Animal.test_not_final = v;
        }
    }, {
        key: 'test_not_final1',
        get: function get() {
            delete Animal.test_not_final1;
            return Animal.test_not_final1 = '\u0000';
        },
        set: function set(v) {
            delete Animal.test_not_final1;
            Animal.test_not_final1 = v;
        }
    }, {
        key: 'test_not_final_not_literal',
        get: function get() {
            delete Animal.test_not_final_not_literal;
            return Animal.test_not_final_not_literal = null;
        },
        set: function set(v) {
            delete Animal.test_not_final_not_literal;
            Animal.test_not_final_not_literal = v;
        }
    }]);

    return Animal;
}();

var Snake = function (_Animal) {
    _inherits(Snake, _Animal);

    function Snake(name) {
        _classCallCheck(this, Snake);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Snake).call(this, name));
    }

    _createClass(Snake, [{
        key: 'move$0$esjava$0',
        value: function move$0$esjava$0() {
            Animal.MessageBox("Slithering...");
            _get(Object.getPrototypeOf(Snake.prototype), 'move$1', this).call(this, 3);
        }
    }, {
        key: 'move$0',
        value: function move$0() {
            var _get24;

            for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
                args[_key23] = arguments[_key23];
            }

            switch (args.length) {
                case 0:
                    return this.move$0$esjava$0.apply(this, args);
            }
            return (_get24 = _get(Object.getPrototypeOf(Snake.prototype), 'move$0', this)).call.apply(_get24, [this].concat(args));
        }
    }]);

    return Snake;
}(Animal);

var Horse = function (_Animal2) {
    _inherits(Horse, _Animal2);

    function Horse(name) {
        _classCallCheck(this, Horse);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Horse).call(this, name));
    }

    _createClass(Horse, [{
        key: 'move$0$esjava$0',
        value: function move$0$esjava$0() {
            Horse.MessageBox$esjava$1("Galloping...");
            _get(Object.getPrototypeOf(Horse.prototype), 'move$1', this).call(this, -0x2a);
        }
    }, {
        key: 'move$0',
        value: function move$0() {
            var _get25;

            for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
                args[_key24] = arguments[_key24];
            }

            switch (args.length) {
                case 0:
                    return this.move$0$esjava$0.apply(this, args);
            }
            return (_get25 = _get(Object.getPrototypeOf(Horse.prototype), 'move$0', this)).call.apply(_get25, [this].concat(args));
        }
    }]);

    return Horse;
}(Animal);

var BabelEvaluate = function () {
    function BabelEvaluate() {
        _classCallCheck(this, BabelEvaluate);
    }

    _createClass(BabelEvaluate, null, [{
        key: 'main$esjava$1',
        value: function main$esjava$1(args) {
            var animals = [new Snake(Animal.U_CAUTION_SIGN + 'Sammy the Python\u0001Z\n䌡'), new Horse(Animal.U_YIN_YANG + "Tommy the Palomino")];
            for (var i = 0; i < animals.length; i++) {
                animals[i].move$0();
            }
            var i1 = void 0,
                i2 = void 0;
            for (i1 = 42, i2 = codePointOffset;;) {}
        }
    }, {
        key: 'main',
        value: function main() {
            var _get26;

            for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
                args[_key25] = arguments[_key25];
            }

            switch (args.length) {
                case 1:
                    return BabelEvaluate.main$esjava$1.apply(BabelEvaluate, args);
            }
            return (_get26 = _get(Object.getPrototypeOf(BabelEvaluate), 'main', this)).call.apply(_get26, [this].concat(args));
        }
    }]);

    return BabelEvaluate;
}();

var Horse1 = function (_I$AM$NOT$IN$COMPILAT) {
    _inherits(Horse1, _I$AM$NOT$IN$COMPILAT);

    function Horse1() {
        _classCallCheck(this, Horse1);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Horse1).apply(this, arguments));
    }

    return Horse1;
}(I.AM.NOT.IN.COMPILATION_UNIT.Animal);

var I_AM_IN_COMPILATION_UNIT_Animal = function () {
    function I_AM_IN_COMPILATION_UNIT_Animal() {
        _classCallCheck(this, I_AM_IN_COMPILATION_UNIT_Animal);
    }

    _createClass(I_AM_IN_COMPILATION_UNIT_Animal, [{
        key: 'hello$esjava$0',
        value: function hello$esjava$0() {
            this.test++;
            this.horse_p = null;
            this.hello_p$esjava$0();
            I_AM_IN_COMPILATION_UNIT_Animal.hello_s$esjava$0();
        }
    }, {
        key: 'hello_p$esjava$0',
        value: function hello_p$esjava$0() {
            this.test++;
            this.horse_p = null;
        }
    }, {
        key: 'hello',
        value: function hello() {
            var _get27;

            for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
                args[_key26] = arguments[_key26];
            }

            switch (args.length) {
                case 0:
                    return this.hello$esjava$0.apply(this, args);
            }
            return (_get27 = _get(Object.getPrototypeOf(I_AM_IN_COMPILATION_UNIT_Animal.prototype), 'hello', this)).call.apply(_get27, [this].concat(args));
        }
    }, {
        key: 'test',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$test') ? this._$esjava$test : this._$esjava$test = 0;
        },
        set: function set(v) {
            this._$esjava$test = v;
        }
    }, {
        key: 'horse_p',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$horse_p') ? this._$esjava$horse_p : this._$esjava$horse_p = null;
        },
        set: function set(v) {
            this._$esjava$horse_p = v;
        }
    }], [{
        key: 'hello_s$esjava$0',
        value: function hello_s$esjava$0() {
            this.test++;
            this.horse_p = null;
        }
    }, {
        key: 'hello_s',
        value: function hello_s() {
            var _get28;

            for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
                args[_key27] = arguments[_key27];
            }

            switch (args.length) {
                case 0:
                    return I_AM_IN_COMPILATION_UNIT_Animal.hello_s$esjava$0.apply(I_AM_IN_COMPILATION_UNIT_Animal, args);
            }
            return (_get28 = _get(Object.getPrototypeOf(I_AM_IN_COMPILATION_UNIT_Animal), 'hello_s', this)).call.apply(_get28, [this].concat(args));
        }
    }]);

    return I_AM_IN_COMPILATION_UNIT_Animal;
}();

var Horse2 = function (_I_AM_IN_COMPILATION_) {
    _inherits(Horse2, _I_AM_IN_COMPILATION_);

    function Horse2() {
        _classCallCheck(this, Horse2);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Horse2).apply(this, arguments));
    }

    _createClass(Horse2, [{
        key: 'hello1$esjava$0',
        value: function hello1$esjava$0() {
            this.hello$esjava$0();
            Horse2.hello_s$esjava$0();
            this.test++;
            horse_p = null;
            Horse2.test3_s++;
            Horse2.test4_p++;
            this.test5.charCodeAt(0);
            hello_p();
            this.hello_p1$esjava$0();
            Horse2.hello_s2$esjava$0();
        }
    }, {
        key: 'hello_p1$esjava$0',
        value: function hello_p1$esjava$0() {}
    }, {
        key: 'hello1',
        value: function hello1() {
            var _get29;

            for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
                args[_key28] = arguments[_key28];
            }

            switch (args.length) {
                case 0:
                    return this.hello1$esjava$0.apply(this, args);
            }
            return (_get29 = _get(Object.getPrototypeOf(Horse2.prototype), 'hello1', this)).call.apply(_get29, [this].concat(args));
        }
    }, {
        key: 'test5',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$test5') ? this._$esjava$test5 : this._$esjava$test5 = null;
        },
        set: function set(v) {
            this._$esjava$test5 = v;
        }
    }], [{
        key: 'hello_s2$esjava$0',
        value: function hello_s2$esjava$0() {}
    }, {
        key: 'hello_s2',
        value: function hello_s2() {
            var _get30;

            for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
                args[_key29] = arguments[_key29];
            }

            switch (args.length) {
                case 0:
                    return Horse2.hello_s2$esjava$0.apply(Horse2, args);
            }
            return (_get30 = _get(Object.getPrototypeOf(Horse2), 'hello_s2', this)).call.apply(_get30, [this].concat(args));
        }
    }, {
        key: 'test3_s',
        get: function get() {
            delete Horse2.test3_s;
            return Horse2.test3_s = 'a';
        },
        set: function set(v) {
            delete Horse2.test3_s;
            Horse2.test3_s = v;
        }
    }, {
        key: 'test4_p',
        get: function get() {
            delete Horse2.test4_p;
            return Horse2.test4_p = 0;
        },
        set: function set(v) {
            delete Horse2.test4_p;
            Horse2.test4_p = v;
        }
    }]);

    return Horse2;
}(I_AM_IN_COMPILATION_UNIT_Animal);

var Horse3 = function (_Horse) {
    _inherits(Horse3, _Horse);

    function Horse3() {
        _classCallCheck(this, Horse3);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Horse3).apply(this, arguments));
    }

    _createClass(Horse3, [{
        key: 'hello1$esjava$0',
        value: function hello1$esjava$0() {
            this.hello$esjava$0();
            this.hello1$esjava$0();
            this.test++;
            Horse3.test3_s++;
            test4_p++;
            this.test5.charCodeAt(0);
            horse_p = null;
            Horse3.hello_s$esjava$0();
            hello_p();
            hello_p1();
            Horse3.hello_s2$esjava$0();
        }
    }, {
        key: 'hello_self$esjava$0',
        value: function hello_self$esjava$0() {
            this.hello$esjava$0();
            this.hello1$esjava$0();
            this.test++;
            I_AM_IN_COMPILATION_UNIT_Animal.test3_s++;
            I_AM_IN_COMPILATION_UNIT_Animal.test4_p++;
            this.test5.charCodeAt(0);
            this.horse_p = null;
            I_AM_IN_COMPILATION_UNIT_Animal.hello_s();
            this.hello_p();
        }
    }, {
        key: 'hello1',
        value: function hello1() {
            var _get31;

            for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
                args[_key30] = arguments[_key30];
            }

            switch (args.length) {
                case 0:
                    return this.hello1$esjava$0.apply(this, args);
            }
            return (_get31 = _get(Object.getPrototypeOf(Horse3.prototype), 'hello1', this)).call.apply(_get31, [this].concat(args));
        }
    }, {
        key: 'hello_self',
        value: function hello_self() {
            var _get32;

            for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
                args[_key31] = arguments[_key31];
            }

            switch (args.length) {
                case 0:
                    return this.hello_self$esjava$0.apply(this, args);
            }
            return (_get32 = _get(Object.getPrototypeOf(Horse3.prototype), 'hello_self', this)).call.apply(_get32, [this].concat(args));
        }
    }]);

    return Horse3;
}(Horse2);

var AnimalOverload = function () {
    function AnimalOverload() {
        _classCallCheck(this, AnimalOverload);
    }

    _createClass(AnimalOverload, [{
        key: 'move_p_has_ho_route$esjava$1',
        value: function move_p_has_ho_route$esjava$1(meters) {}
    }, {
        key: 'move$esjava$1',
        value: function move$esjava$1(meters) {
            MessageBox(name + " moved " + meters + "m.");
            this.move$esjava$0();
            AnimalOverload.move_ps_has_ho_route$esjava$0();
            this.move_p_has_ho_route$esjava$1(42);
        }
    }, {
        key: 'move$esjava$0',
        value: function move$esjava$0() {
            MessageBox(name + " moved " + meters + "m.");
            this.move$esjava$1(1);
        }
    }, {
        key: 'move',
        value: function move() {
            var _get33;

            for (var _len32 = arguments.length, args = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
                args[_key32] = arguments[_key32];
            }

            switch (args.length) {
                case 1:
                    return this.move$esjava$1.apply(this, args);
                case 0:
                    return this.move$esjava$0.apply(this, args);
            }
            return (_get33 = _get(Object.getPrototypeOf(AnimalOverload.prototype), 'move', this)).call.apply(_get33, [this].concat(args));
        }
    }], [{
        key: 'move_ps_has_ho_route$esjava$0',
        value: function move_ps_has_ho_route$esjava$0() {}
    }, {
        key: 'move$esjava$2',
        value: function move$esjava$2(a, b) {}
    }, {
        key: 'move2$esjava$0',
        value: function move2$esjava$0() {
            MessageBox(name + " moved " + meters + "m.");
            this.move$esjava$1(1);
        }
    }, {
        key: 'move2$esjava$2',
        value: function move2$esjava$2(a, b) {}
    }, {
        key: 'move',
        value: function move() {
            var _get34;

            for (var _len33 = arguments.length, args = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
                args[_key33] = arguments[_key33];
            }

            switch (args.length) {
                case 2:
                    return AnimalOverload.move$esjava$2.apply(AnimalOverload, args);
            }
            return (_get34 = _get(Object.getPrototypeOf(AnimalOverload), 'move', this)).call.apply(_get34, [this].concat(args));
        }
    }, {
        key: 'move2',
        value: function move2() {
            var _get35;

            for (var _len34 = arguments.length, args = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
                args[_key34] = arguments[_key34];
            }

            switch (args.length) {
                case 0:
                    return AnimalOverload.move2$esjava$0.apply(AnimalOverload, args);
                case 2:
                    return AnimalOverload.move2$esjava$2.apply(AnimalOverload, args);
            }
            return (_get35 = _get(Object.getPrototypeOf(AnimalOverload), 'move2', this)).call.apply(_get35, [this].concat(args));
        }
    }]);

    return AnimalOverload;
}();

var SuperAnimal = function () {
    _createClass(SuperAnimal, [{
        key: 'name',
        get: function get() {
            return Object.prototype.hasOwnProperty.call(this, '_$esjava$name') ? this._$esjava$name : this._$esjava$name = null;
        },
        set: function set(v) {
            this._$esjava$name = v;
        }
    }]);

    function SuperAnimal(name) {
        _classCallCheck(this, SuperAnimal);

        this.name = name;
    }

    _createClass(SuperAnimal, [{
        key: 'bad$esjava$0',
        value: function bad$esjava$0() {
            return "";
        }
    }, {
        key: 'move$esjava$1',
        value: function move$esjava$1(meters) {
            SuperAnimal.MessageBox$esjava$1(this.bad$esjava$0() + this.name + " moved " + meters + "m.");
        }
    }, {
        key: 'move$esjava$0',
        value: function move$esjava$0() {
            throw 'NotImpl < move$esjava$0 >';
        }
    }, {
        key: 'bad',
        value: function bad() {
            var _get36;

            for (var _len35 = arguments.length, args = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
                args[_key35] = arguments[_key35];
            }

            switch (args.length) {
                case 0:
                    return this.bad$esjava$0.apply(this, args);
            }
            return (_get36 = _get(Object.getPrototypeOf(SuperAnimal.prototype), 'bad', this)).call.apply(_get36, [this].concat(args));
        }
    }, {
        key: 'move',
        value: function move() {
            var _get37;

            for (var _len36 = arguments.length, args = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
                args[_key36] = arguments[_key36];
            }

            switch (args.length) {
                case 1:
                    return this.move$esjava$1.apply(this, args);
                case 0:
                    return this.move$esjava$0.apply(this, args);
            }
            return (_get37 = _get(Object.getPrototypeOf(SuperAnimal.prototype), 'move', this)).call.apply(_get37, [this].concat(args));
        }
    }], [{
        key: 'MessageBox$esjava$1',
        value: function MessageBox$esjava$1(msg) {
            System.out.println(msg);
        }
    }, {
        key: 'MessageBox',
        value: function MessageBox() {
            var _get38;

            for (var _len37 = arguments.length, args = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
                args[_key37] = arguments[_key37];
            }

            switch (args.length) {
                case 1:
                    return SuperAnimal.MessageBox$esjava$1.apply(SuperAnimal, args);
            }
            return (_get38 = _get(Object.getPrototypeOf(SuperAnimal), 'MessageBox', this)).call.apply(_get38, [this].concat(args));
        }
    }, {
        key: 'U_YIN_YANG',
        get: function get() {
            return '☯';
        }
    }, {
        key: 'U_CAUTION_SIGN',
        get: function get() {
            return '#';
        }
    }]);

    return SuperAnimal;
}();

var SuperSnake = function (_SuperAnimal) {
    _inherits(SuperSnake, _SuperAnimal);

    function SuperSnake(name) {
        _classCallCheck(this, SuperSnake);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SuperSnake).call(this, name));
    }

    _createClass(SuperSnake, [{
        key: 'move$esjava$0',
        value: function move$esjava$0() {
            SuperSnake.MessageBox$esjava$1('Slithering ☡ ...');
            _get(Object.getPrototypeOf(SuperSnake.prototype), 'move$esjava$1', this).call(this, 3);
        }
    }, {
        key: 'move',
        value: function move() {
            var _get39;

            for (var _len38 = arguments.length, args = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
                args[_key38] = arguments[_key38];
            }

            switch (args.length) {
                case 0:
                    return this.move$esjava$0.apply(this, args);
            }
            return (_get39 = _get(Object.getPrototypeOf(SuperSnake.prototype), 'move', this)).call.apply(_get39, [this].concat(args));
        }
    }]);

    return SuperSnake;
}(SuperAnimal);

var SuperHorse = function (_SuperAnimal2) {
    _inherits(SuperHorse, _SuperAnimal2);

    function SuperHorse(name) {
        _classCallCheck(this, SuperHorse);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SuperHorse).call(this, name));
    }

    _createClass(SuperHorse, [{
        key: 'move$esjava$1',
        value: function move$esjava$1(meters) {
            _get(Object.getPrototypeOf(SuperHorse.prototype), 'MessageBox$esjava$1', this).call(this, this.name + " 111moved " + meters + "m.");
            _get(Object.getPrototypeOf(SuperHorse.prototype), 'no_method_no_overload', this).call(this);
            this.no_method_no_overload();
            no_method_no_overload();
        }
    }, {
        key: 'bad$esjava$0',
        value: function bad$esjava$0() {
            return "42:";
        }
    }, {
        key: 'move$esjava$0',
        value: function move$esjava$0() {
            Horse.MessageBox('Galloping !!!');
            _get(Object.getPrototypeOf(SuperHorse.prototype), 'move$esjava$1', this).call(this, -42);
        }
    }, {
        key: 'bad',
        value: function bad() {
            var _get40;

            for (var _len39 = arguments.length, args = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
                args[_key39] = arguments[_key39];
            }

            switch (args.length) {
                case 0:
                    return this.bad$esjava$0.apply(this, args);
            }
            return (_get40 = _get(Object.getPrototypeOf(SuperHorse.prototype), 'bad', this)).call.apply(_get40, [this].concat(args));
        }
    }, {
        key: 'move',
        value: function move() {
            var _get41;

            for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
                args[_key40] = arguments[_key40];
            }

            switch (args.length) {
                case 1:
                    return this.move$esjava$1.apply(this, args);
                case 0:
                    return this.move$esjava$0.apply(this, args);
            }
            return (_get41 = _get(Object.getPrototypeOf(SuperHorse.prototype), 'move', this)).call.apply(_get41, [this].concat(args));
        }
    }]);

    return SuperHorse;
}(SuperAnimal);

var SuperBabelEvaluate = function () {
    function SuperBabelEvaluate() {
        _classCallCheck(this, SuperBabelEvaluate);
    }

    _createClass(SuperBabelEvaluate, null, [{
        key: 'main$esjava$1',
        value: function main$esjava$1(args) {
            var animals = [new Snake(Animal.U_CAUTION_SIGN + "Sammy the Python"), new Horse(Animal.U_YIN_YANG + "Tommy the Palomino")];
            for (var in$esjava = 0; in$esjava < animals.length; in$esjava++) {
                animals[in$esjava].move();
            }
        }
    }, {
        key: 'main',
        value: function main() {
            var _get42;

            for (var _len41 = arguments.length, args = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
                args[_key41] = arguments[_key41];
            }

            switch (args.length) {
                case 1:
                    return SuperBabelEvaluate.main$esjava$1.apply(SuperBabelEvaluate, args);
            }
            return (_get42 = _get(Object.getPrototypeOf(SuperBabelEvaluate), 'main', this)).call.apply(_get42, [this].concat(args));
        }
    }]);

    return SuperBabelEvaluate;
}();

