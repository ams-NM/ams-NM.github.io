## In-use
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "in-use"
```
## Pending Out
```dataview
TABLE out-date, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "pending-out"
```
## Spare
```dataview
TABLE due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "spare"
```
## Out
```dataview
TABLE out-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "out"
```