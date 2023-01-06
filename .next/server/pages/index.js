"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function GridPattern({ width , height , x , y , squares , ...props }) {
    let patternId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: patternId,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: `M.5 ${height}V.5H${width}`,
                        fill: "none"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${patternId})`
            }),
            squares && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                x: x,
                y: y,
                className: "overflow-visible",
                children: squares.map(([x, y])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        strokeWidth: "0",
                        width: width + 1,
                        height: height + 1,
                        x: x * width,
                        y: y * height
                    }, `${x}-${y}`))
            })
        ]
    });
}


/***/ }),

/***/ 1512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Guides)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1109);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9078);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Heading__WEBPACK_IMPORTED_MODULE_2__]);
_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const guides = [
    {
        href: "/authentication",
        name: "2022 Top DevOps Resources ",
        description: "A resource bundle every DevOps pro needs \uD83D\uDE80 Free DevOps Courses and Tutorials for Beginners and Intermediates \uD83D\uDE80 Top 2022 Kubernetes Courses \uD83D\uDE80 Top 180 Kubernetes Tools for DevOps Engineers \uD83D\uDE80 2400+ Questions and Exercises for DevOps Interviews by Arie Bregman"
    },
    {
        href: "/pagination",
        name: "Top Kubernetes Blogs, Slack Communities, Journals, and Podcasts",
        description: "Kubernetes can be complex and frustrating to use, especially for beginners. Fortunately, the growing developer community offers plenty of Kubernetes-focused blogs, podcasts, journals, and newsletters that give advice and answer urgent questions."
    },
    {
        href: "/errors",
        name: "Free DevOps Courses and Tutorials for Beginners and Intermediate",
        description: "A collection of the best free resources to learn Docker, Kubernetes, Jenkins, Maven, Ansible, and other essential DevOps Courses to become a DevOps engineer in 2022. With DevOps, companies deploy codes 30 times faster than before."
    },
    {
        href: "/webhooks",
        name: "150+ Remote DevOps Jobs",
        description: "LDevOps engineer ranks #2 on Glassdoor’s 50 Best Jobs in America rankings. 60% of hiring managers are looking to fill DevOps engineer positions, according to a study by The Linux Foundation and tech jobs site Dice. I’m sharing DevOps jobs you can work for remotely and earn a 6-figure salary."
    }
];
function Guides() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
                level: 2,
                id: "guides",
                className: "text-4xl",
                children: "Trending Articles"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: guides.map((guide)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-xl font-semibold text-zinc-900 dark:text-white",
                                children: guide.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                                children: guide.description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "mt-12 flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        class: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    class: "sr-only",
                                                    children: "Vasu Maganti"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    class: "h-10 w-10 rounded-full",
                                                    src: "https://media.licdn.com/dms/image/C5603AQEJcW8iICWwhA/profile-displayphoto-shrink_100_100/0/1623872570108?e=1678320000&v=beta&t=F-UD1iVZbkw4T9AdwZ3qc442EnigtD6FcenCJiWgpbs",
                                                    alt: ""
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        class: "ml-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                class: "text-sm font-medium text-white my-0",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        children: "Vasu Maganti"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xb7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "CEO"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                class: "flex space-x-1 text-sm text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        datetime: "2020-03-16",
                                                        children: "Mar 16, 2020"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xb7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "182 likes"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                                    href: guide.href,
                                    variant: "text",
                                    arrow: "right",
                                    children: "Read more"
                                })
                            })
                        ]
                    }, guide.href))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ HeroPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5513);


function HeroPattern() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_1__/* .GridPattern */ .K, {
                        width: 72,
                        height: 56,
                        x: "-12",
                        y: "4",
                        squares: [
                            [
                                4,
                                3
                            ],
                            [
                                2,
                                1
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                10,
                                6
                            ]
                        ],
                        className: "absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    viewBox: "0 0 1113 440",
                    "aria-hidden": "true",
                    className: "absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 5174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9078);
/* harmony import */ var _components_icons_ChatBubbleIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2640);
/* harmony import */ var _components_icons_EnvelopeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6077);
/* harmony import */ var _components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(665);
/* harmony import */ var _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7363);
/* harmony import */ var _components_icons_CartIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5380);
/* harmony import */ var _components_icons_BoltIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(901);
/* harmony import */ var _components_icons_CogIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Heading__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Heading__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const resources = [
    {
        href: "/contacts",
        name: "Cloud Native Consulting",
        description: "Speed up your cloud native project with CloudOps’ expert advice and implementation. We help you navigate the ever-changing cloud native landscape.",
        icon: _components_icons_CogIcon__WEBPACK_IMPORTED_MODULE_11__/* .CogIcon */ .I,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/conversations",
        name: "Product Engineering",
        description: "Zelar modern software engineering approach enables companies to build scalable & future-ready software products.",
        icon: _components_icons_CartIcon__WEBPACK_IMPORTED_MODULE_9__/* .CartIcon */ .w,
        pattern: {
            y: -6,
            squares: [
                [
                    -1,
                    2
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/messages",
        name: "Open Policy Agent",
        description: "Are you scouting to have a single authorization tool that can cover the whole cloud native stack?",
        icon: _components_icons_BoltIcon__WEBPACK_IMPORTED_MODULE_10__/* .BoltIcon */ .j,
        pattern: {
            y: 32,
            squares: [
                [
                    0,
                    2
                ],
                [
                    1,
                    4
                ]
            ]
        }
    },
    {
        href: "/groups",
        name: "Devops",
        description: "Zelar offers provides DevOps-as-a-Service to help large enterprises and startups align their Development and Operations to achieve higher efficiency,",
        icon: _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_8__/* .UsersIcon */ .o,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    }
];
function ResourceIcon({ icon: Icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: "h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
        })
    });
}
function ResourcePattern({ mouseX , mouseY , ...gridProps }) {
    let maskImage = framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = {
        maskImage,
        WebkitMaskImage: maskImage
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pointer-events-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_3__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",
                    ...gridProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",
                style: style
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",
                style: style,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_3__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",
                    ...gridProps
                })
            })
        ]
    });
}
function Resource({ resource  }) {
    let mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    let mouseY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    function onMouseMove({ currentTarget , clientX , clientY  }) {
        let { left , top  } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onMouseMove: onMouseMove,
        className: "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourcePattern, {
                ...resource.pattern,
                mouseX: mouseX,
                mouseY: mouseY
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative rounded-2xl px-4 pt-16 pb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourceIcon, {
                        icon: resource.icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: resource.href,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute inset-0 rounded-2xl"
                                }),
                                resource.name
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                        children: resource.description
                    })
                ]
            })
        ]
    }, resource.href);
}
function Resources() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-24 mb-8 xl:max-w-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_4__/* .Heading */ .X, {
                level: 2,
                id: "resources",
                className: "text-4xl font-bold",
                children: "Our Services"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: resources.map((resource)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Resource, {
                        resource: resource
                    }, resource.href))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ BoltIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BoltIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 11.5 10 2v5.5a1 1 0 0 0 1 1h4.5L10 18v-5.5a1 1 0 0 0-1-1H4.5Z"
        })
    });
}


/***/ }),

/***/ 5380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ CartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CartIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "M5.98 11.288 3.5 5.5h14l-2.48 5.788A2 2 0 0 1 13.18 12.5H7.82a2 2 0 0 1-1.838-1.212Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m3.5 5.5 2.48 5.788A2 2 0 0 0 7.82 12.5h5.362a2 2 0 0 0 1.839-1.212L17.5 5.5h-14Zm0 0-1-2M6.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM14.5 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            })
        ]
    });
}


/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ChatBubbleIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ChatBubbleIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 8.5h5M8.5 11.5h3"
            })
        ]
    });
}


/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CogIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CogIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                d: "M11.063 1.5H8.937l-.14 1.128c-.086.682-.61 1.22-1.246 1.484-.634.264-1.37.247-1.912-.175l-.898-.699-1.503 1.503.699.898c.422.543.44 1.278.175 1.912-.264.635-.802 1.16-1.484 1.245L1.5 8.938v2.124l1.128.142c.682.085 1.22.61 1.484 1.244.264.635.247 1.37-.175 1.913l-.699.898 1.503 1.503.898-.699c.543-.422 1.278-.44 1.912-.175.635.264 1.16.801 1.245 1.484l.142 1.128h2.124l.142-1.128c.085-.683.61-1.22 1.244-1.484.635-.264 1.37-.247 1.913.175l.898.699 1.503-1.503-.699-.898c-.422-.543-.44-1.278-.175-1.913.264-.634.801-1.16 1.484-1.245l1.128-.14V8.937l-1.128-.14c-.683-.086-1.22-.611-1.484-1.246-.264-.634-.247-1.37.175-1.912l.699-.898-1.503-1.503-.898.699c-.543.422-1.278.44-1.913.175-.634-.264-1.16-.802-1.244-1.484L11.062 1.5ZM10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.938 1.5h2.124l.142 1.128c.085.682.61 1.22 1.244 1.484v0c.635.264 1.37.247 1.913-.175l.898-.699 1.503 1.503-.699.898c-.422.543-.44 1.278-.175 1.912v0c.264.635.801 1.16 1.484 1.245l1.128.142v2.124l-1.128.142c-.683.085-1.22.61-1.484 1.244v0c-.264.635-.247 1.37.175 1.913l.699.898-1.503 1.503-.898-.699c-.543-.422-1.278-.44-1.913-.175v0c-.634.264-1.16.801-1.245 1.484l-.14 1.128H8.937l-.14-1.128c-.086-.683-.611-1.22-1.246-1.484v0c-.634-.264-1.37-.247-1.912.175l-.898.699-1.503-1.503.699-.898c.422-.543.44-1.278.175-1.913v0c-.264-.634-.802-1.16-1.484-1.245l-1.128-.14V8.937l1.128-.14c.682-.086 1.22-.61 1.484-1.246v0c.264-.634.247-1.37-.175-1.912l-.699-.898 1.503-1.503.898.699c.543.422 1.278.44 1.912.175v0c.635-.264 1.16-.802 1.245-1.484L8.938 1.5Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "2.5",
                fill: "none"
            })
        ]
    });
}


/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export EnvelopeIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function EnvelopeIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
            })
        ]
    });
}


/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export UserIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function UserIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}


/***/ }),

/***/ 7363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ UsersIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function UsersIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}


/***/ }),

/***/ 831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var _components_Guides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1512);
/* harmony import */ var _components_Resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5174);
/* harmony import */ var _components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9078);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_Guides__WEBPACK_IMPORTED_MODULE_2__, _components_Resources__WEBPACK_IMPORTED_MODULE_3__, _components_Heading__WEBPACK_IMPORTED_MODULE_5__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_Guides__WEBPACK_IMPORTED_MODULE_2__, _components_Resources__WEBPACK_IMPORTED_MODULE_3__, _components_Heading__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 





const description = "Learn everything there is to know about the Protocol API and integrate Protocol into your product.";
const sections = [
    {
        title: "Guides",
        id: "guides"
    },
    {
        title: "Resources",
        id: "resources"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        p: "p",
        a: "a"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Button  } = _components;
    if (!Button) _missingMdxReference("Button", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__/* .HeroPattern */ .f, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                class: "text-[4rem] font-bold leading-[5rem] mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white",
                children: " Zelar is your cloud native partner"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Over years of solid experience, Zelarsoft is one of the trusted technology development partners to design, deliver and support business vision from beginning to the end.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "not-prose mb-16 mt-6 flex gap-3",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        href: "/quickstart",
                        arrow: "right",
                        children: "Get started"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        href: "/sdks",
                        variant: "outline",
                        children: "Explore Case Studies"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                class: "text-[1.5rem] font-bold leading-[0rem] my-4 pt-8",
                children: "Our Partners"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "bg-transparent mt-12 mb-20",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "mx-auto max-w-7xl",
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
                                    alt: "Tuple"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                                    alt: "Mirage"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
                                    alt: "StaticKit"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-3 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
                                    alt: "Transistor"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-2 flex justify-left md:col-span-3 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
                                    alt: "Workcation"
                                })
                            })
                        ]
                    })
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                class: "text-[1.5rem] font-bold leading-[0rem] my-4",
                children: "Our Clients"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                class: "bg-transparent mt-12 mb-16",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    class: "mx-auto max-w-7xl",
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        class: "grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5",
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
                                    alt: "Tuple"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
                                    alt: "Mirage"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-2 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
                                    alt: "StaticKit"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-1 flex justify-left md:col-span-3 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
                                    alt: "Transistor"
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                class: "col-span-2 flex justify-left md:col-span-3 lg:col-span-1",
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    class: "h-12 my-0",
                                    src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
                                    alt: "Workcation"
                                })
                            })
                        ]
                    })
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Resources__WEBPACK_IMPORTED_MODULE_3__/* .Resources */ ._, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    className: "text-lg",
                    href: "/sdks",
                    variant: "text",
                    arrow: "right",
                    children: "View all services"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Guides__WEBPACK_IMPORTED_MODULE_2__/* .Guides */ .t, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X, {
                level: 2,
                id: "guides",
                className: "text-4xl",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "Stay in Touch"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "We believe it is important to stay up-to-date on the latest as it relates to performance and optimization. ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "Join our newsletter"
                    }),
                    " and never miss out on breaking industry news again."
                ],
                ...{
                    className: "lead"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                class: "relative",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            "aria-hidden": "true",
                            class: "w-5 h-5 text-gray-500 dark:text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        id: "email-address-icon",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                        placeholder: "Enter your email"
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const getStaticProps = ()=>({
        props: JSON.parse(JSON.stringify({
            Guides: _components_Guides__WEBPACK_IMPORTED_MODULE_2__/* .Guides */ .t,
            Heading: _components_Heading__WEBPACK_IMPORTED_MODULE_5__/* .Heading */ .X,
            HeroPattern: _components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__/* .HeroPattern */ .f,
            Resources: _components_Resources__WEBPACK_IMPORTED_MODULE_3__/* .Resources */ ._,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            description,
            sections
        }))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,387], () => (__webpack_exec__(831)));
module.exports = __webpack_exports__;

})();