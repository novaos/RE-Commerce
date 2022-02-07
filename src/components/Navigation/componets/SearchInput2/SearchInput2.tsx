import * as React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './searchInput2.scss';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { useClickAway } from '../../../../utils/hooks';

const SearchInput2: React.FC<{ setIsOpen: (bool: boolean) => void; isOpen: boolean }> = ({ setIsOpen, isOpen }) => {
 const searchRef = useRef(null);
 const [query, setQuery] = useState('');
 const { state } = React.useContext(GlobalContext);

 useClickAway(
  searchRef,
  () => {
   setIsOpen(false);
  },
  isOpen
 );
 const [isOpenSearchSelect, setIsOpenSearchSelect] = useState(false);
 return (
  <div
   ref={searchRef}
   className="flex justify-center items-center -translate-y-1/2 -translate-x-1/2 left-2/4 top-48 z-10 fixed w-10/12 h-36 border-2 border-silver-400 rounded-md shadow-[#50d71e] bg-white animate-[wiggle_1s_ease-in-out_1] origin-[top_left]">
   <input
    className="h-10 w-1/2 px-2 focus:border-silver bg-red-700 backdrop-opacity-10 backdrop-invert bg-white/70"
    type="text"
    onFocus={() => setIsOpenSearchSelect(true)}
    onChange={event => setQuery(event.target.value)}
   />
   {isOpenSearchSelect && (
    <div className="popup max-h-[300px] overflow-auto absolute w-2/4 left-[50%] -translate-x-1/2 border-silver border-2 rounded-md bg-white top-[80%]">
     {state.products
      ?.filter(({ name }) => name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))
      ?.map(({ id, name }) => (
       <Link
        className=" block px-2 py-1 hover:bg-green-200 hover:text-green-800 text-xl"
        key={id}
        onClick={() => {
         setIsOpen(false);
         setQuery('');
        }}
        to={`/product/${id}`}>
        <p key={id} className="item">
         {name}
        </p>
       </Link>
      ))}
    </div>
   )}
  </div>
 );
};

export { SearchInput2 };
