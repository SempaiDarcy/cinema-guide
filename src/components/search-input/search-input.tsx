import s from './search-input.module.scss'
export const SearchInput = () => {
  return (
    <div className={s.searchBar}>
      <input
        className={s.searchInput}
        placeholder={'Введите название фильма или сериала'}
        type={'text'}
      />
      <button
        className={s.searchButton}
        onClick={() => {
          console.log('d')
        }}
      >
        Search
      </button>
    </div>
  )
}
