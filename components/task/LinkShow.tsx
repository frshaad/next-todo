import { MdLinkOff } from 'react-icons/md'

import useTasks from '@/hooks/useTasks'

type Props = {
  link: string
  id: string
}

export default function LinkShow({ link, id }: Props) {
  const { removeLink } = useTasks()

  const unwantedParts = /((http:\/\/)|(https:\/\/)|(www.))/gim
  const cleanLink = link.replace(unwantedParts, '').replace(/\/*$/gm, '')
  const boldPartOfLink = /^[0-9a-z\.\-]*/gim.exec(cleanLink)
  const extraPartOfLink = cleanLink.replace(/^[0-9a-z\.\-]*/gim, '')

  return (
    <div className="flex items-center gap-3 pl-6">
      <div className="flex items-start gap-3">
        <div
          onClick={() => removeLink(id)}
          className="cursor-pointer rounded-full p-1 transition hover:scale-110 hover:bg-red-400 hover:text-white"
        >
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
