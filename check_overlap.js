const planets = [
    { name: "Skills & Tools", dist: 210, size: 26, moons: [{sz: 4.0, d: 16}, {sz: 3.5, d: 25}, {sz: 3.0, d: 34}, {sz: 3.2, d: 43}] },
    { name: "Experience", dist: 371, size: 56, moons: [{sz: 5.5, d: 20}, {sz: 4.8, d: 26}, {sz: 5.0, d: 32}, {sz: 3.2, d: 38}, {sz: 3.0, d: 44}, {sz: 6.0, d: 52}] },
    { name: "Expertise & Impact", dist: 651, size: 45, moons: [{sz: 2.0, d: 14}, {sz: 2.2, d: 20}, {sz: 1.8, d: 26}, {sz: 2.0, d: 32}] },
    { name: "Projects", dist: 811, size: 24, moons: [{sz: 2.8, d: 15}, {sz: 2.5, d: 22}, {sz: 2.3, d: 29}] },
    { name: "Education", dist: 971, size: 14, moons: [{sz: 2.5, d: 18}, {sz: 2.0, d: 28}, {sz: 1.8, d: 38}] },
    { name: "Certifications", dist: 1111, size: 12, moons: [{sz: 2.0, d: 14}, {sz: 1.8, d: 20}, {sz: 1.6, d: 26}] },
    { name: "Contact", dist: 1291, size: 32, moons: [{sz: 1.5, d: 12}, {sz: 1.4, d: 17}, {sz: 1.3, d: 22}, {sz: 1.2, d: 27}] }
];

function calcReach(dist, size, moons) {
    let maxOuter = dist + size + 5;
    let minInner = dist - size - 5;
    
    moons.forEach((m, idx) => {
        const minDist = size + m.sz + 8;
        const sep = (m.sz * 2.2) + 8;
        const orbitR = Math.max(m.d, minDist) + (idx * sep);
        
        const outer = dist + orbitR + m.sz + 5;
        const inner = dist - orbitR - m.sz - 5;
        
        maxOuter = Math.max(maxOuter, outer);
        minInner = Math.min(minInner, inner);
    });
    
    return { inner: minInner, outer: maxOuter };
}

const data = planets.map(p => {
    const reach = calcReach(p.dist, p.size, p.moons);
    return { name: p.name, dist: p.dist, ...reach };
});

console.log("OVERLAP ANALYSIS:\n");
const overlaps = [];
for (let i = 0; i < data.length - 1; i++) {
    const curr = data[i];
    const nxt = data[i + 1];
    const gap = nxt.inner - curr.outer;
    const status = gap >= 40 ? "✓ OK" : "⚠️ OVERLAP";
    console.log(`${curr.name} → ${nxt.name}`);
    console.log(`  Outer: ${curr.outer.toFixed(1)}, Inner: ${nxt.inner.toFixed(1)}, Gap: ${gap.toFixed(1)} ${status}\n`);
    if (gap < 40) overlaps.push({from: curr.name, to: nxt.name, gap: gap, needed: 40 - gap});
}

if (overlaps.length > 0) {
    console.log("\n" + "=".repeat(70));
    console.log("OVERLAPS DETECTED - RECOMMENDED FIXES:\n");
    overlaps.forEach(o => {
        console.log(`${o.from} ← → ${o.to}: Increase distance by ${o.needed.toFixed(1)}`);
    });
}
