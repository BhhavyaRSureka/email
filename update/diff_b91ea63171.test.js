// ********RoostGPT********
// Test generated by RoostGPT for test JavaTesting using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
function diff(domain, a1 = [], a2 = []) {
  const domainFilter = alias => alias.expression.endsWith(`@${domain}`);
  const a1Filtered = a1.filter(domainFilter);
  const a2Filtered = a2.filter(domainFilter);

  const a1Map = new Map(a1Filtered.map(alias => [alias.expression, alias.actions.sort().join(',')]));
  const a2Map = new Map(a2Filtered.map(alias => [alias.expression, alias.actions.sort().join(',')]));
  const diff = [];

  for (const [expression, actions] of a1Map) {
    if (!a2Map.has(expression) || a2Map.get(expression) !== actions) {
      diff.push({ expression, actions: actions.split(',') });
    }
  }

  for (const expression of a2Map.keys()) {
    if (!a1Map.has(expression)) {
      diff.push({ expression, actions: [] });
    }
  }

  return diff;
}

module.exports = diff;
