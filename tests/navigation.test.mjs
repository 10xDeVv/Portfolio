import test from "node:test";
import assert from "node:assert/strict";
import { generatedContent } from "../src/content.generated.js";
import { appTemplate } from "../src/components.js";
import { parseProjectRoute } from "../src/navigation.js";

test("every result links to its supporting entry, including the Wayward benchmark deep link", () => {
  globalThis.window = { location: { hash: "#about" } };
  const homepage = appTemplate();
  for (const result of generatedContent.highlights) {
    assert.ok(result.linkLabel && homepage.includes(result.linkLabel));
    const route = parseProjectRoute(result.href);
    if (!route) {
      assert.ok(homepage.includes(`id="${result.href.slice(1)}"`));
      continue;
    }
    assert.equal(route.slug, "wayward");
    assert.equal(route.targetId, "project-metrics");
    globalThis.window.location.hash = result.href;
    const detail = appTemplate();
    assert.ok(detail.includes('data-project="wayward"'));
    assert.ok(detail.includes(`id="${route.targetId}"`));
    assert.ok(detail.includes('role="progressbar"'));
    assert.ok(detail.includes("What the benchmark measured"));
  }
  assert.deepEqual(parseProjectRoute("#project/wayward"), { slug: "wayward", targetId: null });
  assert.equal(parseProjectRoute("#work"), null);
  assert.equal(parseProjectRoute("#project/wayward/unknown"), null);
});
