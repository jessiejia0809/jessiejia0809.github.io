"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 8129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.3aced376.png","height":3510,"width":4388,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEUvM0RKVQhESTBtXmhKQk8ZICUvLxtKSQw5Pw0mMwZwdZeprOVnbIcVGxgrMy4/P0NEUHlCSB1NaagGDBOkgaUpOF4iIi0qSheBgaImQRtgZ1mOjrdVWniJYqUIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVQImQXBCQLAEAwEwEUiCVr0oNf/39kZLOpEZAWiaejOV6jxQRYH/HMF2plxl1wI54aZ8ps+tB8uwQIG/pHQegAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "r": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Contact = ({ title , description , buttons  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "contact",
        className: "bg-white py-5 px-5",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-primary fw-bold",
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-sm-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "",
                            children: buttons.map((value, index)=>value.isPrimary ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: value.link,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "btn btn-outline-primary my-1 mx-3",
                                        children: value.title
                                    })
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-secondary text-center py-2 px-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container text-muted",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("small", {
                children: [
                    "\xa9 2021 ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/hashirshoaeb",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "hashirshoaeb"
                        })
                    }),
                    ". Open sourced with love under ",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "MIT"
                        })
                    }),
                    " ",
                    " License"
                ]
            })
        })
    });
};


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({ seo  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seo.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seo.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seo.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            })
        ]
    });
};


/***/ }),

/***/ 9312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation),
/* harmony export */   "HJ": () => (/* binding */ SEO),
/* harmony export */   "Ok": () => (/* binding */ links),
/* harmony export */   "PX": () => (/* binding */ contact),
/* harmony export */   "ZT": () => (/* binding */ work),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "mf": () => (/* binding */ intro),
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _profile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8129);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const navigation = {
    name: "Jessie",
    links: [
        {
            title: "About",
            link: "#about"
        },
        {
            title: "Projects",
            link: "#projects"
        },
        {
            title: "Contact",
            link: "#contact"
        },
        {
            title: "Links",
            link: "/links"
        },
        {
            title: "Blog",
            link: "https://medium.com/@hashirshoaeb"
        }
    ]
};
const intro = {
    title: "Hey, I'm Jessie",
    description: "A Computer Engineer AND aspiring director/cinematographer",
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    buttons: [
        {
            title: "Contact Me",
            link: "#contact",
            isPrimary: true
        },
        {
            title: "Resume",
            link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
            isPrimary: false
        }, 
    ]
};
const about = {
    title: "Who I am",
    description: [
        "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.",
        "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
        "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.", 
    ]
};
const work = {
    title: "What I do",
    cards: [
        {
            title: "Mobile App Development",
            description: "I create pixel perfect iOS and Andriod apps using Flutter.",
            icons: null
        },
        {
            title: "Web Development",
            description: "I create responsive static websites using Reactjs.",
            icons: null
        }
    ]
};
const projects = {
    title: "Projects",
    cards: [
        {
            title: "StarBook",
            description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faAppStore,
                    link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/hashirshoaeb/star_book"
                }, 
            ]
        },
        {
            title: "QuranTalk",
            description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faAppStore,
                    link: "https://apps.apple.com/us/app/qurantalk/id1563425149"
                },
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGooglePlay,
                    link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk"
                }, 
            ]
        },
        {
            title: "Portfolio",
            description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
            icons: [
                {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub,
                    link: "https://github.com/hashirshoaeb/portfolio"
                }, 
            ]
        }, 
    ]
};
const contact = {
    title: "Get in touch",
    description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
    buttons: [
        {
            title: "Email Me",
            link: "mailto:hashirshoaeb@gmail.com",
            isPrimary: true
        },
        {
            title: "Schedule Meeting",
            link: "https://topmate.io/hashirshoaeb",
            isPrimary: false
        }, 
    ]
};
// SEARCH ENGINE 
const SEO = {
    // 50 - 60 char  
    title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
    description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src
};
const links = {
    image: _profile_png__WEBPACK_IMPORTED_MODULE_0__/* ["default"].src */ .Z.src,
    title: "@hashirshoaeb",
    description: "Computer Engineer | Flutter | Reactjs Developer",
    cards: [
        {
            title: "My website",
            link: "https://hashirshoaeb.com/"
        },
        {
            title: "QuranTalk App",
            link: "https://www.qurantalk.app/"
        },
        {
            title: "StarBook App",
            link: "https://starbook.dev/"
        },
        {
            title: "My GitHub",
            link: "https://github.com/hashirshoaeb/"
        },
        {
            title: "My LinkedIn",
            link: "https://www.linkedin.com/in/hashirshoaeb/"
        }, 
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;