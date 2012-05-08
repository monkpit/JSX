/*

The JSX DOM module consists of several parts of submodules:

Core - DOM Level 3 Core
HTML - DOM Level 3 HTML
Event - DOM Level 3 Event (Low level event model)
XHR - XMLHttpRequest
Window - The DOM Window

See also:
	http://www.w3.org/TR/DOM-Level-2-Core/
	http://www.w3.org/TR/DOM-Level-3-Core/
	http://dev.w3.org/html5/spec/
*/

import "js.jsx";

// DOM-Core

// http://www.w3.org/TR/DOM-Level-3-Core/


native class DOMException {
	var code : int;
}

native class DOMImplementationList {
	// TODO
}
native class DOMImplementationSource {
	// TODO
}

native class DOMImplementation {
	function hasFeature(feature : string, version : string) : boolean;
	function createDocumentType(qualifiedName : string, publicId : string, systemId : string) :DocumentType;
	function createDocument(namespaceURI : string, qualifiedName : string, docType : string) :Document;
	function getFeature(feature : string, version : string) : Object;

}

native class Node {
	static const ELEMENT_NODE : int;
	static const ATTRIBUTE_NODE : int;
	static const TEXT_NODE : int;
	static const CDATA_SECTION_NODE : int;
	static const ENTITY_REFERENCE_NODE : int;
	static const ENTITY_NODE : int;
	static const PROCESSING_INSTRUCTION_NODE : int;
	static const COMMENT_NODE : int;
	static const DOCUMENT_NODE : int;
	static const DOCUMENT_TYPE_NODE : int;
	static const DOCUMENT_FRAGMENT_NODE : int;
	static const NOTATION_NODE : int;

	const nodeName : string;
	var nodeValue : string;
	const nodeType : int;
	const parentNode : string;
	const childNodes : NodeList;
	const firstChild : Node;
	const lastChild : Node;
	const previousSibling : Node;
	const nextSibling : Node;
	const attributes : NamedNodeMap;

	function insertBefore(newChild : Node, refChild : Node) : Node;
	function replaceChild(newChild : Node, oldChild : Node) : Node;
	function removeChild(oldChild : Node) : Node;
	function appendChild(newChild : Node) : Node;

	function hasChildNodes() : boolean;
	function cloneNode(deep : boolean) : Node;

	function normalize() : void;

	function isSupported(feature : string, version : string) : boolean;
	const namespaceURI : string;
	const prefix : string;
	const localName : string;
	function hasAttributes() : boolean;
	const baseURI : string;

	// DocumentPosition
	static const DOCUMENT_POSITION_DISCONNECTED : int;
	static const DOCUMENT_POSITION_PRECEDING : int;
	static const DOCUMENT_POSITION_FOLLOWING : int;
	static const DOCUMENT_POSITION_CONTAINS : int;
	static const DOCUMENT_POSITION_CONTAINED_BY : int;
	static const DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : int;
	function compareDocumentPosition(other : Node) : int;

	var textContent : string;

	function isSameNode(other : Node) : boolean;
	function lookupPrefix(namespaceURI : string) : string;
	function isDefaultNamespace(namespaceURI : string) : string;
	function lookupNamespaceURI(prefix : string) : string;
	function isEqualNode(arg : Node) : boolean;
	function getFeature(feature : string, version : string) : Object;

	// See also UserDataHandler
	function setUserData(key : string, data : variant, handler: function(:int,:string,:variant,:Node,:Node):void) : variant;
	function getUserData(key : string) : variant;

}

native class NodeList {
	function item(index : int) : Node;
	const length : int;
}

native class NamedNodeMap {
	// TODO
}

native class CharacterData extends Node {
	// TODO
}

native class Attr extends Node {
	const name : string;
	const specified : boolean;
	const value : string;
	const ownerElement : Element;
	const schemaTypeInfo : TypeInfo;
	const isId : boolean;
}

native class TypeInfo {
	// TODO
}

native class Element extends Node {
	const tagName : string;

	function getAttribute(name : string) : string;
	function setAttribute(name : string, value : string) : void;
	function removeAttribute(name : string) : void;

	function getAttributeNode(name : string) : Attr;
	function setAttributeNode(newAttr : Attr) : Attr;
	function removeAttributeNode(oldAttr : Attr) : Attr;

	function getElementsByTagName(name : string) : NodeList;

	// introduced in DOM level 2

	function getAttributeNS(namespaceURI : string, localName : string) : string;
	function setAttributeNS(namespaceURI : string, qualifiedName : string, value : string) : void;
	function removeAttributeNS(namespaceURI : string, localName : string) : string;
	function getAttributeNodeNS(namespaceURI : string, localName : string) : string;
	function setAttributeNS(newAttr : Attr) : Attr;
	function getElementsByTagNameNS(namespaceURI : string, localName : string) : NodeList;

	function hasAttribute(name : string) : boolean;
	function hasAttributeNS(namespaceURI : string, name : string) : boolean;

	// introduced in DOM level 3
	const schemaTypeInfo : TypeInfo;
	function setIdAttribute(name : string, isId : boolean) : void;
	function setIdAttributeNS(namespaceURI : string, localName : string, isId : boolean) : void;
	function setIdAttributeNode(idAttr : Attr, isId : boolean) : void;
}


native class Text extends CharacterData {
	function splitText(offset : number) : Text;
	// TODO
}

native class Comment extends CharacterData { }

native class UserDataHandler {
	static const NODE_CLONED : int;
	static const NODE_IMPORTED : int;
	static const NODE_DELETED : int;
	static const NODE_RENAMED : int;
	static const NODE_ADOPTED : int;
}

native class DOMError {
	// TODO
}

native class DOMLocator {
	// TODO
}
native class DOMConfiguration {
	// TODO
}

native class CDATASection extends Text { }

native class DocumentType extends Node {
	// TODO
}

native class Notation extends Node {
	// TODO
}

native class Entity extends Node {
	// TODO
}

native class EntityReference extends Node {
	// TODO
}

native class ProcessingInstruction extends Node {
	// TODO
}

native class DocumentFragment extends Node { }

native class Document extends Node /* implements DocumentEvent */ {
	const doctype : DocumentType;
	const implementation : DOMImplementation;
	const documentElement : Element;

	function createElement(tagname : string) : Element;
	function createDocumentFragment() : DocumentFragment;
	function createTextNode(data : string) : Text;
	function createComment(data : string) : Comment;
	function createCDATASection(data : string) : CDATASection;
	function createProcessingInstruction(target : string, data : string) : ProcessingInstruction;
	function createAttribute(name : string) : Attr;
	function createEntityReference(name : string) : EntityReference;

	function getElementsByTagName(tagname : string) : NodeList;

	// introduced in DOM level 2

	function importNode(importedNode : Node, deep : boolean) : Node;

	function createElementNS(namespaceURI : string, qualifiedName : string) : Element;
	function createAttributeNS(namespaceURI : string, qualifiedName : string) : Attr;

	function getElementsByTagNameNS(namespaceURI : string, localName : string) : NodeList;
	function getElementById(elementId : string) : Element;

	// introduced in DOM level 3

	const inputEncoding : string;
	const xmlEncoding : string; // FIXME: Chrome may return null
	var xmlStandalone : boolean;
	var xmlVersion : string;
	var strictErrorChecking : boolean;
	var documentURI : string;

	function adoptNode(source : Node) : Node;

	const domConfig : DOMConfiguration;
	function normalizeDocument() : void;
	function renameNode(n : Node, namespaceURI : string, qualifiedName : string) : Node;

	// implements interface DocumentEvent
	function createEvent(eventInterface : string) : Event;
}

// DOM-HTML
// http: //www.w3.org/TR/DOM-Level-2-HTML/
// (cf. http://www.w3.org/TR/html5-author/)

native class HTMLCollection {
	const length : int;
	function item(index : int) : Node;
	function namedItem(name : string) : Node;
}

native class HTMLDocument extends Document {
	var title : string;

	const referrer : string;
	const domain : string;
	const URL : string;
	const body : HTMLElement;

	const images : HTMLCollection;
	const applets : HTMLCollection;
	const links : HTMLCollection;
	const forms : HTMLCollection;
	const anchors : HTMLCollection;

	var cookie : string;

	function open() : void;
	function close() : void;

	function write(text : string) : void;
	function writeln(text : string) : void;

	function getElementsByName(elementName : string) : NodeList;
}

native class DOMTokenList {
	// TODO
}

native class DOMSettableTokenList {
	// TODO
}

native class DOMStringList {
	function item(index : int) : string;
	const length : int;
	function contains(str : string) : boolean;
}

native class DOMStringMap {
	// TODO
}

native class CSSStyleDeclaration {
	// TODO
}

native class ClientRect {
	const top : number;
	const right : number;
	const bottom : number;
	const left : number;
	const width : number;
	const height : number;
}

native class ClientRectList {
	// TODO
}


// http://dev.w3.org/html5/spec/elements.html#htmlelement
native class HTMLElement extends Element {
	// metadata attributes

	var id : string;
	var title : string;
	var lang : string;
	var dir : string;
	var className : string;

	var classList : DOMTokenList;
	var dataset : DOMStringMap;


	// user interaction
	var hidden : boolean;
	var tabIndex : int;
	var accesKey : string;
	const accessKeyLabel : string;
	var draggable : boolean;
	const dropzone : DOMSettableTokenList;
	var contentEditable : string;
	const isContentEditable : boolean;
	var contextMenu : MayBeUndefined.<HTMLMenuElement>;
	var spellcheck : boolean;

	function click() : void;
	function focus() : void;
	function blur() : void;

	// command API
	const commandType : MayBeUndefined.<string>;
	const commandLabel : MayBeUndefined.<string>;
	const commandIcon : MayBeUndefined.<string>;
	const commandHidden : MayBeUndefined.<boolean>;
	const commandDisabled : MayBeUndefined.<boolean>;
	const commandChecked : MayBeUndefined.<boolean>;

	// styling
	const style : CSSStyleDeclaration;

	// event handler attributes
	// TODO

	// HTML5
	var innerHTML : string;

	// CSSOM
	function getBoundingClientRect() : ClientRect;
	function getClientRects() : ClientRectList;
}

native class HTMLHtmlElement extends HTMLElement {
	var version :string;
}

native class HTMLHeadElement extends HTMLElement {
	var profile :string;
}

native class HTMLLinkElement extends HTMLElement {
	// TODO
}

native class HTMLTitleElement extends HTMLElement {
	// TODO
}

native class HTMLMetaElement extends HTMLElement {
	// TODO
}

native class HTMLBaseElement extends HTMLElement {
	// TODO
}

native class HTMLImageElement extends HTMLElement {
	// TODO
}

native class HTMLVideoElement extends HTMLElement {
	// TODO
}

native class HTMLMenuElement extends HTMLElement {
	// TODO
}

native class HTMLCanvasElement extends HTMLElement {

	var width : int;
	var height : int;

	function toDataURL() : string;
	function toDataURL(type : string) : string;

	function toBlob(callback : function(data :string):void) : void;
	function toBlob(callback : function(data :string):void, type : string) :void;

	function getContext(contextId : string) : MayBeUndefined.<CanvasRenderingContext>;
}

// TODO a lot of HTML element classes!

// DOM-Browser

// http://www.w3.org/TR/Window/

// The Window Interface
final native __fake__ class Window {

	const window :Window;
	const self :Window;

	var location :Location;

	var name :string;
	const parent :Window;
	const top :Window;
	const frameElement :Element;

	// timers

	function setTimeout(listener : function():void, milliseconds :int) :int;
	function clearTimeout(timerID :int) :void;
	function setInterval(listener : function():void, milliseconds :int) :int;
	function clearInterval(timerID :int) :void;

	// browser-defined properties

	const document :Document;
	const navigator :variant; // FIXME

	function alert(message :string) :void;
}

// The Location Interface
final native class Location {
	var href :string;
	var hash :string;
	var host :string;
	var hostname :string;
	var pathname :string;
	var port :string;
	var protocol :string;
	var search :string;

	function assign(url :string) :void;
	function replace(url :string) :void;
	function reload() :void;

	override
	function toString() :string;
}

// DOM level 2 Views
// http://www.w3.org/TR/DOM-Level-2-Views/

interface AbstractView {
	// TODO
}
interface DocumentView {
	// TODO
}

// DOM  Events
// http://www.w3.org/TR/DOM-Level-3-Events/

native class Event {
	static const CAPTURING_PHASE : int;
	static const AT_TARGET : int;
	static const BUBBLING_PHASE : int;

	const type : string;
	const target : EventTarget;
	const currentTarget : EventTarget;
	const eventPhase : int;
	const bubbles : boolean;
	const cancelable : boolean;
	const timeStamp : int;

	function stopPropagation() : void;
	function preventDefault() : void;
	function initEvent(eventTypeArg : string, canBubbleArg : boolean, cancelableArg : boolean) : void;

	// DOM level 3

	function stopImmediatePropagation() : void;
	const defaultPrevented : boolean;
	const isTrusted : boolean;
}

native class CustomEvent extends Event {
	// TODO
}

native class EventTarget {
	// TODO

	function addEventListener(target : string, listener : function(:Event):void) : void;
	function addEventListener(target : string, listener : function(:Event):void, useCapture : boolean) : void;

	function removeEventListener(target : string, listener : function(:Event):void) : void;
	function removeEventListener(target : string, listener : function(:Event):void, useCapture : boolean) : void;

	function dispatchEvent(evt : Event) : void;
}

native class UIEvent extends Event {
	// TODO
}

native class FocusEvent extends UIEvent {
	// TODO
}

native class MouseEvent extends UIEvent {
	const screenX : int;
	const screenY : int;
	const clientX : int;
	const clientY : int;
	const ctrlKey : boolean;
	const shiftKey : boolean;
	const altKey : boolean;
	const metaKey : boolean;
	const button : int;
	const buttons : int;
	const relatedTarget : EventTarget;

	function initMouseEvent(
		typeArg : string,
		canBubbleArg : boolean,
		cancelableArg : boolean,
		viewArg : AbstractView,
		detailArg : int,
		screenXArg : int,
		screenYArg : int,
		clientXArg : int,
		clientYArg : int,
		ctrlKeyArg : boolean,
		altKeyArg : boolean,
		shiftKeyArg : boolean,
		metaKeyArg : boolean,
		buttonArg : int,
		relatedTargetArg : EventTarget ) : void;

	function getModifierState(keyArg : string) : boolean;
}

native class WheelEvent extends MouseEvent {
	// TODO
}

native class TextEvent extends UIEvent {
	// TODO
}

native class KeyboardEvent extends UIEvent {
	// TODO
}

native class CompositionEvent extends UIEvent {
	// TODO
}

native class MutationEvent extends Event {
	// TODO
}

native class MutationNameEvent extends MutationEvent {
	// TODO
}

// http://www.w3.org/TR/touch-events/

native class Touch {
	const identifier : int;
	const target : EventTarget;
	const screenX : int;
	const screenY : int;
	const clientX : int;
	const clientY : int;
	const pageX : int;
	const pageY : int;
}

/*
native class TouchList {
	const length : int;
	function item(index : int) : Touch;
	function identifiedTouch(identifier : int) : Touch;
}
*/

native class TouchEvent extends UIEvent {
	const touches : Touch[];
	const targetTouches : Touch[];
	const changedTouches : Touch[];
	const altKey : boolean;
	const metaKey : boolean;
	const ctrlKey : boolean;
	const shiftKey : boolean;
}

// XHR
// http://www.w3.org/TR/XMLHttpRequest/

native class XMLHttpRequestEventTarget extends EventTarget {
	// TODO
}

native class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
	// TODO
}

native class XMLHttpRequest extends XMLHttpRequestEventTarget {
	static const UNSENT : int;
	static const OPENED : int;
	static const HEADERS_RECEIVED : int;
	static const LOADING : int;
	static const DONE : int;

	function constructor();

	const readyState :int;

	// request

	function open(method : string, url : string) : void;
	function open(method : string, url : string, async : boolean) : void;

	function setRequestHeader(header : string, value : string) : void;

	const upload : XMLHttpRequestUpload;

	function send() : void;
	function send(data : string) : void;
	function abort() : void;

	// response

	const status : int;
	const statusText : string;
	function getResponseHeader(header : string) : string;
	function getAllResponseHeaders() : string;
	function overrideMimeType(mime : string) :void;
	const responseType : string;
	const response : variant;
	const responseText : string;
	const responseXML : Document;
}

interface CanvasRenderingContext { }

// JSX interface to DOM

final class dom {
	//static const window = js.global["window"] as __noconvert__ Window;

	static function getWindow() : Window {
		return js.global["window"] as __noconvert__ Window;
	}

	static function id(identifier : string) : HTMLElement {
		return dom.getWindow().document.getElementById(identifier)
			as __noconvert__ HTMLElement;
	}
}
