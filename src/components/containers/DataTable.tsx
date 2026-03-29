import type { ReactNode } from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (value: unknown, row: T) => ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  className?: string;
}

export function DataTable<T>({
  columns,
  data,
  keyField,
  striped = true,
  hoverable = true,
  compact = false,
  className = ""
}: DataTableProps<T>) {
  const classes = [
    "data-table",
    striped && "data-table--striped",
    hoverable && "data-table--hoverable",
    compact && "data-table--compact",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const getCellValue = (row: T, column: Column<T>): ReactNode => {
    const value = row[column.key as keyof T];
    if (column.render) {
      return column.render(value, row);
    }
    return value as ReactNode;
  };

  return (
    <div className="data-table-wrapper">
      <table className={classes}>
        <thead className="data-table__head">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="data-table__th"
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="data-table__body">
          {data.map((row) => (
            <tr key={String(row[keyField])} className="data-table__row">
              {columns.map((column) => (
                <td key={String(column.key)} className="data-table__td">
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
