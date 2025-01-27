import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
declare var $: any; // JQuery

//sidebar toggler
@Directive({
  selector: '[sidebarToggler]'
})
export class sidebarToggler {
  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('.app').classList.toggle('is-collapsed');
  }
}

//sidebar dropdown

@Directive({
  selector: '[sideBar]'
})
export class sidebarDropdown implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): any {
    $('.side-nav .side-nav-menu li a').click(function (event) {
      if ($(this).parent().hasClass('open')) {

        $(this).parent().children('.dropdown-menu').slideUp(200, function () {
          $(this).parent().removeClass('open');
        });

      } else {
        $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
        $(this).parent().parent().children('li.open').children('a').removeClass('open');
        $(this).parent().parent().children('li.open').removeClass('open');
        $(this).parent().children('.dropdown-menu').slideDown(200, function () {
          $(this).parent().addClass('open');
        });
      }
    });
  }
}

export const Sidebar_Directives = [
  sidebarDropdown,
  sidebarToggler
];
