import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline"> Popular Companions </h1>
      <section className="home-section">
        {recentSessions.slice(0, 3).map(rec =>
          <CompanionCard key={`home-page-top-${rec.id}-${rec.name}`} {...rec} />
        )}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently completeed session"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page