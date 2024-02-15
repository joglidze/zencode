import { Component, Input, input } from '@angular/core';
import { CreditCard } from '../../core/interfaces/creditCard';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss',
})
export class CreditCardComponent {
  @Input() creditCard?: CreditCard;
}
