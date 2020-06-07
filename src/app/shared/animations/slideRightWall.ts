import {animate, keyframes, style, transition, trigger} from "@angular/animations";

export const slideRightAnimation =
  trigger('slideWall2', [
  transition('* => *', [
    style({ transform: "translate3d(0, 0, 0, 0)", zIndex: "0" , offsetDistance: '0%' }),
    animate("1500ms cubic-bezier(0.285, 0.860, 0.790, 0.130)", keyframes([
      style({ transform: "translate3d(102%, 0, 0)", zIndex: "9999" , offsetDistance: '0%'}),
      style({ transform: "translate3d(0, 0, 0)", zIndex: "9999" , offsetDistance: '44%' }),
      style({ transform: "translate3d(0, 0, 0)", zIndex: "9999" , offsetDistance: '56%' }),
      style({ transform: "translate3d(102%, 0, 0)", zIndex: "9999" , offsetDistance: '100%' }),
    ]))
  ])
]);
