import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CreditCard } from './core/interfaces/creditCard';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CreditCardComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './components/credit-card/credit-card.component.scss',
  ],
})
export class AppComponent {
  title = 'zencode';

  creditCards: CreditCard[] = [
    {
      flag: 'gerogianflag',
      cardName: 'My Mastercard in GEL',
      cardLogo: 'masterCard',
      balance: '₾ 2,562.52',
      cardnumber: '**** 2124',
      expirationDate: '06/25',
    },
    {
      flag: 'europeanFlag',
      cardName: 'My VISA in EUR',
      cardLogo: 'visaLogo',
      balance: '€ 562.52',
      cardnumber: '**** 2124',
      expirationDate: '06/25',
    },
  ];

  otherCards: CreditCard[] = [
    {
      flag: 'tbc',
      cardName: 'My TBC Card',
      cardLogo: 'masterCard',
      bankInfo: 'TBGB12341213412345678',
      cardnumber: '**** 2124',
      expirationDate: '06/25',
    },
    {
      flag: 'bog',
      cardName: 'My BOG Card',
      cardLogo: 'visaLogo',
      bankInfo: 'TBGB12341213412345678',
      cardnumber: '**** 2124',
      expirationDate: '06/25',
    },
    {
      flag: 'tbc',
      cardName: 'My TBC Card',
      mainBalance: '55.60 EUR',
      bankInfo: 'TBGB12341213412345678',
      expirationDate: '₾ 136.22',
    },
  ];

  translateY = 50;
  fontSize = 38;
  previousScrollPosition = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset || 0;

    this.updateStylesBasedOnScroll(scrollPosition);
  }

  private updateStylesBasedOnScroll(scrollPosition: number) {
    const scrollThreshold = 10;
    const minFontSize = 18;
    const maxFontSize = 32;
    const minTranslateY = -50;
    const maxTranslateY = 50;
    const growthThreshold = 106;

    console.log(scrollPosition);
    if (scrollPosition <= scrollThreshold) {
      this.translateY = maxTranslateY;
      this.fontSize = maxFontSize;
    } else if (scrollPosition > this.previousScrollPosition) {
      this.translateY = Math.max(minTranslateY, this.translateY - 2);
      this.fontSize = Math.max(minFontSize, this.fontSize - 2);
    } else if (scrollPosition < growthThreshold) {
      this.translateY = Math.min(maxTranslateY, this.translateY + 1);
      this.fontSize = Math.min(maxFontSize, this.fontSize + 1);
    }

    this.previousScrollPosition = scrollPosition;
  }
}
