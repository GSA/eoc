"use strict";
self["webpackHotUpdateevaluation_collect"]("cms",{

/***/ "../project-portal-content-decap/src/cms/cms.js":
/*!******************************************************!*\
  !*** ../project-portal-content-decap/src/cms/cms.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decap_cms_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decap-cms-app */ "decap-cms-app");
/* harmony import */ var decap_cms_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decap_cms_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cms_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms-utils */ "../project-portal-content-decap/src/cms/cms-utils.js");
/* harmony import */ var _cms_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cms_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thepolicylab_projectportals_gatsby_theme_project_portal_src_utils_is_external_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @thepolicylab-projectportals/gatsby-theme-project-portal/src/utils/is-external-link */ "../gatsby-theme-project-portal/src/utils/is-external-link.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../../node_modules/gatsby/dist/utils/fast-refresh-module.js */ "../../node_modules/gatsby/dist/utils/fast-refresh-module.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../node_modules/react-refresh/runtime.js */ "../../node_modules/react-refresh/runtime.js");



// Add custom styles to the index.html page


const VALID_URL_REGEXP = new RegExp(
// from https://regexr.com/3dqa0
"^(https?:\\/\\/)?([\\da-z\\.-]+\\.[a-z\\.]{2,6}|[\\d\\.]+)([\\/:?=&#]{1}[\\da-z\\.-]+)*[\\/\\?]?$");

// The following configuration is merged with the configuration from the site's config.yml file
// (if it exists in the site's directory static/admin/config.yml)

decap_cms_app__WEBPACK_IMPORTED_MODULE_0___default().init({
  config: {
    media_folder: "content/image",
    public_folder: "/image",
    publish_mode: "editorial_workflow",
    collections: [{
      name: "project",
      label: "Projects",
      label_singular: "Project",
      folder: "content/project",
      extension: "json",
      create: true,
      media_folder: "/static/image",
      public_folder: "/image",
      identifier_field: "title",
      sortable_fields: ["title", "status", "lastModified"],
      preview_path: "project/{{slug}}",
      fields: [{
        name: "title",
        label: "Short title",
        widget: "string",
        required: true,
        hint: 'A short phrase or sentence describing the content. Example: "COVID Nonprofit Impact". ' + 'Slug is created based on the short title."The slug – a part of the web address – is created based on the short title. ' + 'E.g. https://projectportal.brown.edu/project/covid-nonprofit-impact."'
      }, {
        name: "question",
        label: "Question",
        widget: "string",
        required: true,
        hint: "The main research question answered by the project. Only 3 to 5 words fit on a single line, so the question " + "should be brief, ideally no more than 10 to 15 words. " + 'Example: "What impact has COVID-19 had on nonprofit organizations?"'
      }, {
        name: "status",
        label: "Status",
        widget: "select",
        options: ["open", "ongoing", "completed"],
        default: "open",
        required: true
      }, {
        name: "created",
        label: "Date posted",
        widget: "datetime",
        hint: "The default sorting date for open projects. Click now to put this project first."
      }, {
        name: "opportunityCloses",
        label: "Opportunity Closes",
        widget: "datetime",
        required: false,
        date_format: "MM/DD/YYYY",
        time_format: false,
        format: "YYYY-MM-DD",
        default: "",
        hint: "The date on which the chance to collaborate ceases. " + "(After this point the collaborators will be decided.)"
      }, {
        name: "startDate",
        label: "Project started",
        widget: "datetime",
        required: false,
        date_format: "MM/DD/YYYY",
        time_format: false,
        format: "YYYY-MM-DD",
        default: "",
        hint: "The date on which the project started. Required for ongoing and completed" + " projects, and optional for open projects. The default sorting for ongoing projects."
      }, {
        name: "endDate",
        label: "Project Ended",
        widget: "datetime",
        required: false,
        date_format: "MM/DD/YYYY",
        time_format: false,
        format: "YYYY-MM-DD",
        default: "",
        hint: "The date on which the project ended. Required for completed projects, and " + "optional for open and ongoing projects. The default sorting for completed projects."
      }, {
        name: "agency",
        label: "Lead Agency",
        widget: "string",
        required: true,
        hint: "The Lead Agency responsible for the project."
      }, {
        name: "topics",
        label: "Topics",
        widget: "relation",
        collection: "topic",
        search_fields: ["title"],
        value_field: "{{slug}}",
        display_fields: ["title"],
        multiple: true,
        required: true,
        hint: "A list of themes and topics which relate to this project. If you can't see the topic you want, start typing its name. To create a new topic, go to the 'Topic' collection."
      }, {
        name: "summary",
        label: "Summary",
        widget: "markdown"
      }, {
        name: "deliverable",
        label: "Deliverable",
        widget: "markdown",
        default: "",
        required: false,
        hint: "(Anticipated) deliverable(s). Required for completed projects, and " + "optional for open and ongoing projects."
      }, {
        name: "purpose",
        label: "Purpose",
        widget: "markdown",
        default: "",
        required: false,
        hint: "Required for completed projects, and optional for open and ongoing projects."
      }, {
        name: "fundingInfo",
        label: "Funding Info",
        widget: "markdown",
        required: false
      }, {
        name: "statusOfData",
        label: "Status Of Data",
        widget: "markdown",
        required: false
      }, {
        name: "priorResearch",
        label: "Prior Research",
        widget: "markdown",
        required: false
      }, {
        name: "mainContact",
        label: "Main Contact",
        widget: "relation",
        collection: "contact",
        search_fields: ["name", "email", "title", "employer"],
        value_field: "{{slug}}",
        display_fields: ["name"],
        required: true,
        hint: 'The primary point of contact. To create a new contact or modify an existing one, go to the "Contacts" collection.'
      }, {
        name: "emailContent",
        label: "Email Content",
        widget: "markdown",
        required: false,
        hint: 'Shown with Main Contact. Only shown on "open" projects.'
      }, {
        name: "expertise",
        label: "Expertise",
        widget: "markdown",
        default: "",
        required: false,
        hint: 'Expertise desired from potential collaborators. Only shown on "open" projects.'
      }, {
        name: "requirement",
        label: "Requirement",
        widget: "markdown",
        required: false,
        hint: 'Requirements for potential collaborators. Only shown on "open" projects.'
      }, {
        name: "keyDates",
        label: "Key Dates",
        widget: "markdown",
        required: false,
        hint: 'Key dates or events for potential collaborators. Only shown on "open" projects.'
      }, {
        name: "projectTeam",
        label: "Project Team",
        widget: "relation",
        collection: "contact",
        search_fields: ["name", "email", "title", "employer"],
        value_field: "{{slug}}",
        display_fields: ["name"],
        multiple: true,
        required: false,
        hint: 'People or organizations who are involved. To create a new contact or modify an existing one, go to the "Contacts" collection.'
      }, {
        name: "faq",
        label: "FAQ",
        widget: "list",
        required: false,
        fields: [{
          name: "title",
          label: "Question",
          widget: "string",
          required: false,
          hint: "The heading which is shown before the user expands the text block"
        }, {
          name: "text",
          label: "Answer",
          widget: "markdown",
          required: false,
          hint: "The text which is shown when the user expands the text block"
        }]
      }, {
        name: "collectData",
        label: "Collect Data",
        widget: "list",
        required: false,
        fields: [{
          name: "fieldTitle",
          label: "Field Title",
          widget: "markdown",
          required: false,
          hint: "Field Title"
        }, {
          name: "fieldData",
          label: "Field Data",
          widget: "markdown",
          required: false,
          hint: "Field Data"
        }]
      },
      //EP-33: KLW - Adding field for project description pdf file
      {
        name: "summaryPDF",
        label: "Summary PDF",
        widget: "hidden"
      }, {
        name: "lastModified",
        label: "Last Modified",
        widget: "hidden"
      }]
    }, {
      name: "contact",
      label: "Contacts",
      label_singular: "Contact",
      folder: "content/contact",
      create: true,
      extension: "json",
      identifier_field: "name",
      media_folder: "",
      public_folder: "",
      sortable_fields: ["name"],
      fields: [{
        name: "name",
        label: "Name or Department"
      }, {
        name: "title",
        label: "Title",
        required: false
      }, {
        name: "email",
        label: "Email",
        required: false
      }, {
        name: "employer",
        label: "Employer",
        required: false
      }, {
        name: "image",
        label: "Contact Image",
        widget: "image",
        required: false
      }, {
        name: "lastModified",
        label: "Last Modified",
        widget: "hidden",
        required: false
      }]
    }, {
      name: "topic",
      label: "Topics",
      label_singular: "Topic",
      folder: "content/topic",
      extension: "json",
      create: true,
      sortable_fields: ["title"],
      fields: [{
        name: "title",
        label: "Title",
        hint: "Titles should be in Title Case and no more than 30 characters."
      }]
    }, {
      name: "cardPage",
      label: "Card Page",
      folder: "content/card-page",
      media_folder: "/content/image",
      public_folder: "",
      identifier_field: "shortTitle",
      extension: "json",
      create: true,
      preview_path: "{{slug}}",
      fields: [{
        name: "shortTitle",
        label: "Short Title",
        widget: "string",
        required: true,
        hint: "The name which is used to create the web address"
      }, {
        name: "pageName",
        label: "Page Name",
        widget: "string",
        required: false,
        hint: "The name which appears in the Navbar"
      }, {
        name: "title",
        label: "Title",
        widget: "string",
        required: false,
        hint: "The title which appears at the top of the page"
      }, {
        name: "lede",
        label: "Lede",
        widget: "markdown",
        required: false,
        hint: "The text which appears under the title"
      }, {
        name: "image",
        label: "Image",
        widget: "image",
        required: false,
        hint: "The image which appears behind the lede."
      }, {
        name: "sortOptions",
        label: "Sort Options",
        widget: "select",
        multiple: true,
        required: true,
        options: ["created", "opportunityCloses", "startDate", "endDate"],
        default: ["created"]
      }, {
        name: "filterOn",
        label: "Filters",
        widget: "object",
        fields: [{
          name: "status",
          widget: "select",
          multiple: true,
          required: true,
          options: ["open", "ongoing", "completed"],
          default: ["open", "ongoing", "completed"]
        }]
      }]
    }, {
      name: "page",
      label: "Other Pages",
      media_folder: "/content/image",
      public_folder: "",
      files: [{
        name: "about",
        file: "content/page/about.json",
        label: "About",
        preview_path: "{{slug}}",
        fields: [{
          name: "title",
          label: "Title",
          widget: "string",
          required: true,
          hint: "The title of the page shown on the user's browser tab."
        }, {
          name: "header",
          label: "Header",
          widget: "string",
          required: false,
          hint: 'The heading which appears above the "Aims" section'
        }, {
          name: "image",
          label: "Image",
          widget: "image",
          required: false,
          hint: "The image which appears behind page title."
        }, {
          name: "templateKey",
          label: "Template Key",
          widget: "hidden",
          default: "AboutPage"
        }, {
          name: "aims",
          label: "Aims",
          widget: "list",
          required: false,
          fields: [{
            name: "title",
            label: "Title",
            widget: "string",
            required: false,
            hint: "The heading which appears above the text block"
          }, {
            name: "text",
            label: "Text",
            widget: "markdown",
            required: false,
            hint: "A text block in the aims section"
          }]
        }, {
          name: "faq",
          label: "FAQ",
          widget: "list",
          required: false,
          fields: [{
            name: "title",
            label: "Question",
            widget: "string",
            required: false,
            hint: "The heading which is shown before the user expands the text block"
          }, {
            name: "text",
            label: "Answer",
            widget: "markdown",
            required: false,
            hint: "The text which is shown when the user expands the text block"
          }]
        }, {
          name: "accessibility",
          label: "Accessibility Statement",
          widget: "markdown",
          required: false,
          hint: 'A text which appears under the heading "Accessibility Statement"'
        }]
      }, {
        name: "contact",
        file: "content/page/contact.json",
        label: "Contact",
        preview_path: "contact",
        fields: [{
          name: "templateKey",
          label: "Template Key",
          widget: "hidden",
          default: "ContactPage"
        }, {
          name: "title",
          label: "Title",
          widget: "string",
          required: false,
          hint: "The heading which appears above the lede"
        }, {
          name: "lede",
          label: "Lede",
          widget: "markdown",
          required: false,
          hint: "A text which appears immediately above the contact form"
        }, {
          name: "image",
          label: "Image",
          widget: "image",
          required: false,
          hint: "The image which appears behind the lede."
        }]
      }]
    }, {
      name: "config",
      label: "Configuration",
      files: [{
        name: "siteMetadata",
        label: "Site Metadata",
        file: "content/config/site-metadata.json",
        fields: [{
          name: "title",
          label: "Title",
          widget: "string",
          required: true,
          hint: "Site title, used in metadata"
        }, {
          name: "description",
          label: "Description",
          widget: "string",
          required: false,
          hint: "Site description, passed to search engines"
        }]
      }, {
        name: "layout",
        label: "Layout",
        file: "content/config/layout.json",
        fields: [{
          name: "showDevBanner",
          widget: "boolean",
          required: true,
          hint: "Show the development banner",
          default: true
        }, {
          label: "Navbar",
          name: "navbar",
          widget: "object",
          hint: "The site navigation bar",
          fields: [{
            name: "title",
            label: "Site Title",
            widget: "hidden",
            required: false,
            hint: "The text which appears next to the logo."
          }, {
            name: "pages",
            widget: "list",
            fields: [{
              name: "name",
              widget: "string"
            }, {
              name: "link",
              widget: "string",
              pattern: [new RegExp(_thepolicylab_projectportals_gatsby_theme_project_portal_src_utils_is_external_link__WEBPACK_IMPORTED_MODULE_2__.STANDARD_LOCAL_LINK.source + "|" + _thepolicylab_projectportals_gatsby_theme_project_portal_src_utils_is_external_link__WEBPACK_IMPORTED_MODULE_2__.ABSOLUTE_URL_REGEX_WITH_PROTOCOL.source), "Internal links start and end with a single slash, e.g. '/open/'.\n" + "External links include the protocol and hostname, like 'https://ccv.brown.edu/'"]
            }, {
              name: "show",
              widget: "boolean"
            }]
          }]
        }, {
          name: "bottomBanner",
          label: "Bottom Banner",
          widget: "object",
          hint: "A full-width block above the footer which may contain an image and a text",
          fields: [{
            name: "text",
            widget: "markdown",
            required: false,
            hint: "The text which appears in the bottom banner"
          }, {
            name: "link",
            label: "Image link",
            widget: "string",
            required: false,
            hint: "A link which is applied to the image, if an image is present"
          }]
        }, {
          name: "footer",
          label: "Footer",
          widget: "object",
          fields: [{
            name: "copyright",
            widget: "string",
            required: false,
            hint: "A copyright notice which appears at the top of the footer"
          }, {
            name: "links",
            widget: "list",
            required: false,
            hint: "A list of texts to be shown as links",
            fields: [{
              name: "title",
              label: "Title",
              widget: "string",
              hint: "The text to show"
            }, {
              name: "link",
              label: "Link target",
              widget: "string",
              hint: "The link to follow if the text is clicked"
            }]
          }, {
            name: "heading",
            widget: "object",
            required: false,
            hint: "A text to show at the bottom of the footer, next to the image (if present)",
            fields: [{
              name: "title",
              label: "Title",
              widget: "string",
              required: false,
              hint: "The text to show"
            }, {
              name: "link",
              label: "Link",
              widget: "string",
              required: false,
              hint: "The link to follow if the text is clicked"
            }]
          }]
        }]
      }, {
        name: "mainContactConfig",
        label: "Main Contact Config",
        file: "content/config/main-contact.json",
        fields: [{
          name: "ongoingText",
          label: "Ongoing Text",
          widget: "string",
          required: false,
          hint: "The text to show for Ongoing projects"
        }, {
          name: "completeText",
          label: "Complete Text",
          widget: "string",
          required: false,
          hint: "The text to show for Completed projects"
        }, {
          name: "projectInterestLink",
          label: "Project Interest Link",
          widget: "string",
          required: false,
          hint: "Link for users to use instead of the email address of the main contact. If this value is set, the button to send an email to the main contact will be replaced with a button with this link.",
          pattern: [VALID_URL_REGEXP, "Must be a valid URL."]
        }, {
          name: "newsletter",
          label: "Newsletter form link",
          hint: "A link to a newsletter sign-up form, for instance, one set up on" + " Mailchimp.",
          widget: "object",
          fields: [{
            name: "link",
            widget: "string",
            hint: "URL of the newsletter sign-up form.",
            pattern: [VALID_URL_REGEXP, "Must be a valid URL."],
            required: false
          }, {
            name: "title",
            widget: "string",
            required: false,
            hint: "The heading shown in the sign-up box. "
          }, {
            name: "text",
            widget: "markdown",
            required: false,
            hint: 'The text shown above the "Subscribe" button. '
          }]
        }]
      }, {
        name: "emailService",
        label: "Email Service",
        file: "content/config/email-service-contacts.json",
        fields: [{
          name: "contacts",
          label: "Contact(s)",
          widget: "list",
          required: false,
          hint: "Contacts for email service",
          fields: [{
            name: "email",
            label: "Contact Email",
            widget: "string"
          }]
        }]
      }]
    }]
  }
});
decap_cms_app__WEBPACK_IMPORTED_MODULE_0___default().registerEventListener({
  name: "preSave",
  handler: _ref => {
    let {
      entry
    } = _ref;
    return entry.get("data").set("lastModified", new Date().toISOString());
  }
});

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "97e5cd3845eb5a5559df"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=cms.72de1d907039d0df007b.hot-update.js.map