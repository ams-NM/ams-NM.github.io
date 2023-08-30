## Ongoing
```dataview
TASK
FROM "Monthly" or "All Notes"
WHERE !completed AND contains(tags, "#PR-Item-pending")
```
## Done
```dataview
TASK
FROM "Monthly" or "All Notes"
WHERE completed AND contains(tags, "#PR")
```