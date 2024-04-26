import { ISourceOptions } from '@tsparticles/engine'

export const options: ISourceOptions = {
  detectRetina: true,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 100,
      enable: true,
      opacity: 0.4,
    },
    move: {
      enable: true,
      speed: 2,
    },
    number: {
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 3,
    },
  },
}
