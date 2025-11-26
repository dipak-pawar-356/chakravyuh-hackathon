import { defineType } from "sanity";

export default defineType({
  name: "judge",
  title: "Judge",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "designation", type: "string", title: "Designation" },
    { name: "organization", type: "string", title: "Organization" },
    { name: "photo", type: "image", title: "Photo" },
    { name: "linkedin", type: "url", title: "LinkedIn" },
  ],
});
