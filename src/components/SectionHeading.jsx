import Reveal from './Reveal'

/**
 * Consistent section header: purple eyebrow + serif title + optional lead.
 *
 * @param {object} props
 * @param {string} props.eyebrow
 * @param {React.ReactNode} props.title
 * @param {React.ReactNode} [props.lead]
 * @param {'left'|'center'} [props.align='center']
 * @param {'light'|'dark'} [props.tone='light']
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'light',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  const titleColor = tone === 'dark' ? 'text-ivory' : 'text-charcoal'
  const leadColor = tone === 'dark' ? 'text-ivory/70' : 'text-mocha'
  const eyebrowColor = tone === 'dark' ? 'text-lavender' : 'text-plum'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>}
      <h2 className={`text-4xl sm:text-5xl ${titleColor}`}>{title}</h2>
      {lead && <p className={`text-lg leading-relaxed ${leadColor}`}>{lead}</p>}
    </Reveal>
  )
}
