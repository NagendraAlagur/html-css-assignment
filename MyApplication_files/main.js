import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts
import { bootstrapApplication } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_platform-browser.js?v=057b75e6";

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import { provideRouter } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_router.js?v=057b75e6";

// src/app/components/admin/admin.ts
import { Component } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i0 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
var Admin = class _Admin {
  firstName = "nagendra";
  courseName = "Angular 20 Tutorial";
  rollNo = 111;
  static \u0275fac = function Admin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Admin)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _Admin, selectors: [["app-admin"]], decls: 6, vars: 1, consts: [[1, "primaryColor"]], template: function Admin_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275domElementStart(0, "p");
      i0.\u0275\u0275text(1, "admin works!");
      i0.\u0275\u0275domElementEnd();
      i0.\u0275\u0275domElementStart(2, "h1");
      i0.\u0275\u0275text(3, "Admin page");
      i0.\u0275\u0275domElementEnd();
      i0.\u0275\u0275domElementStart(4, "div", 0);
      i0.\u0275\u0275text(5);
      i0.\u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275textInterpolate(ctx.firstName);
    }
  }, styles: ["\n.primaryColor[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=admin.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Admin, [{
    type: Component,
    args: [{ selector: "app-admin", imports: [], template: '<p>admin works!</p>\n<h1>Admin page</h1>\n\n\n\n<div class="primaryColor">{{firstName}}</div>\n', styles: ["/* src/app/components/admin/admin.css */\n.primaryColor {\n  color: red;\n}\n/*# sourceMappingURL=admin.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(Admin, { className: "Admin", filePath: "src/app/components/admin/admin.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fadmin%2Fadmin.ts%40Admin";
  function Admin_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(Admin, m.default, [i0], [Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Admin_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Admin_HmrLoad(d.timestamp)));
})();

// src/app/components/control-flow/control-flow.ts
import { Component as Component2 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import { FormsModule } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?v=057b75e6";
import * as i02 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i1 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?v=057b75e6";
function ControlFlow_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "p");
    i02.\u0275\u0275text(1, "This is Simple para");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "h3");
    i02.\u0275\u0275text(1, "ParaVisiable has false value");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "span");
    i02.\u0275\u0275text(1, "januwary");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "span");
    i02.\u0275\u0275text(1, "Feburay");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "span");
    i02.\u0275\u0275text(1, "March");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "span");
    i02.\u0275\u0275text(1, "April ");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "p");
    i02.\u0275\u0275text(1, "wrong input");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_For_24_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "li");
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(item_r1);
  }
}
function ControlFlow_For_28_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "option", 4);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(item_r2);
  }
}
function ControlFlow_For_43_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "h6");
    i02.\u0275\u0275text(1, "Active");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_For_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "h6");
    i02.\u0275\u0275text(1, "De-Active");
    i02.\u0275\u0275elementEnd();
  }
}
function ControlFlow_For_43_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "tr")(1, "td");
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "td");
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "td");
    i02.\u0275\u0275text(6);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(7, "td");
    i02.\u0275\u0275conditionalCreate(8, ControlFlow_For_43_Conditional_8_Template, 2, 0, "h6")(9, ControlFlow_For_43_Conditional_9_Template, 2, 0, "h6");
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate($index_r4 + 1);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(item_r3.name);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(item_r3.city);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275conditional(item_r3.isActive == true ? 8 : 9);
  }
}
var ControlFlow = class _ControlFlow {
  isParaVisiable = true;
  startMonthName = "feb";
  citList = ["pune", "mumbai", "panji", "nagpur"];
  studentList = [
    { name: "nagu", city: "harugeri", isActive: false },
    { name: "vasu", city: "teradala", isActive: false },
    { name: "sonali", city: "belagavi", isActive: true },
    { name: "preethi", city: "athani", isActive: false }
  ];
  showP() {
    this.isParaVisiable = true;
  }
  hideP() {
    this.isParaVisiable = false;
  }
  static \u0275fac = function ControlFlow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ControlFlow)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _ControlFlow, selectors: [["app-control-flow"]], decls: 44, vars: 3, consts: [[1, "btn", "btn-primary", 3, "click"], [3, "click"], ["type", "text", 3, "ngModelChange", "ngModel"], ["name", "", "id", ""], ["value", ""]], template: function ControlFlow_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "table")(1, "tr")(2, "td");
      i02.\u0275\u0275conditionalCreate(3, ControlFlow_Conditional_3_Template, 2, 0, "p")(4, ControlFlow_Conditional_4_Template, 2, 0, "h3");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(5, "td")(6, "button", 0);
      i02.\u0275\u0275listener("click", function ControlFlow_Template_button_click_6_listener() {
        return ctx.showP();
      });
      i02.\u0275\u0275text(7, "show P");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(8, "td")(9, "button", 1);
      i02.\u0275\u0275listener("click", function ControlFlow_Template_button_click_9_listener() {
        return ctx.hideP();
      });
      i02.\u0275\u0275text(10, "Hide P");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(11, "tr")(12, "td");
      i02.\u0275\u0275conditionalCreate(13, ControlFlow_Conditional_13_Template, 2, 0, "span")(14, ControlFlow_Conditional_14_Template, 2, 0, "span")(15, ControlFlow_Conditional_15_Template, 2, 0, "span")(16, ControlFlow_Conditional_16_Template, 2, 0, "span")(17, ControlFlow_Conditional_17_Template, 2, 0, "p");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(18, "td")(19, "input", 2);
      i02.\u0275\u0275twoWayListener("ngModelChange", function ControlFlow_Template_input_ngModelChange_19_listener($event) {
        i02.\u0275\u0275twoWayBindingSet(ctx.startMonthName, $event) || (ctx.startMonthName = $event);
        return $event;
      });
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(20, "tr")(21, "td")(22, "ul");
      i02.\u0275\u0275repeaterCreate(23, ControlFlow_For_24_Template, 2, 1, "li", null, i02.\u0275\u0275repeaterTrackByIndex);
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(25, "td")(26, "select", 3);
      i02.\u0275\u0275repeaterCreate(27, ControlFlow_For_28_Template, 2, 1, "option", 4, i02.\u0275\u0275repeaterTrackByIndex);
      i02.\u0275\u0275elementEnd()()()();
      i02.\u0275\u0275element(29, "br");
      i02.\u0275\u0275elementStart(30, "table")(31, "thead")(32, "tr")(33, "th");
      i02.\u0275\u0275text(34, "Sr NO");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(35, "th");
      i02.\u0275\u0275text(36, "Name");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(37, "th");
      i02.\u0275\u0275text(38, "City");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(39, "th");
      i02.\u0275\u0275text(40, "Status");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(41, "tbody");
      i02.\u0275\u0275repeaterCreate(42, ControlFlow_For_43_Template, 10, 4, "tr", null, i02.\u0275\u0275repeaterTrackByIndex);
      i02.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(3);
      i02.\u0275\u0275conditional(ctx.isParaVisiable === true ? 3 : 4);
      i02.\u0275\u0275advance(10);
      i02.\u0275\u0275conditional(ctx.startMonthName ? 13 : ctx.startMonthName == "feb" ? 14 : ctx.startMonthName == "mrc" ? 15 : ctx.startMonthName == "apr" ? 16 : 17);
      i02.\u0275\u0275advance(6);
      i02.\u0275\u0275twoWayProperty("ngModel", ctx.startMonthName);
      i02.\u0275\u0275advance(4);
      i02.\u0275\u0275repeater(ctx.citList);
      i02.\u0275\u0275advance(4);
      i02.\u0275\u0275repeater(ctx.citList);
      i02.\u0275\u0275advance(15);
      i02.\u0275\u0275repeater(ctx.studentList);
    }
  }, dependencies: [FormsModule, i1.\u0275NgNoValidate, i1.NgSelectOption, i1.\u0275NgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(ControlFlow, [{
    type: Component2,
    args: [{ selector: "app-control-flow", imports: [FormsModule], template: `<table>
  <tr>
    <td>
      @if (isParaVisiable === true) {
        <p>This is Simple para</p>
      } @else {
        <h3>ParaVisiable has false value</h3>
      }
    </td>
    <td>
      <button class="btn btn-primary" (click)="showP()">show P</button>
    </td>
    <td>
      <button (click)="hideP()">Hide P</button>
    </td>
  </tr>

  <tr>
    <td>
      @if (startMonthName) {
        <span>januwary</span>
      } @else if (startMonthName == 'feb') {
        <span>Feburay</span>
      } @else if (startMonthName == 'mrc') {
        <span>March</span>
      } @else if (startMonthName == 'apr') {
        <span>April </span>
      } @else {
        <p>wrong input</p>
      }
    </td>
    <td>
      <input type="text" [(ngModel)]="startMonthName" />
    </td>
  </tr>

  <tr>
    <td>
      <ul>
        @for (item of citList; track $index) {
          <li>{{ item }}</li>
        }
      </ul>
    </td>

    <td>
      <select name="" id="">
        @for (item of citList; track $index) {
          <option value="">{{ item }}</option>
        }
      </select>
    </td>
  </tr>
</table>

<br />

<table>
  <thead>
    <tr>
      <th>Sr NO</th>
      <th>Name</th>
      <th>City</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    @for (item of studentList; track $index) {
      <tr>
        <td>{{ $index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.city }}</td>
        <td>
          @if (item.isActive == true) {
            <h6>Active</h6>
          } @else {
            <h6>De-Active</h6>
          }
        </td>
      </tr>
    }
  </tbody>
</table>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(ControlFlow, { className: "ControlFlow", filePath: "src/app/components/control-flow/control-flow.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fcontrol-flow%2Fcontrol-flow.ts%40ControlFlow";
  function ControlFlow_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(ControlFlow, m.default, [i02, i1], [FormsModule, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ControlFlow_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ControlFlow_HmrLoad(d.timestamp)));
})();

// src/app/components/data-binding/data-binding.ts
import { Component as Component3 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import { FormsModule as FormsModule2 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?v=057b75e6";
import * as i03 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i12 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?v=057b75e6";
var DataBinding = class _DataBinding {
  courseName = "myApplication";
  productPrice = 12599;
  maxlength = 5;
  minchar = 3;
  inputType = "checkbox";
  myClassName = "myColor";
  constructor() {
  }
  showWelcomeMessage() {
    alert("welcome to my application");
  }
  changeCourseName() {
    this.courseName = "Reactjs Tutorial";
  }
  onCityChange() {
    alert("city changed");
  }
  static \u0275fac = function DataBinding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataBinding)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _DataBinding, selectors: [["app-data-binding"]], decls: 35, vars: 11, consts: [[2, "width", "100%"], ["type", "text", 3, "value"], [3, "type", "max", "minLength"], [3, "click"], [3, "change"], ["value", ""], ["type", "text", 3, "ngModelChange", "ngModel"]], template: function DataBinding_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "table", 0)(1, "tr")(2, "td");
      i03.\u0275\u0275text(3);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(4, "td");
      i03.\u0275\u0275text(5);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(6, "td")(7, "div");
      i03.\u0275\u0275text(8);
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(9, "td");
      i03.\u0275\u0275element(10, "input", 1);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(11, "td");
      i03.\u0275\u0275element(12, "input", 2);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(13, "td")(14, "p");
      i03.\u0275\u0275text(15, "This is Sample Para");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(16, "tr")(17, "td")(18, "button", 3);
      i03.\u0275\u0275listener("click", function DataBinding_Template_button_click_18_listener() {
        return ctx.showWelcomeMessage();
      });
      i03.\u0275\u0275text(19, "Show message");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(20, "tr")(21, "td")(22, "button", 3);
      i03.\u0275\u0275listener("click", function DataBinding_Template_button_click_22_listener() {
        return ctx.changeCourseName();
      });
      i03.\u0275\u0275text(23, "Change course");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(24, "td")(25, "select", 4);
      i03.\u0275\u0275listener("change", function DataBinding_Template_select_change_25_listener() {
        return ctx.onCityChange();
      });
      i03.\u0275\u0275elementStart(26, "option", 5);
      i03.\u0275\u0275text(27, "Pune");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(28, "option", 5);
      i03.\u0275\u0275text(29, "Nagapur");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(30, "option", 5);
      i03.\u0275\u0275text(31, "Mumbai");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(32, "td")(33, "tr")(34, "input", 6);
      i03.\u0275\u0275twoWayListener("ngModelChange", function DataBinding_Template_input_ngModelChange_34_listener($event) {
        i03.\u0275\u0275twoWayBindingSet(ctx.courseName, $event) || (ctx.courseName = $event);
        return $event;
      });
      i03.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275textInterpolate1(" ", ctx.courseName, " ");
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275textInterpolate1(" ", ctx.productPrice, " ");
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275textInterpolate(ctx.courseName);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("value", i03.\u0275\u0275interpolate(ctx.courseName));
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("type", ctx.inputType)("max", ctx.maxlength)("minLength", ctx.minchar);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275classMap(ctx.myClassName);
      i03.\u0275\u0275advance(20);
      i03.\u0275\u0275twoWayProperty("ngModel", ctx.courseName);
    }
  }, dependencies: [FormsModule2, i12.\u0275NgNoValidate, i12.NgSelectOption, i12.\u0275NgSelectMultipleOption, i12.DefaultValueAccessor, i12.NumberValueAccessor, i12.RangeValueAccessor, i12.CheckboxControlValueAccessor, i12.SelectControlValueAccessor, i12.SelectMultipleControlValueAccessor, i12.RadioControlValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.RequiredValidator, i12.MinLengthValidator, i12.MaxLengthValidator, i12.PatternValidator, i12.CheckboxRequiredValidator, i12.EmailValidator, i12.MinValidator, i12.MaxValidator, i12.NgModel, i12.NgModelGroup, i12.NgForm], styles: ["\n.myColor[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data-binding.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(DataBinding, [{
    type: Component3,
    args: [{ selector: "app-data-binding", imports: [FormsModule2], template: '<table style="width: 100%">\n  <tr>\n    <td>\n      {{ courseName }}\n    </td>\n\n    <td>\n      {{ productPrice }}\n    </td>\n    <td>\n      <div>{{ courseName }}</div>\n    </td>\n  </tr>\n\n  <td>\n    <input type="text" value="{{ courseName }}" />\n  </td>\n\n  <td>\n    <input [type]="inputType" [max]="maxlength" [minLength]="minchar" />\n  </td>\n  <td>\n    <p [class]="myClassName">This is Sample Para</p>\n  </td>\n  <tr>\n    <td>\n      <button (click)="showWelcomeMessage()">Show message</button>\n    </td>\n  </tr>\n\n  <tr>\n    <td>\n      <button (click)="changeCourseName()">Change course</button>\n    </td>\n  </tr>\n\n  <td>\n    <select (change)="onCityChange()">\n      <option value="">Pune</option>\n      <option value="">Nagapur</option>\n      <option value="">Mumbai</option>\n    </select>\n  </td>\n\n  <td>\n    <tr>\n      <input type="text" [(ngModel)]="courseName">\n    </tr>\n  </td>\n</table>\n', styles: ["/* src/app/components/data-binding/data-binding.css */\n.myColor {\n  color: red;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data-binding.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(DataBinding, { className: "DataBinding", filePath: "src/app/components/data-binding/data-binding.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fdata-binding%2Fdata-binding.ts%40DataBinding";
  function DataBinding_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(DataBinding, m.default, [i03, i12], [FormsModule2, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DataBinding_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DataBinding_HmrLoad(d.timestamp)));
})();

// src/app/components/signal-ex/signal-ex.ts
import { Component as Component4, signal, computed } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i04 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
var SignalEx = class _SignalEx {
  firstName = "Nagendra";
  productName = "Moto";
  courseName = signal("Angular", ...ngDevMode ? [{ debugName: "courseName" }] : (
    /* istanbul ignore next */
    []
  ));
  courseDuration = signal("15 videos", ...ngDevMode ? [{ debugName: "courseDuration" }] : (
    /* istanbul ignore next */
    []
  ));
  courseDetail = computed(() => this.courseName() + "-" + this.courseDuration(), ...ngDevMode ? [{ debugName: "courseDetail" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.firstName = "vasu";
    console.log(this.firstName);
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React");
    }, 5e3);
    console.log(this.courseName());
  }
  static \u0275fac = function SignalEx_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignalEx)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _SignalEx, selectors: [["app-signal-ex"]], decls: 9, vars: 3, template: function SignalEx_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275domElementStart(0, "p");
      i04.\u0275\u0275text(1, "signal-ex works!");
      i04.\u0275\u0275domElementEnd();
      i04.\u0275\u0275domElementStart(2, "span");
      i04.\u0275\u0275text(3);
      i04.\u0275\u0275domElementEnd();
      i04.\u0275\u0275domElement(4, "br");
      i04.\u0275\u0275domElementStart(5, "span");
      i04.\u0275\u0275text(6);
      i04.\u0275\u0275domElementEnd();
      i04.\u0275\u0275domElementStart(7, "h1");
      i04.\u0275\u0275text(8);
      i04.\u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(3);
      i04.\u0275\u0275textInterpolate(ctx.firstName);
      i04.\u0275\u0275advance(3);
      i04.\u0275\u0275textInterpolate(ctx.courseName());
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275textInterpolate(ctx.courseDetail());
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(SignalEx, [{
    type: Component4,
    args: [{ selector: "app-signal-ex", imports: [], template: "<p>signal-ex works!</p>\n\n\n<span>{{firstName}}</span>\n\n<br>\n <span>{{courseName()}}</span>\n\n <h1>{{courseDetail()}}</h1>" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(SignalEx, { className: "SignalEx", filePath: "src/app/components/signal-ex/signal-ex.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fsignal-ex%2Fsignal-ex.ts%40SignalEx";
  function SignalEx_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(SignalEx, m.default, [i04], [Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && SignalEx_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SignalEx_HmrLoad(d.timestamp)));
})();

// src/app/components/user/user.ts
import { Component as Component5 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i05 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
var User = class _User {
  static \u0275fac = function User_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _User)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _User, selectors: [["app-user"]], decls: 3, vars: 0, consts: [["type", "text", "placeholder", "Name"]], template: function User_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275domElementStart(0, "p");
      i05.\u0275\u0275text(1, "user works!");
      i05.\u0275\u0275domElementEnd();
      i05.\u0275\u0275domElement(2, "input", 0);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(User, [{
    type: Component5,
    args: [{ selector: "app-user", imports: [], template: '<p>user works!</p>\n\n<input type="text" placeholder="Name">\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(User, { className: "User", filePath: "src/app/components/user/user.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fuser%2Fuser.ts%40User";
  function User_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(User, m.default, [i05], [Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && User_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && User_HmrLoad(d.timestamp)));
})();

// src/app/components/att-directive/att-directive.ts
import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_common.js?v=057b75e6";
import { Component as Component6, signal as signal2 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i06 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
var _c0 = (a0) => ({ "background-color": a0 });
var AttDirective = class _AttDirective {
  Div1ClassName = signal2("", ...ngDevMode ? [{ debugName: "Div1ClassName" }] : (
    /* istanbul ignore next */
    []
  ));
  firstName = "nagendra";
  courseName = "angular20 tutorial";
  rollNoList = [11, 12, 13, 14, 15, 16, 17];
  isDiv2Green = false;
  currentDate = /* @__PURE__ */ new Date();
  studentObj = {
    name: "Nagendra",
    city: "belagavi",
    state: "karnataka"
  };
  constructor() {
    console.log("constructor");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
  ngAfterViewChecked() {
    console.log(" ngAfterViewChecked");
  }
  ngAfterContentInit() {
    console.log(" ngAfterContentInit");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
  setBgClass(className) {
    this.Div1ClassName.set(className);
  }
  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
  static \u0275fac = function AttDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttDirective)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _AttDirective, selectors: [["app-att-directive"]], decls: 52, vars: 36, consts: [[1, "row"], [1, "col-3"], [1, "p-3", 3, "ngClass"], [1, "p-3", 3, "ngStyle"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "clo-3"]], template: function AttDirective_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i06.\u0275\u0275text(3);
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(4, "div", 1)(5, "div", 3);
      i06.\u0275\u0275text(6, " Div 2 ");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(7, "div", 0)(8, "div", 1)(9, "button", 4);
      i06.\u0275\u0275listener("click", function AttDirective_Template_button_click_9_listener() {
        return ctx.setBgClass("bg-success");
      });
      i06.\u0275\u0275text(10, "Green");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(11, "button", 5);
      i06.\u0275\u0275listener("click", function AttDirective_Template_button_click_11_listener() {
        return ctx.setBgClass("bg-danger");
      });
      i06.\u0275\u0275text(12, "Red");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(13, "div", 1)(14, "button", 4);
      i06.\u0275\u0275listener("click", function AttDirective_Template_button_click_14_listener() {
        return ctx.toggleDiv2Color();
      });
      i06.\u0275\u0275text(15, "Toggle BG Color");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(16, "div", 0)(17, "div", 6);
      i06.\u0275\u0275text(18);
      i06.\u0275\u0275pipe(19, "uppercase");
      i06.\u0275\u0275element(20, "br");
      i06.\u0275\u0275text(21);
      i06.\u0275\u0275pipe(22, "uppercase");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(23, "div", 0)(24, "div", 6);
      i06.\u0275\u0275text(25);
      i06.\u0275\u0275element(26, "br");
      i06.\u0275\u0275text(27);
      i06.\u0275\u0275pipe(28, "lowercase");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(29, "div", 0)(30, "div", 6);
      i06.\u0275\u0275text(31);
      i06.\u0275\u0275element(32, "br");
      i06.\u0275\u0275text(33);
      i06.\u0275\u0275pipe(34, "titlecase");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(35, "div", 0)(36, "div", 6);
      i06.\u0275\u0275text(37);
      i06.\u0275\u0275element(38, "br");
      i06.\u0275\u0275text(39);
      i06.\u0275\u0275pipe(40, "slice");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(41, "div", 1);
      i06.\u0275\u0275text(42);
      i06.\u0275\u0275pipe(43, "json");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(44, "div", 1);
      i06.\u0275\u0275text(45);
      i06.\u0275\u0275element(46, "br");
      i06.\u0275\u0275text(47);
      i06.\u0275\u0275pipe(48, "date");
      i06.\u0275\u0275element(49, "br");
      i06.\u0275\u0275text(50);
      i06.\u0275\u0275pipe(51, "date");
      i06.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275property("ngClass", ctx.Div1ClassName());
      i06.\u0275\u0275advance();
      i06.\u0275\u0275textInterpolate1("Div 1 - ", ctx.Div1ClassName());
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275property("ngStyle", i06.\u0275\u0275pureFunction1(34, _c0, ctx.isDiv2Green == true ? "blue" : "rad"));
      i06.\u0275\u0275advance(13);
      i06.\u0275\u0275textInterpolate1(" firsName => ", i06.\u0275\u0275pipeBind1(19, 15, ctx.firstName), " ");
      i06.\u0275\u0275advance(3);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind1(22, 17, ctx.firstName), " ");
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275textInterpolate1(" firsName => ", ctx.courseName, " ");
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind1(28, 19, ctx.courseName), " ");
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275textInterpolate1(" firsName => ", ctx.courseName, " ");
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind1(34, 21, ctx.courseName), " ");
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275textInterpolate1(" rollNoList => ", ctx.rollNoList, " ");
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind3(40, 23, ctx.rollNoList, 4, 6), " ");
      i06.\u0275\u0275advance(3);
      i06.\u0275\u0275textInterpolate1("studentObj => ", i06.\u0275\u0275pipeBind1(43, 27, ctx.studentObj));
      i06.\u0275\u0275advance(3);
      i06.\u0275\u0275textInterpolate1(" currentDate => ", ctx.currentDate, " ");
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind1(48, 29, ctx.currentDate), " ");
      i06.\u0275\u0275advance(3);
      i06.\u0275\u0275textInterpolate1(" ", i06.\u0275\u0275pipeBind2(51, 31, ctx.currentDate, "dd-MM-yyyy"), " ");
    }
  }, dependencies: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(AttDirective, [{
    type: Component6,
    args: [{ selector: "app-att-directive", imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe], template: `<div class="row">
  <div class="col-3">
    <div class="p-3" [ngClass]="Div1ClassName()">Div 1 - {{ Div1ClassName() }}</div>
  </div>

  <div class="col-3">
    <div class="p-3" [ngStyle]="{ 'background-color': isDiv2Green == true ? 'blue' : 'rad' }">
      Div 2
    </div>
  </div>
</div>

<div class="row">
  <div class="col-3">
    <button class="btn btn-success" (click)="setBgClass('bg-success')">Green</button>
    <button class="btn btn-danger" (click)="setBgClass('bg-danger')">Red</button>
  </div>

  <div class="col-3">
    <button class="btn btn-success" (click)="toggleDiv2Color()">Toggle BG Color</button>
  </div>
</div>

<div class="row">
  <div class="clo-3">
    firsName => {{ firstName | uppercase }}
    <br />
    {{ firstName | uppercase }}
  </div>
</div>

<div class="row">
  <div class="clo-3">
    firsName => {{ courseName }}
    <br />
    {{ courseName | lowercase }}
  </div>
</div>

<div class="row">
  <div class="clo-3">
    firsName => {{ courseName }}
    <br />
    {{ courseName | titlecase }}
  </div>
</div>

<div class="row">
  <div class="clo-3">
    rollNoList => {{ rollNoList }}
    <br />
    {{ rollNoList | slice: 4 : 6 }}
  </div>

  <div class="col-3">studentObj => {{ studentObj | json }}</div>

  <div class="col-3">
    currentDate => {{ currentDate }}
    <br />
    {{ currentDate | date }}
    <br />
    {{ currentDate | date: 'dd-MM-yyyy' }}
  </div>
</div>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(AttDirective, { className: "AttDirective", filePath: "src/app/components/att-directive/att-directive.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fatt-directive%2Fatt-directive.ts%40AttDirective";
  function AttDirective_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(AttDirective, m.default, [i06], [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AttDirective_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AttDirective_HmrLoad(d.timestamp)));
})();

// src/app/get-api/get-api.ts
import { HttpClient } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_common_http.js?v=057b75e6";
import { Component as Component7, inject } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import * as i07 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
function GetApi_For_15_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275domElementStart(0, "tr")(1, "td");
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(3, "td");
    i07.\u0275\u0275text(4);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(5, "td");
    i07.\u0275\u0275text(6);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(7, "td");
    i07.\u0275\u0275text(8);
    i07.\u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r1.userId);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r1.id);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r1.title);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r1.completed);
  }
}
function GetApi_For_19_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275domElementStart(0, "li");
    i07.\u0275\u0275text(1);
    i07.\u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i07.\u0275\u0275advance();
    i07.\u0275\u0275textInterpolate1(" ", item_r2.title, " ");
  }
}
function GetApi_For_35_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275domElementStart(0, "tr")(1, "td");
    i07.\u0275\u0275text(2);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(3, "td");
    i07.\u0275\u0275text(4);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(5, "td");
    i07.\u0275\u0275text(6);
    i07.\u0275\u0275domElementEnd();
    i07.\u0275\u0275domElementStart(7, "td");
    i07.\u0275\u0275text(8);
    i07.\u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r3.userId);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r3.userName);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r3.role);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate(item_r3.fullName);
  }
}
var GetApi = class _GetApi {
  http = inject(HttpClient);
  userList = [];
  todoList = [];
  busUserList = [];
  ngOnInit() {
    debugger;
    this.getusers();
    this.getTodoItems();
    this.getAllBusBookingUser();
  }
  getusers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result) => {
      this.userList = result.data;
    });
  }
  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((Response) => {
      this.todoList = Response;
    });
  }
  getAllBusBookingUser() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res) => {
      this.busUserList = res.data;
    });
  }
  static \u0275fac = function GetApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetApi)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _GetApi, selectors: [["app-get-api"]], decls: 36, vars: 0, consts: [[1, "row"], ["table-responsive", "", 1, "col-4"], [1, "table", "table-border"]], template: function GetApi_Template(rf, ctx) {
    if (rf & 1) {
      i07.\u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "thead")(4, "tr")(5, "th");
      i07.\u0275\u0275text(6, "userId");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(7, "th");
      i07.\u0275\u0275text(8, "id");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(9, "th");
      i07.\u0275\u0275text(10, "title");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(11, "th");
      i07.\u0275\u0275text(12, "Email");
      i07.\u0275\u0275domElementEnd()()();
      i07.\u0275\u0275domElementStart(13, "tbody");
      i07.\u0275\u0275repeaterCreate(14, GetApi_For_15_Template, 9, 4, "tr", null, i07.\u0275\u0275repeaterTrackByIndex);
      i07.\u0275\u0275domElementEnd()()()();
      i07.\u0275\u0275domElementStart(16, "div", 1)(17, "ul");
      i07.\u0275\u0275repeaterCreate(18, GetApi_For_19_Template, 2, 1, "li", null, i07.\u0275\u0275repeaterTrackByIndex);
      i07.\u0275\u0275domElementEnd()();
      i07.\u0275\u0275domElementStart(20, "div", 0)(21, "div", 1)(22, "table", 2)(23, "thead")(24, "tr")(25, "th");
      i07.\u0275\u0275text(26, "User Id");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(27, "th");
      i07.\u0275\u0275text(28, "User Name");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(29, "th");
      i07.\u0275\u0275text(30, "Role");
      i07.\u0275\u0275domElementEnd();
      i07.\u0275\u0275domElementStart(31, "th");
      i07.\u0275\u0275text(32, "Full Name");
      i07.\u0275\u0275domElementEnd()()();
      i07.\u0275\u0275domElementStart(33, "tbody");
      i07.\u0275\u0275repeaterCreate(34, GetApi_For_35_Template, 9, 4, "tr", null, i07.\u0275\u0275repeaterTrackByIndex);
      i07.\u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      i07.\u0275\u0275advance(14);
      i07.\u0275\u0275repeater(ctx.userList);
      i07.\u0275\u0275advance(4);
      i07.\u0275\u0275repeater(ctx.todoList);
      i07.\u0275\u0275advance(16);
      i07.\u0275\u0275repeater(ctx.busUserList);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(GetApi, [{
    type: Component7,
    args: [{ selector: "app-get-api", imports: [], template: '<div class="row">\n  <div class="col-4" table-responsive>\n    <table class="table table-border">\n      <thead>\n        <tr>\n          <th>userId</th>\n          <th>id</th>\n          <th>title</th>\n          <th>Email</th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (item of userList; track $index) {\n          <tr>\n            <td>{{ item.userId }}</td>\n            <td>{{ item.id }}</td>\n            <td>{{ item.title }}</td>\n            <td>{{ item.completed }}</td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n<div class="col-4" table-responsive>\n  <ul>\n    @for (item of todoList; track $index) {\n      <li>\n        {{ item.title }}\n      </li>\n    }\n  </ul>\n</div>\n\n\n\n<div class="row">\n  <div class="col-4" table-responsive>\n    <table class="table table-border">\n      <thead>\n        <tr>\n          <th>User Id</th>\n          <th>User Name</th>\n          <th>Role</th>\n          <th>Full Name</th>\n        </tr>\n      </thead>\n      <tbody>\n        @for (item of busUserList; track $index) {\n          <tr>\n            <td>{{ item.userId }}</td>\n            <td>{{ item.userName}}</td>\n            <td>{{ item.role}}</td>\n            <td>{{ item.fullName}}</td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(GetApi, { className: "GetApi", filePath: "src/app/get-api/get-api.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fget-api%2Fget-api.ts%40GetApi";
  function GetApi_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(GetApi, m.default, [i07], [Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && GetApi_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && GetApi_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "Admin",
    component: Admin
  },
  {
    path: "control-flow",
    component: ControlFlow
  },
  {
    path: "data-binding",
    component: DataBinding
  },
  {
    path: "signal-ex",
    component: SignalEx
  },
  {
    path: "user",
    component: User
  },
  {
    path: "Attribute-dir",
    component: AttDirective
  },
  {
    path: "get-api",
    component: GetApi
  }
];

// src/app/app.config.ts
import { provideHttpClient } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_common_http.js?v=057b75e6";
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/app.ts
import { Component as Component8, signal as signal3 } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
import { RouterLink, RouterOutlet } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_router.js?v=057b75e6";
import * as i08 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=057b75e6";
var App = class _App {
  title = signal3("myApplication", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 22, vars: 0, consts: [[1, "navbar", "navbar-expand-sm", "bg-light", "navabar-dark"], [1, "container-fluid"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "Admin", 1, "nav-link", "active"], ["routerLink", "control-flow", 1, "nav-link"], ["routerLink", "data-binding", 1, "nav-link"], ["routerLink", "signal", 1, "nav-link"], ["routerLink", "Attribute-dir", 1, "nav-link"], ["routerLink", "get-api", 1, "nav-link"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
      i08.\u0275\u0275text(5, "Admin");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(6, "li", 3)(7, "a", 5);
      i08.\u0275\u0275text(8, "Control-Flow");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(9, "li", 3)(10, "a", 6);
      i08.\u0275\u0275text(11, "Data-Binding");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(12, "li", 3)(13, "a", 7);
      i08.\u0275\u0275text(14, "Signal");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(15, "li", 3)(16, "a", 8);
      i08.\u0275\u0275text(17, "Directive");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(18, "li", 3)(19, "a", 9);
      i08.\u0275\u0275text(20, "Get-Api ");
      i08.\u0275\u0275elementEnd()()()()();
      i08.\u0275\u0275element(21, "router-outlet");
    }
  }, dependencies: [ControlFlow, RouterLink, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(App, [{
    type: Component8,
    args: [{ selector: "app-root", imports: [ControlFlow, RouterLink, RouterOutlet], template: '<nav class="navbar navbar-expand-sm bg-light navabar-dark">\n  <div class="container-fluid">\n    <ul class="navbar-nav">\n      <li class="nav-item">\n        <a class="nav-link active" routerLink="Admin">Admin</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLink="control-flow">Control-Flow</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLink="data-binding">Data-Binding</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLink="signal">Signal</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLink="Attribute-dir">Directive</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" routerLink="get-api">Get-Api </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(App, m.default, [i08], [ControlFlow, RouterLink, RouterOutlet, Component8], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1mbG93L2NvbnRyb2wtZmxvdy50cyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWZsb3cvY29udHJvbC1mbG93Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGF0YS1iaW5kaW5nL2RhdGEtYmluZGluZy50cyIsInNyYy9hcHAvY29tcG9uZW50cy9kYXRhLWJpbmRpbmcvZGF0YS1iaW5kaW5nLmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmFsLWV4L3NpZ25hbC1leC50cyIsInNyYy9hcHAvY29tcG9uZW50cy9zaWduYWwtZXgvc2lnbmFsLWV4Lmh0bWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLnRzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2F0dC1kaXJlY3RpdmUvYXR0LWRpcmVjdGl2ZS50cyIsInNyYy9hcHAvY29tcG9uZW50cy9hdHQtZGlyZWN0aXZlL2F0dC1kaXJlY3RpdmUuaHRtbCIsInNyYy9hcHAvZ2V0LWFwaS9nZXQtYXBpLnRzIiwic3JjL2FwcC9nZXQtYXBpL2dldC1hcGkuaHRtbCIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLnRzIiwic3JjL2FwcC9hcHAuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHAsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZywgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMoKSxcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcyksXG4gICAgcHJvdmlkZUh0dHBDbGllbnQoKSxcbiAgXVxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWRtaW4nLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLmh0bWwnLFxuICBzdHlsZVVybDogJy4vYWRtaW4uY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW4ge1xuICBmaXJzdE5hbWU9XCJuYWdlbmRyYVwiO1xuICBjb3Vyc2VOYW1lPVwiQW5ndWxhciAyMCBUdXRvcmlhbFwiO1xuICByb2xsTm89IDExMTtcblxufVxuIiwiPHA+YWRtaW4gd29ya3MhPC9wPlxuPGgxPkFkbWluIHBhZ2U8L2gxPlxuXG5cblxuPGRpdiBjbGFzcz1cInByaW1hcnlDb2xvclwiPnt7Zmlyc3ROYW1lfX08L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb250cm9sLWZsb3cnLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wtZmxvdy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvbnRyb2wtZmxvdy5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sRmxvdyB7XG5cbiAgaXNQYXJhVmlzaWFibGU6IGJvb2xlYW49dHJ1ZTtcblxuICBzdGFydE1vbnRoTmFtZTogc3RyaW5nID1cImZlYlwiO1xuXG4gIGNpdExpc3QgOnN0cmluZ1tdPVtcInB1bmVcIixcIm11bWJhaVwiLFwicGFuamlcIixcIm5hZ3B1clwiXTtcblxuICBzdHVkZW50TGlzdDogYW55W109W1xuICAgIHtuYW1lOiduYWd1JywgY2l0eTonaGFydWdlcmknLCBpc0FjdGl2ZTpmYWxzZX0sXG4gICAgIHtuYW1lOid2YXN1JywgY2l0eTondGVyYWRhbGEnLCBpc0FjdGl2ZTpmYWxzZX0sXG4gICAgICB7bmFtZTonc29uYWxpJywgY2l0eTonYmVsYWdhdmknLCBpc0FjdGl2ZTp0cnVlfSxcbiAgICAgICB7bmFtZToncHJlZXRoaScsIGNpdHk6J2F0aGFuaScsIGlzQWN0aXZlOmZhbHNlfSxcbiAgXVxuXG4gIHNob3dQICgpe1xuICAgIHRoaXMuaXNQYXJhVmlzaWFibGUgPSB0cnVlO1xuICB9XG5cbmhpZGVQKCl7XG4gIHRoaXMuaXNQYXJhVmlzaWFibGU9ZmFsc2U7XG59XG5cbn1cbiIsIjx0YWJsZT5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIEBpZiAoaXNQYXJhVmlzaWFibGUgPT09IHRydWUpIHtcbiAgICAgICAgPHA+VGhpcyBpcyBTaW1wbGUgcGFyYTwvcD5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8aDM+UGFyYVZpc2lhYmxlIGhhcyBmYWxzZSB2YWx1ZTwvaDM+XG4gICAgICB9XG4gICAgPC90ZD5cbiAgICA8dGQ+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cInNob3dQKClcIj5zaG93IFA8L2J1dHRvbj5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImhpZGVQKClcIj5IaWRlIFA8L2J1dHRvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuXG4gIDx0cj5cbiAgICA8dGQ+XG4gICAgICBAaWYgKHN0YXJ0TW9udGhOYW1lKSB7XG4gICAgICAgIDxzcGFuPmphbnV3YXJ5PC9zcGFuPlxuICAgICAgfSBAZWxzZSBpZiAoc3RhcnRNb250aE5hbWUgPT0gJ2ZlYicpIHtcbiAgICAgICAgPHNwYW4+RmVidXJheTwvc3Bhbj5cbiAgICAgIH0gQGVsc2UgaWYgKHN0YXJ0TW9udGhOYW1lID09ICdtcmMnKSB7XG4gICAgICAgIDxzcGFuPk1hcmNoPC9zcGFuPlxuICAgICAgfSBAZWxzZSBpZiAoc3RhcnRNb250aE5hbWUgPT0gJ2FwcicpIHtcbiAgICAgICAgPHNwYW4+QXByaWwgPC9zcGFuPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxwPndyb25nIGlucHV0PC9wPlxuICAgICAgfVxuICAgIDwvdGQ+XG4gICAgPHRkPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzdGFydE1vbnRoTmFtZVwiIC8+XG4gICAgPC90ZD5cbiAgPC90cj5cblxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgPHVsPlxuICAgICAgICBAZm9yIChpdGVtIG9mIGNpdExpc3Q7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgIDxsaT57eyBpdGVtIH19PC9saT5cbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L3RkPlxuXG4gICAgPHRkPlxuICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIj5cbiAgICAgICAgQGZvciAoaXRlbSBvZiBjaXRMaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+e3sgaXRlbSB9fTwvb3B0aW9uPlxuICAgICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L3RkPlxuICA8L3RyPlxuPC90YWJsZT5cblxuPGJyIC8+XG5cbjx0YWJsZT5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5TciBOTzwvdGg+XG4gICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICA8dGg+Q2l0eTwvdGg+XG4gICAgICA8dGg+U3RhdHVzPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgQGZvciAoaXRlbSBvZiBzdHVkZW50TGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57eyAkaW5kZXggKyAxIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IGl0ZW0ubmFtZSB9fTwvdGQ+XG4gICAgICAgIDx0ZD57eyBpdGVtLmNpdHkgfX08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgQGlmIChpdGVtLmlzQWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIDxoNj5BY3RpdmU8L2g2PlxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgPGg2PkRlLUFjdGl2ZTwvaDY+XG4gICAgICAgICAgfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICB9XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnR7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZGF0YS1iaW5kaW5nJyxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtYmluZGluZy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2RhdGEtYmluZGluZy5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhQmluZGluZyB7XG4gIFxuICBjb3Vyc2VOYW1lOiBzdHJpbmc9XCJteUFwcGxpY2F0aW9uXCI7XG4gIHByb2R1Y3RQcmljZTogbnVtYmVyPTEyNTk5O1xuXG4gIG1heGxlbmd0aDogbnVtYmVyPTU7XG4gIG1pbmNoYXIgOiBudW1iZXI9MztcblxuICBpbnB1dFR5cGU6IHN0cmluZz1cImNoZWNrYm94XCI7XG5cbiAgbXlDbGFzc05hbWUgOiBzdHJpbmc9XCJteUNvbG9yXCI7XG5cblxuY29uc3RydWN0b3IgKCl7XG5cbn1cblxuXG4gc2hvd1dlbGNvbWVNZXNzYWdlKCl7XG4gIGFsZXJ0KFwid2VsY29tZSB0byBteSBhcHBsaWNhdGlvblwiKVxuIH1cblxuIGNoYW5nZUNvdXJzZU5hbWUoKXtcbiAgdGhpcy5jb3Vyc2VOYW1lID1cIlJlYWN0anMgVHV0b3JpYWxcIlxuIH1cblxuIG9uQ2l0eUNoYW5nZSgpIHtcbiAgYWxlcnQoJ2NpdHkgY2hhbmdlZCcpXG4gfVxuICBcblxufVxuIiwiPHRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIHt7IGNvdXJzZU5hbWUgfX1cbiAgICA8L3RkPlxuXG4gICAgPHRkPlxuICAgICAge3sgcHJvZHVjdFByaWNlIH19XG4gICAgPC90ZD5cbiAgICA8dGQ+XG4gICAgICA8ZGl2Pnt7IGNvdXJzZU5hbWUgfX08L2Rpdj5cbiAgICA8L3RkPlxuICA8L3RyPlxuXG4gIDx0ZD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7IGNvdXJzZU5hbWUgfX1cIiAvPlxuICA8L3RkPlxuXG4gIDx0ZD5cbiAgICA8aW5wdXQgW3R5cGVdPVwiaW5wdXRUeXBlXCIgW21heF09XCJtYXhsZW5ndGhcIiBbbWluTGVuZ3RoXT1cIm1pbmNoYXJcIiAvPlxuICA8L3RkPlxuICA8dGQ+XG4gICAgPHAgW2NsYXNzXT1cIm15Q2xhc3NOYW1lXCI+VGhpcyBpcyBTYW1wbGUgUGFyYTwvcD5cbiAgPC90ZD5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInNob3dXZWxjb21lTWVzc2FnZSgpXCI+U2hvdyBtZXNzYWdlPC9idXR0b24+XG4gICAgPC90ZD5cbiAgPC90cj5cblxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlQ291cnNlTmFtZSgpXCI+Q2hhbmdlIGNvdXJzZTwvYnV0dG9uPlxuICAgIDwvdGQ+XG4gIDwvdHI+XG5cbiAgPHRkPlxuICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJvbkNpdHlDaGFuZ2UoKVwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlB1bmU8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5OYWdhcHVyPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+TXVtYmFpPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvdGQ+XG5cbiAgPHRkPlxuICAgIDx0cj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwiY291cnNlTmFtZVwiPlxuICAgIDwvdHI+XG4gIDwvdGQ+XG48L3RhYmxlPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBzaWduYWwsIGNvbXB1dGVkLCBsaW5rZWRTaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ25hbC1leCcsXG4gIGltcG9ydHM6IFtcbiAgICBcblxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmFsLWV4Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2lnbmFsLWV4LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hbEV4IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmcgPSAnTmFnZW5kcmEnO1xuICBwcm9kdWN0TmFtZSA9ICdNb3RvJztcblxuICBjb3Vyc2VOYW1lID0gc2lnbmFsPHN0cmluZz4oJ0FuZ3VsYXInKTtcblxuICBjb3Vyc2VEdXJhdGlvbiA9IHNpZ25hbCgnMTUgdmlkZW9zJyk7XG5cbiAgY291cnNlRGV0YWlsID0gY29tcHV0ZWQoKCkgPT4gdGhpcy5jb3Vyc2VOYW1lKCkgKyAnLScgKyB0aGlzLmNvdXJzZUR1cmF0aW9uKCkpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gJ3Zhc3UnO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZU5hbWUoKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvdXJzZU5hbWUuc2V0KCdSZWFjdCcpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VOYW1lKCkpO1xuICB9XG59XG4iLCI8cD5zaWduYWwtZXggd29ya3MhPC9wPlxuXG5cbjxzcGFuPnt7Zmlyc3ROYW1lfX08L3NwYW4+XG5cbjxicj5cbiA8c3Bhbj57e2NvdXJzZU5hbWUoKX19PC9zcGFuPlxuXG4gPGgxPnt7Y291cnNlRGV0YWlsKCl9fTwvaDE+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC11c2VyJyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLmh0bWwnLFxuICBzdHlsZVVybDogJy4vdXNlci5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxufVxuIiwiPHA+dXNlciB3b3JrcyE8L3A+XG5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxuIiwiaW1wb3J0IHsgREFURV9QSVBFX0RFRkFVTFRfT1BUSU9OUywgRGF0ZVBpcGUsIEpzb25QaXBlLCBMb3dlckNhc2VQaXBlLCBOZ0NsYXNzLCBOZ1N0eWxlLCBTbGljZVBpcGUsIFRpdGxlQ2FzZVBpcGUsIFVwcGVyQ2FzZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkYXRlVGltZXN0YW1wUHJvdmlkZXIgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYXR0LWRpcmVjdGl2ZScsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ1N0eWxlLFVwcGVyQ2FzZVBpcGUsTG93ZXJDYXNlUGlwZSxUaXRsZUNhc2VQaXBlLFNsaWNlUGlwZSxKc29uUGlwZSxEYXRlUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hdHQtZGlyZWN0aXZlLmh0bWwnLFxuICBzdHlsZVVybDogJy4vYXR0LWRpcmVjdGl2ZS5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBBdHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxBZnRlckNvbnRlbnRDaGVja2VkLEFmdGVyVmlld0luaXQsQWZ0ZXJWaWV3Q2hlY2tlZCxPbkRlc3Ryb3kgIHtcblxuXG4gIERpdjFDbGFzc05hbWUgPSBzaWduYWw8c3RyaW5nPignJyk7XG5cbiAgZmlyc3ROYW1lOiBzdHJpbmcgPVwibmFnZW5kcmFcIlxuICBjb3Vyc2VOYW1lOiBzdHJpbmc9XCJhbmd1bGFyMjAgdHV0b3JpYWxcIlxuXG4gIHJvbGxOb0xpc3Q9IFsxMSwxMiwxMywxNCwxNSwxNiwxNyxdXG5cblxuICBpc0RpdjJHcmVlbiA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgY3VycmVudERhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIHN0dWRlbnRPYmo6IGFueSA9e1xuICAgIG5hbWU6ICdOYWdlbmRyYScsXG4gICAgY2l0eTogJ2JlbGFnYXZpJyxcbiAgICBzdGF0ZTogJ2thcm5hdGFrYSdcblxuICB9XG4gXG4gICBjb25zdHJ1Y3Rvcigpe1xuICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0b3JcIik7XG4gICB9XG5cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRcIilcbiAgICAgLy90byB0cmlnZ2VyIEFQSSBjYWxsc1xuICAgICAvL3RvIHN1YnNzY3JpYmVcbiAgIH0gXG5cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCIgbmdBZnRlclZpZXdDaGVja2VkXCIpXG4gIH1cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiIG5nQWZ0ZXJDb250ZW50SW5pdFwiKVxuICB9XG5cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0luaXRcIilcbiAgICAvL3RvIGRlYWwgdmlld0NoaWxkXG4gICAgLy9zdWJzY3JpYmVcbiAgfVxuXG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwibmdBZnRlckNvbnRlbnRDaGVja2VkXCIpIFxuICB9XG5cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25EZXN0cm95XCIpXG5cbiAgICAvL3Vuc3Vic2NyaWJlXG4gICAgLy9yZXN0cmljdCB1c2VyIGZyb20gbmF2aWdhdGluZ1xuICB9XG5cblxuXG5cblxuICBzZXRCZ0NsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5EaXYxQ2xhc3NOYW1lLnNldChjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlRGl2MkNvbG9yKCl7XG4gICAgdGhpcy5pc0RpdjJHcmVlbiA9ICEgdGhpcy5pc0RpdjJHcmVlbjtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwicC0zXCIgW25nQ2xhc3NdPVwiRGl2MUNsYXNzTmFtZSgpXCI+RGl2IDEgLSB7eyBEaXYxQ2xhc3NOYW1lKCkgfX08L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgPGRpdiBjbGFzcz1cInAtM1wiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBpc0RpdjJHcmVlbiA9PSB0cnVlID8gJ2JsdWUnIDogJ3JhZCcgfVwiPlxuICAgICAgRGl2IDJcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cInNldEJnQ2xhc3MoJ2JnLXN1Y2Nlc3MnKVwiPkdyZWVuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgKGNsaWNrKT1cInNldEJnQ2xhc3MoJ2JnLWRhbmdlcicpXCI+UmVkPC9idXR0b24+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwidG9nZ2xlRGl2MkNvbG9yKClcIj5Ub2dnbGUgQkcgQ29sb3I8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY2xvLTNcIj5cbiAgICBmaXJzTmFtZSA9PiB7eyBmaXJzdE5hbWUgfCB1cHBlcmNhc2UgfX1cbiAgICA8YnIgLz5cbiAgICB7eyBmaXJzdE5hbWUgfCB1cHBlcmNhc2UgfX1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY2xvLTNcIj5cbiAgICBmaXJzTmFtZSA9PiB7eyBjb3Vyc2VOYW1lIH19XG4gICAgPGJyIC8+XG4gICAge3sgY291cnNlTmFtZSB8IGxvd2VyY2FzZSB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicm93XCI+XG4gIDxkaXYgY2xhc3M9XCJjbG8tM1wiPlxuICAgIGZpcnNOYW1lID0+IHt7IGNvdXJzZU5hbWUgfX1cbiAgICA8YnIgLz5cbiAgICB7eyBjb3Vyc2VOYW1lIHwgdGl0bGVjYXNlIH19XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNsby0zXCI+XG4gICAgcm9sbE5vTGlzdCA9PiB7eyByb2xsTm9MaXN0IH19XG4gICAgPGJyIC8+XG4gICAge3sgcm9sbE5vTGlzdCB8IHNsaWNlOiA0IDogNiB9fVxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5zdHVkZW50T2JqID0+IHt7IHN0dWRlbnRPYmogfCBqc29uIH19PC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgY3VycmVudERhdGUgPT4ge3sgY3VycmVudERhdGUgfX1cbiAgICA8YnIgLz5cbiAgICB7eyBjdXJyZW50RGF0ZSB8IGRhdGUgfX1cbiAgICA8YnIgLz5cbiAgICB7eyBjdXJyZW50RGF0ZSB8IGRhdGU6ICdkZC1NTS15eXl5JyB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWdldC1hcGknLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2dldC1hcGkuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9nZXQtYXBpLmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIEdldEFwaSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGh0dHAgPSBpbmplY3QoSHR0cENsaWVudCk7XG4gIHVzZXJMaXN0OiBhbnlbXSA9IFtdO1xuICB0b2RvTGlzdDogYW55W10gPSBbXTtcbiAgYnVzVXNlckxpc3Q6YW55W109W107XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICB0aGlzLmdldHVzZXJzKCk7XG4gICAgdGhpcy5nZXRUb2RvSXRlbXMoKTtcbiAgICB0aGlzLmdldEFsbEJ1c0Jvb2tpbmdVc2VyKCk7XG4gIH1cblxuICBnZXR1c2VycygpIHtcbiAgICB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKS5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICB0aGlzLnVzZXJMaXN0ID0gcmVzdWx0LmRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUb2RvSXRlbXMoKSB7XG4gICAgdGhpcy5odHRwLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJykuc3Vic2NyaWJlKChSZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLnRvZG9MaXN0ID0gUmVzcG9uc2U7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGxCdXNCb29raW5nVXNlcigpIHtcbiAgICB0aGlzLmh0dHAuZ2V0KCdodHRwczovL2FwaS5mcmVlcHJvamVjdGFwaS5jb20vYXBpL0J1c0Jvb2tpbmcvR2V0QWxsVXNlcnMnKS5zdWJzY3JpYmUoKHJlczphbnkpPT57XG4gICAgdGhpcy5idXNVc2VyTGlzdCA9cmVzLmRhdGE7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC00XCIgdGFibGUtcmVzcG9uc2l2ZT5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD51c2VySWQ8L3RoPlxuICAgICAgICAgIDx0aD5pZDwvdGg+XG4gICAgICAgICAgPHRoPnRpdGxlPC90aD5cbiAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgQGZvciAoaXRlbSBvZiB1c2VyTGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0udXNlcklkIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBpdGVtLmlkIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBpdGVtLnRpdGxlIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBpdGVtLmNvbXBsZXRlZCB9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9XCJjb2wtNFwiIHRhYmxlLXJlc3BvbnNpdmU+XG4gIDx1bD5cbiAgICBAZm9yIChpdGVtIG9mIHRvZG9MaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgIDxsaT5cbiAgICAgICAge3sgaXRlbS50aXRsZSB9fVxuICAgICAgPC9saT5cbiAgICB9XG4gIDwvdWw+XG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC00XCIgdGFibGUtcmVzcG9uc2l2ZT5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5Vc2VyIElkPC90aD5cbiAgICAgICAgICA8dGg+VXNlciBOYW1lPC90aD5cbiAgICAgICAgICA8dGg+Um9sZTwvdGg+XG4gICAgICAgICAgPHRoPkZ1bGwgTmFtZTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICBAZm9yIChpdGVtIG9mIGJ1c1VzZXJMaXN0OyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e3sgaXRlbS51c2VySWQgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0udXNlck5hbWV9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgaXRlbS5yb2xlfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGl0ZW0uZnVsbE5hbWV9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFkbWluIH0gZnJvbSAnLi9jb21wb25lbnRzL2FkbWluL2FkbWluJztcbmltcG9ydCB7IENvbnRyb2xGbG93IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wtZmxvdy9jb250cm9sLWZsb3cnO1xuaW1wb3J0IHsgRGF0YUJpbmRpbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvZGF0YS1iaW5kaW5nL2RhdGEtYmluZGluZyc7XG5pbXBvcnQgeyBTaWduYWxFeCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWduYWwtZXgvc2lnbmFsLWV4JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyJztcbmltcG9ydCB7IEF0dERpcmVjdGl2ZSB9IGZyb20gJy4vY29tcG9uZW50cy9hdHQtZGlyZWN0aXZlL2F0dC1kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR2V0QXBpIH0gZnJvbSAnLi9nZXQtYXBpL2dldC1hcGknO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG57XG4gIHBhdGg6J0FkbWluJyxcbiAgY29tcG9uZW50OkFkbWluXG59LFxue1xuICBwYXRoOidjb250cm9sLWZsb3cnLFxuICBjb21wb25lbnQ6Q29udHJvbEZsb3dcbn0sXG57XG4gIHBhdGg6J2RhdGEtYmluZGluZycsXG4gIGNvbXBvbmVudDpEYXRhQmluZGluZ1xufSxcbntcbnBhdGg6ICdzaWduYWwtZXgnLFxuY29tcG9uZW50OiBTaWduYWxFeFxufSxcbntcbiAgcGF0aDondXNlcicsXG4gIGNvbXBvbmVudDpVc2VyXG59LFxue1xuICBwYXRoOidBdHRyaWJ1dGUtZGlyJyxcbiAgY29tcG9uZW50OkF0dERpcmVjdGl2ZVxufSxcbntcbiAgcGF0aDonZ2V0LWFwaScsXG4gIGNvbXBvbmVudDpHZXRBcGlcbn1cbl07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGluaywgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbnRyb2xGbG93IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wtZmxvdy9jb250cm9sLWZsb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIGltcG9ydHM6IFtDb250cm9sRmxvdywgUm91dGVyTGluayxSb3V0ZXJPdXRsZXQgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aXRsZSA9IHNpZ25hbCgnbXlBcHBsaWNhdGlvbicpO1xufVxuIiwiPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWxpZ2h0IG5hdmFiYXItZGFya1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiByb3V0ZXJMaW5rPVwiQWRtaW5cIj5BZG1pbjwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cImNvbnRyb2wtZmxvd1wiPkNvbnRyb2wtRmxvdzwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cImRhdGEtYmluZGluZ1wiPkRhdGEtQmluZGluZzwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cInNpZ25hbFwiPlNpZ25hbDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgcm91dGVyTGluaz1cIkF0dHJpYnV0ZS1kaXJcIj5EaXJlY3RpdmU8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCJnZXQtYXBpXCI+R2V0LUFwaSA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9uYXY+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4iXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLDRCQUE0Qjs7O0FDQXJDLFNBQTRCLDBDQUEwQztBQUN0RSxTQUFTLHFCQUFxQjs7O0FDRDlCLFNBQVMsaUJBQWlCOztBQVFwQixJQUFPLFFBQVAsTUFBTyxPQUFLO0VBQ2hCLFlBQVU7RUFDVixhQUFXO0VBQ1gsU0FBUTs7cUNBSEcsUUFBSztFQUFBOzRFQUFMLFFBQUssV0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGNB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ZUFBQSxFQUFBLENBQUE7OztnRkFJbkMsS0FBRyxDQUFBO1VBTmZDO3VCQUNXLFlBQVUsU0FDWCxDQUFDLGFBQWEsWUFBVyxZQUFZLEdBQUUsVUFBQSwwMEJBQUEsQ0FBQTs7OztpRkFJckMsS0FBRyxFQUFBLFdBQUEsT0FBQSxVQUFBLGtCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzsrREFBSCxLQUFHLEVBQUEsU0FBQSxDQUFBQyxHQUFBLEdBQUEsQ0FBQSxhQUFBLFlBQUEsY0FBQUQsVUFBQSxHQUFBLGFBQUEsRUFBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsWUFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxZQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FqQk5oQixxQkFBcUIsS0FBSyxTQUFTLEVBQ2hDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJGb3Jtc01vZHVsZSIsImkwIiwiaTEiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50Iiwic2lnbmFsIiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsInNpZ25hbCIsInNpZ25hbCIsIkNvbXBvbmVudCIsImkwIl19