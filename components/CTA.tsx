import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">
        CTA
      </div>
      <h2 className="text-3xl font-bold">
        Build a personalize Learning course
      </h2>
      <p className="">
        Pick Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae assumenda accusamus sunt mollitia in fuga.
      </p>
      <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>BUild new companins</p>
        </Link>
      </button>
    </section>
  )
}

export default CTA