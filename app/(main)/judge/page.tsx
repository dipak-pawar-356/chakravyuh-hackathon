import { client, urlFor } from "@/lib/sanity";
import JudgeCard from "@/components/JudgeCard";

async function getJudges() {
  return await client.fetch(`*[_type == "judge"]{_id, name, designation, organization, linkedin, "imageUrl": photo.asset->url}`);
}

export default async function JudgePage() {
  const judges = await getJudges();

  return (
    <section className="p-8 grid gap-6 md:grid-cols-3">
      {judges.map((judge: any) => (
        <JudgeCard key={judge._id} {...judge} imageUrl={urlFor(judge.imageUrl).url()} />
      ))}
    </section>
  );
}
