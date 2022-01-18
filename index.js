square_sums_row = (n,
  S = (l, a = []) => {
    for (i = 2; i < l + 1; i++) a.push(i * i);
    return a;
  },
  SHIT = [1, 15, 16, 17, 23],
  q = Math.sqrt,
  G = (z, g = [], a = S((d = ~~q(z * 2)))) => {
    for (i = 1; i - 1 < z; i++) {
      for (v = [], l = ~~q(i) - 1, e = Math.min(~~q(z + i) - 1, d); l < e; l++)
        (t = a[l] - i) != i && v.push(t);
      g[i] = v;
    }
    return g;
  },
  c = [],k = G(n),
  T = new Uint16Array(n).map((_, i) => i + 1)
) => {
  if (!SHIT.includes(n) && n < 5 << 2) return !1;
  C = (H) => {
    if (!(c.length - n)) return c;
    else
      for (var i of H.sort((a, b) => k[a].length - k[b].length))
        if ((c.push(i), k[i].map(($) => k[$].splice(k[$].indexOf(i), 1)), C(k[i]))) return c;
        else c.pop``, k[i].map(($) => k[$].push(i));
    return !1;
  };
  return C(T);
};
