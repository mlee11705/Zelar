(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* binding */ Code),
/* harmony export */   "P3": () => (/* binding */ CodeGroup),
/* harmony export */   "SU": () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go"
};
function getPanelTitle({ title , language  }) {
    return title ?? languageNames[language] ?? "Code";
}
function ClipboardIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinejoin: "round",
                d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            })
        ]
    });
}
function CopyButton({ code  }) {
    let [copyCount, setCopyCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let copied = copyCount > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (copyCount > 0) {
            let timeout = setTimeout(()=>setCopyCount(0), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        copyCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
        onClick: ()=>{
            window.navigator.clipboard.writeText(code).then(()=>{
                setCopyCount((count)=>count + 1);
            });
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                "aria-hidden": copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClipboardIcon, {
                        className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    }),
                    "Copy"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": !copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !copied && "translate-y-1.5 opacity-0"),
                children: "Copied!"
            })
        ]
    });
}
function CodePanelHeader({ tag , label  }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dark flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* .Tag */ .V, {
                    variant: "small",
                    children: tag
                })
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function CodePanel({ tag , label , code , children  }) {
    let child = react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group dark:bg-white/2.5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanelHeader, {
                tag: child.props.tag ?? tag,
                label: child.props.label ?? label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "overflow-x-auto p-4 text-xs text-white",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                        code: child.props.code ?? code
                    })
                ]
            })
        ]
    });
}
function CodeGroupHeader({ title , children , selectedIndex  }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mr-auto pt-3 text-xs font-semibold text-white",
                children: title
            }),
            hasTabs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
                className: "-mb-px flex gap-4 text-xs font-medium",
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, childIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none", childIndex === selectedIndex ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                        children: getPanelTitle(child.props)
                    }))
            })
        ]
    });
}
function CodeGroupPanels({ children , ...props }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (hasTabs) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
            children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
                        ...props,
                        children: child
                    })
                }))
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
        ...props,
        children: children
    });
}
function usePreventLayoutShift() {
    let positionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let rafRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            window.cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift (callback) {
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(()=>{
                let newTop = positionRef.current.getBoundingClientRect().top;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}
const usePreferredLanguageStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__["default"])((set)=>({
        preferredLanguages: [],
        addPreferredLanguage: (language)=>set((state)=>({
                    preferredLanguages: [
                        ...state.preferredLanguages.filter((preferredLanguage)=>preferredLanguage !== language),
                        language
                    ]
                }))
    }));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages , addPreferredLanguage  } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let activeLanguage = [
        ...availableLanguages
    ].sort((a, z)=>preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef , preventLayoutShift  } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex)=>{
            preventLayoutShift(()=>addPreferredLanguage(availableLanguages[newSelectedIndex]));
        }
    };
}
const CodeGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function CodeGroup({ children , title , ...props }) {
    let languages = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>getPanelTitle(child.props));
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    let Container = hasTabs ? _headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group : "div";
    let containerProps = hasTabs ? tabGroupProps : {};
    let headerProps = hasTabs ? {
        selectedIndex: tabGroupProps.selectedIndex
    } : {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupContext.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            ...containerProps,
            className: "not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupHeader, {
                    title: title,
                    ...headerProps,
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupPanels, {
                    ...props,
                    children: children
                })
            ]
        })
    });
}
function Code({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: children
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        ...props,
        children: children
    });
}
function Pre({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroup, {
        ...props,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1109);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            })
        ]
    });
}
function FeedbackButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "submit",
        className: "px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
        ...props
    });
}
const FeedbackForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackForm({ onSubmit  }, ref) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        ref: ref,
        onSubmit: onSubmit,
        className: "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-zinc-600 dark:text-zinc-400",
                children: "Was this page helpful?"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "yes",
                        children: "Yes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-zinc-900/10 dark:bg-white/10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "no",
                        children: "No"
                    })
                ]
            })
        ]
    });
});
const FeedbackThanks = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackThanks(_props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: "absolute inset-0 flex justify-center md:justify-start",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {
                    className: "h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                }),
                "Thanks for your feedback!"
            ]
        })
    });
});
function Feedback() {
    let [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function onSubmit(event) {
        event.preventDefault();
        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                show: !submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                leave: "pointer-events-none duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackForm, {
                    onSubmit: onSubmit
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                show: submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                enter: "delay-150 duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackThanks, {})
            })
        ]
    });
}
function PageLink({ label , page , previous =false  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                href: page.href,
                "aria-label": `${label}: ${page.title}`,
                variant: "secondary",
                arrow: previous ? "left" : "right",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: page.href,
                tabIndex: -1,
                "aria-hidden": "true",
                className: "text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",
                children: page.title
            })
        ]
    });
}
function PageNavigation() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let allPages = _components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .navigation.flatMap */ .G.flatMap((group)=>group.links);
    let currentPageIndex = allPages.findIndex((page)=>page.href === router.pathname);
    if (currentPageIndex === -1) {
        return null;
    }
    let previousPage = allPages[currentPageIndex - 1];
    let nextPage = allPages[currentPageIndex + 1];
    if (!previousPage && !nextPage) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            previousPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-start gap-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLink, {
                    label: "Previous",
                    page: previousPage,
                    previous: true
                })
            }),
            nextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-auto flex flex-col items-end gap-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLink, {
                    label: "Next",
                    page: nextPage
                })
            })
        ]
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
        })
    });
}
function DiscordIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"
        })
    });
}
function SocialLink({ href , icon: Icon , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: "group",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
            })
        ]
    });
}
function SmallPrint() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-xs text-zinc-600 dark:text-zinc-400",
                children: [
                    "\xa9 Copyright ",
                    new Date().getFullYear(),
                    ". All rights reserved."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: TwitterIcon,
                        children: "Follow us on Twitter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: GitHubIcon,
                        children: "Follow us on GitHub"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: DiscordIcon,
                        children: "Join our Discord server"
                    })
                ]
            })
        ]
    });
}
function Footer() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Feedback, {}, router.pathname),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageNavigation, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallPrint, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7027:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1109);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9973);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3127);
/* harmony import */ var _components_ModeToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2681);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_Search__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_Search__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function TopLevelNavItem({ href , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            className: "text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
const Header = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Header({ className  }, ref) {
    let { isOpen: mobileNavIsOpen  } = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useMobileNavigationStore */ .fX)();
    let isInsideMobileNavigation = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)();
    let { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();
    let bgOpacityLight = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [
        0,
        72
    ], [
        0.5,
        0.9
    ]);
    let bgOpacityDark = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [
        0,
        72
    ], [
        0.2,
        0.8
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(className, "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80", !isInsideMobileNavigation && "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80", isInsideMobileNavigation ? "bg-white dark:bg-zinc-900" : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"),
        style: {
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("absolute inset-x-0 top-full h-px transition", (isInsideMobileNavigation || !mobileNavIsOpen) && "bg-zinc-900/7.5 dark:bg-white/7.5")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_9__/* .Search */ .o, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-5 lg:hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .MobileNavigation */ .$o, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        "aria-label": "Home",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* .Logo */ .T, {
                            className: "h-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            role: "list",
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "/",
                                    children: "Case Studies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Team"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Blog"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_9__/* .MobileSearch */ ._, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModeToggle__WEBPACK_IMPORTED_MODULE_8__/* .ModeToggle */ .l, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden min-[416px]:contents",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            href: "#",
                            variant: "primary2",
                            children: "Get in Touch"
                        })
                    })
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3862);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7027);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9973);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6931);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9742);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Layout({ children , sections =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .SectionProvider */ .s, {
        sections: sections,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:ml-72 xl:ml-80",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {
                    layoutScroll: true,
                    className: "contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden lg:flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/",
                                    "aria-label": "Home",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {
                                        className: "h-6"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                                className: "hidden lg:mt-10 lg:block"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative px-4 pt-14 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "py-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_7__/* .Prose */ .M, {
                                as: "article",
                                children: children
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 99 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                className: "fill-emerald-400",
                d: "M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                x: "35",
                y: "20",
                stroke: "#FFFFFF",
                "stroke-width": "2.5px",
                className: "text-2xl",
                children: "Zelar"
            })
        ]
    });
}


/***/ }),

/***/ 3127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ MobileNavigation),
/* harmony export */   "Fi": () => (/* binding */ useIsInsideMobileNavigation),
/* harmony export */   "fX": () => (/* binding */ useMobileNavigationStore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7027);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, zustand__WEBPACK_IMPORTED_MODULE_4__, _components_Header__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, zustand__WEBPACK_IMPORTED_MODULE_4__, _components_Header__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M.5 1h9M.5 8h9M.5 4.5h9"
        })
    });
}
function XIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m1.5 1 7 7M8.5 1l-7 7"
        })
    });
}
const IsInsideMobileNavigationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function useIsInsideMobileNavigation() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IsInsideMobileNavigationContext);
}
const useMobileNavigationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__["default"])((set)=>({
        isOpen: false,
        open: ()=>set({
                isOpen: true
            }),
        close: ()=>set({
                isOpen: false
            }),
        toggle: ()=>set((state)=>({
                    isOpen: !state.isOpen
                }))
    }));
function MobileNavigation() {
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let { isOpen , toggle , close  } = useMobileNavigationStore();
    let ToggleIcon = isOpen ? XIcon : MenuIcon;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsInsideMobileNavigationContext.Provider, {
        value: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
                "aria-label": "Toggle navigation",
                onClick: toggle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleIcon, {
                    className: "w-2.5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            !isInsideMobileNavigation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    onClose: close,
                    className: "fixed inset-0 z-50 lg:hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "duration-300 ease-out",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "duration-200 ease-in",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                    enter: "duration-300 ease-out",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "duration-200 ease-in",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                    enter: "duration-500 ease-in-out",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "duration-500 ease-in-out",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        layoutScroll: true,
                                        className: "fixed left-0 top-14 bottom-0 w-full overflow-y-auto bg-white px-4 pt-6 pb-4 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {})
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ModeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SunIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                d: "M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
            })
        ]
    });
}
function MoonIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
        })
    });
}
function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add("[&_*]:!transition-none");
        window.setTimeout(()=>{
            document.documentElement.classList.remove("[&_*]:!transition-none");
        }, 0);
    }
    function toggleMode() {
        disableTransitionsTemporarily();
        let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        let isSystemDarkMode = darkModeMediaQuery.matches;
        let isDarkMode = document.documentElement.classList.toggle("dark");
        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode;
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
        "aria-label": "Toggle dark mode",
        onClick: toggleMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SunIcon, {
                className: "h-5 w-5 stroke-zinc-900 dark:hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MoonIcon, {
                className: "hidden h-5 w-5 stroke-white dark:block"
            })
        ]
    });
}


/***/ }),

/***/ 6931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation),
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1109);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3127);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9115);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5933);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1448);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function useInitialValue(value, condition = true) {
    let initialValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value).current;
    return condition ? initialValue : value;
}
function TopLevelNavItem({ href , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "md:hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            className: "block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
function NavLink({ href , tag , active , isAnchorLink =false , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        "aria-current": active ? "page" : undefined,
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("flex justify-between gap-2 py-1 pr-3 text-sm transition", isAnchorLink ? "pl-7" : "pl-4", active ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "truncate",
                children: children
            }),
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_9__/* .Tag */ .V, {
                variant: "small",
                color: "zinc",
                children: tag
            })
        ]
    });
}
function VisibleSectionHighlight({ group , pathname  }) {
    let [sections, visibleSections] = useInitialValue([
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.sections),
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.visibleSections)
    ], (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)());
    let isPresent = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useIsPresent)();
    let firstVisibleSectionIndex = Math.max(0, [
        {
            id: "_top"
        },
        ...sections
    ].findIndex((section)=>section.id === visibleSections[0]));
    let itemHeight = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(2);
    let height = isPresent ? Math.max(1, visibleSections.length) * itemHeight : itemHeight;
    let top = group.links.findIndex((link)=>link.href === pathname) * itemHeight + firstVisibleSectionIndex * itemHeight;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        layout: true,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        className: "absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5",
        style: {
            borderRadius: 8,
            height,
            top
        }
    });
}
function ActivePageMarker({ group , pathname  }) {
    let itemHeight = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(2);
    let offset = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(0.25);
    let activePageIndex = group.links.findIndex((link)=>link.href === pathname);
    let top = offset + activePageIndex * itemHeight;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        layout: true,
        className: "absolute left-2 h-6 w-px bg-emerald-500",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        style: {
            top
        }
    });
}
function NavigationGroup({ group , className  }) {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    let isInsideMobileNavigation = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)();
    let [router, sections] = useInitialValue([
        (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.sections)
    ], isInsideMobileNavigation);
    let isActiveGroup = group.links.findIndex((link)=>link.href === router.pathname) !== -1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("relative mt-6", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {
                layout: "position",
                className: "text-xs font-semibold text-zinc-900 dark:text-white",
                children: group.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-3 pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                        initial: !isInsideMobileNavigation,
                        children: isActiveGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisibleSectionHighlight, {
                            group: group,
                            pathname: router.pathname
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        layout: true,
                        className: "absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                        initial: false,
                        children: isActiveGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActivePageMarker, {
                            group: group,
                            pathname: router.pathname
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        role: "list",
                        className: "border-l border-transparent",
                        children: group.links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                layout: "position",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                        href: link.href,
                                        active: link.href === router.pathname,
                                        children: link.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: link.href === router.pathname && sections.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {
                                            role: "list",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.1
                                                }
                                            },
                                            exit: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.15
                                                }
                                            },
                                            children: sections.map((section)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                                        href: `${link.href}#${section.id}`,
                                                        tag: section.tag,
                                                        isAnchorLink: true,
                                                        children: section.title
                                                    })
                                                }, section.id))
                                        })
                                    })
                                ]
                            }, link.href))
                    })
                ]
            })
        ]
    });
}
const navigation = [
    {
        title: "Services",
        links: [
            {
                title: "Introduction",
                href: "/"
            },
            {
                title: "Quickstart",
                href: "/quickstart"
            },
            {
                title: "Kubernetes Consulting",
                href: "/sdks"
            },
            {
                title: "Cloud Native Consulting",
                href: "/authentication"
            },
            {
                title: "Open Policy Agent",
                href: "/pagination"
            },
            {
                title: "Data Integration",
                href: "/errors"
            },
            {
                title: "Product Engineering",
                href: "/webhooks"
            },
            {
                title: "Cybersecurity Consulting",
                href: "/webhooks"
            }
        ]
    },
    {
        title: "Case Studies",
        links: [
            {
                title: "Celito Tech",
                href: "/contacts"
            },
            {
                title: "Test Prep 24",
                href: "/conversations"
            },
            {
                title: "Wave Pharma Limited",
                href: "/messages"
            },
            {
                title: "Wildcraft",
                href: "/groups"
            },
            {
                title: "Nexon Paints",
                href: "/attachments"
            }
        ]
    }
];
function Navigation(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            role: "list",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "/",
                    children: "Case Studies"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "#",
                    children: "Team"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "#",
                    children: "Blog"
                }),
                navigation.map((group, groupIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationGroup, {
                        group: group,
                        className: groupIndex === 0 && "md:mt-0"
                    }, group.title)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "sticky bottom-0 z-10 mt-6 min-[416px]:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        href: "#",
                        variant: "filled",
                        className: "w-full",
                        children: "Get in Touch"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose dark:prose-invert"),
        ...props
    });
}


/***/ }),

/***/ 4680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MobileSearch),
/* harmony export */   "o": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2204);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(236);
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1185);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3257);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_5__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_6___default()(process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID, process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY);
function useAutocomplete() {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let [autocompleteState, setAutocompleteState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    let [autocomplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__.createAutocomplete)({
            id,
            placeholder: "Find something...",
            defaultActiveItemId: 0,
            onStateChange ({ state  }) {
                setAutocompleteState(state);
            },
            shouldPanelOpen ({ state  }) {
                return state.query !== "";
            },
            navigator: {
                navigate ({ itemUrl  }) {
                    autocomplete.setIsOpen(true);
                    router.push(itemUrl);
                }
            },
            getSources () {
                return [
                    {
                        sourceId: "documentation",
                        getItemInputValue ({ item  }) {
                            return item.query;
                        },
                        getItemUrl ({ item  }) {
                            let url = new URL(item.url);
                            return `${url.pathname}${url.hash}`;
                        },
                        onSelect ({ itemUrl  }) {
                            router.push(itemUrl);
                        },
                        getItems ({ query  }) {
                            return (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__.getAlgoliaResults)({
                                searchClient,
                                queries: [
                                    {
                                        query,
                                        indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
                                        params: {
                                            hitsPerPage: 5,
                                            highlightPreTag: '<mark class="underline bg-transparent text-emerald-500">',
                                            highlightPostTag: "</mark>"
                                        }
                                    }
                                ]
                            });
                        }
                    }
                ];
            }
        }));
    return {
        autocomplete,
        autocompleteState
    };
}
function resolveResult(result) {
    let allLevels = Object.keys(result.hierarchy);
    let hierarchy = Object.entries(result._highlightResult.hierarchy).filter(([, { value  }])=>Boolean(value));
    let levels = hierarchy.map(([level])=>level);
    let level = result.type === "content" ? levels.pop() : levels.filter((level)=>allLevels.indexOf(level) <= allLevels.indexOf(result.type)).pop();
    return {
        titleHtml: result._highlightResult.hierarchy[level].value,
        hierarchyHtml: hierarchy.slice(0, levels.indexOf(level)).map(([, { value  }])=>value)
    };
}
function SearchIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        })
    });
}
function NoResultsIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
        })
    });
}
function LoadingIcon(props) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "5.5",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: `url(#${id})`,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: id,
                    x1: "13",
                    x2: "9.5",
                    y1: "9",
                    y2: "15",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "currentColor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "currentColor",
                            stopOpacity: "0"
                        })
                    ]
                })
            })
        ]
    });
}
function SearchResult({ result , resultIndex , autocomplete , collection  }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let { titleHtml , hierarchyHtml  } = resolveResult(result);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50", resultIndex > 0 && "border-t border-zinc-100 dark:border-zinc-800"),
        "aria-labelledby": `${id}-hierarchy ${id}-title`,
        ...autocomplete.getItemProps({
            item: result,
            source: collection.source
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: `${id}-title`,
                "aria-hidden": "true",
                className: "text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white",
                dangerouslySetInnerHTML: {
                    __html: titleHtml
                }
            }),
            hierarchyHtml.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: `${id}-hierarchy`,
                "aria-hidden": "true",
                className: "mt-1 truncate whitespace-nowrap text-2xs text-zinc-500",
                children: hierarchyHtml.map((item, itemIndex, items)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: item
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: itemIndex === items.length - 1 ? "sr-only" : "mx-2 text-zinc-300 dark:text-zinc-700",
                                children: "/"
                            })
                        ]
                    }, itemIndex))
            })
        ]
    });
}
function SearchResults({ autocomplete , query , collection  }) {
    if (collection.items.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-6 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoResultsIcon, {
                    className: "mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mt-2 text-xs text-zinc-700 dark:text-zinc-400",
                    children: [
                        "Nothing found for",
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                            className: "break-words font-semibold text-zinc-900 dark:text-white",
                            children: [
                                "‘",
                                query,
                                "’"
                            ]
                        }),
                        ". Please try again."
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        ...autocomplete.getListProps(),
        children: collection.items.map((result, resultIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResult, {
                result: result,
                resultIndex: resultIndex,
                autocomplete: autocomplete,
                collection: collection
            }, result.objectID))
    });
}
const SearchInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function SearchInput({ autocomplete , autocompleteState , onClose  }, inputRef) {
    let inputProps = autocomplete.getInputProps({});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group relative flex h-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                className: "pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden", autocompleteState.status === "stalled" ? "pr-11" : "pr-4"),
                ...inputProps,
                onKeyDown: (event)=>{
                    if (event.key === "Escape" && !autocompleteState.isOpen && autocompleteState.query === "") {
                        // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
                        // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
                        document.activeElement?.blur();
                        onClose();
                    } else {
                        inputProps.onKeyDown(event);
                    }
                }
            }),
            autocompleteState.status === "stalled" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-y-0 right-3 flex items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingIcon, {
                    className: "h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400"
                })
            })
        ]
    });
});
function AlgoliaLogo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 71 16",
        role: "img",
        "aria-label": "Algolia",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M34.98 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .195-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M61.605 3.352H59.98a.189.189 0 0 0-.189.189v8.514c0 .104.085.189.189.189h1.625a.189.189 0 0 0 .188-.19V3.542a.189.189 0 0 0-.188-.189Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                d: "M59.98 2.285h1.625a.189.189 0 0 0 .188-.189V.19a.189.189 0 0 0-.218-.187l-1.624.255a.189.189 0 0 0-.16.186v1.652c0 .104.085.189.189.189ZM57.172 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .196-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002ZM52.946 4.568a3.628 3.628 0 0 0-1.304-.906 4.347 4.347 0 0 0-1.666-.315c-.601 0-1.157.101-1.662.315a3.822 3.822 0 0 0-1.304.906c-.367.39-.652.86-.856 1.408-.204.55-.296 1.196-.296 1.868 0 .671.103 1.18.306 1.734.204.554.484 1.027.846 1.42.361.39.795.691 1.3.91.504.218 1.283.33 1.676.335.392 0 1.177-.122 1.686-.335.51-.214.943-.52 1.305-.91.361-.393.641-.866.84-1.42.199-.555.295-1.063.295-1.734 0-.672-.107-1.318-.32-1.868a4.203 4.203 0 0 0-.846-1.408Zm-1.421 5.239c-.367.504-.882.758-1.539.758-.657 0-1.172-.25-1.539-.758-.367-.504-.55-1.088-.55-1.958 0-.86.178-1.573.545-2.076.367-.504.882-.752 1.538-.752.658 0 1.172.248 1.539.752.367.498.556 1.215.556 2.076 0 .87-.184 1.449-.55 1.958ZM29.35 3.352H27.77c-1.547 0-2.909.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.574 2.574 0 0 0 1.542.428l.034-.002.084-.006.032-.004.088-.011.02-.003c1.052-.163 1.97-.986 2.268-2.01v1.85c0 .105.085.19.19.19h1.612a.189.189 0 0 0 .19-.19V3.541a.189.189 0 0 0-.19-.189H29.35Zm0 6.62c-.39.326-.896.448-1.435.484l-.016.002a1.68 1.68 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.173-.927.36-.932 1.241-1.591 2.274-1.591h1.578v4.57ZM69.009 3.352H67.43c-1.547 0-2.908.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.575 2.575 0 0 0 1.542.428l.034-.002.084-.006.033-.004.087-.011.02-.003c1.053-.163 1.97-.986 2.269-2.01v1.85c0 .105.084.19.188.19h1.614a.189.189 0 0 0 .188-.19V3.541a.189.189 0 0 0-.188-.189h-1.802Zm0 6.62c-.39.326-.895.448-1.435.484l-.016.002a1.675 1.675 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.174-.927.359-.932 1.24-1.591 2.273-1.591h1.579v4.57ZM42.775 3.352h-1.578c-1.547 0-2.909.815-3.704 2.051a4.63 4.63 0 0 0-.735 2.519 4.6 4.6 0 0 0 1.65 3.555c.094.083.194.16.298.228a2.575 2.575 0 0 0 2.966-.08c.52-.37.924-.913 1.103-1.527v1.608h-.004v.354c0 .7-.182 1.225-.554 1.58-.372.354-.994.532-1.864.532-.356 0-.921-.02-1.491-.078a.19.19 0 0 0-.2.136l-.41 1.379a.19.19 0 0 0 .155.24c.688.1 1.36.15 1.748.15 1.565 0 2.725-.343 3.484-1.03.688-.621 1.061-1.564 1.127-2.832V3.54a.189.189 0 0 0-.19-.189h-1.801Zm0 2.051s.021 4.452 0 4.587c-.386.312-.867.435-1.391.47l-.016.001a1.751 1.751 0 0 1-.233 0c-1.293-.067-2.385-1.192-2.385-2.54 0-.327.063-.64.174-.927.359-.931 1.24-1.591 2.273-1.591h1.578Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.725.001C4.356.001.795 3.523.732 7.877c-.064 4.422 3.524 8.085 7.946 8.111a7.94 7.94 0 0 0 3.849-.96.187.187 0 0 0 .034-.305l-.748-.663a.528.528 0 0 0-.555-.094 6.461 6.461 0 0 1-2.614.513c-3.574-.043-6.46-3.016-6.404-6.59a6.493 6.493 0 0 1 6.485-6.38h6.485v11.527l-3.68-3.269a.271.271 0 0 0-.397.042 3.014 3.014 0 0 1-5.416-1.583 3.02 3.02 0 0 1 3.008-3.248 3.02 3.02 0 0 1 3.005 2.75.537.537 0 0 0 .176.356l.958.85a.187.187 0 0 0 .308-.106c.07-.37.094-.755.067-1.15a4.536 4.536 0 0 0-4.23-4.2A4.53 4.53 0 0 0 4.203 7.87c-.067 2.467 1.954 4.593 4.421 4.648a4.498 4.498 0 0 0 2.756-.863l4.808 4.262a.32.32 0 0 0 .531-.239V.304a.304.304 0 0 0-.303-.303h-7.69Z"
            })
        ]
    });
}
function SearchButton(props) {
    let [modifierKey, setModifierKey] = useState();
    useEffect(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("button", {
                type: "button",
                className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none",
                ...props,
                children: [
                    /*#__PURE__*/ _jsx(SearchIcon, {
                        className: "h-5 w-5 stroke-current"
                    }),
                    "Find something...",
                    /*#__PURE__*/ _jsxs("kbd", {
                        className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                        children: [
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none",
                "aria-label": "Find something...",
                ...props,
                children: /*#__PURE__*/ _jsx(SearchIcon, {
                    className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                })
            })
        ]
    });
}
function SearchDialog({ open , setOpen , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let panelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let { autocomplete , autocompleteState  } = useAutocomplete();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!open) {
            return;
        }
        function onRouteChange() {
            setOpen(false);
        }
        router.events.on("routeChangeStart", onRouteChange);
        router.events.on("hashChangeStart", onRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", onRouteChange);
            router.events.off("hashChangeStart", onRouteChange);
        };
    }, [
        open,
        setOpen,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (open) {
            return;
        }
        function onKeyDown(event) {
            if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setOpen(true);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [
        open,
        setOpen
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        afterLeave: ()=>autocomplete.setQuery(""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog, {
            onClose: setOpen,
            className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("fixed inset-0 z-50", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto px-4 py-4 sm:py-20 sm:px-6 md:py-32 lg:px-8 lg:py-[15vh]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Dialog.Panel, {
                            className: "mx-auto overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ...autocomplete.getRootProps({}),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    ref: formRef,
                                    ...autocomplete.getFormProps({
                                        inputElement: inputRef.current
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchInput, {
                                            ref: inputRef,
                                            autocomplete: autocomplete,
                                            autocompleteState: autocompleteState,
                                            onClose: ()=>setOpen(false)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: panelRef,
                                            className: "border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5",
                                            ...autocomplete.getPanelProps({}),
                                            children: autocompleteState.isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResults, {
                                                        autocomplete: autocomplete,
                                                        query: autocompleteState.query,
                                                        collection: autocompleteState.collections[0]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "flex items-center justify-end gap-2 border-t border-zinc-100 px-4 py-2 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500",
                                                        children: [
                                                            "Search by",
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlgoliaLogo, {
                                                                className: "h-4 fill-[#003DFF] dark:fill-zinc-400"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
function useSearchProps() {
    let buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return {
        buttonProps: {
            ref: buttonRef,
            onClick () {
                setOpen(true);
            }
        },
        dialogProps: {
            open,
            setOpen (open) {
                let { width , height  } = buttonRef.current.getBoundingClientRect();
                if (!open || width !== 0 && height !== 0) {
                    setOpen(open);
                }
            }
        }
    };
}
function Search() {
    let [modifierKey, setModifierKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    let { buttonProps , dialogProps  } = useSearchProps();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hidden lg:block lg:max-w-md lg:flex-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none",
                ...buttonProps,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                        className: "h-5 w-5 stroke-current"
                    }),
                    "Find something...",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("kbd", {
                        className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchDialog, {
                className: "hidden lg:block",
                ...dialogProps
            })
        ]
    });
}
function MobileSearch() {
    let { buttonProps , dialogProps  } = useSearchProps();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "contents lg:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none",
                "aria-label": "Find something...",
                ...buttonProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                    className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchDialog, {
                className: "lg:hidden",
                ...dialogProps
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _components_Button__WEBPACK_IMPORTED_MODULE_4__.z),
/* harmony export */   "CodeGroup": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.P3),
/* harmony export */   "Col": () => (/* binding */ Col),
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "code": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.EK),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "pre": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.SU)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9078);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1109);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const a = (next_link__WEBPACK_IMPORTED_MODULE_1___default());


const h2 = function H2(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_3__/* .Heading */ .X, {
        level: 2,
        ...props
    });
};
function InfoIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "8",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M6.75 7.75h1.5v3.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "4",
                r: ".5",
                fill: "none"
            })
        ]
    });
}
function Note({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.emerald.300)]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoIcon, {
                className: "mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
                children: children
            })
        ]
    });
}
function Row({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
        children: children
    });
}
function Col({ children , sticky =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("[&>:first-child]:mt-0 [&>:last-child]:mb-0", sticky && "xl:sticky xl:top-24"),
        children: children
    });
}
function Properties({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",
            children: children
        })
    });
}
function Property({ name , type , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "m-0 px-0 py-4 first:pt-0 last:pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
            className: "m-0 flex flex-wrap items-center gap-x-3 gap-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Name"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Type"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "font-mono text-xs text-zinc-400 dark:text-zinc-500",
                    children: type
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Description"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",
                    children: children
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3662);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3127);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6788);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_mdx__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_mdx__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function onRouteChange() {
    _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__/* .useMobileNavigationStore.getState */ .fX.getState().close();
}
next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on("hashChangeStart", onRouteChange);
next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on("routeChangeComplete", onRouteChange);
next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on("routeChangeError", onRouteChange);
function App({ Component , pageProps  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    router.pathname === "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Zelar"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${pageProps.title} - Protocol API Reference`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: pageProps.description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.MDXProvider, {
                components: _components_mdx__WEBPACK_IMPORTED_MODULE_5__,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                    ...pageProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6788:
/***/ (() => {



/***/ }),

/***/ 2204:
/***/ ((module) => {

"use strict";
module.exports = require("@algolia/autocomplete-core");

/***/ }),

/***/ 236:
/***/ ((module) => {

"use strict";
module.exports = require("@algolia/autocomplete-preset-algolia");

/***/ }),

/***/ 3257:
/***/ ((module) => {

"use strict";
module.exports = require("algoliasearch/lite");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

"use strict";
module.exports = require("focus-visible");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

"use strict";
module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,387], () => (__webpack_exec__(3948)));
module.exports = __webpack_exports__;

})();