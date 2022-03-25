import { useState } from 'react';

interface ItemProps {
  item: {
    question: string;
    answers: string[];
  };
}

const Accordion = ({ item }: ItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { question, answers } = item;
  return (
    <div className='accordion'>
      <div className='accordion__header'>
        <h3>{question}</h3>
        <svg
          id='thin-x'
          viewBox='0 0 26 26'
          className={open ? 'accordion__icon' : 'accordion__icon open'}
          focusable='true'
          onClick={() => setOpen(!open)}
        >
          <path d='M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z'></path>
        </svg>
      </div>

      <div className={open ? 'accordion__info' : 'accordion__info close'}>
        {answers.map((answer, index) => {
          return <p key={index}>{answer}</p>;
        })}
      </div>
    </div>
  );
};

export default Accordion;
