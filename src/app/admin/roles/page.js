import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export default function RolesPage() {
  return (
    <div>
      <input
        type="search"
        placeholder="Cari Hak Akses"
        className="w-full p-3 border rounded-lg mb-7 text-base"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nomor</TableHead>
            <TableHead className="text-center">Hak Akses</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="text-center">Employee</TableCell>
            <TableCell className="flex justify-end gap-4 ">
              <IconPencil /> <IconTrash />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell className="text-center">Admin</TableCell>
            <TableCell className="flex justify-end gap-4 ">
              <IconPencil /> <IconTrash />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
