import { a as h, b as M, d as ur } from "@nf-internal/chunk-4CLCTAJ7";
import { DOCUMENT as An, Location as Vt } from "@angular/common";
import * as v from "@angular/core";
import { \u0275isPromise as Tn, \u0275RuntimeError as I, \u0275isNgModule as as, isStandalone as us, createEnvironmentInjector as En, InjectionToken as ie, EventEmitter as Ve, input as On, inject as p, ViewContainerRef as Mn, ChangeDetectorRef as Dn, reflectComponentType as Nn, \u0275isInjectable as Un, runInInjectionContext as _, Compiler as Pn, NgModuleFactory as xn, afterNextRender as _n, EnvironmentInjector as yr, DestroyRef as Ln, \u0275Console as jn, \u0275PendingTasksInternal as kn, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as $n } from "@angular/core";
import { isObservable as zn, from as $, of as d, BehaviorSubject as N, combineLatest as Wt, EmptyError as Fn, concat as qn, defer as Gt, pipe as Bn, throwError as vt, EMPTY as G, ConnectableObservable as cr, Subject as Ee, Observable as Hn, Subscription as Vn } from "rxjs";
import { map as R, switchMap as U, take as Oe, startWith as Wn, filter as le, mergeMap as x, first as oe, concatMap as Ze, tap as C, catchError as Ie, scan as Gn, defaultIfEmpty as Sr, last as Qn, takeLast as Cr, finalize as Dt, refCount as lr, takeUntil as hr } from "rxjs/operators";
import * as wr from "@angular/platform-browser";
var f = "primary", je = Symbol("RouteTitle"), Nt = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function ne(t) { return new Nt(t); }
function br(t, n, e) { let r = e.path.split("/"); if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
    return null; let i = {}; for (let o = 0; o < r.length; o++) {
    let s = r[o], a = t[o];
    if (s[0] === ":")
        i[s.substring(1)] = a;
    else if (s !== a.path)
        return null;
} return { consumed: t.slice(0, r.length), posParams: i }; }
function Kn(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!j(t[e], n[e]))
        return !1; return !0; }
function j(t, n) { let e = t ? Ut(t) : void 0, r = n ? Ut(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !Ir(t[i], n[i]))
        return !1; return !0; }
function Ut(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function Ir(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function Ar(t) { return t.length > 0 ? t[t.length - 1] : null; }
function H(t) { return zn(t) ? t : Tn(t) ? $(Promise.resolve(t)) : d(t); }
var Yn = { exact: Er, subset: Or }, Tr = { exact: Zn, subset: Xn, ignored: () => !0 };
function dr(t, n, e) { return Yn[e.paths](t.root, n.root, e.matrixParams) && Tr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function Zn(t, n) { return j(t, n); }
function Er(t, n, e) { if (!te(t.segments, n.segments) || !Qe(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !Er(t.children[r], n.children[r], e))
        return !1; return !0; }
function Xn(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => Ir(t[e], n[e])); }
function Or(t, n, e) { return Mr(t, n, n.segments, e); }
function Mr(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!te(i, e) || n.hasChildren() || !Qe(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!te(t.segments, e) || !Qe(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !Or(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !te(t.segments, i) || !Qe(t.segments, i, r) || !t.children[f] ? !1 : Mr(t.children[f], n, o, r);
} }
function Qe(t, n, e) { return n.every((r, i) => Tr[e](t[i].parameters, r.parameters)); }
var z = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new g([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= ne(this.queryParams), this._queryParamMap; }
    toString() { return ti.serialize(this); }
}, g = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return Ke(this); }
}, Q = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= ne(this.parameters), this._parameterMap; }
    toString() { return Nr(this); }
};
function Jn(t, n) { return te(t, n) && t.every((e, r) => j(e.parameters, n[r].parameters)); }
function te(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function ei(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === f && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== f && (e = e.concat(n(i, r))); }), e; }
var X = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: () => new K, providedIn: "root" });
} return t; })(), K = class {
    parse(n) { let e = new xt(n); return new z(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${we(n.root, !0)}`, r = ii(n.queryParams), i = typeof n.fragment == "string" ? `#${ri(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, ti = new K;
function Ke(t) { return t.segments.map(n => Nr(n)).join("/"); }
function we(t, n) { if (!t.hasChildren())
    return Ke(t); if (n) {
    let e = t.children[f] ? we(t.children[f], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== f && r.push(`${i}:${we(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = ei(t, (r, i) => i === f ? [we(t.children[f], !1)] : [`${i}:${we(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[f] != null ? `${Ke(t)}/${e[0]}` : `${Ke(t)}/(${e.join("//")})`;
} }
function Dr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function We(t) { return Dr(t).replace(/%3B/gi, ";"); }
function ri(t) { return encodeURI(t); }
function Pt(t) { return Dr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function Ye(t) { return decodeURIComponent(t); }
function fr(t) { return Ye(t.replace(/\+/g, "%20")); }
function Nr(t) { return `${Pt(t.path)}${ni(t.parameters)}`; }
function ni(t) { return Object.entries(t).map(([n, e]) => `;${Pt(n)}=${Pt(e)}`).join(""); }
function ii(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${We(e)}=${We(i)}`).join("&") : `${We(e)}=${We(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var oi = /^[^\/()?;#]+/;
function Tt(t) { let n = t.match(oi); return n ? n[0] : ""; }
var si = /^[^\/()?;=#]+/;
function ai(t) { let n = t.match(si); return n ? n[0] : ""; }
var ui = /^[^=?&#]+/;
function ci(t) { let n = t.match(ui); return n ? n[0] : ""; }
var li = /^[^&#]+/;
function hi(t) { let n = t.match(li); return n ? n[0] : ""; }
var xt = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { return this.consumeOptional("/"), this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new g([], {}) : new g([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren() { if (this.remaining === "")
        return {}; this.consumeOptional("/"); let n = []; for (this.peekStartsWith("(") || n.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), n.push(this.parseSegment()); let e = {}; this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0)); let r = {}; return this.peekStartsWith("(") && (r = this.parseParens(!1)), (n.length > 0 || Object.keys(e).length > 0) && (r[f] = new g(n, e)), r; }
    parseSegment() { let n = Tt(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new I(4009, !1); return this.capture(n), new Q(Ye(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = ai(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Tt(this.remaining);
        i && (r = i, this.capture(r));
    } n[Ye(e)] = Ye(r); }
    parseQueryParam(n) { let e = ci(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let s = hi(this.remaining);
        s && (r = s, this.capture(r));
    } let i = fr(e), o = fr(r); if (n.hasOwnProperty(i)) {
        let s = n[i];
        Array.isArray(s) || (s = [s], n[i] = s), s.push(o);
    }
    else
        n[i] = o; }
    parseParens(n) { let e = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let r = Tt(this.remaining), i = this.remaining[r.length];
        if (i !== "/" && i !== ")" && i !== ";")
            throw new I(4010, !1);
        let o;
        r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")), this.capture(o), this.capture(":")) : n && (o = f);
        let s = this.parseChildren();
        e[o] = Object.keys(s).length === 1 ? s[f] : new g([], s), this.consumeOptional("//");
    } return e; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new I(4011, !1); }
};
function Ur(t) { return t.segments.length > 0 ? new g([], { [f]: t }) : t; }
function Pr(t) { let n = {}; for (let [r, i] of Object.entries(t.children)) {
    let o = Pr(i);
    if (r === f && o.segments.length === 0 && o.hasChildren())
        for (let [s, a] of Object.entries(o.children))
            n[s] = a;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new g(t.segments, n); return di(e); }
function di(t) { if (t.numberOfChildren === 1 && t.children[f]) {
    let n = t.children[f];
    return new g(t.segments.concat(n.segments), n.children);
} return t; }
function Y(t) { return t instanceof z; }
function xr(t, n, e = null, r = null) { let i = _r(t); return Lr(i, n, e, r); }
function _r(t) { let n; function e(o) { let s = {}; for (let u of o.children) {
    let c = e(u);
    s[u.outlet] = c;
} let a = new g(o.url, s); return o === t && (n = a), a; } let r = e(t.root), i = Ur(r); return n ?? i; }
function Lr(t, n, e, r) { let i = t; for (; i.parent;)
    i = i.parent; if (n.length === 0)
    return Et(i, i, i, e, r); let o = fi(n); if (o.toRoot())
    return Et(i, i, new g([], {}), e, r); let s = pi(o, i, t), a = s.processChildren ? Ae(s.segmentGroup, s.index, o.commands) : kr(s.segmentGroup, s.index, o.commands); return Et(i, s.segmentGroup, a, e, r); }
function Xe(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function Me(t) { return typeof t == "object" && t != null && t.outlets; }
function Et(t, n, e, r, i) { let o = {}; r && Object.entries(r).forEach(([u, c]) => { o[u] = Array.isArray(c) ? c.map(m => `${m}`) : `${c}`; }); let s; t === n ? s = e : s = jr(t, n, e); let a = Ur(Pr(s)); return new z(a, o, i); }
function jr(t, n, e) { let r = {}; return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = jr(o, n, e); }), new g(t.segments, r); }
var Je = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && Xe(r[0]))
        throw new I(4003, !1); let i = r.find(Me); if (i && i !== Ar(r))
        throw new I(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function fi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Je(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, s) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let a = {};
        return Object.entries(o.outlets).forEach(([u, c]) => { a[u] = typeof c == "string" ? c.split("/") : c; }), [...i, { outlets: a }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach((a, u) => { u == 0 && a === "." || (u == 0 && a === "" ? e = !0 : a === ".." ? n++ : a != "" && i.push(a)); }), i) : [...i, o]; }, []); return new Je(e, n, r); }
var he = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function pi(t, n, e) { if (t.isAbsolute)
    return new he(n, !0, 0); if (!e)
    return new he(n, !1, NaN); if (e.parent === null)
    return new he(e, !0, 0); let r = Xe(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return gi(e, i, t.numberOfDoubleDots); }
function gi(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new I(4005, !1);
    i = r.segments.length;
} return new he(r, !1, i - o); }
function vi(t) { return Me(t[0]) ? t[0].outlets : { [f]: t }; }
function kr(t, n, e) { if (t ??= new g([], {}), t.segments.length === 0 && t.hasChildren())
    return Ae(t, n, e); let r = mi(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new g(t.segments.slice(0, r.pathIndex), {});
    return o.children[f] = new g(t.segments.slice(r.pathIndex), t.children), Ae(o, 0, i);
}
else
    return r.match && i.length === 0 ? new g(t.segments, {}) : r.match && !t.hasChildren() ? _t(t, n, e) : r.match ? Ae(t, 0, i) : _t(t, n, e); }
function Ae(t, n, e) { if (e.length === 0)
    return new g(t.segments, {}); {
    let r = vi(e), i = {};
    if (Object.keys(r).some(o => o !== f) && t.children[f] && t.numberOfChildren === 1 && t.children[f].segments.length === 0) {
        let o = Ae(t.children[f], n, e);
        return new g(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, s]) => { typeof s == "string" && (s = [s]), s !== null && (i[o] = kr(t.children[o], n, s)); }), Object.entries(t.children).forEach(([o, s]) => { r[o] === void 0 && (i[o] = s); }), new g(t.segments, i);
} }
function mi(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let s = t.segments[i], a = e[r];
    if (Me(a))
        break;
    let u = `${a}`, c = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && u === void 0)
        break;
    if (u && c && typeof c == "object" && c.outlets === void 0) {
        if (!gr(u, c, s))
            return o;
        r += 2;
    }
    else {
        if (!gr(u, {}, s))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function _t(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (Me(o)) {
        let u = Ri(o.outlets);
        return new g(r, u);
    }
    if (i === 0 && Xe(e[0])) {
        let u = t.segments[n];
        r.push(new Q(u.path, pr(e[0]))), i++;
        continue;
    }
    let s = Me(o) ? o.outlets[f] : `${o}`, a = i < e.length - 1 ? e[i + 1] : null;
    s && a && Xe(a) ? (r.push(new Q(s, pr(a))), i += 2) : (r.push(new Q(s, {})), i++);
} return new g(r, {}); }
function Ri(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = _t(new g([], {}), 0, r)); }), n; }
function pr(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function gr(t, n, e) { return t == e.path && j(n, e.parameters); }
var de = "imperative", y = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(y || {}), E = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, Z = class extends E {
    type = y.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, O = class extends E {
    urlAfterRedirects;
    type = y.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, w = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(w || {}), pe = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(pe || {}), k = class extends E {
    reason;
    code;
    type = y.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
}, F = class extends E {
    reason;
    code;
    type = y.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, ge = class extends E {
    error;
    target;
    type = y.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, De = class extends E {
    urlAfterRedirects;
    state;
    type = y.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, et = class extends E {
    urlAfterRedirects;
    state;
    type = y.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, tt = class extends E {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = y.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, rt = class extends E {
    urlAfterRedirects;
    state;
    type = y.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, nt = class extends E {
    urlAfterRedirects;
    state;
    type = y.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, it = class {
    route;
    type = y.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, ot = class {
    route;
    type = y.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, st = class {
    snapshot;
    type = y.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, at = class {
    snapshot;
    type = y.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ut = class {
    snapshot;
    type = y.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ct = class {
    snapshot;
    type = y.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ve = class {
    routerEvent;
    position;
    anchor;
    type = y.Scroll;
    constructor(n, e, r) { this.routerEvent = n, this.position = e, this.anchor = r; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, Ne = class {
}, me = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function yi(t) { return !(t instanceof Ne) && !(t instanceof me); }
function Si(t, n) { return t.providers && !t._injector && (t._injector = En(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function P(t) { return t.outlet || f; }
function Ci(t, n) { let e = t.filter(r => P(r) === n); return e.push(...t.filter(r => P(r) !== n)), e; }
function Se(t) { if (!t)
    return null; if (t.routeConfig?._injector)
    return t.routeConfig._injector; for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector)
        return e._loadedInjector;
    if (e?._injector)
        return e._injector;
} return null; }
var lt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return Se(this.route?.snapshot) ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new se(this.rootInjector); }
}, se = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new lt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(v.\u0275\u0275inject(v.EnvironmentInjector)); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), ht = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = Lt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = Lt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = jt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return jt(n, this._root).map(e => e.value); }
};
function Lt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = Lt(t, e);
    if (r)
        return r;
} return null; }
function jt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = jt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var T = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function ce(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var Ue = class extends ht {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, Qt(this, n); }
    toString() { return this.snapshot.toString(); }
};
function $r(t) { let n = wi(t), e = new N([new Q("", {})]), r = new N({}), i = new N({}), o = new N({}), s = new N(""), a = new q(e, r, o, s, i, f, t, n.root); return a.snapshot = n.root, new Ue(new T(a, []), n); }
function wi(t) { let n = {}, e = {}, r = {}, o = new re([], n, r, "", e, f, t, null, {}); return new Pe("", new T(o, [])); }
var q = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(n, e, r, i, o, s, a, u) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = s, this.component = a, this._futureSnapshot = u, this.title = this.dataSubject?.pipe(R(c => c[je])) ?? d(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(R(n => ne(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(R(n => ne(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
};
function dt(t, n, e = "emptyOnly") { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: h(h({}, n.params), t.params), data: h(h({}, n.data), t.data), resolve: h(h(h(h({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: h({}, t.params), data: h({}, t.data), resolve: h(h({}, t.data), t._resolvedData ?? {}) }, i && Fr(i) && (r.resolve[je] = i.title), r; }
var re = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() { return this.data?.[je]; }
    constructor(n, e, r, i, o, s, a, u, c) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = s, this.component = a, this.routeConfig = u, this._resolve = c; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= ne(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= ne(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, Pe = class extends ht {
    url;
    constructor(n, e) { super(e), this.url = n, Qt(this, e); }
    toString() { return zr(this._root); }
};
function Qt(t, n) { n.value._routerState = t, n.children.forEach(e => Qt(t, e)); }
function zr(t) { let n = t.children.length > 0 ? ` { ${t.children.map(zr).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Ot(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, j(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), j(n.params, e.params) || t.paramsSubject.next(e.params), Kn(n.url, e.url) || t.urlSubject.next(e.url), j(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function kt(t, n) { let e = j(t.params, n.params) && Jn(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || kt(t.parent, n.parent)); }
function Fr(t) { return typeof t.title == "string" || t.title === null; }
var qr = new ie(""), Kt = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = f;
    activateEvents = new Ve;
    deactivateEvents = new Ve;
    attachEvents = new Ve;
    detachEvents = new Ve;
    routerOutletData = On(void 0);
    parentContexts = p(se);
    location = p(Mn);
    changeDetector = p(Dn);
    inputBinder = p(ke, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new I(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new I(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new I(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new I(4013, !1); this._activatedRoute = e; let i = this.location, s = e.snapshot.component, a = this.parentContexts.getOrCreateContext(this.name).children, u = new $t(e, a, i.injector, this.routerOutletData); this.activated = i.createComponent(s, { index: i.length, injector: u, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = v.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [v.\u0275\u0275NgOnChangesFeature] });
} return t; })(), $t = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === q ? this.route : n === se ? this.childContexts : n === qr ? this.outletData : this.parent.get(n, e); }
}, ke = new ie(""), Yt = (() => { class t {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Wt([r.queryParams, r.params, r.data]).pipe(U(([o, s, a], u) => (a = h(h(h({}, o), s), a), u === 0 ? d(a) : Promise.resolve(a)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let s = Nn(r.component); if (!s) {
        this.unsubscribeFromRouteData(e);
        return;
    } for (let { templateName: a } of s.inputs)
        e.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), Zt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = v.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && v.\u0275\u0275element(0, "router-outlet"); }, dependencies: [Kt], encapsulation: 2 });
} return t; })();
function Xt(t) { let n = t.children && t.children.map(Xt), e = n ? M(h({}, t), { children: n }) : h({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== f && (e.component = Zt), e; }
function bi(t, n, e) { let r = xe(t, n._root, e ? e._root : void 0); return new Ue(r, n); }
function xe(t, n, e) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Ii(t, n, e);
    return new T(r, i);
}
else {
    if (t.shouldAttach(n.value)) {
        let o = t.retrieve(n.value);
        if (o !== null) {
            let s = o.route;
            return s.value._futureSnapshot = n.value, s.children = n.children.map(a => xe(t, a)), s;
        }
    }
    let r = Ai(n.value), i = n.children.map(o => xe(t, o));
    return new T(r, i);
} }
function Ii(t, n, e) { return n.children.map(r => { for (let i of e.children)
    if (t.shouldReuseRoute(r.value, i.value.snapshot))
        return xe(t, r, i); return xe(t, r); }); }
function Ai(t) { return new q(new N(t.url), new N(t.params), new N(t.queryParams), new N(t.fragment), new N(t.data), t.outlet, t.component, t); }
var Re = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, Br = "ngNavigationCancelingError";
function ft(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = Y(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = Hr(!1, w.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function Hr(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[Br] = !0, e.cancellationCode = n, e; }
function Ti(t) { return Vr(t) && Y(t.url); }
function Vr(t) { return !!t && t[Br]; }
var Ei = (t, n, e, r) => R(i => (new zt(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)), zt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Ot(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = ce(e); n.children.forEach(o => { let s = o.value.outlet; this.deactivateRoutes(o, i[s], r), delete i[s]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let s = r.getContext(i.outlet);
            s && this.deactivateChildRoutes(n, e, s.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = ce(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); if (r && r.outlet) {
        let s = r.outlet.detach(), a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = ce(n); for (let s of Object.values(o))
        this.deactivateRouteAndItsChildren(s, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null); }
    activateChildRoutes(n, e, r) { let i = ce(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new ct(o.value.snapshot)); }), n.children.length && this.forwardEvent(new at(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Ot(i), i === o)
        if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, s.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let a = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), s.children.onOutletReAttached(a.contexts), s.attachRef = a.componentRef, s.route = a.route.value, s.outlet && s.outlet.attach(a.componentRef, a.route.value), Ot(a.route.value), this.activateChildRoutes(n, null, s.children);
        }
        else
            s.attachRef = null, s.route = i, s.outlet && s.outlet.activateWith(i, s.injector), this.activateChildRoutes(n, null, s.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, pt = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, fe = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function Oi(t, n, e) { let r = t._root, i = n ? n._root : null; return be(r, i, e, [r.value]); }
function Mi(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function Ce(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !Un(t) ? t : n.get(t) : r; }
function be(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = ce(n); return t.children.forEach(s => { Di(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet]; }), Object.entries(o).forEach(([s, a]) => Te(a, e.getContext(s), i)), i; }
function Di(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, s = n ? n.value : null, a = e ? e.getContext(t.value.outlet) : null; if (s && o.routeConfig === s.routeConfig) {
    let u = Ni(s, o, o.routeConfig.runGuardsAndResolvers);
    u ? i.canActivateChecks.push(new pt(r)) : (o.data = s.data, o._resolvedData = s._resolvedData), o.component ? be(t, n, a ? a.children : null, r, i) : be(t, n, e, r, i), u && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new fe(a.outlet.component, s));
}
else
    s && Te(n, a, i), i.canActivateChecks.push(new pt(r)), o.component ? be(t, null, a ? a.children : null, r, i) : be(t, null, e, r, i); return i; }
function Ni(t, n, e) { if (typeof e == "function")
    return e(t, n); switch (e) {
    case "pathParamsChange": return !te(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !te(t.url, n.url) || !j(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !kt(t, n) || !j(t.queryParams, n.queryParams);
    case "paramsChange":
    default: return !kt(t, n);
} }
function Te(t, n, e) { let r = ce(t), i = t.value; Object.entries(r).forEach(([o, s]) => { i.component ? n ? Te(s, n.children.getContext(o), e) : Te(s, null, e) : Te(s, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new fe(n.outlet.component, i)) : e.canDeactivateChecks.push(new fe(null, i)) : e.canDeactivateChecks.push(new fe(null, i)); }
function $e(t) { return typeof t == "function"; }
function Ui(t) { return typeof t == "boolean"; }
function Pi(t) { return t && $e(t.canLoad); }
function xi(t) { return t && $e(t.canActivate); }
function _i(t) { return t && $e(t.canActivateChild); }
function Li(t) { return t && $e(t.canDeactivate); }
function ji(t) { return t && $e(t.canMatch); }
function Wr(t) { return t instanceof Fn || t?.name === "EmptyError"; }
var Ge = Symbol("INITIAL_VALUE");
function ye() { return U(t => Wt(t.map(n => n.pipe(Oe(1), Wn(Ge)))).pipe(R(n => { for (let e of n)
    if (e !== !0) {
        if (e === Ge)
            return Ge;
        if (e === !1 || ki(e))
            return e;
    } return !0; }), le(n => n !== Ge), Oe(1))); }
function ki(t) { return Y(t) || t instanceof Re; }
function $i(t, n) { return x(e => { let { targetSnapshot: r, currentSnapshot: i, guards: { canActivateChecks: o, canDeactivateChecks: s } } = e; return s.length === 0 && o.length === 0 ? d(M(h({}, e), { guardsResult: !0 })) : zi(s, r, i, t).pipe(x(a => a && Ui(a) ? Fi(r, o, t, n) : d(a)), R(a => M(h({}, e), { guardsResult: a }))); }); }
function zi(t, n, e, r) { return $(t).pipe(x(i => Wi(i.component, i.route, e, n, r)), oe(i => i !== !0, !0)); }
function Fi(t, n, e, r) { return $(n).pipe(Ze(i => qn(Bi(i.route.parent, r), qi(i.route, r), Vi(t, i.path, e), Hi(t, i.route, e))), oe(i => i !== !0, !0)); }
function qi(t, n) { return t !== null && n && n(new ut(t)), d(!0); }
function Bi(t, n) { return t !== null && n && n(new st(t)), d(!0); }
function Hi(t, n, e) { let r = n.routeConfig ? n.routeConfig.canActivate : null; if (!r || r.length === 0)
    return d(!0); let i = r.map(o => Gt(() => { let s = Se(n) ?? e, a = Ce(o, s), u = xi(a) ? a.canActivate(n, t) : _(s, () => a(n, t)); return H(u).pipe(oe()); })); return d(i).pipe(ye()); }
function Vi(t, n, e) { let r = n[n.length - 1], o = n.slice(0, n.length - 1).reverse().map(s => Mi(s)).filter(s => s !== null).map(s => Gt(() => { let a = s.guards.map(u => { let c = Se(s.node) ?? e, m = Ce(u, c), S = _i(m) ? m.canActivateChild(r, t) : _(c, () => m(r, t)); return H(S).pipe(oe()); }); return d(a).pipe(ye()); })); return d(o).pipe(ye()); }
function Wi(t, n, e, r, i) { let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!o || o.length === 0)
    return d(!0); let s = o.map(a => { let u = Se(n) ?? i, c = Ce(a, u), m = Li(c) ? c.canDeactivate(t, n, e, r) : _(u, () => c(t, n, e, r)); return H(m).pipe(oe()); }); return d(s).pipe(ye()); }
function Gi(t, n, e, r) { let i = n.canLoad; if (i === void 0 || i.length === 0)
    return d(!0); let o = i.map(s => { let a = Ce(s, t), u = Pi(a) ? a.canLoad(n, e) : _(t, () => a(n, e)); return H(u); }); return d(o).pipe(ye(), Gr(r)); }
function Gr(t) { return Bn(C(n => { if (typeof n != "boolean")
    throw ft(t, n); }), R(n => n === !0)); }
function Qi(t, n, e, r) { let i = n.canMatch; if (!i || i.length === 0)
    return d(!0); let o = i.map(s => { let a = Ce(s, t), u = ji(a) ? a.canMatch(n, e) : _(t, () => a(n, e)); return H(u); }); return d(o).pipe(ye(), Gr(r)); }
var _e = class {
    segmentGroup;
    constructor(n) { this.segmentGroup = n || null; }
}, Le = class extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n; }
};
function ue(t) { return vt(new _e(t)); }
function Ki(t) { return vt(new I(4e3, !1)); }
function Yi(t) { return vt(Hr(!1, w.GuardRejected)); }
var Ft = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return d(r);
        if (i.numberOfChildren > 1 || !i.children[f])
            return Ki(`${n.redirectTo}`);
        i = i.children[f];
    } }
    applyRedirectCommands(n, e, r, i, o) { return Zi(e, i, o).pipe(R(s => { if (s instanceof z)
        throw new Le(s); let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r); if (s[0] === "/")
        throw new Le(a); return a; })); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new z(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let a = o.substring(1);
        r[i] = e[a];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), s = {}; return Object.entries(e.children).forEach(([a, u]) => { s[a] = this.createSegmentGroup(n, u, r, i); }), new g(o, s); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new I(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function Zi(t, n, e) { if (typeof t == "string")
    return d(t); let r = t, { queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, params: c, data: m, title: S } = n; return H(_(e, () => r({ params: c, data: m, queryParams: i, fragment: o, routeConfig: s, url: a, outlet: u, title: S }))); }
var qt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function Xi(t, n, e, r, i) { let o = Qr(t, n, e); return o.matched ? (r = Si(n, r), Qi(r, n, e, i).pipe(R(s => s === !0 ? o : h({}, qt)))) : d(o); }
function Qr(t, n, e) { if (n.path === "**")
    return Ji(e); if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? h({}, qt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || br)(e, t, n); if (!i)
    return h({}, qt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([a, u]) => { o[a] = u.path; }); let s = i.consumed.length > 0 ? h(h({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: s, positionalParamSegments: i.posParams ?? {} }; }
function Ji(t) { return { matched: !0, parameters: t.length > 0 ? Ar(t).parameters : {}, consumedSegments: t, remainingSegments: [], positionalParamSegments: {} }; }
function vr(t, n, e, r) { return e.length > 0 && ro(t, e, r) ? { segmentGroup: new g(n, to(r, new g(e, t.children))), slicedSegments: [] } : e.length === 0 && no(t, e, r) ? { segmentGroup: new g(t.segments, eo(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new g(t.segments, t.children), slicedSegments: e }; }
function eo(t, n, e, r) { let i = {}; for (let o of e)
    if (mt(t, n, o) && !r[P(o)]) {
        let s = new g([], {});
        i[P(o)] = s;
    } return h(h({}, r), i); }
function to(t, n) { let e = {}; e[f] = n; for (let r of t)
    if (r.path === "" && P(r) !== f) {
        let i = new g([], {});
        e[P(r)] = i;
    } return e; }
function ro(t, n, e) { return e.some(r => mt(t, n, r) && P(r) !== f); }
function no(t, n, e) { return e.some(r => mt(t, n, r)); }
function mt(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function io(t, n, e) { return n.length === 0 && !t.children[e]; }
var Bt = class {
};
function oo(t, n, e, r, i, o, s = "emptyOnly") { return new Ht(t, n, e, r, i, s, o).recognize(); }
var so = 31, Ht = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = s, this.urlSerializer = a, this.applyRedirects = new Ft(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new I(4002, `'${n.segmentGroup}'`); }
    recognize() { let n = vr(this.urlTree.root, [], [], this.config).segmentGroup; return this.match(n).pipe(R(({ children: e, rootSnapshot: r }) => { let i = new T(r, e), o = new Pe("", i), s = xr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return s.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(s), { state: o, tree: s }; })); }
    match(n) { let e = new re([], Object.freeze({}), Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), f, this.rootComponentType, null, {}); return this.processSegmentGroup(this.injector, this.config, n, f, e).pipe(R(r => ({ children: r, rootSnapshot: e })), Ie(r => { if (r instanceof Le)
        return this.urlTree = r.urlTree, this.match(r.urlTree.root); throw r instanceof _e ? this.noMatchError(r) : r; })); }
    processSegmentGroup(n, e, r, i, o) { return r.segments.length === 0 && r.hasChildren() ? this.processChildren(n, e, r, o) : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(R(s => s instanceof T ? [s] : [])); }
    processChildren(n, e, r, i) { let o = []; for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s); return $(o).pipe(Ze(s => { let a = r.children[s], u = Ci(e, s); return this.processSegmentGroup(n, u, a, s, i); }), Gn((s, a) => (s.push(...a), s)), Sr(null), Qn(), x(s => { if (s === null)
        return ue(r); let a = Kr(s); return ao(a), d(a); })); }
    processSegment(n, e, r, i, o, s, a) { return $(e).pipe(Ze(u => this.processSegmentAgainstRoute(u._injector ?? n, e, u, r, i, o, s, a).pipe(Ie(c => { if (c instanceof _e)
        return d(null); throw c; }))), oe(u => !!u), Ie(u => { if (Wr(u))
        return io(r, i, o) ? d(new Bt) : ue(r); throw u; })); }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, u) { return P(r) !== s && (s === f || !mt(i, o, r)) ? ue(i) : r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(n, i, r, o, s, u) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, u) : ue(i); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) { let { matched: u, parameters: c, consumedSegments: m, positionalParamSegments: S, remainingSegments: D } = Qr(e, i, o); if (!u)
        return ue(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > so && (this.allowRedirects = !1)); let W = new re(o, c, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, mr(i), P(i), i.component ?? i._loadedComponent ?? null, i, Rr(i)), A = dt(W, a, this.paramsInheritanceStrategy); return W.params = Object.freeze(A.params), W.data = Object.freeze(A.data), this.applyRedirects.applyRedirectCommands(m, i.redirectTo, S, W, n).pipe(U(ee => this.applyRedirects.lineralizeSegments(i, ee)), x(ee => this.processSegment(n, r, e, ee.concat(D), s, !1, a))); }
    matchSegmentAgainstRoute(n, e, r, i, o, s) { let a = Xi(e, r, i, n, this.urlSerializer); return r.path === "**" && (e.children = {}), a.pipe(U(u => u.matched ? (n = r._injector ?? n, this.getChildConfig(n, r, i).pipe(U(({ routes: c }) => { let m = r._loadedInjector ?? n, { parameters: S, consumedSegments: D, remainingSegments: W } = u, A = new re(D, S, Object.freeze(h({}, this.urlTree.queryParams)), this.urlTree.fragment, mr(r), P(r), r.component ?? r._loadedComponent ?? null, r, Rr(r)), It = dt(A, s, this.paramsInheritanceStrategy); A.params = Object.freeze(It.params), A.data = Object.freeze(It.data); let { segmentGroup: ee, slicedSegments: At } = vr(e, D, W, c); if (At.length === 0 && ee.hasChildren())
        return this.processChildren(m, c, ee, A).pipe(R(He => new T(A, He))); if (c.length === 0 && At.length === 0)
        return d(new T(A, [])); let In = P(r) === o; return this.processSegment(m, c, ee, At, In ? f : o, !0, A).pipe(R(He => new T(A, He instanceof T ? [He] : []))); }))) : ue(e))); }
    getChildConfig(n, e, r) { return e.children ? d({ routes: e.children, injector: n }) : e.loadChildren ? e._loadedRoutes !== void 0 ? d({ routes: e._loadedRoutes, injector: e._loadedInjector }) : Gi(n, e, r, this.urlSerializer).pipe(x(i => i ? this.configLoader.loadChildren(n, e).pipe(C(o => { e._loadedRoutes = o.routes, e._loadedInjector = o.injector; })) : Yi(e))) : d({ routes: [], injector: n }); }
};
function ao(t) { t.sort((n, e) => n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function uo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function Kr(t) { let n = [], e = new Set; for (let r of t) {
    if (!uo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = Kr(r.children);
    n.push(new T(r.value, i));
} return n.filter(r => !e.has(r)); }
function mr(t) { return t.data || {}; }
function Rr(t) { return t.resolve || {}; }
function co(t, n, e, r, i, o) { return x(s => oo(t, n, e, r, s.extractedUrl, i, o).pipe(R(({ state: a, tree: u }) => M(h({}, s), { targetSnapshot: a, urlAfterRedirects: u })))); }
function lo(t, n) { return x(e => { let { targetSnapshot: r, guards: { canActivateChecks: i } } = e; if (!i.length)
    return d(e); let o = new Set(i.map(u => u.route)), s = new Set; for (let u of o)
    if (!s.has(u))
        for (let c of Yr(u))
            s.add(c); let a = 0; return $(s).pipe(Ze(u => o.has(u) ? ho(u, r, t, n) : (u.data = dt(u, u.parent, t).resolve, d(void 0))), C(() => a++), Cr(1), x(u => a === s.size ? d(e) : G)); }); }
function Yr(t) { let n = t.children.map(e => Yr(e)).flat(); return [t, ...n]; }
function ho(t, n, e, r) { let i = t.routeConfig, o = t._resolve; return i?.title !== void 0 && !Fr(i) && (o[je] = i.title), Gt(() => (t.data = dt(t, t.parent, e).resolve, fo(o, t, n, r).pipe(R(s => (t._resolvedData = s, t.data = h(h({}, t.data), s), null))))); }
function fo(t, n, e, r) { let i = Ut(t); if (i.length === 0)
    return d({}); let o = {}; return $(i).pipe(x(s => po(t[s], n, e, r).pipe(oe(), C(a => { if (a instanceof Re)
    throw ft(new K, a); o[s] = a; }))), Cr(1), R(() => o), Ie(s => Wr(s) ? G : vt(s))); }
function po(t, n, e, r) { let i = Se(n) ?? r, o = Ce(t, i), s = o.resolve ? o.resolve(n, e) : _(i, () => o(n, e)); return H(s); }
function Mt(t) { return U(n => { let e = t(n); return e ? $(e).pipe(R(() => n)) : d(n); }); }
var Jt = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === f); return r; }
    getResolvedTitleForRoute(e) { return e.data[je]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: () => p(Zr), providedIn: "root" });
} return t; })(), Zr = (() => { class t extends Jt {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(v.\u0275\u0275inject(wr.Title)); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), V = new ie("", { providedIn: "root", factory: () => ({}) }), J = new ie(""), Rt = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = p(Pn);
    loadComponent(e, r) { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return d(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = H(_(e, () => r.loadComponent())).pipe(R(Jr), C(s => { this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = s; }), Dt(() => { this.componentLoaders.delete(r); })), o = new cr(i, () => new Ee).pipe(lr()); return this.componentLoaders.set(r, o), o; }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return d({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let o = Xr(r, this.compiler, e, this.onLoadEndListener).pipe(Dt(() => { this.childrenLoaders.delete(r); })), s = new cr(o, () => new Ee).pipe(lr()); return this.childrenLoaders.set(r, s), s; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Xr(t, n, e, r) { return H(_(e, () => t.loadChildren())).pipe(R(Jr), x(i => i instanceof xn || Array.isArray(i) ? d(i) : $(n.compileModuleAsync(i))), R(i => { r && r(t); let o, s, a = !1; return Array.isArray(i) ? (s = i, a = !0) : (o = i.create(e).injector, s = o.get(J, [], { optional: !0, self: !0 }).flat()), { routes: s.map(Xt), injector: o }; })); }
function go(t) { return t && typeof t == "object" && "default" in t; }
function Jr(t) { return go(t) ? t.default : t; }
var yt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: () => p(vo), providedIn: "root" });
} return t; })(), vo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), er = new ie(""), tr = new ie("");
function en(t, n, e) { let r = t.get(tr), i = t.get(An); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(c => setTimeout(c)); let o, s = new Promise(c => { o = c; }), a = i.startViewTransition(() => (o(), mo(t))); a.ready.catch(c => { }); let { onViewTransitionCreated: u } = r; return u && _(t, () => u({ transition: a, from: n, to: e })), s; }
function mo(t) { return new Promise(n => { _n({ read: () => setTimeout(n) }, { injector: t }); }); }
var St = new ie(""), ze = (() => { class t {
    currentNavigation = null;
    currentTransition = null;
    lastSuccessfulNavigation = null;
    events = new Ee;
    transitionAbortWithErrorSubject = new Ee;
    configLoader = p(Rt);
    environmentInjector = p(yr);
    destroyRef = p(Ln);
    urlSerializer = p(X);
    rootContexts = p(se);
    location = p(Vt);
    inputBindingEnabled = p(ke, { optional: !0 }) !== null;
    titleStrategy = p(Jt);
    options = p(V, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    urlHandlingStrategy = p(yt);
    createViewTransition = p(er, { optional: !0 });
    navigationErrorHandler = p(St, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => d(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new it(i)), r = i => this.events.next(new ot(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; this.transitions?.next(M(h({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, abortController: new AbortController, id: r })); }
    setupNavigations(e) { return this.transitions = new N(null), this.transitions.pipe(le(r => r !== null), U(r => { let i = !1; return d(r).pipe(U(o => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", w.SupersededByNewNavigation), G; this.currentTransition = r, this.currentNavigation = { id: o.id, initialUrl: o.rawUrl, extractedUrl: o.extractedUrl, targetBrowserUrl: typeof o.extras.browserUrl == "string" ? this.urlSerializer.parse(o.extras.browserUrl) : o.extras.browserUrl, trigger: o.source, extras: o.extras, previousNavigation: this.lastSuccessfulNavigation ? M(h({}, this.lastSuccessfulNavigation), { previousNavigation: null }) : null, abort: () => o.abortController.abort() }; let s = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!s && a !== "reload")
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.rawUrl), "", pe.IgnoredSameUrlNavigation)), o.resolve(!1), G; if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
        return d(o).pipe(U(u => (this.events.next(new Z(u.id, this.urlSerializer.serialize(u.extractedUrl), u.source, u.restoredState)), u.id !== this.navigationId ? G : Promise.resolve(u))), co(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy), C(u => { r.targetSnapshot = u.targetSnapshot, r.urlAfterRedirects = u.urlAfterRedirects, this.currentNavigation = M(h({}, this.currentNavigation), { finalUrl: u.urlAfterRedirects }); let c = new De(u.id, this.urlSerializer.serialize(u.extractedUrl), this.urlSerializer.serialize(u.urlAfterRedirects), u.targetSnapshot); this.events.next(c); })); if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
        let { id: u, extractedUrl: c, source: m, restoredState: S, extras: D } = o, W = new Z(u, this.urlSerializer.serialize(c), m, S);
        this.events.next(W);
        let A = $r(this.rootComponentType).snapshot;
        return this.currentTransition = r = M(h({}, o), { targetSnapshot: A, urlAfterRedirects: c, extras: M(h({}, D), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.finalUrl = c, d(r);
    }
    else
        return this.events.next(new F(o.id, this.urlSerializer.serialize(o.extractedUrl), "", pe.IgnoredByUrlHandlingStrategy)), o.resolve(!1), G; }), C(o => { let s = new et(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot); this.events.next(s); }), R(o => (this.currentTransition = r = M(h({}, o), { guards: Oi(o.targetSnapshot, o.currentSnapshot, this.rootContexts) }), r)), $i(this.environmentInjector, o => this.events.next(o)), C(o => { if (r.guardsResult = o.guardsResult, o.guardsResult && typeof o.guardsResult != "boolean")
        throw ft(this.urlSerializer, o.guardsResult); let s = new tt(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects), o.targetSnapshot, !!o.guardsResult); this.events.next(s); }), le(o => o.guardsResult ? !0 : (this.cancelNavigationTransition(o, "", w.GuardRejected), !1)), Mt(o => { if (o.guards.canActivateChecks.length !== 0)
        return d(o).pipe(C(s => { let a = new rt(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); }), U(s => { let a = !1; return d(s).pipe(lo(this.paramsInheritanceStrategy, this.environmentInjector), C({ next: () => a = !0, complete: () => { a || this.cancelNavigationTransition(s, "", w.NoDataFromResolver); } })); }), C(s => { let a = new nt(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(a); })); }), Mt(o => { let s = a => { let u = []; if (a.routeConfig?.loadComponent && !a.routeConfig._loadedComponent) {
        let c = Se(a) ?? this.environmentInjector;
        u.push(this.configLoader.loadComponent(c, a.routeConfig).pipe(C(m => { a.component = m; }), R(() => { })));
    } for (let c of a.children)
        u.push(...s(c)); return u; }; return Wt(s(o.targetSnapshot.root)).pipe(Sr(null), Oe(1)); }), Mt(() => this.afterPreactivation()), U(() => { let { currentSnapshot: o, targetSnapshot: s } = r, a = this.createViewTransition?.(this.environmentInjector, o.root, s.root); return a ? $(a).pipe(R(() => r)) : d(r); }), R(o => { let s = bi(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState); return this.currentTransition = r = M(h({}, o), { targetRouterState: s }), this.currentNavigation.targetRouterState = s, r; }), C(() => { this.events.next(new Ne); }), Ei(this.rootContexts, e.routeReuseStrategy, o => this.events.next(o), this.inputBindingEnabled), Oe(1), hr(new Hn(o => { let s = r.abortController.signal, a = () => o.next(); return s.addEventListener("abort", a), () => s.removeEventListener("abort", a); }).pipe(le(() => !i && !r.targetRouterState), C(() => { this.cancelNavigationTransition(r, r.abortController.signal.reason + "", w.Aborted); }))), C({ next: o => { i = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new O(o.id, this.urlSerializer.serialize(o.extractedUrl), this.urlSerializer.serialize(o.urlAfterRedirects))), this.titleStrategy?.updateTitle(o.targetRouterState.snapshot), o.resolve(!0); }, complete: () => { i = !0; } }), hr(this.transitionAbortWithErrorSubject.pipe(C(o => { throw o; }))), Dt(() => { i || this.cancelNavigationTransition(r, "", w.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation = null, this.currentTransition = null); }), Ie(o => { if (this.destroyed)
        return r.resolve(!1), G; if (i = !0, Vr(o))
        this.events.next(new k(r.id, this.urlSerializer.serialize(r.extractedUrl), o.message, o.cancellationCode)), Ti(o) ? this.events.next(new me(o.url, o.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let s = new ge(r.id, this.urlSerializer.serialize(r.extractedUrl), o, r.targetSnapshot ?? void 0);
        try {
            let a = _(this.environmentInjector, () => this.navigationErrorHandler?.(s));
            if (a instanceof Re) {
                let { message: u, cancellationCode: c } = ft(this.urlSerializer, a);
                this.events.next(new k(r.id, this.urlSerializer.serialize(r.extractedUrl), u, c)), this.events.next(new me(a.redirectTo, a.navigationBehaviorOptions));
            }
            else
                throw this.events.next(s), o;
        }
        catch (a) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a);
        }
    } return G; })); })); }
    cancelNavigationTransition(e, r, i) { let o = new k(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = this.currentNavigation?.targetBrowserUrl ?? this.currentNavigation?.extractedUrl; return e.toString() !== r?.toString() && !this.currentNavigation?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Ro(t) { return t !== de; }
var tn = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: () => p(yo), providedIn: "root" });
} return t; })(), gt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
}, yo = (() => { class t extends gt {
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = v.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), rn = (() => { class t {
    urlSerializer = p(X);
    options = p(V, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = p(Vt);
    urlHandlingStrategy = p(yt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new z;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, s = i ?? o; return s instanceof z ? this.urlSerializer.serialize(s) : s; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = $r(null);
    getRouterState() { return this.routerState; }
    stateMemento = this.createStateMemento();
    updateStateMemento() { this.stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: () => p(So), providedIn: "root" });
} return t; })(), So = (() => { class t extends rn {
    currentPageId = 0;
    lastSuccessfulId = -1;
    restoredState() { return this.location.getState(); }
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate"); }); }); }
    handleRouterEvent(e, r) { e instanceof Z ? this.updateStateMemento() : e instanceof F ? this.commitTransition(r) : e instanceof De ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof Ne ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof k && e.code !== w.SupersededByNewNavigation && e.code !== w.Redirect ? this.restoreHistory(r) : e instanceof ge ? this.restoreHistory(r, !0) : e instanceof O && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, { extras: r, id: i }) { let { replaceUrl: o, state: s } = r; if (this.location.isCurrentPathEqualTo(e) || o) {
        let a = this.browserPageId, u = h(h({}, s), this.generateNgRouterState(i, a));
        this.location.replaceState(e, "", u);
    }
    else {
        let a = h(h({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
        this.location.go(e, "", a);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r) { return this.canceledNavigationResolution === "computed" ? { navigationId: e, \u0275routerPageId: r } : { navigationId: e }; }
    static \u0275fac = (() => { let e; return function (i) { return (e || (e = v.\u0275\u0275getInheritedFactory(t)))(i || t); }; })();
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function Ct(t, n) { t.events.pipe(le(e => e instanceof O || e instanceof k || e instanceof ge || e instanceof F), R(e => e instanceof O || e instanceof F ? 0 : (e instanceof k ? e.code === w.Redirect || e.code === w.SupersededByNewNavigation : !1) ? 2 : 1), le(e => e !== 2), Oe(1)).subscribe(() => { n(); }); }
var Co = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, wo = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }, L = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = p(jn);
    stateManager = p(rn);
    options = p(V, { optional: !0 }) || {};
    pendingTasks = p(kn);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = p(ze);
    urlSerializer = p(X);
    location = p(Vt);
    urlHandlingStrategy = p(yt);
    injector = p(yr);
    _events = new Ee;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = p(tn);
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = p(J, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!p(ke, { optional: !0 });
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { this.console.warn(e); } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new Vn;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = this.navigationTransitions.currentNavigation;
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof k && r.code !== w.Redirect && r.code !== w.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof O)
                this.navigated = !0;
            else if (r instanceof me) {
                let s = r.navigationBehaviorOptions, a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), u = h({ browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Ro(i.source) }, s);
                this.scheduleNavigation(a, de, null, u, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        yi(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), de, this.stateManager.restoredState()); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => { this.navigateToSyncWithBrowser(e, i, r); }); }
    navigateToSyncWithBrowser(e, r, i) { let o = { replaceUrl: !0 }, s = i?.navigationId ? i : null; if (i) {
        let u = h({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, Object.keys(u).length !== 0 && (o.state = u);
    } let a = this.parseUrl(e); this.scheduleNavigation(a, r, s, o).catch(u => { this.disposed || this.injector.get($n)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return this.navigationTransitions.currentNavigation; }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(Xt), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: u } = r, c = u ? this.currentUrlTree.fragment : s, m = null; switch (a ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            m = h(h({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            m = this.currentUrlTree.queryParams;
            break;
        default: m = o || null;
    } m !== null && (m = this.removeEmptyProps(m)); let S; try {
        let D = i ? i.snapshot : this.routerState.snapshot.root;
        S = _r(D);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), S = this.currentUrlTree.root;
    } return Lr(S, e, m, c ?? null); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = Y(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, de, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return bo(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = h({}, Co) : r === !1 ? i = h({}, wo) : i = r, Y(e))
        return dr(this.currentUrlTree, e, i); let o = this.parseUrl(e); return dr(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, s) { if (this.disposed)
        return Promise.resolve(!1); let a, u, c; s ? (a = s.resolve, u = s.reject, c = s.promise) : c = new Promise((S, D) => { a = S, u = D; }); let m = this.pendingTasks.add(); return Ct(this, () => { queueMicrotask(() => this.pendingTasks.remove(m)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: a, reject: u, promise: c, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), c.catch(S => Promise.reject(S)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = v.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
function bo(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new I(4008, !1); }
import * as nn from "@angular/common";
import { LOCATION_INITIALIZED as Io, ViewportScroller as on, LocationStrategy as or, HashLocationStrategy as sn, Location as Ao, PathLocationStrategy as To } from "@angular/common";
import * as l from "@angular/core";
import { signal as Eo, untracked as Oo, inject as b, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as Mo, HostAttributeToken as Do, \u0275RuntimeError as ys, booleanAttribute as rr, EventEmitter as No, createEnvironmentInjector as Uo, InjectionToken as qe, makeEnvironmentProviders as Po, APP_BOOTSTRAP_LISTENER as an, Injector as un, ApplicationRef as xo, provideAppInitializer as cn, \u0275performanceMarkFeature as _o, ENVIRONMENT_INITIALIZER as Ms, NgZone as ln } from "@angular/core";
import { Subject as hn, of as ae, from as nr } from "rxjs";
import { mergeAll as wt, catchError as Lo, filter as jo, concatMap as ko, mergeMap as $o } from "rxjs/operators";
var bt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    reactiveHref = Eo(null);
    get href() { return Oo(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    target;
    queryParams;
    fragment;
    queryParamsHandling;
    state;
    info;
    relativeTo;
    isAnchorElement;
    subscription;
    onChanges = new hn;
    applicationErrorHandler = b(Mo);
    options = b(V, { optional: !0 });
    constructor(e, r, i, o, s, a) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = s, this.locationStrategy = a, this.reactiveHref.set(b(new Do("href"), { optional: !0 })); let u = s.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = u === "a" || u === "area" || !!(typeof customElements == "object" && customElements.get(u)?.observedAttributes?.includes?.("href")), this.isAnchorElement ? this.setTabIndexIfNotOnNativeEl("0") : this.subscribeToNavigationEventsIfNecessary(); }
    subscribeToNavigationEventsIfNecessary() { if (this.subscription !== void 0 || !this.isAnchorElement)
        return; let e = this.preserveFragment, r = i => i === "merge" || i === "preserve"; e ||= r(this.queryParamsHandling), e ||= !this.queryParamsHandling && !r(this.options?.defaultQueryParamsHandling), e && (this.subscription = this.router.events.subscribe(i => { i instanceof O && this.updateHref(); })); }
    preserveFragment = !1;
    skipLocationChange = !1;
    replaceUrl = !1;
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.isAnchorElement && (this.updateHref(), this.subscribeToNavigationEventsIfNecessary()), this.onChanges.next(this); }
    routerLinkInput = null;
    set routerLink(e) { e == null ? (this.routerLinkInput = null, this.setTabIndexIfNotOnNativeEl(null)) : (Y(e) ? this.routerLinkInput = e : this.routerLinkInput = Array.isArray(e) ? e : [e], this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, s) { let a = this.urlTree; if (a === null || this.isAnchorElement && (e !== 0 || r || i || o || s || typeof this.target == "string" && this.target != "_self"))
        return !0; let u = { skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }; return this.router.navigateByUrl(a, u)?.catch(c => { this.applicationErrorHandler(c); }), !this.isAnchorElement; }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    updateHref() { let e = this.urlTree; this.reactiveHref.set(e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null); }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    get urlTree() { return this.routerLinkInput === null ? null : Y(this.routerLinkInput) ? this.routerLinkInput : this.router.createUrlTree(this.routerLinkInput, { relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: this.preserveFragment }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(L), l.\u0275\u0275directiveInject(q), l.\u0275\u0275injectAttribute("tabindex"), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(nn.LocationStrategy)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && l.\u0275\u0275listener("click", function (s) { return i.onClick(s.button, s.ctrlKey, s.shiftKey, s.altKey, s.metaKey); }), r & 2 && l.\u0275\u0275attribute("href", i.reactiveHref(), l.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i.target); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", rr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", rr], replaceUrl: [2, "replaceUrl", "replaceUrl", rr], routerLink: "routerLink" }, features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })(), zo = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    link;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new No;
    constructor(e, r, i, o, s) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.link = s, this.routerEventsSubscription = e.events.subscribe(a => { a instanceof O && this.update(); }); }
    ngAfterContentInit() { ae(this.links.changes, ae(null)).pipe(wt()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = nr(e).pipe(wt()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = Fo(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1; return i => { let o = i.urlTree; return o ? e.isActive(o, r) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275directiveInject(L), l.\u0275\u0275directiveInject(l.ElementRef), l.\u0275\u0275directiveInject(l.Renderer2), l.\u0275\u0275directiveInject(l.ChangeDetectorRef), l.\u0275\u0275directiveInject(bt, 8)); };
    static \u0275dir = l.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && l.\u0275\u0275contentQuery(o, bt, 5), r & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.links = s);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [l.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function Fo(t) { return !!t.paths; }
var Fe = class {
}, qo = (() => { class t {
    preload(e, r) { return r().pipe(Lo(() => ae(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Bo = (() => { class t {
    preload(e, r) { return ae(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), dn = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(jo(e => e instanceof O), ko(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription && this.subscription.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Uo(o.providers, e, `Route: ${o.path}`));
        let s = o._injector ?? e, a = o._loadedInjector ?? s;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(s, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(a, o.children ?? o._loadedRoutes));
    } return nr(i).pipe(wt()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { let i; r.loadChildren && r.canLoad === void 0 ? i = this.loader.loadChildren(e, r) : i = ae(null); let o = i.pipe($o(s => s === null ? ae(void 0) : (r._loadedRoutes = s.routes, r._loadedInjector = s.injector, this.processRoutes(s.injector ?? e, s.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let s = this.loader.loadComponent(e, r);
        return nr([o, s]).pipe(wt());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(l.\u0275\u0275inject(L), l.\u0275\u0275inject(l.EnvironmentInjector), l.\u0275\u0275inject(Fe), l.\u0275\u0275inject(Rt)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), sr = new qe(""), fn = (() => { class t {
    urlSerializer;
    transitions;
    viewportScroller;
    zone;
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = de;
    restoredId = 0;
    store = {};
    constructor(e, r, i, o, s = {}) { this.urlSerializer = e, this.transitions = r, this.viewportScroller = i, this.zone = o, this.options = s, s.scrollPositionRestoration ||= "disabled", s.anchorScrolling ||= "disabled"; }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof Z ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof O ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof F && e.code === pe.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof ve && (e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0]) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0])); }); }
    scheduleScrollEvent(e, r) { this.zone.runOutsideAngular(() => ur(this, null, function* () { yield new Promise(i => { setTimeout(i), typeof requestAnimationFrame < "u" && requestAnimationFrame(i); }), this.zone.run(() => { this.transitions.events.next(new ve(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { l.\u0275\u0275invalidFactory(); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
function Ho(t, ...n) { return Po([{ provide: J, multi: !0, useValue: t }, [], { provide: q, useFactory: pn, deps: [L] }, { provide: an, multi: !0, useFactory: gn }, n.map(e => e.\u0275providers)]); }
function pn(t) { return t.routerState.root; }
function B(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function Vo(t) { return [{ provide: J, multi: !0, useValue: t }, []]; }
function Wo(t = {}) { return B(4, [{ provide: sr, useFactory: () => { let e = b(on), r = b(ln), i = b(ze), o = b(X); return new fn(o, i, e, r, t); } }]); }
function gn() { let t = b(un); return n => { let e = t.get(xo); if (n !== e.components[0])
    return; let r = t.get(L), i = t.get(vn); t.get(ar) === 1 && r.initialNavigation(), t.get(yn, null, { optional: !0 })?.setUpPreloading(), t.get(sr, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var vn = new qe("", { factory: () => new hn }), ar = new qe("", { providedIn: "root", factory: () => 1 });
function mn() { let t = [{ provide: ar, useValue: 0 }, cn(() => { let n = b(un); return n.get(Io, Promise.resolve()).then(() => new Promise(r => { let i = n.get(L), o = n.get(vn); Ct(i, () => { r(!0); }), n.get(ze).afterPreactivation = () => (r(!0), o.closed ? ae(void 0) : o), i.initialNavigation(); })); })]; return B(2, t); }
function Rn() { let t = [cn(() => { b(L).setUpLocationChangeListener(); }), { provide: ar, useValue: 2 }]; return B(3, t); }
function Go() { let t = []; return t = [], B(1, t); }
var yn = new qe("");
function Sn(t) { return B(0, [{ provide: yn, useExisting: dn }, { provide: Fe, useExisting: t }]); }
function Qo(t) { return B(5, [{ provide: V, useValue: t }]); }
function Ko() { return B(6, [{ provide: or, useClass: sn }]); }
function Yo(t) { return B(7, [{ provide: St, useValue: t }]); }
function Cn() { return B(8, [Yt, { provide: ke, useExisting: Yt }]); }
function wn(t) { _o("NgRouterViewTransitions"); let n = [{ provide: er, useValue: en }, { provide: tr, useValue: h({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return B(9, n); }
var bn = [Ao, { provide: X, useClass: K }, L, se, { provide: q, useFactory: pn, deps: [L] }, Rt, []], Zo = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [bn, [], { provide: J, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: St, useValue: r.errorHandler } : [], { provide: V, useValue: r || {} }, r?.useHash ? Jo() : es(), Xo(), r?.preloadingStrategy ? Sn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? ts(r) : [], r?.bindToComponentInputs ? Cn().\u0275providers : [], r?.enableViewTransitions ? wn().\u0275providers : [], rs()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: J, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = l.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = l.\u0275\u0275defineInjector({});
} return t; })();
function Xo() { return { provide: sr, useFactory: () => { let t = b(on), n = b(ln), e = b(V), r = b(ze), i = b(X); return e.scrollOffset && t.setOffset(e.scrollOffset), new fn(i, r, t, n, e); } }; }
function Jo() { return { provide: or, useClass: sn }; }
function es() { return { provide: or, useClass: To }; }
function ts(t) { return [t.initialNavigation === "disabled" ? Rn().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? mn().\u0275providers : []]; }
var ir = new qe("");
function rs() { return [{ provide: ir, useFactory: gn }, { provide: an, multi: !0, useExisting: ir }]; }
import { inject as Be, Version as ns } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function Bs(t) { return t.map(n => (...e) => Be(n).canMatch(...e)); }
function Hs(t) { return t.map(n => (...e) => Be(n).canActivate(...e)); }
function Vs(t) { return t.map(n => (...e) => Be(n).canActivateChild(...e)); }
function Ws(t) { return t.map(n => (...e) => Be(n).canDeactivate(...e)); }
function Gs(t) { return (...n) => Be(t).resolve(...n); }
var Qs = new ns("20.1.3");
export { q as ActivatedRoute, re as ActivatedRouteSnapshot, ct as ActivationEnd, ut as ActivationStart, gt as BaseRouteReuseStrategy, at as ChildActivationEnd, st as ChildActivationStart, se as ChildrenOutletContexts, Zr as DefaultTitleStrategy, K as DefaultUrlSerializer, y as EventType, tt as GuardsCheckEnd, et as GuardsCheckStart, k as NavigationCancel, w as NavigationCancellationCode, O as NavigationEnd, ge as NavigationError, F as NavigationSkipped, pe as NavigationSkippedCode, Z as NavigationStart, Bo as NoPreloading, lt as OutletContext, f as PRIMARY_OUTLET, qo as PreloadAllModules, Fe as PreloadingStrategy, V as ROUTER_CONFIGURATION, ir as ROUTER_INITIALIZER, qr as ROUTER_OUTLET_DATA, J as ROUTES, Re as RedirectCommand, nt as ResolveEnd, rt as ResolveStart, ot as RouteConfigLoadEnd, it as RouteConfigLoadStart, tn as RouteReuseStrategy, L as Router, E as RouterEvent, bt as RouterLink, zo as RouterLinkActive, bt as RouterLinkWithHref, Zo as RouterModule, Kt as RouterOutlet, dn as RouterPreloader, Ue as RouterState, Pe as RouterStateSnapshot, De as RoutesRecognized, ve as Scroll, Jt as TitleStrategy, yt as UrlHandlingStrategy, Q as UrlSegment, g as UrlSegmentGroup, X as UrlSerializer, z as UrlTree, Qs as VERSION, ne as convertToParamMap, xr as createUrlTreeFromSnapshot, br as defaultUrlMatcher, Hs as mapToCanActivate, Vs as mapToCanActivateChild, Ws as mapToCanDeactivate, Bs as mapToCanMatch, Gs as mapToResolve, Ho as provideRouter, Vo as provideRoutes, Cn as withComponentInputBinding, Go as withDebugTracing, Rn as withDisabledInitialNavigation, mn as withEnabledBlockingInitialNavigation, Ko as withHashLocation, Wo as withInMemoryScrolling, Yo as withNavigationErrorHandler, Sn as withPreloading, Qo as withRouterConfig, wn as withViewTransitions, Zt as \u0275EmptyOutletComponent, bn as \u0275ROUTER_PROVIDERS, Ct as \u0275afterNextNavigation, Xr as \u0275loadChildren };
/*! Bundled license information:

@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router_module.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
