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
          <CompanionCard {...rec} />
        )}
      </section>
      <section className="home-section">
        <CompanionList />
        <CTA />
      </section>
    </main>
  )
}

export default Page