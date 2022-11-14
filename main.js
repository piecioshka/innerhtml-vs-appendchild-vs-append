const $el1 = document.querySelector(".inner-html");
const $el2 = document.querySelector(".append-child");
const $el3 = document.querySelector(".append");
const $el4 = document.createElement("div");
const $el5 = document.createElement("div");
const $el6 = document.createElement("div");

const LIMIT = 3_000;

function doInnerHTML($container, $element) {
  $container.innerHTML += $element.outerHTML;
}
function doAppendChild($container, $element) {
  $container.appendChild($element);
}
function doAppend($container, $element) {
  $container.append($element);
}

function perform($container, operation, label) {
  const startTime = Date.now();
  for (let i = 0; i < LIMIT; i++) {
    const $element = document.createElement("span");
    operation($container, $element);
  }
  const endTime = Date.now();

  console.log(`[${label}] ${endTime - startTime} ms`);
}

function main() {
  perform($el1, doInnerHTML, "Element exists in DOM: innerHTML");
  perform($el2, doAppendChild, "Element exists in DOM: appendChild()");
  perform($el3, doAppend, "Element exists in DOM: append()");

  perform($el4, doInnerHTML, "Element does not exists in DOM: innerHTML");
  perform($el5, doAppendChild, "Element does not exists in DOM: appendChild()");
  perform($el6, doAppend, "Element does not exists in DOM: append()");
}

main();
