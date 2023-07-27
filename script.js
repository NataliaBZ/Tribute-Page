const getTimelineHeight = document.getElementById("timeline").offsetHeight;
const timelineHeight = getTimelineHeight + "px";
document.getElementById("timeline-line").style.height = timelineHeight;

function changeTimelineHeight() {
  const getTimelineHeight = document.getElementById("timeline").offsetHeight;
  const timelineHeight = getTimelineHeight + "px";
  document.getElementById("timeline-line").style.height = timelineHeight;
}
window.onresize = changeTimelineHeight;
