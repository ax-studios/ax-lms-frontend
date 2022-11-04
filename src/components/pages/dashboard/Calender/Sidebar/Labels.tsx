import React, { FC, useContext } from 'react';
import CalenderContext from '../../../../../lib/context/calender/CalenderContext';

const Labels: FC = () => {
  const { labels, updateLabel } = useContext(CalenderContext);
  return (
    <React.Fragment>
      <p className="mt-10 font-bold">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="mt-3 block items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 cursor-pointer rounded focus:ring-0`}
          />
          <span className="ml-2 capitalize">{lbl}</span>
        </label>
      ))}
    </React.Fragment>
  );
};
export default Labels;
