import { trigger, state, style, transition, animate } from '@angular/animations'

export const toggleProgressBar = trigger('toggleProgressBar', [
  state('visible', style({
    height: '4px',
    opacity: 1
  })),
  state('hidden', style({
    height: 0,
    opacity: 0
  })),
  transition('visible <=> hidden', [
    animate('0.5s')
  ])
])
