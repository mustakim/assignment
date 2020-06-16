import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../../@vex/services/navigation.service';
import { LayoutService } from '../../@vex/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../../@vex/services/splash-screen.service';
import { Style, StyleService } from '../../@vex/services/style.service';
import { ConfigName } from '../../@vex/interfaces/config-name.model';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssignment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icGraphic from '@iconify/icons-ic/graphic-eq';
import icPhone from '@iconify/icons-ic/phone-in-talk';
import icMap from '@iconify/icons-ic/twotone-map';
import icdata_usage from '@iconify/icons-ic/twotone-data-usage';
import icmoney from '@iconify/icons-ic/twotone-money';
import icsms from '@iconify/icons-ic/twotone-sms';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vex';

  constructor(
    private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.route.queryParamMap
      .pipe(
        filter(
          (queryParamMap) =>
            queryParamMap.has('rtl') &&
            coerceBooleanProperty(queryParamMap.get('rtl'))
        )
      )
      .subscribe((queryParamMap) => {
        this.document.body.dir = 'rtl';
        this.configService.updateConfig({
          rtl: true,
        });
      });

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has('layout')))
      .subscribe((queryParamMap) =>
        this.configService.setConfig(queryParamMap.get('layout') as ConfigName)
      );

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has('style')))
      .subscribe((queryParamMap) =>
        this.styleService.setStyle(queryParamMap.get('style') as Style)
      );

    this.navigationService.items = [
      {
        type: 'link',
        label: 'Dashboard',
        route: 'dashboards',
        icon: icLayers,
      },
      {
        type: 'link',
        label: 'Employee',
        icon: icAssignment,
        route: 'employee',
      },
      {
        type: 'link',
        label: 'Leave',
        icon: icPhone,
        route: 'employee-leave',
      },
    ];
  }
}
