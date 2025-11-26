import { client, urlFor } from "@/lib/sanity";
import TeamCard from "@/components/TeamCard";

async function getTeam() {
  return await client.fetch(`*[_type == "teamMember"]{_id, name, role, linkedin, "imageUrl": photo.asset->url}`);
}

export default async function TeamPage() {
  const team = await getTeam();

  return (
    <section className="p-8 grid gap-6 md:grid-cols-3">
      {team.map((member: any) => (
        <TeamCard key={member._id} {...member} imageUrl={urlFor(member.imageUrl).url()} />
      ))}
    </section>
  );
}
