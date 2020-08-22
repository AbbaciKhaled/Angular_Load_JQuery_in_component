import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignService {


  scripts = [
    {
      name: "migrate",
      src: "../../../assets/js/jquery-migrate-3.0.0.min.js"
    },
    {
      name: "popper",
      src: "../../../assets/js/popper.min.js"
    },
    {
      name: "bootstrap",
      src: "../../../assets/js/bootstrap.min.js"
    },
    {
      name: "mmenu",
      src: "../../../assets/js/jquery.mmenu.all.js"
    },
    {
      name: "responsive-menu",
      src: "../../../assets/js/ace-responsive-menu.js"
    },
    {
      name: "bootstrap-select",
      src: "../../../assets/js/bootstrap-select.min.js"
    },
    {
      name: "isotop",
      src: "../../../assets/js/isotop.js"
    },
    {
      name: "snackbar",
      src: "../../../assets/js/snackbar.min.js"
    },
    {
      name: "simplebar",
      src: "../../../assets/js/simplebar.js"
    },
    {
      name: "parallax",
      src: "../../../assets/js/parallax.js"
    },
    {
      name: "scrollto",
      src: "../../../assets/js/scrollto.js"
    },
    {
      name: "scrolltofixed",
      src: "../../../assets/js/jquery-scrolltofixed-min.js"
    },
    {
      name: "counterup",
      src: "../../../assets/js/jquery.counterup.js"
    },
    {
      name: "wow",
      src: "../../../assets/js/wow.min.js"
    },
    {
      name: "slider",
      src: "../../../assets/js/slider.js"
    },
    {
      name: "timepicker",
      src: "../../../assets/js/timepicker.js"
    },
    {
      name: "progressbar",
      src: "../../../assets/js/progressbar.js"
    },
    {
      name: "script",
      src: "../../../assets/js/script.js"
    },
  ]

  getScripts() {
    return this.scripts;
  }

  constructor(private $http: HttpClient) { }

  getDesktopNavBar(): Observable<string> {
    return this.$http.get('../assets/desktopNavBar.html', { responseType: 'text' });
  }

}
