(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f950de38"],{"636c":function(e,t,i){"use strict";var n=i("794f"),s=i.n(n);s.a},"6a85":function(e,t,i){},"794f":function(e,t,i){},9633:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"columns fixed-page"},[i("div",{staticClass:"column main-column"},[i("div",{staticClass:"flexrow project-dates"},[i("div",{staticClass:"flexrow-item"},[i("label",{staticClass:"label"},[e._v("\n          "+e._s(e.$t("main.start_date"))+"\n        ")]),i("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"d MMMM yyyy"},model:{value:e.selectedStartDate,callback:function(t){e.selectedStartDate=t},expression:"selectedStartDate"}})],1),i("div",{staticClass:"flexrow-item field"},[i("label",{staticClass:"label"},[e._v("\n          "+e._s(e.$t("main.end_date"))+"\n        ")]),i("datepicker",{attrs:{"wrapper-class":"datepicker","input-class":"date-input input",language:e.locale,"disabled-dates":{days:[6,0]},"monday-first":!0,format:"d MMMM yyyy"},model:{value:e.selectedEndDate,callback:function(t){e.selectedEndDate=t},expression:"selectedEndDate"}})],1),i("text-field",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"flexrow-item overall-man-days",attrs:{type:"number",label:e.$t("schedule.overall_man_days"),disabled:!e.isCurrentUserAdmin},model:{value:e.overallManDays,callback:function(t){e.overallManDays=t},expression:"overallManDays"}}),i("combobox-number",{staticClass:"flexrow-item zoom-level",attrs:{label:e.$t("schedule.zoom_level"),options:e.zoomOptions},model:{value:e.zoomLevel,callback:function(t){e.zoomLevel=t},expression:"zoomLevel"}})],1),i("schedule",{attrs:{"start-date":e.startDate,"end-date":e.endDate,hierarchy:e.scheduleItems,"zoom-level":e.zoomLevel,"is-loading":e.loading.schedule,"is-error":e.errors.schedule},on:{"item-changed":e.saveScheduleItem,"change-zoom":e.changeZoom,"root-element-expanded":e.expandTaskTypeElement}})],1),e.currentTask?i("div",{staticClass:"column side-column is-hidden-mobile hide-small-screen"},[i("task-info",{attrs:{task:e.currentTask,"is-loading":!1}})],1):e._e()])},s=[],a=(i("7f7f"),i("cebc")),o=i("2f62"),l=i("7f45"),r=i.n(l),d=i("2430"),c=i("fa33"),u=i("2229"),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isSimple?i("span",{staticClass:"select"},[i("select",{ref:"select",staticClass:"select-input",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.emitEnter()},change:e.updateValue}},e._l(e.options,function(t,n){return i("option",{key:n+"-"+t.label+"-"+t.value,domProps:{value:t.value||t.label,selected:e.value===t.value}},[e._v("\n      "+e._s(e.getOptionLabel(t))+"\n    ")])}),0)]):i("div",{staticClass:"field"},[e.label.length>0?i("label",{staticClass:"label"},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),i("p",{staticClass:"control"},[i("span",{class:{select:!0}},[i("select",{ref:"select",staticClass:"select-input",attrs:{disabled:e.disabled},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.emitEnter()},change:e.updateValue}},e._l(e.options,function(t,n){return i("option",{key:n+"-"+t.label+"-"+t.value,domProps:{value:t.value||t.label,selected:e.value===t.value}},[e._v("\n          "+e._s(e.getOptionLabel(t))+"\n        ")])}),0)])])])},m=[],f=(i("c5f6"),{name:"combobox",props:{label:{default:"",type:String},value:{default:0,type:Number},options:{default:function(){return[]},type:Array},localeKeyPrefix:{default:"",type:String},isSimple:{default:!1,type:Boolean},disabled:{default:!1,type:Boolean}},computed:{},methods:{updateValue:function(){this.$emit("input",parseInt(this.$refs.select.value))},emitEnter:function(){this.$emit("enter",parseInt(this.$refs.select.value))},getOptionLabel:function(e){return this.localeKeyPrefix.length>0?this.$t(this.localeKeyPrefix+e.label.toLowerCase()):e.label}}}),p=f,y=(i("e007"),i("2877")),v=Object(y["a"])(p,h,m,!1,null,"4e1af092",null),D=v.exports,b=i("9d94"),g=i("7bf8"),C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"schedule-wrapper"},[i("div",{ref:"schedule",class:e.scheduleClass},[i("div",{ref:"entity-list",staticClass:"entities",on:{mousedown:e.startBrowsingY}},[i("div",{staticClass:"has-text-right total-man-days mr0"},[i("span",{staticClass:"total-value"},[e._v(e._s(e.totalManDays))]),i("span",[e._v(e._s(e.$t("schedule.md")))])]),e._l(e.hierarchy,function(t){return i("div",{key:"entity-"+t.id},[i("div",{staticClass:"entity-line entity-name flexrow",style:e.entityLineStyle(t)},[i("span",{staticClass:"expand flexrow-item mr1",on:{click:function(i){return e.expandRootElement(t)}}},[t.expanded?i("chevron-down-icon"):i("chevron-right-icon")],1),i("span",{staticClass:"filler flexrow-item"},[e._v("\n            "+e._s(t.name)+"\n          ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.man_days,expression:"rootElement.man_days"}],staticClass:"flexrow-item",attrs:{type:"number",placeholder:"0"},domProps:{value:t.man_days},on:{input:[function(i){i.target.composing||e.$set(t,"man_days",i.target.value)},function(i){return e.$emit("item-changed",t)}]}}),i("span",{staticClass:"man-days-unit flexrow-item"},[e._v("\n            "+e._s(e.$t("schedule.md"))+"\n          ")])]),t.expanded?i("div",{staticClass:"children",style:e.childrenStyle(t)},[t.loading?i("div",{staticClass:"flexrow"},[i("spinner",{staticClass:"child-spinner flexrow-item",staticStyle:{width:"20px",margin:"0 0 10px 10px"}})],1):e._e(),e._l(t.children,function(n,s){return i("div",{key:"entity-"+n.id,staticClass:"child-name"},[i("div",{staticClass:"entity-line entity-name child-line flexrow",style:e.childNameStyle(t,s)},[i("span",{staticClass:"filler flexrow-item"},[e._v("\n                "+e._s(n.name)+"\n              ")])])])})],2):e._e()])})],2),i("div",{staticClass:"timeline"},[i("div",{ref:"timeline-header",staticClass:"timeline-header",on:{mousedown:e.startBrowsingX}},e._l(e.daysAvailable,function(t,n){return i("div",{key:"header-"+t.toISOString(),staticClass:"day",style:e.dayStyle(t)},[e.milestones[t.format("YYYY-MM-DD")]?i("div",{staticClass:"milestone",on:{click:function(i){e.showEditMilestoneModal(t,e.milestones[t.format("YYYY-MM-DD")])}}},[i("div",{staticClass:"milestone-tooltip flexrow"},[i("span",{staticClass:"bull flexrow-item"},[e._v("•")]),i("span",{staticClass:"flexrow-item"},[e._v("\n                "+e._s(e.milestones[t.format("YYYY-MM-DD")].name)+"\n              ")]),i("span",{staticClass:"filler"}),i("edit2-icon",{staticClass:"edit-icon flexrow-item"})],1),e._m(0,!0)]):i("div",{staticClass:"milestone"},[e._m(1,!0)]),i("div",{staticClass:"date-widget"},[i("div",{staticClass:"add-milestone",attrs:{title:e.addMilestoneTitle(t)},on:{click:function(i){e.showEditMilestoneModal(t,e.milestones[t.format("YYYY-MM-DD")])}}},[i("span",[e._v("+")])]),i("div",{staticClass:"date-name"},[t.newMonth||0===n?i("span",{staticClass:"month-name"},[e._v("\n                "+e._s(t.format("MMMM"))+"\n              ")]):e._e(),i("div",{class:e.dayClass(t,n)},[!t.weekend&&e.zoomLevel>2?i("span",[e._v("\n                  "+e._s(t.format("ddd")[0])+" /\n                ")]):e._e(),t.weekend?e._e():i("span",{staticClass:"day-number"},[e._v("\n                  "+e._s(t.format("DD"))+"\n                ")])])])])])}),0),i("div",{ref:"timeline-content-wrapper",staticClass:"timeline-content-wrapper"},[i("div",{ref:"timeline-content",staticClass:"timeline-content",on:{mousedown:e.startBrowsing,mousewheel:function(t){return e.$emit("change-zoom",t)}}},[i("div",{ref:"timeline-position",staticClass:"timeline-position",style:e.timelinePositionStyle}),e._l(Object.values(e.milestones),function(t){return i("div",{key:"milestone-"+t.date,staticClass:"milestone-vertical-line",style:e.milestoneLineStyle(t)})}),e._l(e.hierarchy,function(t){return i("div",{key:"entity-line-"+t.id},[i("div",{staticClass:"entity-line",style:e.entityLineStyle(t)},[i("div",{staticClass:"timebar",style:e.timebarStyle(t)},[i("div",{class:{"timebar-left-hand":e.isCurrentUserAdmin},on:{mousedown:function(i){return e.moveTimebarLeftSide(t,i)}}}),i("div",{staticClass:"filler",on:{mousedown:function(i){return e.moveTimebar(t,i)}}}),i("div",{class:{"timebar-right-hand":e.isCurrentUserAdmin},on:{mousedown:function(i){return e.moveTimebarRightSide(t,i)}}})])]),t.expanded?i("div",{staticClass:"children",style:e.childrenStyle(t)},[t.loading?i("div",{staticClass:"flexrow"},[i("spinner",{staticClass:"child-spinner flexrow-item",staticStyle:{width:"20px",margin:"0 0 10px 10px",opacity:"0"}})],1):e._e(),e._l(t.children,function(n){return i("div",{key:"entity-line-"+n.id,staticClass:"entity-line child-line"},[i("div",{staticClass:"timebar",style:e.timebarChildStyle(n,t,!0),attrs:{title:n.name}},[i("div",{class:{"timebar-left-hand":e.isCurrentUserAdmin},on:{mousedown:function(t){return e.moveTimebarLeftSide(n,t)}}}),i("div",{staticClass:"filler",on:{mousedown:function(t){return e.moveTimebar(n,t)}}},[e._v("\n                   "+e._s(n.name)+"\n                  ")]),i("div",{class:{"timebar-right-hand":e.isCurrentUserAdmin},on:{mousedown:function(t){return e.moveTimebarRightSide(n,t)}}})])])})],2):e._e()])})],2)])])]),i("spinner",{staticClass:"mt1"}),i("edit-milestone-modal",{ref:"edit-milestone-modal",attrs:{active:e.modals.edit,"is-loading":e.loading.edit,"is-error":e.errors.edit,"milestone-to-edit":e.milestoneToEdit},on:{confirm:e.confirmEditMilestone,cancel:e.hideEditMilestoneModal}})],1)},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("span",{staticClass:"bull"},[e._v("•")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("span",{staticClass:"bull"},[e._v(" ")])])}],M=(i("ac6a"),i("6762"),i("2fdb"),i("7930")),_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background"}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box content"},[e.isEdit?i("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("schedule.milestone.edit_milestone"))+": "+e._s(e.milestoneToEdit.date.format("YYYY-MM-DD"))+"\n      ")]):i("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("schedule.milestone.add_milestone"))+": "+e._s(e.milestoneToEdit.date.format("YYYY-MM-DD"))+"\n      ")]),i("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("schedule.milestone.name")},on:{enter:e.confirm},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),i("modal-footer",{attrs:{"error-text":e.$t("schedule.milestone.error"),"is-loading":e.isLoading,"is-disabled":!e.isFormFilled},on:{confirm:e.confirm,cancel:function(t){return e.$emit("cancel")}}})],1)])])},x=[],S=i("d065"),Y=i("d5c9"),E={name:"edit-milestone-modal",mixins:[S["a"]],components:{ModalFooter:Y["a"],TextField:g["a"]},props:{active:{type:Boolean,default:!1},milestoneToEdit:{type:Object,default:function(){}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},data:function(){return{form:{name:""}}},mounted:function(){this.reset()},computed:Object(a["a"])({},Object(o["c"])([]),{isEdit:function(){return void 0!==this.milestoneToEdit.id},isFormFilled:function(){return this.form.name.length>0}}),methods:Object(a["a"])({},Object(o["b"])([]),{confirm:function(){return this.$emit("confirm",this.form)},reset:function(){this.form={id:this.milestoneToEdit.id||void 0,name:"".concat(this.milestoneToEdit.name||""),date:this.milestoneToEdit.date}}}),watch:{active:function(){var e=this;this.active&&(this.reset(),this.$nextTick(function(){e.$refs.nameField.focus()}))}}},k=E,T=Object(y["a"])(k,_,x,!1,null,"7e4dcc10",null),L=T.exports,$=i("be83"),z=i("0a35"),O={name:"schedule",components:{ChevronDownIcon:z["d"],ChevronRightIcon:z["f"],Edit2Icon:z["j"],EditMilestoneModal:L,Spinner:$["a"]},data:function(){return{currentMilestoneDate:null,isBrowsingX:!1,isBrowsingY:!1,isChangeSize:!1,milestoneToEdit:{date:r()()},timelineDisplayedDaysIndex:{},modals:{edit:!1},errors:{edit:!1},loading:{edit:!1}}},props:{endDate:{type:Object,required:!0},hierarchy:{default:function(){return[]},type:Array},startDate:{type:Object,required:!0},zoomLevel:{type:Number,default:2},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0}},mounted:function(){this.resetScheduleSize(),document.addEventListener("mouseup",this.stopBrowsing),document.addEventListener("mousemove",this.onMouseMove),window.addEventListener("resize",this.resetScheduleSize)},destroyed:function(){document.removeEventListener("mouseup",this.stopBrowsing),document.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.resetScheduleSize),document.body.style.cursor="default"},computed:Object(a["a"])({},Object(o["c"])(["isCurrentUserAdmin","milestones"]),{cellWidth:function(){return 20*this.zoomLevel},daysAvailable:function(){var e=[],t=this.startDate.add(-1,"days"),i=t.toDate(),n=this.endDate.toDate();i.isoweekday=t.isoWeekday(),i.monthday=t.month();while(i<n){var s=new Date(Number(i));s.setDate(i.getDate()+1),s.isoweekday=i.isoweekday+1,s.isoweekday>7&&(s.isoweekday=1,s.newWeek=!0),s.monthday=i.monthday+1,s.monthday>27&&s.getMonth()!==i.getMonth()&&(s.newMonth=!0,s.monthday=1),[6,7].includes(s.isoweekday)&&(s.weekend=!0);var a=r()(s);a.newWeek=s.newWeek,a.newMonth=s.newMonth,a.weekend=s.weekend,e.push(a),i=s}return e},displayedDays:function(){return this.daysAvailable.filter(function(e){return!e.weekend})},nbDisplayedDays:function(){return this.displayedDays.length},displayedDaysIndex:function(){var e=0,t={};return this.displayedDays.forEach(function(i){t[i.format("YYYY-MM-DD")]=e,e++}),t},scheduleClass:function(){var e={schedule:!0,unselectable:!0};return e["zoom-level-"+this.zoomLevel]=!0,e},timelinePositionStyle:function(){return{width:this.cellWidth+"px"}},totalManDays:function(){return this.hierarchy.reduce(function(e,t){var i=e,n=t.man_days;return t.man_days&&("string"===typeof n&&(n=parseInt(n)),i=e+n),i},0)},entityList:function(){return this.$refs["entity-list"]},schedule:function(){return this.$refs["schedule"]},timelineContent:function(){return this.$refs["timeline-content"]},timelineContentWrapper:function(){return this.$refs["timeline-content-wrapper"]},timelineHeader:function(){return this.$refs["timeline-header"]},timelinePosition:function(){return this.$refs["timeline-position"]}}),methods:Object(a["a"])({},Object(o["b"])(["saveMilestone"]),{resetScheduleSize:function(){this.timelineContent&&(this.timelineContent.style.width=this.nbDisplayedDays*this.cellWidth+"px",this.timelineContentWrapper.style.height=this.schedule.offsetHeight-250+"px",this.entityList.style.height=this.schedule.offsetHeight-227+"px")},onMouseMove:function(e){this.isChangeStartDate?this.changeStartDate(e):this.isChangeEndDate?this.changeEndDate(e):this.isChangeDates?this.changeDates(e):(this.isBrowsingX&&this.scrollScheduleLeft(e),this.isBrowsingY&&this.scrollScheduleTop(e)),this.updatePositionBarPosition(e)},updatePositionBarPosition:function(e){var t=this.timelineContentWrapper.scrollLeft+e.clientX;t-=262,t=Math.round(t/this.cellWidth)*this.cellWidth,this.timelinePosition.style.left=t+"px"},changeDates:function(e){var t=e.clientX-this.initialClientX-this.cellWidth/2,i=Math.ceil(t/this.cellWidth),n=this.lastStartDate.format("YYYY-MM-DD"),s=this.lastEndDate.format("YYYY-MM-DD"),a=this.displayedDaysIndex[n],o=this.displayedDaysIndex[s],l=o-a,r=this.displayedDaysIndex[n];r+=i,r<0&&(r=0);var d=this.displayedDays[r];if(d){var c=this.displayedDays[r+l];c&&(this.currentElement.startDate=d,this.currentElement.endDate=c,this.$emit("item-changed",this.currentElement))}},changeStartDate:function(e){var t=e.clientX-this.initialClientX,i=Math.floor(t/this.cellWidth),n=this.lastStartDate.format("YYYY-MM-DD"),s=this.displayedDaysIndex[n];s+=i;var a=this.displayedDays[s];this.currentElement.startDate=a,this.$emit("item-changed",this.currentElement)},changeEndDate:function(e){var t=e.clientX-this.initialClientX+this.cellWidth/2,i=Math.ceil(t/this.cellWidth),n=this.currentElement.startDate.format("YYYY-MM-DD"),s=this.lastEndDate.format("YYYY-MM-DD"),a=this.displayedDaysIndex[n],o=this.displayedDaysIndex[s];o+=i-1,o<a&&(o=a+1),o>this.displayedDaysIndex.length&&(o=this.displayedDaysIndex.length-1);var l=this.displayedDays[o];this.currentElement.endDate=l,this.$emit("item-changed",this.currentElement)},scrollScheduleLeft:function(e){var t=this.timelineContentWrapper.scrollLeft,i=t-e.movementX;this.timelineContentWrapper.scrollLeft=i,this.timelineHeader.scrollLeft=i},scrollScheduleTop:function(e){var t=this.timelineContentWrapper.scrollTop,i=t-e.movementY;this.timelineContentWrapper.scrollTop=i,this.entityList.scrollTop=i},startBrowsing:function(e){this.isChangeStartDate||this.isChangeEndDate||this.isChangeDates||(document.body.style.cursor="grabbing",this.isBrowsingX=!0,this.isBrowsingY=!0)},startBrowsingX:function(e){document.body.style.cursor="grabbing",this.isBrowsingX=!0},startBrowsingY:function(e){document.body.style.cursor="grabbing",this.isBrowsingY=!0},stopBrowsing:function(e){document.body.style.cursor="default",this.isChangeStartDate=!1,this.isChangeEndDate=!1,this.isChangeDates=!1,this.isBrowsingX=!1,this.isBrowsingY=!1},moveTimebar:function(e,t){!this.isChangeStartDate&&this.isCurrentUserAdmin&&(this.isChangeDates=!0,this.isChangeStartDate=!1,this.isChangeEnd=!1,this.currentElement=e,this.lastStartDate=e.startDate.clone(),this.lastEndDate=e.endDate.clone(),this.initialClientX=t.clientX,document.body.style.cursor="ew-resize")},moveTimebarLeftSide:function(e,t){!this.isChangeDates&&this.isCurrentUserAdmin&&(this.isChangeDates=!1,this.isChangeStartDate=!0,this.isChangeEnd=!1,this.currentElement=e,this.lastStartDate=e.startDate.clone(),this.initialClientX=t.clientX,document.body.style.cursor="w-resize")},moveTimebarRightSide:function(e,t){!this.isChangeDates&&this.isCurrentUserAdmin&&(this.isChangeDates=!1,this.isChangeStartDate=!1,this.isChangeEndDate=!0,this.currentElement=e,e.endDate||(e.endDate=e.startDate.clone().add("days",1)),this.lastEndDate=e.endDate.clone(),this.initialClientX=t.clientX,document.body.style.cursor="e-resize")},businessDiff:function(e,t){var i=e.clone().endOf("week"),n=t.clone().startOf("week"),s=n.diff(i,"days");if(t.diff(e,"days")>6){var a=5*s/7,o=i.day()-e.day();0===e.day()&&--o;var l=t.day()-n.day();return 6===t.day()&&--l,o+a+l-1}var d=r()(e),c=0;while(d.isBefore(t,"day"))0!==d.day()&&6!==d.day()&&c++,d.add(1,"days");return c},dayClass:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{"day-name":!0,"new-week":e.newWeek||!1,"new-month":e.newMonth||0===t||!1}},dayStyle:function(e){return{"min-width":e.weekend?"0px":this.cellWidth+"px","max-width":e.weekend?"0px":this.cellWidth+"px"}},entityLineStyle:function(e){var t={"background-color":e.color};return e.expanded&&(t["margin-bottom"]="0"),t},timebarStyle:function(e){return{left:this.getTimebarLeft(e)+"px",width:this.getTimebarWidth(e)+"px",cursor:this.isCurrentUserAdmin?"ew-resize":"default"}},timebarChildStyle:function(e,t){return{left:this.getTimebarLeft(e)+"px",width:this.getTimebarWidth(e)+"px",cursor:this.isCurrentUserAdmin?"ew-resize":"default",background:t.color}},getTimebarLeft:function(e){var t=e.startDate||this.startDate,i=this.businessDiff(this.startDate,t)||0;return i*this.cellWidth+5},getTimebarWidth:function(e){var t=e.startDate||this.startDate,i=e.endDate||e.startDate&&e.startDate.clone().add(1,"days")||this.startDate.clone().add(1,"days"),n=this.businessDiff(t,i)||1;return(n+1)*this.cellWidth-10},expandRootElement:function(e){this.$emit("root-element-expanded",e)},expandChildElement:function(e){},childNameStyle:function(e,t){var i=t%2===0,n=i?.7:.9;return{background:M["a"].lightenColor(e.color,n)}},childrenStyle:function(e){return{"border-bottom":"1px solid "+e.color}},showEditMilestoneModal:function(e,t){this.modals.edit=!0,t?(t.date=r()(t.date,"YYYY-MM-DD"),this.milestoneToEdit=t):this.milestoneToEdit={date:e}},hideEditMilestoneModal:function(){this.modals.edit=!1},confirmEditMilestone:function(e){var t=this;this.loading.edit=!0,this.saveMilestone(e).then(function(){t.modals.edit=!1,t.loading.edit=!1}).catch(function(e){console.error(e),t.loading.edit=!1,t.errors.edit=!0})},milestoneLineStyle:function(e){var t=r()(e.date,"YYYY-MM-DD"),i=this.businessDiff(this.startDate,t);return{left:(i+.5)*this.cellWidth+"px"}},addMilestoneTitle:function(e){return"".concat(this.$t("schedule.milestone.add_milestone")," ").concat(e.format("YYYY-MM-DD"))}}),socket:{},watch:{startDate:function(){this.resetScheduleSize()},endDate:function(){this.resetScheduleSize()},zoomLevel:function(){this.resetScheduleSize()},isLoading:function(){this.$nextTick(this.resetScheduleSize)}}},I=O,P=(i("f419"),Object(y["a"])(I,C,w,!1,null,"dac645ae",null)),W=P.exports,B={name:"production-schedule",components:{ComboboxNumber:D,Datepicker:c["a"],Schedule:W,TaskInfo:b["a"],TextField:g["a"]},data:function(){return{currentTask:null,overallManDays:0,endDate:r()().add(6,"months"),scheduleItems:[],startDate:r()(),selectedStartDate:null,selectedEndDate:null,zoomLevel:3,zoomOptions:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3}],loading:{schedule:!1},errors:{schedule:!1}}},mounted:function(){this.reset()},computed:Object(a["a"])({},Object(o["c"])(["assetTypeMap","currentEpisode","currentProduction","isCurrentUserAdmin","isTVShow","taskTypeMap","user"]),{locale:function(){return"fr_FR"===this.user.locale?d["fr"]:d["en"]}}),methods:Object(a["a"])({},Object(o["b"])(["editProduction","loadAssetTypeScheduleItems","loadEpisodeScheduleItems","loadMilestones","loadScheduleItems","loadSequenceScheduleItems","saveScheduleItem"]),{loadData:function(){var e=this;this.loading.schedule=!0,this.loadScheduleItems(this.currentProduction).then(function(t){t=t.map(function(t){var i=e.taskTypeMap[t.task_type_id];return Object(a["a"])({},t,{color:i.color,for_shots:i.for_shots,name:i.name,priority:i.priority,startDate:r()(t.start_date,"YYYY-MM-DD"),endDate:r()(t.end_date,"YYYY-MM-DD"),expanded:!1,loading:!1,children:[]})}),e.scheduleItems=Object(u["h"])(t,e.taskTypeMap),e.loading.schedule=!1}).then(this.loadMilestones).catch(function(t){console.error(t),e.loading.schedule=!1})},changeZoom:function(e){e.wheelDelta<0&&this.zoomLevel>1&&this.zoomLevel--,e.wheelDelta>0&&this.zoomLevel<3&&this.zoomLevel++},reset:function(){this.currentProduction.start_date&&(this.startDate=r()(this.currentProduction.start_date)),this.currentProduction.end_date&&(this.endDate=r()(this.currentProduction.end_date)),this.overallManDays=this.currentProduction.man_days,this.selectedStartDate=this.startDate.toDate(),this.selectedEndDate=this.endDate.toDate(),this.loadData()},convertScheduleItems:function(e){return e.map(function(e){return Object(a["a"])({},e,{startDate:r()(e.start_date,"YYYY-MM-DD"),endDate:r()(e.end_date,"YYYY-MM-DD"),expanded:!1,loading:!1,children:[]})})},expandTaskTypeElement:function(e){var t=this,i={production:this.currentProduction,taskType:this.taskTypeMap[e.task_type_id]};if(e.expanded=!e.expanded,e.expanded){e.loading=!0;var n="loadAssetTypeScheduleItems";e.for_shots&&(n=this.isTVShow?"loadEpisodeScheduleItems":"loadSequenceScheduleItems"),this[n](i).then(function(i){e.loading=!1,e.children=t.convertScheduleItems(i)}).catch(function(t){console.error(t),e.loading=!1,e.children=[]})}}}),socket:{},watch:{selectedStartDate:function(){this.startDate=r()(this.selectedStartDate),this.editProduction({data:Object(a["a"])({},this.currentProduction,{start_date:this.startDate.format("YYYY-MM-DD")})})},selectedEndDate:function(){this.endDate=r()(this.selectedEndDate),this.editProduction({data:Object(a["a"])({},this.currentProduction,{end_date:this.endDate.format("YYYY-MM-DD")})})},overallManDays:function(){this.overallManDays!==this.currentProduction.man_days&&this.editProduction({data:Object(a["a"])({},this.currentProduction,{man_days:this.overallManDays})})},currentProduction:function(){this.reset()}},metaInfo:function(){return this.isTVShow?{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" - ".concat(this.currentEpisode?this.currentEpisode.name:"")+" | ".concat(this.$t("schedule.title")," - Kitsu")}:{title:"".concat(this.currentProduction.name," ")+"| ".concat(this.$t("schedule.title")," - Kitsu")}}},j=B,X=(i("636c"),Object(y["a"])(j,n,s,!1,null,"55098283",null));t["default"]=X.exports},dd1c:function(e,t,i){},e007:function(e,t,i){"use strict";var n=i("dd1c"),s=i.n(n);s.a},f419:function(e,t,i){"use strict";var n=i("6a85"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-f950de38.2e6c3c69.js.map