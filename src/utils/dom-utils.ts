/* eslint-disable no-undef */
function getId(element: string, parent = document) {
   return parent.getElementById(element) as HTMLElement;
}

function getClass(element: string, parent = document) {
   return parent.getElementsByClassName(element) as HTMLElement | HTMLCollectionOf<HTMLElement>;
}

function querySelect(element: string, parent = document) {
   return parent.querySelector(element) as HTMLElement;
}

function querySelectAll(element: string, parent = document) {
   return parent.querySelectorAll(element) as HTMLElement | NodeListOf<HTMLElement>;
}

function getTag(element: string, parent = document) {
   return parent.getElementsByTagName(element) as HTMLElement | HTMLCollectionOf<HTMLElement>;
}

function getElementName(element: string, parent = document) {
   return parent.getElementsByName(element) as HTMLElement | NodeListOf<HTMLElement>;
}

export { getId, getClass, querySelect, querySelectAll, getTag, getElementName };