type ShippingAndReturnContent = {
  returns: {
    title: string;
    paragraphs: string[];
  };
  shipping: {
    title: string;
    paragraphs: string[];
  };
};

type Props = {
  content: ShippingAndReturnContent;
};

export default function ShippingAndReturn({ content }: Props) {
  return (
    <div className="space-y-10 text-gray-700 leading-relaxed my-17">
      <div>
        <h2 className="text-lg font-semibold mb-2">{content.returns.title}</h2>
        <div className="space-y-3">
          {content.returns.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">{content.shipping.title}</h2>
        <div className="space-y-3">
          {content.shipping.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
