"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiTypes } from "@/types/ai";
import { useTranslations } from "next-intl";
import AddCategory from "./addCategory";

const data: AiTypes.AiCategory[] = [
  {
    category_id: 1,
    category_name: "2",
    submitter: "22",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const columns: () => ColumnDef<AiTypes.AiCategory>[] = () => {
  const t = useTranslations("Category");
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "category_id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("category_id")}</div>
      ),
    },
    {
      accessorKey: "category_name",
      header: t("name"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("category_name")}</div>
      ),
    },
    {
      accessorKey: "submitter",
      header: t("submitter"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("submitter")}</div>
      ),
    },
    {
      accessorKey: "created_at",
      header: t("created_at"),
      cell: ({ row }) => (
        <div>{row.getValue<Date>("created_at").toLocaleDateString()}</div>
      ),
    },
    {
      accessorKey: "updated_at",
      header: t("updated_at"),
      cell: ({ row }) => (
        <div>{row.getValue<Date>("updated_at").toLocaleDateString()}</div>
      ),
    },
    {
      id: "op",
      header: t("op"),
      cell: ({ row }) => (
        <div className="flex items-center space-x-2">
          <AddCategory id={row.getValue("category_id")}>
            <Edit size={14} className="text-primary-100 cursor-pointer"></Edit>
          </AddCategory>
          <Trash size={14} className="text-red-400 cursor-pointer"></Trash>
        </div>
      ),
    },
  ];
};
export default function DataTableDemo() {
  const t = useTranslations("Category");
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns: columns(),
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <Input
            placeholder="Filter name..."
            value={
              (table.getColumn("category_name")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("category_name")
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />

          <Input
            placeholder="Filter submmitter..."
            value={
              (table.getColumn("submitter")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("submitter")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>

        <AddCategory>
          <Button variant="outline" size="sm">
            {t("addCategory")}
          </Button>
        </AddCategory>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
