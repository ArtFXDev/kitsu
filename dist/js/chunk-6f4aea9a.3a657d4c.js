(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f4aea9a"],{"236e":function(e,s,t){"use strict";t("b34d")},a01b:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"page",staticClass:"columns fixed-page"},[t("div",{staticClass:"column main-column"},[t("div",{staticClass:"person page"},[t("div",{ref:"header",staticClass:"flexrow page-header"},[e.person?t("div",{staticClass:"flexrow-item"},[t("people-avatar",{attrs:{person:e.person,size:80,"font-size":30,"is-text":!1}})],1):e._e(),t("div",{staticClass:"flexrow-item"},[t("page-title",{attrs:{text:e.person?e.person.name:""}})],1)]),t("div",{ref:"tabs",staticClass:"task-tabs tabs"},[e.person?t("ul",[t("li",{class:{"is-active":e.isActiveTab("todos")}},[t("router-link",{attrs:{to:{name:"person",params:{person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("tasks.current"))+" ")])],1),t("li",{class:{"is-active":e.isActiveTab("done")}},[t("router-link",{attrs:{to:{name:"person-tab",params:{tab:"done",person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("tasks.done"))+" ("+e._s(e.displayedPersonDoneTasks.length)+") ")])],1),e.isCurrentUserManager?t("li",{class:{"is-active":e.isActiveTab("timesheets")}},[t("router-link",{attrs:{to:{name:"person-tab",params:{tab:"timesheets",person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("timesheets.title"))+" ")])],1):e._e(),t("li",{class:{"is-active":e.isActiveTab("schedule")}},[t("router-link",{attrs:{to:{name:"person-tab",params:{tab:"schedule",person_id:e.person.id}}}},[e._v(" "+e._s(e.$t("schedule.title"))+" ")])],1)]):e._e()]),t("div",{ref:"search",staticClass:"flexrow"},[e.isActiveTab("done")?e._e():t("search-field",{ref:"person-tasks-search-field",class:{"search-field":!0,"flexrow-item":!0},attrs:{"can-save":!0},on:{change:e.onSearchChange,save:e.saveSearchQuery}}),t("span",{staticClass:"filler"}),t("combobox",{staticClass:"flexrow-item",attrs:{label:e.$t("main.sorted_by"),options:e.sortOptions,"locale-key-prefix":"tasks.fields."},model:{value:e.currentSort,callback:function(s){e.currentSort=s},expression:"currentSort"}})],1),t("div",{ref:"query"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isActiveTab("todos")||e.isActiveTab("timesheets"),expression:"isActiveTab('todos') || isActiveTab('timesheets')"}],staticClass:"query-list"},[t("search-query-list",{attrs:{queries:e.personTaskSearchQueries},on:{"change-search":e.changeSearch,"remove-search":e.removeSearchQuery}})],1)]),e.isActiveTab("todos")?t("todos-list",{ref:"task-list",attrs:{tasks:e.sortedTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,"selection-grid":e.personTaskSelectionGrid},on:{scroll:e.setPersonTasksScrollPosition}}):e._e(),e.isActiveTab("done")?t("todos-list",{ref:"done-list",attrs:{tasks:e.displayedPersonDoneTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,done:!0,selectionGrid:e.personTaskSelectionGrid}}):e._e(),e.isActiveTab("timesheets")?t("timesheet-list",{attrs:{tasks:e.loggablePersonTasks,"done-tasks":e.loggableDoneTasks,"is-loading":e.isTasksLoading,"is-error":e.isTasksLoadingError,"time-spent-map":e.personTimeSpentMap,"time-spent-total":e.personTimeSpentTotal,"hide-done":e.personTasksSearchText.length>0},on:{"date-changed":e.onDateChanged,"time-spent-change":e.onTimeSpentChange,"set-day-off":e.onSetDayOff,"unset-day-off":e.onUnsetDayOff}}):e._e(),e.isActiveTab("schedule")?t("div",[e.scheduleItems.length>0?t("schedule",{ref:"schedule-widget",attrs:{"start-date":e.tasksStartDate,"end-date":e.tasksEndDate,hierarchy:e.scheduleItems,"zoom-level":2,height:e.scheduleHeight,"is-loading":e.isTasksLoading,"is-estimation-linked":!0,"with-milestones":!1}}):t("div",{staticClass:"has-text-centered"},[e._v(" There is no tasks scheduled for current person. ")])],1):e._e()],1)]),1===e.nbSelectedTasks?t("div",{staticClass:"column side-column"},[t("task-info",{attrs:{task:e.selectedTasks.values().next().value}})],1):e._e()])},i=[],n=t("2909"),r=t("5530"),o=(t("d81d"),t("4de4"),t("4e82"),t("159b"),t("99af"),t("4ec9"),t("d3b7"),t("3ca3"),t("ddb0"),t("a630"),t("ac1f"),t("841c"),t("b0c0"),t("caad"),t("7f45")),c=t.n(o),d=t("ceca"),l=t.n(d),h=t("2f62"),u=t("31f2"),f=t("7930"),p=t("3657"),m=t("992f"),T=t("8d07"),k=t("eb8c"),v=t("d7c7"),b=t("4d04"),g=t("55ce"),_=t("b11e"),S=t("e739"),y=t("9d94"),D={name:"person",mixins:[u["a"]],components:{Combobox:m["a"],PageTitle:T["a"],PeopleAvatar:k["a"],Schedule:v["a"],SearchField:b["a"],SearchQueryList:g["a"],TaskInfo:y["default"],TodosList:S["a"],TimesheetList:_["a"]},data:function(){return{activeTab:"todos",currentSort:"entity_name",isTasksLoading:!1,isTasksLoadingError:!1,person:null,scheduleHeight:0,selectedDate:c()().format("YYYY-MM-DD"),sortOptions:["entity_name","priority","task_status_short_name","estimation","due_date","last_comment_date"].map((function(e){return{label:e,value:e}}))}},mounted:function(){var e=this;this.updateActiveTab(),this.personTasksSearchText.length>0&&this.searchField.setValue(this.personTasksSearchText),setTimeout((function(){e.searchField&&e.searchField.focus()}),100),this.loadPerson(this.$route.params.person_id),window.addEventListener("resize",this.resetScheduleHeight)},afterDestroy:function(){window.removeEventListener("resize",this.resetScheduleHeight),this.$store.commit("LOAD_PERSON_TASKS_END",{tasks:[],userFilters:{},taskTypeMap:this.taskTypeMap})},computed:Object(r["a"])(Object(r["a"])({},Object(h["c"])(["displayedPersonTasks","displayedPersonDoneTasks","isCurrentUserManager","nbSelectedTasks","personMap","personTasksScrollPosition","personTasksSearchText","personTaskSearchQueries","personTaskSelectionGrid","personTimeSpentMap","personTimeSpentTotal","productionMap","selectedTasks","taskTypeMap"])),{},{loggablePersonTasks:function(){var e=this;return this.displayedPersonTasks.filter((function(s){return e.taskTypeMap.get(s.task_type_id).allow_timelog}))},loggableDoneTasks:function(){var e=this;return this.displayedPersonDoneTasks.filter((function(s){return e.taskTypeMap.get(s.task_type_id).allow_timelog}))},searchField:function(){return this.$refs["person-tasks-search-field"]},taskList:function(){return this.$refs["task-list"]},haveDoneList:function(){return this.$refs["done-list"]},sortedTasks:function(){var e="entity_name"===this.currentSort,s=Object(n["a"])(this.displayedPersonTasks);return e?s.sort(l()("project_name").thenBy("task_type_name").thenBy("full_entity_name")):s.sort(l()(this.currentSort,-1).thenBy("project_name").thenBy("task_type_name").thenBy("entity_name"))},tasksStartDate:function(){return this.scheduleItems.length>0?Object(p["l"])(this.scheduleTasks):c()()},tasksEndDate:function(){return this.scheduleItems.length>0?Object(p["m"])(this.scheduleTasks):c()().add(15,"days")},scheduleTasks:function(){var e=[];return this.scheduleItems.forEach((function(s){e=e.concat(s.children)})),e},scheduleItems:function(){var e=this,s=new Map;this.sortedTasks.forEach((function(t){if(!s.get(t.project_id)){var a=e.productionMap.get(t.project_id),i=e.buildProjectScheduleItem(a);s.set(t.project_id,i)}var n=s.get(t.project_id),r=e.buildTaskScheduleItem(n,t);r&&n.children.push(r)}));var t=Array.from(s.values());return t.forEach((function(s){var t=c()(),a=c()().add("days",1),i=0;s.children.length>0&&(t=Object(p["l"])(s.children),a=Object(p["m"])(s.children)),s.children.forEach((function(s){var t=e.formatDuration(s.estimation);t&&(i+=s.estimation)})),Object.assign(s,{startDate:t,endDate:a,man_days:i})})),t}}),methods:Object(r["a"])(Object(r["a"])({},Object(h["b"])(["loadPersonTasks","setPersonTasksSearch","savePersonTasksSearch","removePersonTasksSearch","setDayOff","setPersonTasksScrollPosition","setTimeSpent","unsetDayOff"])),{},{resetScheduleHeight:function(){var e=this;this.$nextTick((function(){if(e.isActiveTab("schedule")){var s=e.$refs.page.offsetHeight,t=e.$refs.header.offsetHeight,a=e.$refs.tabs.offsetHeight,i=e.$refs.search.offsetHeight,n=e.$refs.query.offsetHeight;e.scheduleHeight=s-t-a-i-n,e.$refs["schedule-widget"]&&e.$refs["schedule-widget"].resetScheduleSize()}}))},buildProjectScheduleItem:function(e){return Object(r["a"])(Object(r["a"])({},e),{},{avatar:!0,color:f["a"].fromString(e.name,!0),for_shots:!1,priority:1,expanded:!0,loading:!1,children:[],editable:!1})},buildTaskScheduleItem:function(e,s){var t,a=c()();if(!s.start_date&&!s.real_start_date&&!s.due_date&&!s.end_date)return null;s.start_date?a=Object(p["s"])(s.start_date):s.real_start_date&&(a=Object(p["s"])(s.real_start_date));var i=this.formatDuration(s.estimation);s.due_date?t=Object(p["s"])(s.due_date):s.end_date?t=Object(p["s"])(s.end_date):s.estimation&&(t=a.clone().add(i,"days")),t&&!t.isBefore(a)||(t=a.clone().add(1,"days"));var n=this.taskTypeMap.get(s.task_type_id);return Object(r["a"])(Object(r["a"])({},s),{},{name:s.full_entity_name,startDate:a,endDate:t,expanded:!1,loading:!1,man_days:i,editable:!1,unresizable:!1,parentElement:e,color:n.color,children:[]})},isActiveTab:function(e){return this.activeTab===e},selectTab:function(e){var s=this;this.activeTab=e,this.isActiveTab("todos")&&setTimeout((function(){s.searchField&&s.searchField.focus()}),100)},onSearchChange:function(e){this.setPersonTasksSearch(e)},loadPerson:function(e){var s=this;this.person=this.personMap.get(e),this.isTasksLoading=!0,this.loadPersonTasks({personId:this.person.id,date:this.selectedDate,callback:function(e){e&&console.error(e),s.isTasksLoading=!1,s.isTasksLoadingError=!1,setTimeout((function(){s.taskList&&s.$nextTick((function(){s.taskList.setScrollPosition(s.personTasksScrollPosition)})),s.resizeHeaders()}),0)}})},resizeHeaders:function(){var e=this;this.$nextTick((function(){e.taskList&&e.taskList.resizeHeaders(),e.haveDoneList&&e.haveDoneList.resizeHeaders()}))},selectCurrent:function(){var e=this;this.activeTab="current",setTimeout((function(){e.$refs["person-tasks-search-field"].focus()}),100)},selectDone:function(){this.activeTab="done"},changeSearch:function(e){this.$refs["person-tasks-search-field"].setValue(e.search_query),this.$refs["person-tasks-search-field"].$emit("change",e.search_query)},saveSearchQuery:function(e){this.savePersonTasksSearch(e).then((function(){})).catch((function(e){e&&console.error(e)}))},removeSearchQuery:function(e){this.removePersonTasksSearch(e).then((function(){})).catch((function(e){e&&console.error(e)}))},updateActiveTab:function(){var e=["done","timesheets","schedule"];e.includes(this.$route.params.tab)?this.activeTab=this.$route.params.tab:this.activeTab="todos"},onTimeSpentChange:function(e){e.personId=this.person.id,e.date=this.selectedDate,this.setTimeSpent(e)},onDateChanged:function(e){this.selectedDate=c()(e).format("YYYY-MM-DD"),this.loadPerson(this.person.id)},onSetDayOff:function(){var e={personId:this.person.id,date:this.selectedDate};this.setDayOff(e)},onUnsetDayOff:function(){var e={personId:this.person.id,date:this.selectedDate};this.unsetDayOff(e)}}),metaInfo:function(){return{title:this.person?"".concat(this.person.name," - Kitsu"):"... - Kitsu"}},watch:{$route:function(){var e=this.$route.params.person_id;this.updateActiveTab(),this.person.id!==e&&this.loadPerson()},activeTab:function(){this.resetScheduleHeight()}}},O=D,P=(t("236e"),t("0c7c")),j=Object(P["a"])(O,a,i,!1,null,"571d6a9b",null);s["default"]=j.exports},b34d:function(e,s,t){}}]);
//# sourceMappingURL=chunk-6f4aea9a.3a657d4c.js.map