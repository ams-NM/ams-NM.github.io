## Ongoing
```dataview
TABLE work-order AS "WO", report-date AS "Start", complete-date AS "Finished", next-step AS "Next Step", remark AS "Remark"
FROM "All Notes"
WHERE type = "CW" and status != "done"
```
## On Hold
```dataview
TABLE work-order AS "WO", report-date AS "Start", complete-date AS "Finished", next-step AS "Next Step", remark AS "Remark"
FROM "All Notes"
WHERE type = "CW" and status = "onhold"
```
## Done
```dataview
TABLE work-order AS "WO", report-date AS "Start", complete-date AS "Finished"
FROM "All Notes"
WHERE type = "CW" and status = "done"
```