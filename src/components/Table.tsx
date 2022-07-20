import Link from 'next/link';

interface Props {
  titles: titlesType;
  data: dataType;
}

export default function Table({ titles, data }: Props) {
  if (!titles) return <p>Loading...</p>;

  return (
    <table className="min-w-full divide-y divide-gray-200 block lg:table">
      <thead className="bg-gray-50 block lg:table-header-group">
        <tr className="block lg:table-row">
          {titles.map((title, index) => (
            <th
              key={`title-${index}`}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider block lg:table-cell"
            >
              {title}
            </th>
          ))}
          <th scope="col" className="relative px-6 py-3 block lg:table-cell">
            <span className="sr-only">Edit</span>
          </th>
          <th scope="col" className="relative px-6 py-3 block lg:table-cell">
            <span className="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody className="lg:bg-white divide-y divide-gray-200 block lg:table-row-group">
        {data.map((item, index) => (
          <tr key={`Sale-item-${index}`} className="block lg:table-row">
            {titles.map((title, index) => (
              <td
                data-title={title.toUpperCase()}
                key={`row-title-${index}`}
                className="lg:px-6 lg:py-4 lg:whitespace-nowrap
                  block lg:table-cell"
              >
                <p className="text-sm font-medium text-gray-900">{item[title] as string}</p>
              </td>
            ))}
            <td className="lg:px-6 lg:py-4 lg:whitespace-nowrap text-right text-sm font-medium block lg:table-cell">
              <Link href={`/dashboard/edit/${item.id}`} passHref>
                <a href={`/dashboard/edit/${item.id}`} className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </Link>
            </td>
            <td className="lg:px-6 lg:py-4 lg:whitespace-nowrap text-right text-sm font-medium block lg:table-cell">
              X
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
