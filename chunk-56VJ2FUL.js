import { a as p, b as m } from "@nf-internal/chunk-4CLCTAJ7";
function I(e, r) { return Object.is(e, r); }
var t = null, v = !1, D = 1, R = null, h = Symbol("SIGNAL");
function a(e) { let r = t; return t = e, r; }
function H() { return t; }
function J() { return v; }
function Q(e) { return e[h] !== void 0; }
var S = { version: 0, lastCleanEpoch: 0, dirty: !1, producerNode: void 0, producerLastReadVersion: void 0, producerIndexOfThis: void 0, nextProducerIndex: 0, liveConsumerNode: void 0, liveConsumerIndexOfThis: void 0, consumerAllowSignalWrites: !1, consumerIsAlwaysLive: !1, kind: "unknown", producerMustRecompute: () => !1, producerRecomputeValue: () => { }, consumerMarkedDirty: () => { }, consumerOnSignalRead: () => { } };
function O(e) { if (v)
    throw new Error(""); if (t === null)
    return; t.consumerOnSignalRead(e); let r = t.nextProducerIndex++; if (x(t), r < t.producerNode.length && t.producerNode[r] !== e && N(t)) {
    let u = t.producerNode[r];
    E(u, t.producerIndexOfThis[r]);
} t.producerNode[r] !== e && (t.producerNode[r] = e, t.producerIndexOfThis[r] = N(t) ? b(e, t, r) : 0), t.producerLastReadVersion[r] = e.version; }
function G() { D++; }
function d(e) { if (!(N(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === D)) {
    if (!e.producerMustRecompute(e) && !$(e)) {
        g(e);
        return;
    }
    e.producerRecomputeValue(e), g(e);
} }
function V(e) { if (e.liveConsumerNode === void 0)
    return; let r = v; v = !0; try {
    for (let u of e.liveConsumerNode)
        u.dirty || q(u);
}
finally {
    v = r;
} }
function A() { return t?.consumerAllowSignalWrites !== !1; }
function q(e) { e.dirty = !0, V(e), e.consumerMarkedDirty?.(e); }
function g(e) { e.dirty = !1, e.lastCleanEpoch = D; }
function M(e) { return e && (e.nextProducerIndex = 0), a(e); }
function w(e, r) { if (a(r), !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 || e.producerLastReadVersion === void 0)) {
    if (N(e))
        for (let u = e.nextProducerIndex; u < e.producerNode.length; u++)
            E(e.producerNode[u], e.producerIndexOfThis[u]);
    for (; e.producerNode.length > e.nextProducerIndex;)
        e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop();
} }
function $(e) { x(e); for (let r = 0; r < e.producerNode.length; r++) {
    let u = e.producerNode[r], n = e.producerLastReadVersion[r];
    if (n !== u.version || (d(u), n !== u.version))
        return !0;
} return !1; }
function X(e) { if (x(e), N(e))
    for (let r = 0; r < e.producerNode.length; r++)
        E(e.producerNode[r], e.producerIndexOfThis[r]); e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0); }
function b(e, r, u) { if (L(e), e.liveConsumerNode.length === 0 && k(e))
    for (let n = 0; n < e.producerNode.length; n++)
        e.producerIndexOfThis[n] = b(e.producerNode[n], e, n); return e.liveConsumerIndexOfThis.push(u), e.liveConsumerNode.push(r) - 1; }
function E(e, r) { if (L(e), e.liveConsumerNode.length === 1 && k(e))
    for (let n = 0; n < e.producerNode.length; n++)
        E(e.producerNode[n], e.producerIndexOfThis[n]); let u = e.liveConsumerNode.length - 1; if (e.liveConsumerNode[r] = e.liveConsumerNode[u], e.liveConsumerIndexOfThis[r] = e.liveConsumerIndexOfThis[u], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, r < e.liveConsumerNode.length) {
    let n = e.liveConsumerIndexOfThis[r], o = e.liveConsumerNode[r];
    x(o), o.producerIndexOfThis[n] = r;
} }
function N(e) { return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0; }
function x(e) { e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= []; }
function L(e) { e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= []; }
function k(e) { return e.producerNode !== void 0; }
function y(e) { R?.(e); }
function Y(e) { let r = R; return R = e, r; }
function Z(e, r) { let u = Object.create(W); u.computation = e, r !== void 0 && (u.equal = r); let n = () => { if (d(u), O(u), u.value === i)
    throw u.error; return u.value; }; return n[h] = u, y(u), n; }
var c = Symbol("UNSET"), l = Symbol("COMPUTING"), i = Symbol("ERRORED"), W = m(p({}, S), { value: c, dirty: !0, error: null, equal: I, kind: "computed", producerMustRecompute(e) { return e.value === c || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let u = M(e), n, o = !1; try {
        n = e.computation(), a(null), o = r !== c && r !== i && n !== i && e.equal(r, n);
    }
    catch (s) {
        n = i, e.error = s;
    }
    finally {
        w(e, u);
    } if (o) {
        e.value = r;
        return;
    } e.value = n, e.version++; } });
function _() { throw new Error; }
var F = _;
function U(e) { F(e); }
function ee(e) { F = e; }
var C = null;
function re(e, r) { let u = Object.create(B); u.value = e, r !== void 0 && (u.equal = r); let n = () => j(u); return n[h] = u, y(u), [n, f => T(u, f), f => P(u, f)]; }
function ne(e) { let r = C; return C = e, r; }
function j(e) { return O(e), e.value; }
function T(e, r) { A() || U(e), e.equal(e.value, r) || (e.value = r, K(e)); }
function P(e, r) { A() || U(e), T(e, r(e.value)); }
function ue(e) { C?.(e); }
var B = m(p({}, S), { equal: I, value: void 0, kind: "signal" });
function K(e) { e.version++, G(), V(e), C?.(e); }
function ce(e, r, u) { let n = Object.create(z); n.source = e, n.computation = r, u != null && (n.equal = u); let s = () => { if (d(n), O(n), n.value === i)
    throw n.error; return n.value; }; return s[h] = n, y(n), s; }
function se(e, r) { d(e), T(e, r), g(e); }
function le(e, r) { d(e), P(e, r), g(e); }
var z = m(p({}, S), { value: c, dirty: !0, error: null, equal: I, kind: "linkedSignal", producerMustRecompute(e) { return e.value === c || e.value === l; }, producerRecomputeValue(e) { if (e.value === l)
        throw new Error(""); let r = e.value; e.value = l; let u = M(e), n; try {
        let o = e.source(), s = r === c || r === i ? void 0 : { source: e.sourceValue, value: r };
        n = e.computation(o, s), e.sourceValue = o;
    }
    catch (o) {
        n = i, e.error = o;
    }
    finally {
        w(e, u);
    } if (r !== c && n !== i && e.equal(r, n)) {
        e.value = r;
        return;
    } e.value = n, e.version++; } });
function ae(e) { let r = a(null); try {
    return e();
}
finally {
    a(r);
} }
function pe(e) { }
export { I as a, h as b, a as c, H as d, J as e, Q as f, S as g, O as h, G as i, d as j, V as k, A as l, q as m, g as n, M as o, w as p, $ as q, X as r, y as s, Y as t, Z as u, ee as v, re as w, ne as x, j as y, T as z, P as A, ue as B, B as C, ce as D, se as E, le as F, ae as G, pe as H };
/*! Bundled license information:

@angular/core/fesm2022/signal.mjs:
@angular/core/fesm2022/untracked.mjs:
@angular/core/fesm2022/weak_ref.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
