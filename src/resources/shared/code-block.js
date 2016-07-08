/* global hljs */
import {bindable, computedFrom} from 'aurelia-framework';

export class CodeBlockCustomElement {
    @bindable language;

    attached() {
        hljs.highlightBlock(this.codeBlockElement);
    }
}