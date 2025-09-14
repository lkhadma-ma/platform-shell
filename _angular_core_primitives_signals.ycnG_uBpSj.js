import { A as T, B as G, C as V, D as b, E as j, F as q, G as B, H, a as C, b as s, c as A, d as N, e as l, f as P, g as c, h as E, i as w, j as D, k, l as v, m as a, n as I, o as i, p as d, q as f, r as p, s as W, t as O, u as R, v as x, w as L, x as M, y as U, z as _ } from "@nf-internal/chunk-56VJ2FUL";
import { a as o, b as u } from "@nf-internal/chunk-4CLCTAJ7";
function K(r, m, h) { let e = Object.create(z); h && (e.consumerAllowSignalWrites = !0), e.fn = r, e.schedule = m; let g = n => { e.cleanupFn = n; }; function F(n) { return n.fn === null && n.schedule === null; } function S(n) { F(n) || (p(n), n.cleanupFn(), n.fn = null, n.schedule = null, n.cleanupFn = t); } let y = () => { if (e.fn === null)
    return; if (l())
    throw new Error(""); if (e.dirty = !1, e.hasRun && !f(e))
    return; e.hasRun = !0; let n = i(e); try {
    e.cleanupFn(), e.cleanupFn = t, e.fn(g);
}
finally {
    d(e, n);
} }; return e.ref = { notify: () => a(e), run: y, cleanup: () => e.cleanupFn(), destroy: () => S(e), [s]: e }, e.ref; }
var t = () => { }, z = u(o({}, c), { consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !1, consumerMarkedDirty: r => { r.schedule !== null && r.schedule(r.ref); }, hasRun: !1, cleanupFn: t });
export { c as REACTIVE_NODE, s as SIGNAL, V as SIGNAL_NODE, d as consumerAfterComputation, i as consumerBeforeComputation, p as consumerDestroy, a as consumerMarkDirty, f as consumerPollProducersForChange, R as createComputed, b as createLinkedSignal, L as createSignal, K as createWatch, C as defaultEquals, N as getActiveConsumer, l as isInNotificationPhase, P as isReactive, j as linkedSignalSetFn, q as linkedSignalUpdateFn, E as producerAccessed, w as producerIncrementEpoch, I as producerMarkClean, k as producerNotifyConsumers, D as producerUpdateValueVersion, v as producerUpdatesAllowed, W as runPostProducerCreatedFn, G as runPostSignalSetFn, A as setActiveConsumer, H as setAlternateWeakRefImpl, O as setPostProducerCreatedFn, M as setPostSignalSetFn, x as setThrowInvalidWriteToSignalError, U as signalGetFn, _ as signalSetFn, T as signalUpdateFn, B as untracked };
/*! Bundled license information:

@angular/core/fesm2022/primitives/signals.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
