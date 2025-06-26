export type AdditionalProps = {
  data: {
    label: string;
    value: string;
  }[];
};

export default function Additional({ data }: AdditionalProps) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm max-w-[900px] mx-auto my-17">
      <table className="w-full text-left text-sm">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-3 font-medium text-gray-700 w-1/3">
                {item.label}
              </td>
              <td className="px-4 py-3 text-gray-600">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
