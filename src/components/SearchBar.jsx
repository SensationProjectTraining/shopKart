import { IoMdSearch } from "react-icons/io";
const SearchBar = () => {
  function SearchClick(){
    alert("SearchBox is Active")
  }
  return (
    <div className='flex justify-center'>
      <input className='w-96 text-1xl border rounded-full text-black border-r-8 red px-2 h-10' type="search" placeholder='Search your Required' />
      <h1 className="text-4xl" onClick={SearchClick}>{<IoMdSearch/>}</h1>
    </div>
  )
}

export default SearchBar
