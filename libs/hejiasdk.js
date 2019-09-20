/*
 * hejia-jssdk v1.2.0 (http://open.home.komect.com/dev/index.jsp)
 * @Copyright 2014-2019 The CMCC HY Authors (http://hy.10086.cn/)
 * @Licensed under ISC (https://opensource.org/licenses/isc)
 */
! function () {
    "use strict";
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function (e, n) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (null != r)
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
            }
            return t
        },
        writable: !0,
        configurable: !0
    });
    var m = function (e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    };
    var t = null,
        b = null,
        I = {
            getUrlParam: function (e, n) {
                if (!e) throw new Error("Hejia.utils.getUrlParam parameter url is required.");
                if (!n) throw new Error("Hejia.utils.getUrlParam parameter key is required.");
                return decodeURIComponent(e).replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(n).replace(
                    /[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1").split("#")[0]
            },
            isNullOrUndefined: function (e) {
                return null == e
            },
            isObject: function (e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            },
            isFunction: function (e) {
                return null != e && "[object Function]" === Object.prototype.toString.call(e)
            }
        };

    function n(e) {
        var i, r, a, o, l, n, s, c, u, d, f, g, p, w, v, O;
        t = e, window.Hejia = Object.assign(window.Hejia, (s = t, c = I, u = "phoneNumber", d = "area", f = "loginType",
            g = "account", p = "gatewayMAC", w = "gatewaySN", v = "deviceId", O = "appVersion", {
                getPhoneNumber: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: u
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getUserArea: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: d
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getLoginType: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: f
                    }, function (e) {
                        c.isNullOrUndefined(e) ? t() : (e = e.toString(), n(e))
                    })
                },
                getAccount: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: g
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getGatewayMAC: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: p
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getGatewaySN: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: w
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getDeviceId: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: v
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                getAppVersion: function (n, t) {
                    s.callHandler("getInfomation", {
                        key: O
                    }, function (e) {
                        e ? n(e) : t()
                    })
                },
                addLog: function (e) {
                    s.callHandler("addLog", e)
                },
                isAppInstalled: function (e, n, t) {
                    s.callHandler("isAppInstalled", e, function (e) {
                        "1" == (e = e.toString()) ? n(e): t(e)
                    })
                }
            }), (n = t, {
            setToolbarItems: function (e) {
                n.callHandler("setToolbarItems", e)
            },
            openUrl: function (e) {
                n.callHandler("openUrl", e)
            },
            closeWebView: function () {
                n.callHandler("closeWebView")
            },
            refreshWebView: function () {
                n.callHandler("refreshWebView")
            }
        }), (i = t, r = 1, a = 2, o = 4, l = 5, {
            shareToWeChatMessage: function (e, n, t) {
                i.callHandler("shareImageToOtherAPP", Object.assign(e, {
                    platformType: r
                }), function (e) {
                    "1" == e ? n(e) : t(e)
                })
            },
            shareToWeChatTimeLine: function (e, n, t) {
                i.callHandler("shareImageToOtherAPP", Object.assign(e, {
                    platformType: a
                }), function (e) {
                    "1" == e ? n(e) : t(e)
                })
            },
            shareToQQ: function (e, n, t) {
                i.callHandler("shareImageToOtherAPP", Object.assign(e, {
                    platformType: o
                }), function (e) {
                    "1" == e ? n(e) : t(e)
                })
            },
            shareToQZone: function (e, n, t) {
                i.callHandler("shareImageToOtherAPP", Object.assign(e, {
                    platformType: l
                }), function (e) {
                    "1" == e ? n(e) : t(e)
                })
            }
        }), function (r, o) {
            var a = 0;

            function e(r, a) {
                return function () {
                    var e = null,
                        n = null,
                        t = null,
                        i = Array.prototype.slice.call(arguments, 0);
                    return o.isObject(i[0]) || (n = i[0], e = i[1], t = {}), a && (t = Object.assign({}, m({},
                        a, o.getUrlParam(window.location.href, a)), t || i[0])), r.call(this, t, n || i[
                        1], e || i[2])
                }
            }
            return {
                checkIfReadyForAndlink: function (t, i) {
                    r.callHandler("checkIfReadyForAndlink", null, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.resultCodeMessage) :
                            o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                },
                startAndlink: function (e, t, i) {
                    o.isObject(e) || (i = t, t = e, e = {});
                    var n = Object.assign({}, {
                        deviceType: o.getUrlParam(window.location.href, "deviceType")
                    }, e);
                    r.callHandler("startAndlink", n, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.deviceId) : o.isFunction(
                            i) && i(n.resultCodeMessage, n)
                    })
                },
                updateAndlinkPlugin: function (e, t, i) {
                    o.isObject(e) || (i = t, t = e, e = {}), r.callHandler("updateAndlinkPlugin", e,
                        function (e) {
                            var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                            parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.resultCodeMessage) :
                                o.isFunction(i) && i(n.resultCodeMessage, n)
                        })
                },
                getCurrentParam: function (e, t, i) {
                    o.isObject(e) || (i = t, t = e, e = {});
                    var n = Object.assign({}, {
                        deviceId: o.getUrlParam(window.location.href, "deviceId")
                    }, e);
                    r.callHandler("fetchDeviceCurrentParam", n, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.devices[0] || {}) :
                            o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                },
                getHistoryParam: function (e, t, i) {
                    var n = Object.assign({}, {
                        deviceId: o.getUrlParam(window.location.href, "deviceId")
                    }, e);
                    r.callHandler("fetchDeviceHistoryParam", n, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.readings || []) :
                            o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                },
                getAlarmParam: function (e, t, i) {
                    var n = Object.assign({}, {
                        deviceId: o.getUrlParam(window.location.href, "deviceId")
                    }, e);
                    r.callHandler("fetchDeviceAlarmParam", n, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n.alerts || []) : o
                            .isFunction(i) && i(n.resultCodeMessage, n)
                    })
                },
                setControlParam: function (e, t, i) {
                    var n = Object.assign({}, {
                        deviceId: o.getUrlParam(window.location.href, "deviceId")
                    }, e);
                    r.callHandler("fetchDeviceControlParam", n, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t() : o.isFunction(i) &&
                            i(n.resultCodeMessage, n)
                    })
                },
                getDeviceInfo: e(function (e, t, i) {
                    r.callHandler("fetchDeviceInfo", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t({
                            device: n.device,
                            location: n.location
                        }) : o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                }, "deviceId"),
                getRuleElements: function (t, i) {
                    r.callHandler("requestRuleElements", null, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t({
                            triggers: n.triggers || [],
                            states: n.states || [],
                            actions: n.actions || []
                        }) : o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                },
                getUserRuleList: e(function (e, t, i) {
                    e.details = !0, r.callHandler("getUserRuleList", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t({
                            rules: n.rules || []
                        }) : o.isFunction(i) && i(n.resultCodeMessage, n)
                    })
                }, "deviceId"),
                createRule: function (e, t, i) {
                    r.callHandler("createRule", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n) : o.isFunction(i) &&
                            i(n.resultCodeMessage, n)
                    })
                },
                updateRule: function (e, t, i) {
                    r.callHandler("updateRule", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n) : o.isFunction(i) &&
                            i(n.resultCodeMessage, n)
                    })
                },
                updateRuleAttrRsp: function (e, t, i) {
                    r.callHandler("updateRuleAttrRsp", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n) : o.isFunction(i) &&
                            i(n.resultCodeMessage, n)
                    })
                },
                deleteRule: function (e, t, i) {
                    r.callHandler("deleteRule", e, function (e) {
                        var n = o.isNullOrUndefined(e) ? {} : window.JSON.parse(e);
                        parseInt(n.resultCode, 10) === a ? o.isFunction(t) && t(n) : o.isFunction(i) &&
                            i(n.resultCodeMessage, n)
                    })
                },
                onMessage: function (t) {
                    function e(e) {
                        var n = JSON.parse(e);
                        "function" == typeof t && t.call(this, n)
                    }
                    return r.registerHandler("onMessage", e), window.onMessage = e
                }
            }
        }(t, I)), b && b()
    }
    window.Hejia = window.Hejia || {
        ready: function (e) {
            b = I.isFunction(e) ? e : function () {},
                function (e) {
                    if (!window.WebViewJavascriptBridge) return e(window.WebViewJavascriptBridge);
                    if (document.addEventListener("WebViewJavascriptBridgeReady", function () {
                            e(window.WebViewJavascriptBridge)
                        }, !1), window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
                    window.WVJBCallbacks = [e];
                    var n = document.createElement("iframe");
                    n.style.display = "none", n.src = "https://__bridge_loaded__", document.documentElement.appendChild(
                        n), setTimeout(function () {
                        document.documentElement.removeChild(n)
                    }, 0)
                }(function (e) {
                    n(e)
                })
        },
        utils: I
    }
}();