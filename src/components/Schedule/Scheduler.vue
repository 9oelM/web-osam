<template>
  <div id = "calendar"></div>
</template>
<script>
import Calendar from "tui-calendar"; /* ES6 */
import shortid from "shortid";
import sampleSchedules from "@/assets/sampleSchedules";
export default {
  name: "Scheduler",

  mounted() {
    let calendar = new Calendar(document.getElementById("calendar"), {
      defaultView: "month",
      taskView: true, // can be also ['milestone', 'task']
      scheduleView: true, // can be also ['allday', 'time']
      useCreationPopup: true,
      useDetailPopup: true,
      month: {
        daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        startDayOfWeek: 0,
        narrowWeekend: true
      },
      week: {
        daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        startDayOfWeek: 0,
        narrowWeekend: true
      }
    });
    calendar.createSchedules([...sampleSchedules.schedules]);
    this.$store.commit("setCalendar", calendar);
    let self = this;
    if (!this.calendarInitiated) {
      calendar.on("beforeCreateSchedule", function(event) {
        calendar.createSchedules([
          {
            id: "1",
            calendarId: `${++self.counter}`,
            title: event.title,
            category: "time",
            dueDateClass: "",
            start: event.start,
            end: event.end
          }
        ]);
      });
      calendar.on("beforeUpdateSchedule", function(event) {
        let schedule = event.schedule;

        calendar.updateSchedule(schedule.id, schedule.calendarId, {
          title: event.title,
          category: "time",
          dueDateClass: "",
          start: event.start,
          end: event.end
        });
      });
      self.calendarInitiated = true;
    }
  },
  computed: {
    calendar: function() {
      return this.$store.state.calendar;
    }
  },
  data: function() {
    return {
      counter: 50, // just start safely at 50
      calendarInitiated: false,
      schedules: [],
      options: {
        defaultView: "month",
        taskView: true, // can be also ['milestone', 'task']
        scheduleView: true, // can be also ['allday', 'time']

        month: {
          daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          startDayOfWeek: 0,
          narrowWeekend: true
        },
        week: {
          daynames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          startDayOfWeek: 0,
          narrowWeekend: true
        }
      }
    };
  },
};
</script>
<style scoped>
.inner-wrapper > div {
  height: 100%;
  width: 100%;
}
#calendar {
  height: 100%;
  width: 100%;
}
</style>
