"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3011],{7797:(t,e,s)=>{s.d(e,{A:()=>r});var a=s(76314),i=s.n(a)()((function(t){return t[1]}));i.push([t.id,".input-with-icon{align-items:center;display:flex}.scan-icon{cursor:pointer;height:50px;margin-right:8px;width:50px}",""]);const r=i},19469:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var a=s(95353),i=s(5947),r=s.n(i);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function u(t,e,s){return(e=function(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var a=s.call(t,e||"default");if("object"!=o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==o(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const d={metaInfo:{title:"Edit Purchase"},data:function(){return{focused:!1,timer:null,search_input:"",product_filter:[],isLoading:!0,SubmitProcessing:!1,Submit_Processing_detail:!1,warehouses:[],suppliers:[],products:[],details:[],detail:{},purchases:[],purchase:{id:"",statut:"",date:"",notes:"",supplier_id:"",warehouse_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0,product:{id:"",code:"",stock:"",quantity:1,discount:"",DiscountNet:"",discount_Method:"",name:"",no_unit:"",unitPurchase:"",purchase_unit_id:"",Net_cost:"",Total_cost:"",Unit_cost:"",subtotal:"",product_id:"",detail_id:"",taxe:"",tax_percent:"",tax_method:"",product_variant_id:"",del:"",is_imei:"",imei_number:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){u(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},(0,a.L8)(["currentUserPermissions","currentUser"])),methods:{showModal:function(){this.$bvModal.show("open_scan")},onScan:function(t,e){var s=t;this.search_input=s,this.search(),this.$bvModal.hide("open_scan")},handleFocus:function(){this.focused=!0},handleBlur:function(){this.focused=!1},Submit_Purchase:function(){var t=this;this.$refs.edit_purchase.validate().then((function(e){e?t.Update_Purchase():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},submit_Update_Detail:function(){var t=this;this.$refs.Update_Detail_purchase.validate().then((function(e){e&&t.Update_Detail()}))},getValidationState:function(t){var e=t.dirty,s=t.validated,a=t.valid;return e||s?void 0===a?null:a:null},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},Modal_Updat_Detail:function(t){var e=this;r().start(),r().set(.1),this.detail={},this.detail.name=t.name,this.detail.detail_id=t.detail_id,this.detail.Unit_cost=t.Unit_cost,this.detail.tax_method=t.tax_method,this.detail.discount_Method=t.discount_Method,this.detail.discount=t.discount,this.detail.quantity=t.quantity,this.detail.tax_percent=t.tax_percent,this.detail.is_imei=t.is_imei,this.detail.imei_number=t.imei_number,setTimeout((function(){r().done(),e.$bvModal.show("form_Update_Detail")}),1e3)},Update_Detail:function(){var t=this;r().start(),r().set(.1),this.Submit_Processing_detail=!0;for(var e=0;e<this.details.length;e++)this.details[e].detail_id===this.detail.detail_id&&(this.details[e].tax_percent=this.detail.tax_percent,this.details[e].Unit_cost=this.detail.Unit_cost,this.details[e].quantity=this.detail.quantity,this.details[e].tax_method=this.detail.tax_method,this.details[e].discount_Method=this.detail.discount_Method,this.details[e].discount=this.detail.discount,this.details[e].imei_number=this.detail.imei_number,"2"==this.details[e].discount_Method?this.details[e].DiscountNet=this.detail.discount:this.details[e].DiscountNet=parseFloat(this.detail.Unit_cost*this.details[e].discount/100),"1"==this.details[e].tax_method?(this.details[e].Net_cost=parseFloat(this.detail.Unit_cost-this.details[e].DiscountNet),this.details[e].taxe=parseFloat(this.detail.tax_percent*(this.detail.Unit_cost-this.details[e].DiscountNet)/100)):(this.details[e].taxe=parseFloat((this.detail.Unit_cost-this.details[e].DiscountNet)*(this.detail.tax_percent/100)),this.details[e].Net_cost=parseFloat(this.detail.Unit_cost-this.details[e].taxe-this.details[e].DiscountNet)),this.$forceUpdate());this.Calcul_Total(),setTimeout((function(){r().done(),t.Submit_Processing_detail=!1,t.$bvModal.hide("form_Update_Detail")}),1e3)},search:function(){var t=this;if(this.timer&&(clearTimeout(this.timer),this.timer=null),this.search_input.length<2)return this.product_filter=[];""!=this.purchase.warehouse_id&&null!=this.purchase.warehouse_id?this.timer=setTimeout((function(){var e=t.products.filter((function(e){return e.code===t.search_input||e.barcode.includes(t.search_input)}));1===e.length?t.SearchProduct(e[0]):(t.product_filter=t.products.filter((function(e){return e.name.toLowerCase().includes(t.search_input.toLowerCase())||e.code.toLowerCase().includes(t.search_input.toLowerCase())||e.barcode.toLowerCase().includes(t.search_input.toLowerCase())})),t.product_filter.length<=0&&t.makeToast("warning","Product Not Found","Warning"))}),800):this.makeToast("warning",this.$t("SelectWarehouse"),this.$t("Warning"))},getResultValue:function(t){return t.code+" ("+t.name+")"},SearchProduct:function(t){this.product={},this.details.length>0&&this.details.some((function(e){return e.code===t.code}))?this.makeToast("warning",this.$t("AlreadyAdd"),this.$t("Warning")):(this.product.code=t.code,this.product.quantity=1,this.product.no_unit=1,this.product.stock=t.qte_purchase,this.product.product_variant_id=t.product_variant_id,this.Get_Product_Details(t.id,t.product_variant_id)),this.search_input="",this.$refs.product_autocomplete.value="",this.product_filter=[]},Selected_Warehouse:function(t){this.search_input="",this.product_filter=[],this.Get_Products_By_Warehouse(t)},Get_Products_By_Warehouse:function(t){var e=this;r().start(),r().set(.1),axios.get("get_Products_by_warehouse/"+t+"?stock=0&product_service=0").then((function(t){e.products=t.data,r().done()})).catch((function(t){}))},add_product:function(){this.details.length>0?this.Last_Detail_id():0===this.details.length&&(this.product.detail_id=1),this.details.push(this.product),this.product.is_imei&&this.Modal_Updat_Detail(this.product)},Verified_Qty:function(t,e){for(var s=0;s<this.details.length;s++)this.details[s].detail_id==e&&(isNaN(t.quantity)&&(this.details[s].quantity=1),this.Calcul_Total(),this.$forceUpdate())},increment:function(t,e){for(var s=0;s<this.details.length;s++)this.details[s].detail_id==e&&this.formatNumber(this.details[s].quantity++,2);this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var s=0;s<this.details.length;s++)this.details[s].detail_id==e&&t.quantity-1>0&&this.formatNumber(this.details[s].quantity--,2);this.$forceUpdate(),this.Calcul_Total()},keyup_OrderTax:function(){isNaN(this.purchase.tax_rate)?this.purchase.tax_rate=0:""==this.purchase.tax_rate?(this.purchase.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.purchase.discount)?this.purchase.discount=0:""==this.purchase.discount?(this.purchase.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.purchase.shipping)?this.purchase.shipping=0:""==this.purchase.shipping?(this.purchase.shipping=0,this.Calcul_Total()):this.Calcul_Total()},formatNumber:function(t,e){var s=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return s[0];var a=s[1]||"";if(a.length>e)return"".concat(s[0],".").concat(a.substr(0,e));for(;a.length<e;)a+="0";return"".concat(s[0],".").concat(a)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_cost+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var s=parseFloat(this.total-this.purchase.discount);this.purchase.TaxNet=parseFloat(s*this.purchase.tax_rate/100),this.GrandTotal=parseFloat(s+this.purchase.TaxNet+this.purchase.shipping);var a=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(a)},delete_Product_Detail:function(t){for(var e=0;e<this.details.length;e++)t===this.details[e].detail_id&&(this.details.splice(e,1),this.Calcul_Total())},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""!=this.details[e].quantity&&0!==this.details[e].quantity||(t+=1);return!(t>0)||(this.makeToast("warning",this.$t("AddQuantity"),this.$t("Warning")),!1)},Update_Purchase:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,r().start(),r().set(.1);var e=this.$route.params.id;axios.put("purchases/".concat(e),{date:this.purchase.date,supplier_id:this.purchase.supplier_id,warehouse_id:this.purchase.warehouse_id,statut:this.purchase.statut,notes:this.purchase.notes,tax_rate:this.purchase.tax_rate?this.purchase.tax_rate:0,TaxNet:this.purchase.TaxNet?this.purchase.TaxNet:0,discount:this.purchase.discount?this.purchase.discount:0,shipping:this.purchase.shipping?this.purchase.shipping:0,GrandTotal:this.GrandTotal,details:this.details}).then((function(e){r().done(),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_purchases"})})).catch((function(e){r().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},Last_Detail_id:function(){this.product.detail_id=0;var t=this.details.length;this.product.detail_id=this.details[t-1].detail_id+1},Get_Product_Details:function(t,e){var s=this;axios.get("/show_product_data/"+t+"/"+e).then((function(t){s.product.del=0,s.product.id=0,s.product.discount=0,s.product.DiscountNet=0,s.product.discount_Method="2",s.product.product_id=t.data.id,s.product.name=t.data.name,s.product.Net_cost=t.data.Net_cost,s.product.Unit_cost=t.data.Unit_cost,s.product.taxe=t.data.tax_cost,s.product.tax_method=t.data.tax_method,s.product.tax_percent=t.data.tax_percent,s.product.unitPurchase=t.data.unitPurchase,s.product.purchase_unit_id=t.data.purchase_unit_id,s.product.is_imei=t.data.is_imei,s.product.imei_number="",s.add_product(),s.Calcul_Total()}))},GetElements:function(){var t=this,e=this.$route.params.id;axios.get("purchases/".concat(e,"/edit")).then((function(e){t.purchase=e.data.purchase,t.details=e.data.details,t.suppliers=e.data.suppliers,t.warehouses=e.data.warehouses,t.Get_Products_By_Warehouse(t.purchase.warehouse_id),t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};var c=s(85072),l=s.n(c),_=s(7797),p={insert:"head",singleton:!1};l()(_.A,p);_.A.locals;const h=(0,s(14486).A)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("EditPurchase"),folder:t.$t("ListPurchases")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"edit_purchase"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Purchase.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",[e("b-row",[e("b-modal",{attrs:{"hide-footer":"",id:"open_scan",size:"md",title:"Barcode Scanner"}},[e("qrcode-scanner",{staticStyle:{width:"100%",height:"calc(100vh - 56px)"},attrs:{qrbox:250,fps:10},on:{result:t.onScan}})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("date")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"date-feedback",type:"date"},model:{value:t.purchase.date,callback:function(e){t.$set(t.purchase,"date",e)},expression:"purchase.date"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,485926546)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Supplier",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.valid,i=s.errors;return e("b-form-group",{attrs:{label:t.$t("Supplier")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Supplier"),options:t.suppliers.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.purchase.supplier_id,callback:function(e){t.$set(t.purchase,"supplier_id",e)},expression:"purchase.supplier_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,700424982)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"warehouse",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.valid,i=s.errors;return e("b-form-group",{attrs:{label:t.$t("warehouse")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!a||null),disabled:t.details.length>0,reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},on:{input:t.Selected_Warehouse},model:{value:t.purchase.warehouse_id,callback:function(e){t.$set(t.purchase,"warehouse_id",e)},expression:"purchase.warehouse_id"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,923239089)})],1),t._v(" "),e("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[e("h6",[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("div",{staticClass:"autocomplete",attrs:{id:"autocomplete"}},[e("div",{staticClass:"input-with-icon"},[e("img",{staticClass:"scan-icon",attrs:{src:"/assets_setup/scan.png",alt:"Scan"},on:{click:t.showModal}}),t._v(" "),e("input",{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{placeholder:t.$t("Scan_Search_Product_by_Code_Name")},on:{input:function(e){return t.search_input=e.target.value},keyup:function(e){return t.search(t.search_input)},focus:t.handleFocus,blur:t.handleBlur}})]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},t._l(t.product_filter,(function(s){return e("li",{staticClass:"autocomplete-result",on:{mousedown:function(e){return t.SearchProduct(s)}}},[t._v(t._s(t.getResultValue(s)))])})),0)])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("h5",[t._v(t._s(t.$t("order_products"))+" *")]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("CurrentStock")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))]),t._v(" "),e("th",{staticClass:"text-center",attrs:{scope:"col"}},[e("i",{staticClass:"fa fa-trash"})])])]),t._v(" "),e("tbody",[t.details.length<=0?e("tr",[e("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(s){return e("tr",{key:s.detail_id,class:{row_deleted:1===s.del||0===s.no_unit}},[e("td",[t._v(t._s(s.detail_id))]),t._v(" "),e("td",[e("span",[t._v(t._s(s.code))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"badge badge-success"},[t._v(t._s(s.name))])]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.Net_cost,3)))]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(s.stock)+" "+t._s(s.unitPurchase))])]),t._v(" "),e("td",[e("div",{staticClass:"quantity"},[e("b-input-group",[e("b-input-group-prepend",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==s.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.decrement(s,s.detail_id)}}},[t._v("-")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:s.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,disabled:1===s.del||0===s.no_unit},domProps:{value:s.quantity},on:{keyup:function(e){return t.Verified_Qty(s,s.detail_id)},input:function(e){e.target.composing||t.$set(s,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("b-input-group-append",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==s.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.increment(s,s.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.DiscountNet*s.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.taxe*s.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(s.subtotal.toFixed(2)))]),t._v(" "),e("td",{directives:[{name:"show",rawName:"v-show",value:0!==s.no_unit,expression:"detail.no_unit !== 0"}]},[t.currentUserPermissions&&t.currentUserPermissions.includes("edit_product_purchase")?e("i",{staticClass:"i-Edit text-25 text-success",on:{click:function(e){return t.Modal_Updat_Detail(s)}}}):t._e(),t._v(" "),e("i",{staticClass:"i-Close-Window text-25 text-danger",on:{click:function(e){return t.delete_Product_Detail(s.detail_id)}}})])])}))],2)])])]),t._v(" "),e("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[e("table",{staticClass:"table table-striped table-sm"},[e("tbody",[e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),e("td",[e("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.purchase.tax_rate,2))+" %)")])])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.discount.toFixed(2)))])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase.shipping.toFixed(2)))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_purchase")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.purchase.tax_rate,callback:function(e){t.$set(t.purchase,"tax_rate",t._n(e))},expression:"purchase.tax_rate"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,2647717874)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_purchase")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Discount")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.purchase.discount,callback:function(e){t.$set(t.purchase,"discount",t._n(e))},expression:"purchase.discount"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,98387733)})],1):t._e(),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("edit_tax_discount_shipping_purchase")?e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Shipping")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(s),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.purchase.shipping,callback:function(e){t.$set(t.purchase,"shipping",t._n(e))},expression:"purchase.shipping"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}],null,!1,497113045)})],1):t._e(),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.valid,i=s.errors;return e("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"received",value:"received"},{label:"pending",value:"pending"},{label:"ordered",value:"ordered"}]},model:{value:t.purchase.statut,callback:function(e){t.$set(t.purchase,"statut",e)},expression:"purchase.statut"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}],null,!1,3503637598)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("Note")}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.purchase.notes,expression:"purchase.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.purchase.notes},on:{input:function(e){e.target.composing||t.$set(t.purchase,"notes",e.target.value)}}})])],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Purchase}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),e("validation-observer",{ref:"Update_Detail_purchase"},[e("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"form_Update_Detail",title:t.detail.name}},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit_Update_Detail.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Product Cost",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("ProductCost")+" *",id:"cost-input"}},[e("b-form-input",{attrs:{label:"Product Cost",state:t.getValidationState(s),"aria-describedby":"cost-feedback"},model:{value:t.detail.Unit_cost,callback:function(e){t.$set(t.detail,"Unit_cost",t._n(e))},expression:"detail.Unit_cost"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"cost-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Tax Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.valid,i=s.errors;return e("b-form-group",{attrs:{label:t.$t("TaxMethod")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{state:!i[0]&&(!!a||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:t.detail.tax_method,callback:function(e){t.$set(t.detail,"tax_method",e)},expression:"detail.tax_method"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")+" *"}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{label:"Order Tax",state:t.getValidationState(s),"aria-describedby":"OrderTax-feedback"},model:{value:t.detail.tax_percent,callback:function(e){t.$set(t.detail,"tax_percent",t._n(e))},expression:"detail.tax_percent"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount Method",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.valid,i=s.errors;return e("b-form-group",{attrs:{label:t.$t("Discount_Method")+" *"}},[e("v-select",{class:{"is-invalid":!!i.length},attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Method"),state:!i[0]&&(!!a||null),options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:t.detail.discount_Method,callback:function(e){t.$set(t.detail,"discount_Method",e)},expression:"detail.discount_Method"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(i[0]))])],1)}}])})],1),t._v(" "),e("b-col",{attrs:{lg:"6",md:"6",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount Rate",rules:{required:!0,regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(s){return[e("b-form-group",{attrs:{label:t.$t("Discount")+" *"}},[e("b-form-input",{attrs:{label:"Discount",state:t.getValidationState(s),"aria-describedby":"Discount-feedback"},model:{value:t.detail.discount,callback:function(e){t.$set(t.detail,"discount",t._n(e))},expression:"detail.discount"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(s.errors[0]))])],1)]}}])})],1),t._v(" "),e("b-col",{directives:[{name:"show",rawName:"v-show",value:t.detail.is_imei,expression:"detail.is_imei"}],attrs:{lg:"12",md:"12",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Add_product_IMEI_Serial_number")}},[e("b-form-input",{attrs:{label:"Add_product_IMEI_Serial_number",placeholder:t.$t("Add_product_IMEI_Serial_number")},model:{value:t.detail.imei_number,callback:function(e){t.$set(t.detail,"imei_number",e)},expression:"detail.imei_number"}})],1)],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.Submit_Processing_detail}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.Submit_Processing_detail?t._m(1):t._e()],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])},function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);