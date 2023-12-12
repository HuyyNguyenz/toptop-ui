import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Search = () => {
  return (
    <div className='relative group flex items-center justify-start py-2 px-4 rounded-full border-default bg-bg-input-color hover:border-[#bcbdc0]'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        className='bg-bg-input-color outline-none w-[25rem] pr-8'
      />
      <button className='absolute right-0 py-2 px-4 text-[#AAAAAA] group-hover:text-[#161823] group-hover:bg-[#e4e4e6] rounded-tr-full rounded-br-full border-input'>
        <FontAwesomeIcon icon={faSearch} className='' />
      </button>
    </div>
  )
}

export default Search
