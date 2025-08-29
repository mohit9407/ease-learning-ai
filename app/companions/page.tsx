import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : ''
  const topic = filters.topic ? filters.topic : ''

  const companions = await getAllCompanions({ topic, subject })

  console.log('PAR<MSS', filters, companions)
  // http://localhost:3000/companions?topic=fasdf&subject=asd


  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companions Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map(comp => (
          <CompanionCard
            key={`companions-grid-list-${comp.id}`}
            {...comp}
            color={getSubjectColor(comp.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary