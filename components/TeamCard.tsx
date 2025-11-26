interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
}

export default function TeamCard({ name, role, imageUrl, linkedin }: TeamCardProps) {
  return (
    <div className="border rounded-xl shadow-lg p-4 text-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          className="text-blue-600 text-sm hover:underline"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}
