"use strict";
(self["webpackChunkvendor"] = self["webpackChunkvendor"] || []).push([["src_app_pages_enquiry-list_enquiry-list_module_ts"],{

/***/ 87213:
/*!******************************************************************!*\
  !*** ./src/app/pages/enquiry-list/enquiry-details/chat.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 914:
/*!************************************************************!*\
  !*** ./src/app/pages/enquiry-list/enquiry-details/data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatData": () => (/* binding */ chatData),
/* harmony export */   "chatMessagesData": () => (/* binding */ chatMessagesData)
/* harmony export */ });
const chatData = [
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Steven Franklin',
        message: 'Hey! there I\'m available',
        time: '05 min',
        color: 'secondary'
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Adam Miller',
        message: 'I\'ve finished it! See you so',
        time: '12 min',
        color: 'success'
    },
    {
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '1 hr',
        color: 'warning'
    },
    {
        name: 'Mitchel Givens',
        message: 'Hey! there I\'m available',
        time: '3 hrs',
        color: 'secondary'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Stephen Hadley',
        message: 'I\'ve finished it! See you so',
        time: '5 hrs',
        color: 'success'
    },
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '24 min',
        color: 'success'
    },
];
const chatMessagesData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];



/***/ }),

/***/ 19408:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/enquiry-list/enquiry-details/enquiry-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryDetailsComponent": () => (/* binding */ EnquiryDetailsComponent)
/* harmony export */ });
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.model */ 87213);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simplebar-angular */ 62014);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 30457);










const _c0 = ["scrollRef"];
const _c1 = function (a0) { return { "right": a0 }; };
function EnquiryDetailsComponent_li_118_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 76)(1, "div", 77)(2, "div", 33)(3, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 80)(6, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnquiryDetailsComponent_li_118_Template_a_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.copyMessage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnquiryDetailsComponent_li_118_Template_a_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.deleteMessage($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 81)(15, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, data_r4.align === "right"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.time, "");
} }
function EnquiryDetailsComponent_div_124_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "This value is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EnquiryDetailsComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnquiryDetailsComponent_div_124_span_1_Template, 2, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.form.message.errors.required);
} }
function EnquiryDetailsComponent_emoji_mart_130_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "emoji-mart", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("emojiSelect", function EnquiryDetailsComponent_emoji_mart_130_Template_emoji_mart_emojiSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.addEmoji($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
class EnquiryDetailsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.emoji = '';
        // Emoji Picker
        this.showEmojiPicker = false;
        this.sets = [
            'native',
            'google',
            'twitter',
            'facebook',
            'emojione',
            'apple',
            'messenger'
        ];
        this.set = 'twitter';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Enquiry' }, { label: 'Enquiry Details', active: true }];
        this.formData = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        this.onListScroll();
        this._fetchData();
    }
    _fetchData() {
        this.chatData = _data__WEBPACK_IMPORTED_MODULE_1__.chatData;
        this.chatMessagesData = _data__WEBPACK_IMPORTED_MODULE_1__.chatMessagesData;
    }
    /**
    * Returns form
    */
    get form() {
        return this.formData.controls;
    }
    onListScroll() {
        if (this.scrollRef !== undefined) {
            setTimeout(() => {
                this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                    this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
            }, 500);
        }
    }
    /**
     * Save the message in chat
     */
    messageSave() {
        const message = this.formData.get('message').value;
        const currentDate = new Date();
        if (this.formData.valid && message) {
            // Message Push in Chat
            this.chatMessagesData.push({
                align: 'right',
                name: 'Henry Wells',
                message,
                time: currentDate.getHours() + ':' + currentDate.getMinutes()
            });
            this.onListScroll();
            // Set Form Data Reset
            this.formData = this.formBuilder.group({
                message: null
            });
        }
        this.chatSubmit = true;
    }
    // Delete Message
    deleteMessage(event) {
        event.target.closest('li').remove();
    }
    // Copy Message
    copyMessage(event) {
        navigator.clipboard.writeText(event.target.closest('li').querySelector('p').innerHTML);
    }
    // Delete All Message
    deleteAllMessage(event) {
        var allMsgDelete = document.querySelector('.chat-conversation')?.querySelectorAll('li');
        allMsgDelete.forEach((item) => {
            item.remove();
        });
    }
    toggleEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
    }
    addEmoji(event) {
        const { emoji } = this;
        const text = `${emoji}${event.emoji.native}`;
        this.emoji = text;
        this.showEmojiPicker = false;
    }
    onFocus() {
        this.showEmojiPicker = false;
    }
    onBlur() {
    }
    closeReplay() {
        document.querySelector('.replyCard')?.classList.remove('show');
    }
}
EnquiryDetailsComponent.ɵfac = function EnquiryDetailsComponent_Factory(t) { return new (t || EnquiryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder)); };
EnquiryDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EnquiryDetailsComponent, selectors: [["app-enquiry-details"]], viewQuery: function EnquiryDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
    } }, decls: 142, vars: 9, consts: [[1, "container-fluid"], ["title", "Enquiry Details", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-3"], [1, "card", "br-2"], [1, "border-bottom", "p-4", "d-flex", "justify-content-between", "align-items-end"], [1, "fw-semibold", "text-uppercase", "mb-0"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-label", "waves-light", "p-3"], [1, "bx", "bx-envelope", "label-icon"], ["type", "button", 1, "btn", "btn-success", "btn-label", "waves-light", "p-3"], [1, "bx", "bx-phone", "label-icon"], ["type", "button", 1, "btn", "btn-danger", "btn-label", "waves-light", "p-3"], [1, "bx", "bx-trash", "label-icon"], [1, "card-body"], [1, "table-responsive"], [1, "table"], ["scope", "col", 1, "pl-0"], ["scope", "col"], ["scope", "row"], [1, "badge", "badge-soft-success"], [1, "badge", "badge-soft-info"], [1, "image", 2, "background-image", "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/74/1b/64/exterior.jpg?w=1100&h=-1&s=1')"], [1, "col-xl-9"], [1, "w-100", "user-chat"], [1, "p-4", "border-bottom"], [1, "col-md-4", "col-9"], [1, "font-size-15", "mb-1"], [1, "text-muted", "mb-0"], [1, "mdi", "mdi-circle", "text-success", "align-middle", "me-1"], [1, "col-md-8", "col-3"], [1, "list-inline", "user-chat-nav", "text-end", "mb-0"], [1, "list-inline-item", "d-none", "d-sm-inline-block"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "nav-btn", "dropdown-toggle"], [1, "bx", "bx-search-alt-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-md"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mdi", "mdi-magnify"], ["type", "button", "data-toggle", "dropdown", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "nav-btn", "dropdown-toggle"], [1, "bx", "bx-cog"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], [1, "list-inline-item"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "chat-conversation", "p-3"], [2, "height", "470px"], ["scrollRef", ""], [1, "list-unstyled"], [1, "chat-day-title"], [1, "title"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-3", "chat-input-section"], [1, "row", 3, "formGroup", "ngSubmit"], [1, "col"], [1, "position-relative"], ["type", "text", "placeholder", "Enter Message...", "formControlName", "message", 1, "form-control", "chat-input", 3, "ngClass", "ngModel", "ngModelChange", "blur", "focus"], ["class", "invalid-feedback", 4, "ngIf"], [1, "chat-input-links"], [1, "list-inline", "mb-0"], ["href", "javascript: void(0);", "data-toggle", "tooltip", "placement", "top", "ngbTooltip", "Emoji", "id", "emoji-btn", 1, "emoji-btn", 3, "click"], [1, "mdi", "mdi-emoticon-happy-outline"], ["class", "emoji-mart", "title", "Pick your emoji\u2026", 3, "emojiSelect", 4, "ngIf"], ["href", "javascript: void(0);", "data-toggle", "tooltip", "placement", "top", "ngbTooltip", "Images"], [1, "mdi", "mdi-file-image-outline"], ["href", "javascript: void(0);", "data-toggle", "tooltip", "placement", "top", "ngbTooltip", "Add Files"], [1, "mdi", "mdi-file-document-outline"], [1, "col-auto"], ["type", "submit", 1, "btn", "btn-primary", "btn-rounded", "chat-send", "w-md"], [1, "d-none", "d-sm-inline-block", "me-2"], [1, "mdi", "mdi-send"], [3, "ngClass"], [1, "conversation-list"], ["href", "javascript: void(0);", "role", "button", "ngbDropdownToggle", "", 1, "dropdown-toggle"], [1, "bx", "bx-dots-vertical-rounded"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "ctext-wrap"], [1, "conversation-name"], [1, "chat-time", "mb-0"], [1, "bx", "bx-time-five", "align-middle", "me-1"], [1, "invalid-feedback"], [4, "ngIf"], ["title", "Pick your emoji\u2026", 1, "emoji-mart", 3, "emojiSelect"]], template: function EnquiryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14)(16, "div", 15)(17, "table", 16)(18, "tbody")(19, "tr")(20, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Avinash Rathod");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tr")(25, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Nagpur");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tr")(30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Posted Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "25 June, 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "tr")(35, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "td")(38, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Null");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr")(41, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "td")(44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "tr")(47, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "This is for testing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 4)(52, "div", 5)(53, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Venue Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 14)(56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Radission Blu Hotel, Nagpur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Wardha Rd Nagpur, Maharashtra 440015 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 23)(62, "div", 24)(63, "div", 4)(64, "div", 25)(65, "div", 2)(66, "div", 26)(67, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Avinash Rathod");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Active now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 30)(73, "ul", 31)(74, "li", 32)(75, "div", 33)(76, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 36)(79, "form", 37)(80, "div", 38)(81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li", 32)(86, "div", 33)(87, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 45)(90, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Clear chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnquiryDetailsComponent_Template_a_click_96_listener($event) { return ctx.deleteAllMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "li", 48)(99, "div", 33)(100, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 45)(103, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Something else");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div")(110, "div", 50)(111, "ngx-simplebar", 51, 52)(113, "ul", 53)(114, "li")(115, "div", 54)(116, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, EnquiryDetailsComponent_li_118_Template, 22, 6, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 57)(120, "form", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EnquiryDetailsComponent_Template_form_ngSubmit_120_listener() { return ctx.messageSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 59)(122, "div", 60)(123, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EnquiryDetailsComponent_Template_input_ngModelChange_123_listener($event) { return ctx.emoji = $event; })("blur", function EnquiryDetailsComponent_Template_input_blur_123_listener() { return ctx.onBlur(); })("focus", function EnquiryDetailsComponent_Template_input_focus_123_listener() { return ctx.onFocus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](124, EnquiryDetailsComponent_div_124_Template, 2, 1, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 63)(126, "ul", 64)(127, "li", 48)(128, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnquiryDetailsComponent_Template_a_click_128_listener() { return ctx.toggleEmojiPicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](130, EnquiryDetailsComponent_emoji_mart_130_Template, 1, 0, "emoji-mart", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "li", 48)(132, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "li", 48)(135, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 72)(138, "button", 73)(139, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](141, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.chatMessagesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c2, ctx.chatSubmit && ctx.form.message.errors))("ngModel", ctx.emoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.chatSubmit && ctx.form.message.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showEmojiPicker);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, simplebar_angular__WEBPACK_IMPORTED_MODULE_7__.SimplebarAngularComponent, _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__.PickerComponent], styles: [".image[_ngcontent-%COMP%] {\n  height: 240px;\n  width: 100%;\n  border-radius: 10px;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVucXVpcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKIiwiZmlsZSI6ImVucXVpcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 54451:
/*!***********************************************************!*\
  !*** ./src/app/pages/enquiry-list/enquiry-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnquiryListModule": () => (/* binding */ EnquiryListModule),
/* harmony export */   "enquiryListRouting": () => (/* binding */ enquiryListRouting)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 19668);
/* harmony import */ var _enquiry_details_enquiry_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquiry-details/enquiry-details.component */ 19408);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simplebar-angular */ 62014);
/* harmony import */ var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ctrl/ngx-emoji-mart */ 30457);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ 78931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    { path: 'enquiry-details', component: _enquiry_details_enquiry_details_component__WEBPACK_IMPORTED_MODULE_1__.EnquiryDetailsComponent },
    { path: 'enquiries', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent }
];
const enquiryListRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes);
class EnquiryListModule {
}
EnquiryListModule.ɵfac = function EnquiryListModule_Factory(t) { return new (t || EnquiryListModule)(); };
EnquiryListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EnquiryListModule });
EnquiryListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_8__.SimplebarAngularModule,
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__.PickerModule,
        enquiryListRouting] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EnquiryListModule, { declarations: [_enquiry_details_enquiry_details_component__WEBPACK_IMPORTED_MODULE_1__.EnquiryDetailsComponent, _list_list_component__WEBPACK_IMPORTED_MODULE_2__.ListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_8__.SimplebarAngularModule,
        _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_9__.PickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 22197:
/*!*************************************************!*\
  !*** ./src/app/pages/enquiry-list/list/data.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobListdata": () => (/* binding */ JobListdata)
/* harmony export */ });
const JobListdata = [
    {
        id: 1,
        title: "Avinash Rathod",
        name: "Themesbrand",
        location: "Nagpur",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        message: "Can I visit the banquet hall and sample the food prior to booking it?",
        status: "Active",
        status_color: "success"
    },
    {
        id: 2,
        title: "Steve John",
        name: "Web Technology pvt.ltd",
        location: "Mumbai",
        experience: "1-2 Years",
        position: 3,
        type: "Part Time",
        type_color: "danger",
        posted_date: "15 June 2021",
        message: "Do non-AC banquet halls in Nagpur provide valet parking services?",
        status: "New",
        status_color: "info"
    },
    {
        id: 3,
        title: "Rohit Sharma",
        name: "Creative Agency",
        location: "Pune",
        experience: "-",
        position: 5,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        message: "Can I visit the banquet hall and sample the food prior to booking it?",
        status: "Close",
        status_color: "danger"
    },
    {
        id: 4,
        title: "Steve John",
        name: "Web Technology pvt.ltd",
        location: "Delhi",
        experience: "0-4 Years",
        position: 8,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        message: "Pune banquet hall is open to accepting any change requests in our booking?",
        status: "Active",
        status_color: "success"
    },
    {
        id: 5,
        title: "Product Sales Specialist",
        name: "Skote Technology pvt.Ltd",
        location: "Nashik",
        experience: "5+ Years",
        position: 1,
        type: "Part Time",
        type_color: "danger",
        posted_date: "02 June 2021",
        message: "Can I visit the banquet hall and sample the food prior to booking it?",
        status: "New",
        status_color: "info"
    },
    {
        id: 6,
        title: "Magento Developer",
        name: "New Technology pvt.ltd",
        location: "Lonavala",
        experience: "0-2 Years",
        position: 2,
        type: "Freelance",
        type_color: "info",
        posted_date: "02 June 2021",
        message: "Pune banquet hall is open to accepting any change requests in our booking?",
        status: "New",
        status_color: "info"
    },
    {
        id: 7,
        title: "Abhimanyu Birla",
        name: "Web Technology pvt.ltd",
        location: "Jodhpur",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        message: "Can I visit the banquet hall and sample the food prior to booking it?",
        status: "Active",
        status_color: "success"
    },
    {
        id: 8,
        title: "Ahuja Gupta",
        name: "Adobe Agency",
        location: "Hydrabad",
        experience: "0-2 Years",
        position: 2,
        type: "Full Time",
        type_color: "success",
        posted_date: "02 June 2021",
        message: "Do non-AC banquet halls in Nagpur provide valet parking services?",
        status: "Close",
        status_color: "danger"
    },
    {
        id: 9,
        title: "Mark",
        name: "Web Technology pvt.ltd",
        location: "Goa",
        experience: "0-2 Years",
        position: 2,
        type: "Part Time",
        type_color: "danger",
        posted_date: "02 June 2021",
        message: "Pune banquet hall is open to accepting any change requests in our booking?",
        status: "New",
        status_color: "info"
    },
    {
        id: 10,
        title: "Steve John",
        name: "Web Technology pvt.ltd",
        location: "Bhopal",
        experience: "0-2 Years",
        position: 2,
        type: "Internship",
        type_color: "warning",
        posted_date: "02 June 2021",
        message: "Do non-AC banquet halls in Nagpur provide valet parking services?",
        status: "Active",
        status_color: "success"
    },
];



/***/ }),

/***/ 84385:
/*!********************************************************************!*\
  !*** ./src/app/pages/enquiry-list/list/list-sortable.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdJobListSortableHeader": () => (/* binding */ NgbdJobListSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
class NgbdJobListSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}
NgbdJobListSortableHeader.ɵfac = function NgbdJobListSortableHeader_Factory(t) { return new (t || NgbdJobListSortableHeader)(); };
NgbdJobListSortableHeader.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgbdJobListSortableHeader, selectors: [["th", "sortable", ""]], hostVars: 4, hostBindings: function NgbdJobListSortableHeader_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdJobListSortableHeader_click_HostBindingHandler() { return ctx.rotate(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    } }, inputs: { sortable: "sortable", direction: "direction" }, outputs: { sort: "sort" } });


/***/ }),

/***/ 78931:
/*!***********************************************************!*\
  !*** ./src/app/pages/enquiry-list/list/list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.service */ 27283);
/* harmony import */ var _list_sortable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-sortable.directive */ 84385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 29234);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);













const _c0 = function (a0, a1, a2) {
  return {
    "bg-success": a0,
    "bg-info": a1,
    "bg-danger": a2
  };
};
function ListComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td")(12, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td")(15, "ul", 42)(16, "li", 43)(17, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 46)(20, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_tr_60_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.editDataGet(data_r1.id, ctx_r2.content));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 49)(23, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_tr_60_Template_a_click_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.delete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.posted_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](7, _c0, data_r1.status === "Active", data_r1.status === "New", data_r1.status === "Close"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.status);
  }
}
/**
 * List Component
 */
class ListComponent {
  constructor(modalService, service, formBuilder) {
    this.modalService = modalService;
    this.service = service;
    this.formBuilder = formBuilder;
    this.submitted = false;
    this.jobList = service.jobList$;
    this.total = service.total$;
  }
  ngOnInit() {
    this.breadCrumbItems = [{
      label: 'Enquiry'
    }, {
      label: 'Enquiry List',
      active: true
    }];
    /**
     * Form Validation
     */
    this.jobListForm = this.formBuilder.group({
      id: "11",
      ids: [''],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      position: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    });
    /**
    * fetches data
    */
    this.jobList.subscribe(x => {
      this.content = this.lists;
      this.lists = Object.assign([], x);
    });
  }
  /**
  * Open modal
  * @param content modal content
  */
  openViewModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev) {
    this.lists.forEach(x => x.state = ev.target.checked);
  }
  // Delete Data
  delete(event) {
    const swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        event.target.closest('tr')?.remove();
      } else if ( /* Read more about handling dismissals below */
      result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
        swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
  /**
   * Open modal
   * @param content modal content
   */
  openModal(content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
  }
  /**
   * Form data get
   */
  get form() {
    return this.jobListForm.controls;
  }
  /**
  * Save user
  */
  saveUser() {
    if (this.jobListForm.valid) {
      if (this.jobListForm.get('ids')?.value) {
        this.lists = this.lists.map(data => data.id === this.jobListForm.get('ids')?.value ? {
          ...data,
          ...this.jobListForm.value
        } : data);
      } else {
        const id = '11';
        const title = this.jobListForm.get('title')?.value;
        const name = this.jobListForm.get('name')?.value;
        const location = this.jobListForm.get('location')?.value;
        const experience = this.jobListForm.get('experience')?.value;
        const position = this.jobListForm.get('position')?.value;
        const type = this.jobListForm.get('type')?.value;
        const posted_date = "02 June 2021";
        const last_date = " Can I visit the banquet hall and sample the food prior to booking it?";
        const status = this.jobListForm.get('status')?.value;
        this.lists.push({
          id,
          title,
          name,
          location,
          experience,
          position,
          type,
          posted_date,
          last_date,
          status
        });
        this.modalService.dismissAll();
      }
    }
    this.modalService.dismissAll();
    setTimeout(() => {
      this.jobListForm.reset();
    }, 2000);
    this.submitted = true;
  }
  /**
   * Open Edit modal
   * @param content modal content
   */
  editDataGet(id, content) {
    this.submitted = false;
    this.modalService.open(content, {
      size: 'md',
      centered: true
    });
    var modelTitle = document.querySelector('.modal-title');
    modelTitle.innerHTML = 'Edit Order';
    var updateBtn = document.getElementById('add-btn');
    updateBtn.innerHTML = "Update";
    var listData = this.lists.filter(data => data.id === id);
    this.jobListForm.controls['title'].setValue(listData[0].title);
    this.jobListForm.controls['name'].setValue(listData[0].name);
    this.jobListForm.controls['location'].setValue(listData[0].location);
    this.jobListForm.controls['experience'].setValue(listData[0].experience);
    this.jobListForm.controls['position'].setValue(listData[0].position);
    this.jobListForm.controls['type'].setValue(listData[0].type);
    this.jobListForm.controls['status'].setValue(listData[0].status);
    this.jobListForm.controls['ids'].setValue(listData[0].id);
  }
}
ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_list_service__WEBPACK_IMPORTED_MODULE_1__.JobListService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder));
};
ListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ListComponent,
  selectors: [["app-list"]],
  viewQuery: function ListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_list_sortable_directive__WEBPACK_IMPORTED_MODULE_2__.NgbdJobListSortableHeader, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_list_service__WEBPACK_IMPORTED_MODULE_1__.JobListService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe])],
  decls: 81,
  vars: 12,
  consts: [[1, "container-fluid"], ["title", "Enquiry List", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card", "br-2"], [1, "card-body", "border-bottom"], [1, "col-12", "d-flex", "justify-content-end"], [1, "flex-shrink-0", "d-flex", "gap-1", "w-100", "justify-content-end"], [1, "col-xxl-3", "col-lg-6"], ["type", "search", "id", "searchInput", "placeholder", "Eg. Sumit Raghav", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-xxl-1", "col-lg-6"], [1, "form-control", "select2", 3, "ngModel", "ngModelChange"], ["value", ""], ["value", "Active"], ["value", "New"], ["value", "Close"], ["href", "javascript:void(0);", 1, "btn", "btn-light"], [1, "mdi", "mdi-refresh"], ["type", "button", 1, "btn", "btn-primary", "w-100"], [1, "mdi", "mdi-filter-outline", "align-middle"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "menu", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-success"], [1, "mdi", "mdi-dots-vertical"], ["aria-labelledby", "dropdownMenuButton1", "ngbDropdownMenu", "", 1, "dropdown-menu"], ["href", "javascript:void(0);", 1, "dropdown-item"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "align-middle", "nowrap"], ["scope", "col"], ["scope", "col", 2, "text-align", "right"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-auto", "me-auto"], [1, "text-muted", "mb-0"], [1, "col-auto"], [1, "card", "d-inline-block", "ms-auto", "mb-0"], [1, "card-body", "p-2"], ["aria-label", "Page navigation example", 1, "mb-0"], [1, "pagination", "mb-0"], [3, "collectionSize", "page", "pageSize", "pageChange"], ["scope", "row"], [1, "badge", 3, "ngClass"], [1, "list-unstyled", "hstack", "gap-1", "mb-0", "d-flex", "justify-content-end"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View"], ["routerLink", "/enquiry-details", 1, "btn", "btn-sm", "btn-soft-primary"], [1, "mdi", "mdi-eye-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit"], ["href", "javascript:void(0);", 1, "btn", "btn-sm", "btn-soft-info", 3, "click"], [1, "mdi", "mdi-pencil-outline"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete"], ["href", "javascript:void(0);", "data-bs-toggle", "modal", 1, "btn", "btn-sm", "btn-soft-danger", 3, "click"], [1, "mdi", "mdi-delete-outline"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.service.searchTerm = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10)(12, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.service.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Select Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10)(24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 20)(28, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ul", 23)(31, "li")(32, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "li")(35, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li")(38, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 25)(41, "div", 26)(42, "table", 27)(43, "thead")(44, "tr")(45, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Enquiry Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, ListComponent_tr_60_Template, 25, 11, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 31)(62, "div", 32)(63, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Showing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, " to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " entries");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 34)(75, "div", 35)(76, "div", 36)(77, "nav", 37)(78, "ul", 38)(79, "ngb-pagination", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function ListComponent_Template_ngb_pagination_pageChange_79_listener($event) {
        return ctx.service.page = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](80, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.service.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lists);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.startIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.endIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.service.totalRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](80, 10, ctx.total))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 27283:
/*!*********************************************************!*\
  !*** ./src/app/pages/enquiry-list/list/list.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobListService": () => (/* binding */ JobListService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 22197);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 25843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */






const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(jobList, column, direction) {
    if (direction === '' || column === '') {
        return jobList;
    }
    else {
        return [...jobList].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(country, term, pipe) {
    return country.title.toLowerCase().includes(term.toLowerCase());
}
class JobListService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.jobLlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this._state = {
            page: 1,
            pageSize: 8,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
            startIndex: 0,
            endIndex: 9,
            totalRecords: 0,
            status: '',
            type: '',
            date: '',
        };
        this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
            this.jobLlist$.next(result.jobList);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get jobList$() { return this.jobLlist$.asObservable(); }
    get product() { return this.products; }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    get startIndex() { return this._state.startIndex; }
    get endIndex() { return this._state.endIndex; }
    get totalRecords() { return this._state.totalRecords; }
    get status() { return this._state.status; }
    get type() { return this._state.type; }
    get date() { return this._state.date; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    set startIndex(startIndex) { this._set({ startIndex }); }
    set endIndex(endIndex) { this._set({ endIndex }); }
    set totalRecords(totalRecords) { this._set({ totalRecords }); }
    set status(status) { this._set({ status }); }
    set type(type) { this._set({ type }); }
    set date(date) { this._set({ date }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm, status, type, date } = this._state;
        // 1. sort
        let jobList = sort(_data__WEBPACK_IMPORTED_MODULE_0__.JobListdata, sortColumn, sortDirection);
        // 2. filter
        jobList = jobList.filter(country => matches(country, searchTerm, this.pipe));
        // 3. Status Filter
        if (status) {
            jobList = jobList.filter(country => country.status == status);
        }
        else {
            jobList = jobList;
        }
        // 4. Type Filter
        if (type) {
            jobList = jobList.filter(country => country.type == type);
        }
        else {
            jobList = jobList;
        }
        const total = jobList.length;
        // 3. paginate
        this.totalRecords = jobList.length;
        this._state.startIndex = (page - 1) * this.pageSize + 1;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        jobList = jobList.slice(this._state.startIndex - 1, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({ jobList, total });
    }
}
JobListService.ɵfac = function JobListService_Factory(t) { return new (t || JobListService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe)); };
JobListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JobListService, factory: JobListService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_enquiry-list_enquiry-list_module_ts.js.map