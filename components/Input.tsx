import { useState } from 'react';
import { MdAddLink } from 'react-icons/md';
import { BsFillTagFill, BsPlus } from 'react-icons/bs';

type Props = {
  taskId: string;
  title: string;
  placeholder: string;
  callbackFn?: (id: string) => void;
  callbackFnStep?: (id: string, payload: string) => void;
  type?: 'task' | 'tags' | 'link' | 'step';
};

const Input = ({
  callbackFn,
  placeholder,
  title,
  type,
  taskId,
  callbackFnStep,
}: Props) => {
  const [value, setValue] = useState('');
  let Icon;
  switch (type) {
    case 'link':
      Icon = <MdAddLink size={23} />;
      break;

    case 'tags':
      Icon = <BsFillTagFill size={22} />;
      break;

    default:
      Icon = <BsPlus size={28} />;
      break;
  }

  return (
    <div className='relative'>
      <input
        type='text'
        className='w-full rounded-xl border px-5 py-2 pr-16 outline-none transition dark:border-none dark:text-white'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            if (type !== 'step' && callbackFn) {
              callbackFn(value);
              setValue('');
            } else if (type === 'step' && callbackFnStep) {
              callbackFnStep(taskId, value);
              setValue('');
            }
          }
        }}
        placeholder={placeholder}
      />
      <button
        className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-white'
        onClick={() => {
          if (type !== 'step' && callbackFn) {
            callbackFn(value);
          } else if (type === 'step' && callbackFnStep) {
            callbackFnStep(taskId, value);
          }
        }}
        title={title}
      >
        {Icon}
      </button>
    </div>
  );
};

export default Input;
