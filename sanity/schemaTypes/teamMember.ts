import { defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "role", type: "string", title: "Role" },
    { name: "photo", type: "image", title: "Photo" },
    { name: "linkedin", type: "url", title: "LinkedIn" },
  ],
});
