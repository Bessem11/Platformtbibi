import { Component, OnInit } from '@angular/core';
declare  var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() { let ScrollPosStyler = (function(document, window) {
    'use strict';

    /* ====================
       * private variables
       * ==================== */
    let scrollPosY = 0;
    let busy = false;
    let onTop = true;
    let  scrollOffsetY = 1;
    let   elements = document.getElementsByClassName("sps");


    /* ====================
       * private funcion to check scroll position
       * ==================== */
    function onScroll() {
      // ensure that events don't stack
      if (!busy) {
        // get current scroll position from window
        scrollPosY = window.pageYOffset;

        // if we were above, and are now below scroll position...
        if (onTop && scrollPosY > scrollOffsetY) {
          // suspend accepting scroll events
          busy = true;

          // remember that we are below scroll position
          onTop = false;

          // asynchronuously add style / class to elements
          window.requestAnimationFrame(belowScrollPos);

          // if we were below, and are now above scroll position...
        } else if (!onTop && scrollPosY <= scrollOffsetY) {
          // suspend accepting scroll events
          busy = true;

          // remember that we are above scroll position
          onTop = true;

          // asynchronuously add style / class to elements
          window.requestAnimationFrame(aboveScrollPos);
        }
      }
    }


    /* ====================
     * private function to style elements when above scroll position
     * ==================== */
    function aboveScrollPos() {
      // iterate over elements
      // for (var elem of elements) {
      for (let i = 0; elements[i]; ++i) { // chrome workaround
        // add style / class to element
        elements[i].classList.add('sps--abv');
        elements[i].classList.remove('sps--blw');
      }

      // resume accepting scroll events
      busy = false;
    }

    /* ====================
     * private function to style elements when below scroll position
     * ==================== */
    function belowScrollPos() {
      // iterate over elements
      // for (var elem of elements) {
      for (var i = 0; elements[i]; ++i) { // chrome workaround
        // add style / class to element
        elements[i].classList.add('sps--blw');
        elements[i].classList.remove('sps--abv');
      }

      // resume accepting scroll events
      busy = false;
    }


    /* ====================
     * public function to initially style elements based on scroll position
     * ==================== */
    let pub = {
      init() {
        // suspend accepting scroll events
        busy = true;

        // get current scroll position from window
        scrollPosY = window.pageYOffset;

        // if we are below scroll position...
        if (scrollPosY > scrollOffsetY) {
          // remember that we are below scroll position
          onTop = false;

          // asynchronuously add style / class to elements
          window.requestAnimationFrame(belowScrollPos);

          // if we are above scroll position...
        } else { // (scrollPosY <= scrollOffsetY)
          // remember that we are above scroll position
          onTop = true;

          // asynchronuously add style / class to elements
          window.requestAnimationFrame(aboveScrollPos);
        }
      }
    };


    /* ====================
     * main initialization
     * ==================== */
    // add initial style / class to elements when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      // defer initialization to allow browser to restore scroll position
      window.setTimeout(pub.init, 1);
    });

    // register for window scroll events
    window.addEventListener('scroll', onScroll);


    return pub;
  })(document, window);
  }

}
