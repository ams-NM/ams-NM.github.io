## Ongoing
```dataview
TASK
FROM "Monthly" or "All Notes"
WHERE !completed AND contains(tags, "#IMO-Pending")
```
## Done
```dataview
TASK
FROM "Monthly" or "All Notes"
WHERE completed AND contains(tags, "#IMO")
```