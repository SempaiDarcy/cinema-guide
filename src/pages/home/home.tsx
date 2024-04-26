import { useEffect, useState } from 'react'

import { options } from '@/config'
import { SearchBar } from '@/pages/home/search-bar'
// eslint-disable-next-line import/no-named-as-default
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import s from './home.module.scss'
export const Home = () => {
  //@ts-ignore
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <div className={s.home}>
      <Particles id={s.particles} options={options} />
      <div className={s.searchBar}>
        <SearchBar />
      </div>
    </div>
  )
}
