[[<% tp.date.now("gggg [w]ww", "P-1W", tp.file.title, "gggg [w]ww") %> | Previous Week]]<< | >>[[<% tp.date.now("gggg [w]ww", "P1W", tp.file.title, "gggg [w]ww") %> | Next Week]]

```dataviewjs
let mon = "{{monday:YYYY-MM-DD ddd}}";
let tue = "{{tuesday:YYYY-MM-DD ddd}}";
let wed = "{{wednesday:YYYY-MM-DD ddd}}";
let thu = "{{thursday:YYYY-MM-DD ddd}}";
let fri = "{{friday:YYYY-MM-DD ddd}}";

dv.view("obs-plugins/Dataview/weekly", {mon, tue, wed, thu, fri})
```