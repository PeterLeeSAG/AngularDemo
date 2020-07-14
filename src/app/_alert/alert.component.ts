import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from './alert.model';
import { AlertService } from './alert.service';
import { style } from '@angular/animations';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
  })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() id = 'default-alert';
    @Input() fade = true;
    @Input() showSeconds : number = 10;
    @Input() topPadding : number = 65;
    
    isDebug: boolean = false;
    alerts: Alert[] = [];
    alertSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private alertService: AlertService) { }

    ngOnInit() {
        style["top"] = this.topPadding; // set top value for the css

        //Listen to the scroll event if needed
        window.addEventListener('scroll', this.scroll, true); //third parameter

        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
                // clear alerts when an empty alert is received
                if (!alert.message) {
                    // filter out alerts without 'keepAfterRouteChange' flag
                    this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

                    // remove 'keepAfterRouteChange' flag on the rest
                    this.alerts.forEach(x => delete x.keepAfterRouteChange);
                    return;
                }

                // add alert to array
                this.alerts.push(alert);

                // auto close alert if required
                if (alert.autoClose) {
                    setTimeout(() => this.removeAlert(alert), this.showSeconds * 1000);
                }
           });

        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.alertService.clear(this.id);
            }
        });
    }

    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
        window.removeEventListener('scroll', this.scroll, true);
    }

    removeAlert(alert: Alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) return;

        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;

            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        } else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }

    cssClass(alert: Alert) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];
                
        const alertTypeClass = {
            [AlertType.Success]: 'alert alert-success',
            [AlertType.Error]: 'alert alert-danger',
            [AlertType.Info]: 'alert alert-info',
            [AlertType.Warning]: 'alert alert-warning'
        }

        classes.push(alertTypeClass[alert.type]);

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }

    //For controlling the floating effect to the alert messaging
    scroll = (event): void => {
        if (this.isDebug)
        {
            var alertOptions = {
                autoClose: true,
                keepAfterRouteChange: true,
                showSeconds: 10,
                topPadding: 65
              };
    
            var scrollTop = event.srcElement.scrollTop;
            var scrollMsg = "ScrollTop value: " + event.srcElement.scrollTop.toString();
            console.log(scrollMsg);
            this.alertService.info(scrollMsg, alertOptions);
        }
        
        if (this.alerts != undefined && this.alerts.length >= 1)
        {
            var isPositionFixed = false;
            if (style["position"] == 'fixed')
            {
                isPositionFixed = true;
            }        
    
            if (!isPositionFixed && scrollTop > 200)
            {
                style["position"] = 'fixed';  
                style["top"] = this.topPadding;          
            }
            
            if (isPositionFixed && scrollTop < 200)
            {
                style["position"] = 'static';
                style["top"] = this.topPadding;
            }
        }
    };
}