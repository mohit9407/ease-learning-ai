'use client'
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const [subject, setSubject] = useState('');
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (subject) {
        if (subject === 'all') {
          router.push(`/companions`, { scroll: false });
        } else {
          router.push(`/companions?subject=${subject}`, { scroll: false });
        }
      } else {
        if (pathName === '/companions') {
          const newUrl = '/companions'
          router.push(`/companions`, { scroll: false });
        }
      }
    }, 500);
  }, [searchParams, router, subject, pathName])

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">
          All subjects
        </SelectItem>
        {subjects.map((sub, index) => (
          <SelectItem
            key={`subjects-filters-${sub}-${index}`}
            value={sub}
            className="capitalize"
          >
            {sub}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter