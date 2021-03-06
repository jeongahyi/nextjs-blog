import markdownStyles from '../styles/markdown-style.module.css'

export default function PostBody({ content }: {content: string}): JSX.Element | null {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  )
}