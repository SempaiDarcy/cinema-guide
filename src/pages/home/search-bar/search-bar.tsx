import { SearchInput } from '@/components/search-input/search-input'

import s from './search-bar.module.scss'
export const SearchBar = () => {
  return (
    <div className={s.searchBarContainer}>
      <SearchInput />
    </div>
  )
}
