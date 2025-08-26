import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CompanionListProps {
  title: string;
  companions: Companion[];
  classNames: string;
}

const CompanionList = (props: CompanionListProps) => {
  const { classNames, title, companions } = props;
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessions</TableHead>
            <TableHead className="text-lg">Subjet</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map(comp => (
            <TableRow key={`companion-list-${comp.id}-${comp.name}`}>
              <TableCell className="font-medium">
                <Link href={`/companion/${comp.id}`}></Link>
                <div className="flex items-center gap-2">
                  <div
                    className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                    style={{ backgroundColor: getSubjectColor(comp.subject) }}
                  >
                    <Image
                      src={`/icons/${comp.subject}.svg`}
                      alt={comp.subject}
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-2xl">
                      {comp.name}
                    </p>
                    <p className="text-lg">{comp.topic}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {comp.subject}
                </div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{ backgroundColor: getSubjectColor(comp.subject) }}>
                  <Image src={`/icons/${comp.subject}.svg`} alt="" width={18} height={18} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-2xl">
                    {comp.duration} {' '}
                    <span className="max-md:hidden">mins</span>
                  </p>
                  <Image src={'/icons/clock.svg'} className="md:hidden" alt="duration" title="mins" width={14} height={14} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList