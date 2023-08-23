## In-use
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "in-use"
```
## Pending Out
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "pending-out"
```
## Spare
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "spare"
```
## Out
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "out"
```