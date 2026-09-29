import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

interface TechnicalTableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  className?: string;
}

export function TechnicalTable<T extends Record<string, any>>({
  columns,
  data,
  caption,
  className,
}: TechnicalTableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto border border-industrial-200 bg-white", className)}>
      <table className="w-full text-left border-collapse text-sm">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead>
          <tr className="bg-industrial-100/75 border-b border-industrial-200">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  "px-4 py-3 text-xs font-mono font-bold tracking-wider text-industrial-800 uppercase",
                  col.align === "right"
                    ? "text-right"
                    : col.align === "center"
                    ? "text-center"
                    : "text-left",
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-industrial-200">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white hover:bg-industrial-50/60" : "bg-industrial-50/30 hover:bg-industrial-50"}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cn(
                    "px-4 py-3 text-industrial-800 font-sans",
                    col.align === "right"
                      ? "text-right"
                      : col.align === "center"
                      ? "text-center"
                      : "text-left",
                    col.className
                  )}
                >
                  {col.render ? col.render(row) : (row[col.key] ?? "—")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
