import { Kc as f, L as l, Mc as b, Tc as v, b as d, bd as w, fd as x, gd as p, hd as h, id as k, kd as I, md as j } from "@nf-internal/chunk-HJGATUMU";
import "@nf-internal/chunk-R4BOCH5O";
import "@nf-internal/chunk-O24SRXC7";
import { a as y, b as D } from "@nf-internal/chunk-ACKELEN3";
import { Observable as m, ReplaySubject as M } from "rxjs";
import { takeUntil as C } from "rxjs/operators";
import "@angular/core/primitives/signals";
import "@angular/core/primitives/di";
function S(t) { t || (t = l(b)); let e = new m(n => { if (t.destroyed) {
    n.next();
    return;
} return t.onDestroy(n.next.bind(n)); }); return n => n.pipe(C(e)); }
var g = class {
    source;
    destroyed = !1;
    destroyRef = l(b);
    constructor(e) { this.source = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    subscribe(e) { if (this.destroyed)
        throw new d(953, !1); let n = this.source.pipe(S(this.destroyRef)).subscribe({ next: r => e(r) }); return { unsubscribe: () => n.unsubscribe() }; }
};
function P(t, e) { return new g(t); }
function A(t) { let e = x(t); return new m(n => { let r = e?.onDestroy(() => n.complete()), u = t.subscribe(o => n.next(o)); return () => { u.unsubscribe(), r?.(); }; }); }
function V(t, e) { let n = e?.injector ?? l(f), r = new M(1), u = k(() => { let o; try {
    o = t();
}
catch (i) {
    p(() => r.error(i));
    return;
} p(() => r.next(o)); }, { injector: n, manualCleanup: !0 }); return n.get(b).onDestroy(() => { u.destroy(), r.complete(); }), r.asObservable(); }
function $(t, e) { let r = !e?.manualCleanup ? e?.injector?.get(b) ?? l(b) : null, u = q(e?.equal), o; e?.requireSync ? o = v({ kind: 0 }, { equal: u }) : o = v({ kind: 1, value: e?.initialValue }, { equal: u }); let i, c = t.subscribe({ next: s => o.set({ kind: 1, value: s }), error: s => { o.set({ kind: 2, error: s }), i?.(); }, complete: () => { i?.(); } }); if (e?.requireSync && o().kind === 0)
    throw new d(601, !1); return i = r?.onDestroy(c.unsubscribe.bind(c)), h(() => { let s = o(); switch (s.kind) {
    case 1: return s.value;
    case 2: throw s.error;
    case 0: throw new d(601, !1);
} }, { equal: e?.equal }); }
function q(t = Object.is) { return (e, n) => e.kind === 1 && n.kind === 1 && t(e.value, n.value); }
function z(t) { t === void 0 && (t = l(f)); let e = t.get(w); return n => new m(r => { let u = e.add(), o = !1; function i() { o || (u(), o = !0); } let c = n.subscribe({ next: s => { r.next(s), i(); }, complete: () => { r.complete(), i(); }, error: s => { r.error(s), i(); } }); return c.add(() => { r.unsubscribe(), i(); }), c; }); }
function B(t) { return I(D(y({}, t), { loader: void 0, stream: e => { let n, r = () => n.unsubscribe(); e.abortSignal.addEventListener("abort", r); let u = v({ value: void 0 }), o, i = new Promise(a => o = a); function c(a) { u.set(a), o?.(u), o = void 0; } let s = t.stream ?? t.loader; if (s === void 0)
        throw new d(990, !1); return n = s(e).subscribe({ next: a => c({ value: a }), error: a => { c({ error: j(a) }), e.abortSignal.removeEventListener("abort", r); }, complete: () => { o && c({ error: new d(991, !1) }), e.abortSignal.removeEventListener("abort", r); } }), i; } })); }
export { P as outputFromObservable, A as outputToObservable, z as pendingUntilEvent, B as rxResource, S as takeUntilDestroyed, V as toObservable, $ as toSignal };
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
