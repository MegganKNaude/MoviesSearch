import {
  transition,
  style,
  animate,
  query,
  stagger,
  trigger, state
} from '@angular/animations';

export const FADEIN = trigger('listAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(100, [animate('0.5s', style({ opacity: 1 }))])
      ],
      { optional: true }
    )
  ])
]);

export const FLIPCARD =  trigger('flipState', [
  state(
    'active',
    style({
      transform: 'rotateX(179deg)',
    })
  ),
  state(
    'inactive',
    style({
      transform: 'rotateX(0)',
    })
  ),
  transition('active => inactive', animate('500ms ease-out')),
  transition('inactive => active', animate('500ms ease-in')),
]);
