import useTasks from '@/hooks/useTasks';
import { MdLinkOff } from 'react-icons/md';

type Props = {
  link: string;
  id: string;
};

const LinkShow = ({ link, id }: Props) => {
  const { removeLink } = useTasks();

  const unwantedParts = /((http:\/\/)|(https:\/\/)|(www.))/gim;
  const cleanLink = link.replace(unwantedParts, '').replace(/\/*$/gm, '');
  const boldPartOfLink = /^[0-9a-z\.\-]*/gim.exec(cleanLink);
  const extraPartOfLink = cleanLink.replace(/^[0-9a-z\.\-]*/gim, '');

  return (
    <div className='flex items-center gap-3'>
      <div onClick={() => removeLink(id)}>
        <MdLinkOff size={20} />
      </div>
      <div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex'
        >
          <span className='font-medium text-black dark:text-white'>
            {boldPartOfLink}
          </span>
          <span className='font-light text-black/70 dark:text-gray-200'>
            {extraPartOfLink}
          </span>
        </a>
      </div>
    </div>
  );
};

export default LinkShow;
