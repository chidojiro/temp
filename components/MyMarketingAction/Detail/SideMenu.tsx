import classNames from 'classnames';
import { useState } from 'react';

type Props = {
  menu?: any[];
};

export const SideMenu = ({ menu = [] }: Props) => {
  const [currMenu, setCurrMenu] = useState(menu[0].id);

  const onChangeMenu = (item: any) => {
    setCurrMenu(item.id);
  };

  return (
    <div className='w-[200px] mr-7'>
      {menu.map(item => (
        <div
          key={item.id}
          onClick={() => onChangeMenu(item)}
          className={classNames('text-gray-dark w-full cursor-pointer text-medium pl-[18px] mb-2.5 py-[6px]', {
            'bg-gray-light border border-dark-gray rounded-full': currMenu === item.id,
          })}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
