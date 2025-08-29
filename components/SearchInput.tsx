'use client';
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

const SearchInput = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('topic') || '';

  const [serachQuery, setSerachQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (serachQuery) {
        router.push(`/companions?topic=${serachQuery}`, { scroll: false });
      } else {
        if (pathName === '/companions') {
          const newUrl = '/companions'
          router.push(`/companions`, { scroll: false });
        }
      }
    }, 500);
  }, [searchParams, router, serachQuery, pathName])

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />

      <input
        placeholder="Search..."
        className="outline-none"
        value={serachQuery}
        onChange={e => setSerachQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchInput