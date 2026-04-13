import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts
import { bootstrapApplication } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_platform-browser.js?v=76935c9a";

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=76935c9a";
import { provideRouter } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_router.js?v=76935c9a";

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

// src/app/app.ts
import { Component as Component2, signal } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=76935c9a";

// src/app/components/control-flow/control-flow.ts
import { Component } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=76935c9a";
import { FormsModule } from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?t=1776063017156&v=76935c9a";
import * as i0 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=76935c9a";
import * as i1 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_forms.js?t=1776063017156&v=76935c9a";
function ControlFlow_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "This is Simple para");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "h3");
    i0.\u0275\u0275text(1, "ParaVisiable has false value");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "januwary");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "Feburay");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "March");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span");
    i0.\u0275\u0275text(1, "April ");
    i0.\u0275\u0275elementEnd();
  }
}
function ControlFlow_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p");
    i0.\u0275\u0275text(1, "wrong input");
    i0.\u0275\u0275elementEnd();
  }
}
var ControlFlow = class _ControlFlow {
  isParaVisiable = true;
  startMonthName = "feb";
  showP() {
    this.isParaVisiable = true;
  }
  hideP() {
    this.isParaVisiable = false;
  }
  static \u0275fac = function ControlFlow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ControlFlow)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _ControlFlow, selectors: [["app-control-flow"]], decls: 20, vars: 3, consts: [[3, "click"], ["type", "text", 3, "ngModelChange", "ngModel"]], template: function ControlFlow_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "table")(1, "tr")(2, "td");
      i0.\u0275\u0275conditionalCreate(3, ControlFlow_Conditional_3_Template, 2, 0, "p")(4, ControlFlow_Conditional_4_Template, 2, 0, "h3");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "td")(6, "button", 0);
      i0.\u0275\u0275listener("click", function ControlFlow_Template_button_click_6_listener() {
        return ctx.showP();
      });
      i0.\u0275\u0275text(7, "show P");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(8, "td")(9, "button", 0);
      i0.\u0275\u0275listener("click", function ControlFlow_Template_button_click_9_listener() {
        return ctx.hideP();
      });
      i0.\u0275\u0275text(10, "Hide P");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(11, "tr")(12, "td");
      i0.\u0275\u0275conditionalCreate(13, ControlFlow_Conditional_13_Template, 2, 0, "span")(14, ControlFlow_Conditional_14_Template, 2, 0, "span")(15, ControlFlow_Conditional_15_Template, 2, 0, "span")(16, ControlFlow_Conditional_16_Template, 2, 0, "span")(17, ControlFlow_Conditional_17_Template, 2, 0, "p");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(18, "td")(19, "input", 1);
      i0.\u0275\u0275twoWayListener("ngModelChange", function ControlFlow_Template_input_ngModelChange_19_listener($event) {
        i0.\u0275\u0275twoWayBindingSet(ctx.startMonthName, $event) || (ctx.startMonthName = $event);
        return $event;
      });
      i0.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275conditional(ctx.isParaVisiable === true ? 3 : 4);
      i0.\u0275\u0275advance(10);
      i0.\u0275\u0275conditional(ctx.startMonthName ? 13 : ctx.startMonthName == "feb" ? 14 : ctx.startMonthName == "mrc" ? 15 : ctx.startMonthName == "apr" ? 16 : 17);
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275twoWayProperty("ngModel", ctx.startMonthName);
    }
  }, dependencies: [FormsModule, i1.\u0275NgNoValidate, i1.NgSelectOption, i1.\u0275NgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.RangeValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MinLengthValidator, i1.MaxLengthValidator, i1.PatternValidator, i1.CheckboxRequiredValidator, i1.EmailValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgModelGroup, i1.NgForm], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ControlFlow, [{
    type: Component,
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
      <button (click)="showP()">show P</button>
    </td>
    <td>
      <button (click)="hideP()">Hide P</button>
    </td>
  </tr>

   <tr>
      <td>
    
        @if(startMonthName){
          <span>januwary</span>
        } @else if (startMonthName=='feb'){
          <span>Feburay</span>
        }@else if (startMonthName=='mrc'){
          <span>March</span>
        }@else if (startMonthName=='apr'){
          <span>April </span>
        } @else {
          <p>wrong input</p>
        }
      </td>
      <td>
        <input type="text" [(ngModel)]="startMonthName">
      </td>
   </tr>
  
</table>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(ControlFlow, { className: "ControlFlow", filePath: "src/app/components/control-flow/control-flow.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fcontrol-flow%2Fcontrol-flow.ts%40ControlFlow";
  function ControlFlow_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(ControlFlow, m.default, [i0, i1], [FormsModule, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ControlFlow_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ControlFlow_HmrLoad(d.timestamp)));
})();

// src/app/app.ts
import * as i02 from "/@fs/Users/a1989/Desktop/angular/myApplication/.angular/cache/21.2.7/myApplication/vite/deps/@angular_core.js?v=76935c9a";
var App = class _App {
  title = signal("myApplication", ...ngDevMode ? [{ debugName: "title" }] : (
    /* istanbul ignore next */
    []
  ));
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "h2");
      i02.\u0275\u0275text(1, "WELCOME");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(2, "app-control-flow");
    }
  }, dependencies: [ControlFlow], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(App, [{
    type: Component2,
    args: [{ selector: "app-root", imports: [ControlFlow], template: "<h2>WELCOME</h2>\n\n<app-control-flow></app-control-flow>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 15 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(App, m.default, [i02], [ControlFlow, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9hcHAudHMiLCJzcmMvYXBwL2FwcC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtZmxvdy9jb250cm9sLWZsb3cudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1mbG93L2NvbnRyb2wtZmxvdy5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcCc7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcCwgYXBwQ29uZmlnKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlnLCBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuZXhwb3J0IGNvbnN0IGFwcENvbmZpZzogQXBwbGljYXRpb25Db25maWcgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMoKSxcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcbiAgXVxufTtcbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtdO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBZG1pbiB9IGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9hZG1pbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlcic7XG5pbXBvcnQgeyBEYXRhQmluZGluZyB9IGZyb20gJy4vY29tcG9uZW50cy9kYXRhLWJpbmRpbmcvZGF0YS1iaW5kaW5nJztcbmltcG9ydCB7IFNpZ25hbEV4IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZ25hbC1leC9zaWduYWwtZXgnO1xuaW1wb3J0IHsgQ29udHJvbEZsb3cgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC1mbG93L2NvbnRyb2wtZmxvdyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW0NvbnRyb2xGbG93XSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aXRsZSA9IHNpZ25hbCgnbXlBcHBsaWNhdGlvbicpO1xufVxuIiwiPGgyPldFTENPTUU8L2gyPlxuXG48YXBwLWNvbnRyb2wtZmxvdz48L2FwcC1jb250cm9sLWZsb3c+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRyb2wtZmxvdycsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSxdLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udHJvbC1mbG93Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vY29udHJvbC1mbG93LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xGbG93IHtcblxuICBpc1BhcmFWaXNpYWJsZTogYm9vbGVhbj10cnVlO1xuXG4gIHN0YXJ0TW9udGhOYW1lOiBzdHJpbmcgPVwiZmViXCI7XG5cbiAgc2hvd1AgKCl7XG4gICAgdGhpcy5pc1BhcmFWaXNpYWJsZSA9IHRydWU7XG4gIH1cblxuaGlkZVAoKXtcbiAgdGhpcy5pc1BhcmFWaXNpYWJsZT1mYWxzZTtcbn1cblxufVxuIiwiPHRhYmxlPlxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgQGlmIChpc1BhcmFWaXNpYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICA8cD5UaGlzIGlzIFNpbXBsZSBwYXJhPC9wPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxoMz5QYXJhVmlzaWFibGUgaGFzIGZhbHNlIHZhbHVlPC9oMz5cbiAgICAgIH1cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cInNob3dQKClcIj5zaG93IFA8L2J1dHRvbj5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImhpZGVQKClcIj5IaWRlIFA8L2J1dHRvbj5cbiAgICA8L3RkPlxuICA8L3RyPlxuXG4gICA8dHI+XG4gICAgICA8dGQ+XG4gICAgXG4gICAgICAgIEBpZihzdGFydE1vbnRoTmFtZSl7XG4gICAgICAgICAgPHNwYW4+amFudXdhcnk8L3NwYW4+XG4gICAgICAgIH0gQGVsc2UgaWYgKHN0YXJ0TW9udGhOYW1lPT0nZmViJyl7XG4gICAgICAgICAgPHNwYW4+RmVidXJheTwvc3Bhbj5cbiAgICAgICAgfUBlbHNlIGlmIChzdGFydE1vbnRoTmFtZT09J21yYycpe1xuICAgICAgICAgIDxzcGFuPk1hcmNoPC9zcGFuPlxuICAgICAgICB9QGVsc2UgaWYgKHN0YXJ0TW9udGhOYW1lPT0nYXByJyl7XG4gICAgICAgICAgPHNwYW4+QXByaWwgPC9zcGFuPlxuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICA8cD53cm9uZyBpbnB1dDwvcD5cbiAgICAgICAgfVxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJzdGFydE1vbnRoTmFtZVwiPlxuICAgICAgPC90ZD5cbiAgIDwvdHI+XG4gIFxuPC90YWJsZT5cbiJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsNEJBQTRCOzs7QUNBckMsU0FBNEIsMENBQTBDO0FBQ3RFLFNBQVMscUJBQXFCOzs7QUNDdkIsSUFBTSxTQUFpQixDQUFBOzs7QURHdkIsSUFBTSxZQUErQjtFQUMxQyxXQUFXO0lBQ1QsbUNBQWtDO0lBQ2xDLGNBQWMsTUFBTTs7Ozs7QUVSeEIsU0FBUyxhQUFBQSxZQUFXLGNBQWM7OztBRUFsQyxTQUFTLGlCQUFpQjtBQUMxQixTQUFTLG1CQUFtQjs7Ozs7QUNHcEIsSUFBQSw0QkFBQSxHQUFBLEdBQUE7QUFBRyxJQUFBLG9CQUFBLEdBQUEscUJBQUE7QUFBbUIsSUFBQSwwQkFBQTs7Ozs7QUFFdEIsSUFBQSw0QkFBQSxHQUFBLElBQUE7QUFBSSxJQUFBLG9CQUFBLEdBQUEsOEJBQUE7QUFBNEIsSUFBQSwwQkFBQTs7Ozs7QUFlOUIsSUFBQSw0QkFBQSxHQUFBLE1BQUE7QUFBTSxJQUFBLG9CQUFBLEdBQUEsVUFBQTtBQUFRLElBQUEsMEJBQUE7Ozs7O0FBRWQsSUFBQSw0QkFBQSxHQUFBLE1BQUE7QUFBTSxJQUFBLG9CQUFBLEdBQUEsU0FBQTtBQUFPLElBQUEsMEJBQUE7Ozs7O0FBRWIsSUFBQSw0QkFBQSxHQUFBLE1BQUE7QUFBTSxJQUFBLG9CQUFBLEdBQUEsT0FBQTtBQUFLLElBQUEsMEJBQUE7Ozs7O0FBRVgsSUFBQSw0QkFBQSxHQUFBLE1BQUE7QUFBTSxJQUFBLG9CQUFBLEdBQUEsUUFBQTtBQUFNLElBQUEsMEJBQUE7Ozs7O0FBRVosSUFBQSw0QkFBQSxHQUFBLEdBQUE7QUFBRyxJQUFBLG9CQUFBLEdBQUEsYUFBQTtBQUFXLElBQUEsMEJBQUE7OztBRHBCbEIsSUFBTyxj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