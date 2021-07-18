import { INTRO, INTRO_2 } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col flex items-conter md:justify-between mb-16 md:mb-16">
      <h1 className="text-3xl md:text-6xl tracking-tighter leading-tight pb-4 md:pr-8">
        {INTRO}
      </h1>
      <h2 className="text-4xl md:text-6xl tracking-tighter leading-tight md:pr-8">
        {INTRO_2}
      </h2>
    </section>
  )
}