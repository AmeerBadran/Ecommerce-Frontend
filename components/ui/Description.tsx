type DescriptionProps = {
  content: {
    paragraphs: string[];
    bulletPoints: string[];
  };
};

export default function Description({ content }: DescriptionProps) {
  const { paragraphs, bulletPoints } = content;

  return (
    <div className="space-y-4 text-gray-700 leading-relaxed my-17">
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}

      <ul className="list-disc list-inside space-y-1 md:ml-6">
        {bulletPoints.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
