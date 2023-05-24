import useTasks from '@/hooks/useTasks'
import { MdLinkOff } from 'react-icons/md'

type Props = {
  link: string
  id: string
}

const LinkShow = ({ link, id }: Props) => {
  const { removeLink } = useTasks()

  const unwantedParts = /((http:\/\/)|(https:\/\/)|(www.))/gim
  const cleanLink = link.replace(unwantedParts, '').replace(/\/*$/gm, '')
  const boldPartOfLink = /^[0-9a-z\.\-]*/gim.exec(cleanLink)
  const extraPartOfLink = cleanLink.replace(/^[0-9a-z\.\-]*/gim, '')

  return (
    <div className="flex items-center gap-3 pl-6">
      <div className="flex items-start gap-4">
        <div onClick={() => removeLink(id)} className="translate-y-1">
          <MdLinkOff size={20} />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-light text-black/70 dark:text-gray-200"
        >
          <span className="font-medium text-black dark:text-white">
            {boldPartOfLink}
          </span>
          {extraPartOfLink}
        </a>
      </div>
    </div>
  )
}

export default LinkShow
