import cinemaGuideIcon from '@/assets/icon-movie.png'

import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.cinemaGuide}>
        <img src={cinemaGuideIcon} style={{ height: '3rem', width: '3rem' }} />
        <h3>Cinema Guide</h3>
      </div>
      <ul className={s.menuItems}>
        <li className={s.menuItem}>Фильмы</li>
        <li className={s.menuItem}>Телешоу</li>
      </ul>
    </div>
  )
}
