
```dataview
TABLE wo, status, report-date, next-step
FROM  "All Notes"
WHERE type = "CM" AND status != "done"
SORT wo
```