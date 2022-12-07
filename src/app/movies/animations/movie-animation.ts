import {
  transition,
  style,
  animate,
  query,
  stagger,
  trigger
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
