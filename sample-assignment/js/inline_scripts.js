/** Required in order to fix style inclusion problems in IE with YUI **/


//<![CDATA[
var M = {}; M.yui = {};
M.pageloadstarttime = new Date();
M.cfg = {"wwwroot":"https:\/\/courses.albion.edu","apibase":"https:\/\/courses.albion.edu\/r.php\/api","homeurl":{},"sesskey":"QKSdjbCVOu","sessiontimeout":"7200","sessiontimeoutwarning":1200,"themerev":"1770996211","slasharguments":1,"theme":"boost","iconsystemmodule":"core\/icon_system_fontawesome","jsrev":"1770996211","admin":"admin","svgicons":true,"usertimezone":"America\/New_York","language":"en_us","courseId":17602,"courseContextId":793882,"contextid":818056,"contextInstanceId":650491,"langrev":1771059785,"templaterev":"1770996211","siteId":1,"userId":11160};var yui1ConfigFn = function(me) {if(/-skin|reset|fonts|grids|base/.test(me.name)){me.type='css';me.path=me.path.replace(/\.js/,'.css');me.path=me.path.replace(/\/yui2-skin/,'/assets/skins/sam/yui2-skin')}};
var yui2ConfigFn = function(me) {var parts=me.name.replace(/^moodle-/,'').split('-'),component=parts.shift(),module=parts[0],min='-min';if(/-(skin|core)$/.test(me.name)){parts.pop();me.type='css';min=''}
if(module){var filename=parts.join('-');me.path=component+'/'+module+'/'+filename+min+'.'+me.type}else{me.path=component+'/'+component+'.'+me.type}};
YUI_config = {"debug":false,"base":"https:\/\/courses.albion.edu\/lib\/yuilib\/3.18.1\/","comboBase":"https:\/\/courses.albion.edu\/theme\/yui_combo.php?","combine":true,"filter":null,"insertBefore":"firstthemesheet","groups":{"yui2":{"base":"https:\/\/courses.albion.edu\/lib\/yuilib\/2in3\/2.9.0\/build\/","comboBase":"https:\/\/courses.albion.edu\/theme\/yui_combo.php?","combine":true,"ext":false,"root":"2in3\/2.9.0\/build\/","patterns":{"yui2-":{"group":"yui2","configFn":yui1ConfigFn}}},"moodle":{"name":"moodle","base":"https:\/\/courses.albion.edu\/theme\/yui_combo.php?m\/1770996211\/","combine":true,"comboBase":"https:\/\/courses.albion.edu\/theme\/yui_combo.php?","ext":false,"root":"m\/1770996211\/","patterns":{"moodle-":{"group":"moodle","configFn":yui2ConfigFn}},"filter":null,"modules":{"moodle-core-handlebars":{"condition":{"trigger":"handlebars","when":"after"}},"moodle-core-blocks":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification"]},"moodle-core-maintenancemodetimer":{"requires":["base","node"]},"moodle-core-actionmenu":{"requires":["base","event","node-event-simulate"]},"moodle-core-lockscroll":{"requires":["plugin","base-build"]},"moodle-core-chooserdialogue":{"requires":["base","panel","moodle-core-notification"]},"moodle-core-dragdrop":{"requires":["base","node","io","dom","dd","event-key","event-focus","moodle-core-notification"]},"moodle-core-event":{"requires":["event-custom"]},"moodle-core-notification":{"requires":["moodle-core-notification-dialogue","moodle-core-notification-alert","moodle-core-notification-confirm","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-core-notification-dialogue":{"requires":["base","node","panel","escape","event-key","dd-plugin","moodle-core-widget-focusafterclose","moodle-core-lockscroll"]},"moodle-core-notification-alert":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-confirm":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-exception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-ajaxexception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core_availability-form":{"requires":["base","node","event","event-delegate","panel","moodle-core-notification-dialogue","json"]},"moodle-course-management":{"requires":["base","node","io-base","moodle-core-notification-exception","json-parse","dd-constrain","dd-proxy","dd-drop","dd-delegate","node-event-delegate"]},"moodle-course-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-course-coursebase","moodle-course-util"]},"moodle-course-util":{"requires":["node"],"use":["moodle-course-util-base"],"submodules":{"moodle-course-util-base":{},"moodle-course-util-section":{"requires":["node","moodle-course-util-base"]},"moodle-course-util-cm":{"requires":["node","moodle-course-util-base"]}}},"moodle-course-categoryexpander":{"requires":["node","event-key"]},"moodle-form-dateselector":{"requires":["base","node","overlay","calendar"]},"moodle-form-shortforms":{"requires":["node","base","selector-css3","moodle-core-event"]},"moodle-question-searchform":{"requires":["base","node"]},"moodle-question-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-availability_completion-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_date-form":{"requires":["base","node","event","io","moodle-core_availability-form"]},"moodle-availability_grade-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_group-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_grouping-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_profile-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-mod_assign-history":{"requires":["node","transition"]},"moodle-mod_attendance-groupfilter":{"requires":["base","node"]},"moodle-mod_quiz-autosave":{"requires":["base","node","event","event-valuechange","node-event-delegate","io-form","datatype-date-format"]},"moodle-mod_quiz-questionchooser":{"requires":["moodle-core-chooserdialogue","moodle-mod_quiz-util","querystring-parse"]},"moodle-mod_quiz-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-base","moodle-mod_quiz-util-page","moodle-mod_quiz-util-slot","moodle-course-util"]},"moodle-mod_quiz-util":{"requires":["node","moodle-core-actionmenu"],"use":["moodle-mod_quiz-util-base"],"submodules":{"moodle-mod_quiz-util-base":{},"moodle-mod_quiz-util-slot":{"requires":["node","moodle-mod_quiz-util-base"]},"moodle-mod_quiz-util-page":{"requires":["node","moodle-mod_quiz-util-base"]}}},"moodle-mod_quiz-quizbase":{"requires":["base","node"]},"moodle-mod_quiz-modform":{"requires":["base","node","event"]},"moodle-mod_quiz-toolboxes":{"requires":["base","node","event","event-key","io","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-slot","moodle-core-notification-ajaxexception"]},"moodle-message_airnotifier-toolboxes":{"requires":["base","node","io"]},"moodle-editor_atto-editor":{"requires":["node","transition","io","overlay","escape","event","event-simulate","event-custom","node-event-html5","node-event-simulate","yui-throttle","moodle-core-notification-dialogue","moodle-editor_atto-rangy","handlebars","timers","querystring-stringify"]},"moodle-editor_atto-plugin":{"requires":["node","base","escape","event","event-outside","handlebars","event-custom","timers","moodle-editor_atto-menu"]},"moodle-editor_atto-menu":{"requires":["moodle-core-notification-dialogue","node","event","event-custom"]},"moodle-editor_atto-rangy":{"requires":[]},"moodle-report_eventlist-eventfilter":{"requires":["base","event","node","node-event-delegate","datatable","autocomplete","autocomplete-filters"]},"moodle-report_loglive-fetchlogs":{"requires":["base","event","node","io","node-event-delegate"]},"moodle-gradereport_history-userselector":{"requires":["escape","event-delegate","event-key","handlebars","io-base","json-parse","moodle-core-notification-dialogue"]},"moodle-qbank_editquestion-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-tool_lp-dragdrop-reorder":{"requires":["moodle-core-dragdrop"]},"moodle-assignfeedback_editpdf-editor":{"requires":["base","event","node","io","graphics","json","event-move","event-resize","transition","querystring-stringify-simple","moodle-core-notification-dialog","moodle-core-notification-alert","moodle-core-notification-warning","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-atto_accessibilitychecker-button":{"requires":["color-base","moodle-editor_atto-plugin"]},"moodle-atto_accessibilityhelper-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_align-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_bold-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_charmap-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_clear-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_collapse-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_emojipicker-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_emoticon-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_equation-button":{"requires":["moodle-editor_atto-plugin","moodle-core-event","io","event-valuechange","tabview","array-extras"]},"moodle-atto_h5p-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_html-beautify":{},"moodle-atto_html-button":{"requires":["promise","moodle-editor_atto-plugin","moodle-atto_html-beautify","moodle-atto_html-codemirror","event-valuechange"]},"moodle-atto_html-codemirror":{"requires":["moodle-atto_html-codemirror-skin"]},"moodle-atto_image-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_indent-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_italic-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_link-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_managefiles-usedfiles":{"requires":["node","escape"]},"moodle-atto_managefiles-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_media-button":{"requires":["moodle-editor_atto-plugin","moodle-form-shortforms"]},"moodle-atto_noautolink-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_orderedlist-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_recordrtc-button":{"requires":["moodle-editor_atto-plugin","moodle-atto_recordrtc-recording"]},"moodle-atto_recordrtc-recording":{"requires":["moodle-atto_recordrtc-button"]},"moodle-atto_rtl-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_strike-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_subscript-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_superscript-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_table-button":{"requires":["moodle-editor_atto-plugin","moodle-editor_atto-menu","event","event-valuechange"]},"moodle-atto_title-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_underline-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_undo-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_unorderedlist-button":{"requires":["moodle-editor_atto-plugin"]}}},"gallery":{"name":"gallery","base":"https:\/\/courses.albion.edu\/lib\/yuilib\/gallery\/","combine":true,"comboBase":"https:\/\/courses.albion.edu\/theme\/yui_combo.php?","ext":false,"root":"gallery\/1770996211\/","patterns":{"gallery-":{"group":"gallery"}}}},"modules":{"core_filepicker":{"name":"core_filepicker","fullpath":"https:\/\/courses.albion.edu\/lib\/javascript.php\/1770996211\/repository\/filepicker.js","requires":["base","node","node-event-simulate","json","async-queue","io-base","io-upload-iframe","io-form","yui2-treeview","panel","cookie","datatable","datatable-sort","resize-plugin","dd-plugin","escape","moodle-core_filepicker","moodle-core-notification-dialogue"]},"core_comment":{"name":"core_comment","fullpath":"https:\/\/courses.albion.edu\/lib\/javascript.php\/1770996211\/comment\/comment.js","requires":["base","io-base","node","json","yui2-animation","overlay","escape"]}},"logInclude":[],"logExclude":[],"logLevel":null};
M.yui.loader = {modules: {}};

//]]>



MathJax.Hub.Config({
    config: ["Accessible.js", "Safe.js"],
    errorSettings: { message: ["!"] },
    skipStartupTypeset: true,
    messageStyle: "none"
});



                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-627510');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-644099');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-644100');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-647464');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-648037');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650391');
                });
                ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281818');
    });
    ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650392');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650629');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650621');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650634');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650491');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650581');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650736');
                });
                ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-289826');
    });
    ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649885');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649886');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650043');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650044');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650185');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650195');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650196');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650045');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650082');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-650186');
                });
                ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281821');
    });
    ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649514');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649727');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649515');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649728');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649729');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649730');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649481');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649573');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649743');
                });
                ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281820');
    });
    ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-648605');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649725');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-649726');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-648602');
                });
                ;

                require(['core_courseformat/local/courseindex/cm'], function(component) {
                    component.init('course-index-cm-648603');
                });
                ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281819');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281822');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281823');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281824');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281825');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281826');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281827');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281828');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281829');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281830');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281831');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281832');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281833');
    });
    ;

    require(['core_courseformat/local/courseindex/section'], function(component) {
        component.init('course-index-section-281834');
    });
    ;

require(['core_courseformat/local/courseindex/courseindex'], function(component) {
    component.init('course-index');
});



//<![CDATA[
document.body.className += ' jsenabled';
//]]>



//<![CDATA[
var require = {
    baseUrl : 'https://courses.albion.edu/lib/requirejs.php/1770996211/',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'https://courses.albion.edu/lib/javascript.php/1770996211/lib/jquery/jquery-3.7.1.min',
        jqueryui: 'https://courses.albion.edu/lib/javascript.php/1770996211/lib/jquery/ui-1.13.2/jquery-ui.min',
        jqueryprivate: 'https://courses.albion.edu/lib/javascript.php/1770996211/lib/requirejs/jquery-private'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>



//<![CDATA[
M.util.js_pending("core/first");
require(['core/first'], function() {
require(['core/prefetch'])
;
require(["media_videojs/loader"], function(loader) {
    loader.setUp('en-GB');
});;
M.util.js_pending('filter_mathjaxloader/loader'); require(['filter_mathjaxloader/loader'], function(amd) {amd.configure({"mathjaxconfig":"\nMathJax.Hub.Config({\n    config: [\"Accessible.js\", \"Safe.js\"],\n    errorSettings: { message: [\"!\"] },\n    skipStartupTypeset: true,\n    messageStyle: \"none\"\n});\n","lang":"en"}); M.util.js_complete('filter_mathjaxloader/loader');});;
M.util.js_pending('core_courseformat/courseeditor'); require(['core_courseformat/courseeditor'], function(amd) {amd.setViewFormat("17602", {"editing":false,"supportscomponents":true,"statekey":"1771042387_1771127571","overriddenStrings":[]}); M.util.js_complete('core_courseformat/courseeditor');});;

require(['core_courseformat/local/courseindex/placeholder'], function(component) {
    component.init('course-index-placeholder');
});
;

require(['core_courseformat/local/courseindex/drawer'], function(component) {
    component.init('courseindex');
});
;
function legacy_activity_onclick_handler_1(e) { e.halt(); window.open('https://courses.albion.edu/mod/url/view.php?id=441851&redirect=1'); return false; };
function legacy_activity_onclick_handler_2(e) { e.halt(); window.open('https://courses.albion.edu/mod/url/view.php?id=650629&redirect=1'); return false; };
function legacy_activity_onclick_handler_3(e) { e.halt(); window.open('https://courses.albion.edu/mod/url/view.php?id=650634&redirect=1'); return false; };
M.util.js_pending('core_courseformat/local/content/activity_header'); require(['core_courseformat/local/content/activity_header'], function(amd) {amd.init(); M.util.js_complete('core_courseformat/local/content/activity_header');});;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-69914e41dfcf9-navbar-nav'));
    });
;

require(
[
    'jquery',
],
function(
    $
) {
    var uniqid = "69914e41e12cf69914e41daa557";
    var container = $('#searchinput-navbar-' + uniqid);
    var opensearch = container.find('[data-action="opensearch"]');
    var input = container.find('[data-region="input"]');
    var submit = container.find('[data-action="submit"]');

    submit.on('click', function(e) {
        if (input.val() === '') {
            e.preventDefault();
        }
    });
    container.on('hidden.bs.collapse', function() {
        opensearch.removeClass('d-none');
        input.val('');
    });
    container.on('show.bs.collapse', function() {
        opensearch.addClass('d-none');
    });
    container.on('shown.bs.collapse', function() {
        input.focus();
    });
});
;

require(
[
    'jquery',
],
function(
    $
) {
    var uniqid = "69914e41e15ca69914e41daa558";
    var container = $('#searchinput-navbar-' + uniqid);
    var opensearch = container.find('[data-action="opensearch"]');
    var input = container.find('[data-region="input"]');
    var submit = container.find('[data-action="submit"]');

    submit.on('click', function(e) {
        if (input.val() === '') {
            e.preventDefault();
        }
    });
    container.on('hidden.bs.collapse', function() {
        opensearch.removeClass('d-none');
        input.val('');
    });
    container.on('show.bs.collapse', function() {
        opensearch.addClass('d-none');
    });
    container.on('shown.bs.collapse', function() {
        input.focus();
    });
});
;

require(['jquery', 'message_popup/notification_popover_controller'], function($, Controller) {
    var container = $('#nav-notification-popover-container');
    var controller = new Controller(container);
    controller.registerEventListeners();
    controller.registerListNavigationEventListeners();
});
;

require(
[
    'jquery',
    'core_message/message_popover'
],
function(
    $,
    Popover
) {
    var toggle = $('#message-drawer-toggle-69914e41e1d5f69914e41daa5510');
    Popover.init(toggle);
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['core/edit_switch'], function(editSwitch) {
    editSwitch.init('69914e41e21b769914e41daa5511-editingswitch');
});
;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

    require(['theme_boost/courseindexdrawercontrols'], function(component) {
    component.init('courseindexdrawercontrols');
    });
;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-69914e41dfaaf-nav-tabs'));
    });
;

require(['theme_boost/footer-popover'], function(FooterPopover) {
    FooterPopover.init();
});
;

require(['jquery', 'core_message/message_drawer'], function($, MessageDrawer) {
    var root = $('#message-drawer-69914e41e34e169914e41daa5512');
    MessageDrawer.init(root, '69914e41e34e169914e41daa5512', false);
});
;

M.util.js_pending('theme_boost/loader');
require(['theme_boost/loader', 'theme_boost/drawer'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete('theme_boost/loader');
});
;
M.util.js_pending('core/notification'); require(['core/notification'], function(amd) {amd.init(818056, []); M.util.js_complete('core/notification');});;
M.util.js_pending('core/log'); require(['core/log'], function(amd) {amd.setConfig({"level":"warn"}); M.util.js_complete('core/log');});;
M.util.js_pending('core/page_global'); require(['core/page_global'], function(amd) {amd.init(); M.util.js_complete('core/page_global');});;
M.util.js_pending('core/utility'); require(['core/utility'], function(amd) {M.util.js_complete('core/utility');});;
M.util.js_pending('core/storage_validation'); require(['core/storage_validation'], function(amd) {amd.init(1771127567); M.util.js_complete('core/storage_validation');});
    M.util.js_complete("core/first");
});
//]]>



//<![CDATA[
M.str = {"moodle":{"lastmodified":"Last modified","name":"Name","error":"Error","info":"Information","yes":"Yes","no":"No","cancel":"Cancel","confirm":"Confirm","areyousure":"Are you sure?","closebuttontitle":"Close","unknownerror":"Unknown error","file":"File","url":"URL","collapseall":"Collapse all","expandall":"Expand all"},"repository":{"type":"Type","size":"Size","invalidjson":"Invalid JSON string","nofilesattached":"No files attached","filepicker":"File picker","logout":"Logout","nofilesavailable":"No files available","norepositoriesavailable":"Sorry, none of your current repositories can return files in the required format.","fileexistsdialogheader":"File exists","fileexistsdialog_editor":"A file with that name has already been attached to the text you are editing.","fileexistsdialog_filemanager":"A file with that name has already been attached","renameto":"Rename to \"{$a}\"","referencesexist":"There are {$a} links to this file","select":"Select"},"admin":{"confirmdeletecomments":"Are you sure you want to delete the selected comment(s)?","confirmation":"Confirmation"},"debug":{"debuginfo":"Debug info","line":"Line","stacktrace":"Stack trace"},"langconfig":{"labelsep":":"}};
//]]>



//<![CDATA[
(function() {M.util.help_popups.setup(Y);
 M.util.js_pending('random69914e41daa5516'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random69914e41daa5516'); });
})();
//]]>
