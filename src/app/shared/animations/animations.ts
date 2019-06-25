import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
    })
  ),
  state('hidden',
  style({
    'margin-left': '0px'
  })
),
  transition('close => open', animate('650ms ease-in')),
  transition('open => close', animate('650ms ease-in')),
  transition('hidden => open', animate('650ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
      'margin-left': '62px'
    })
  ),
  state('open',
    style({
      'margin-left': '200px'
    })
  ),
  state('hidden',
  style({
    'margin-left': '0px'
  })
),
  transition('close => open', animate('650ms ease-in')),
  transition('open => close', animate('650ms ease-in')),  
  transition('open => hidden', animate('0ms ease-in')),  
  transition('close => hidden', animate('0ms ease-in')),  
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('5750ms ease-in')),
  transition('open => close', animate('50ms ease-out')),
  transition('open => hidden', animate('0ms ease-in')),  
  transition('close => hidden', animate('0ms ease-in')),  
]);