import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import AddStudentModal from "./AddStudentModal";

const prisma = new PrismaClient();

export default async function Home() {
  const students = await prisma.student.findMany(); // ORM

  return (
    <main>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map(({ id, name, age }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{name}</TableCell>
              <TableCell>{age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddStudentModal />
    </main>
  );
}
