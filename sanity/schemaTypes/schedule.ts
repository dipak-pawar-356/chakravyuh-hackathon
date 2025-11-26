import { defineType } from "sanity";

export default defineType({
  name: "schedule",
  title: "Schedule",
  type: "document",
  fields: [
    { name: "day", type: "string", title: "Day" },
    { name: "time", type: "string", title: "Time" },
    { name: "eventTitle", type: "string", title: "Event Title" },
    { name: "description", type: "text", title: "Description" },
  ],
});
