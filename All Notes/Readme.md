---
dg-publish: true
---
## Repeating Tasks
- Add `re-use: true` in frontmatter.
- [[Change AMS Domain Password Commands]]
```dataview
TABLE complete-date AS "Last Complete Date"
FROM "All Notes"
WHERE re-use
```