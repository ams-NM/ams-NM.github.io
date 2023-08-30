## In-use
```dataview
TABLE location, due-date, sn, remark
FROM #calibration AND "All Notes"
WHERE status = "in-use"
SORT due-date
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
SORT due-date
```
## Out
```dataview
TABLE out-date, sn, wo, remark
FROM #calibration AND "All Notes"
WHERE status = "out"
```