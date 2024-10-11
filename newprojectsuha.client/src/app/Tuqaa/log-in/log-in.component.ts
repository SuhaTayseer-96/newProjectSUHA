import { Component } from '@angular/core';
import { UrlService } from '../../URL-Service/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  ngOnInit() { }
  constructor(private _ser: UrlService, private _router: Router) { }

  loginNewUser(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.loginUser(form).subscribe((newData) => {

      this._ser['email'].next(newData.email);
      if (newData.email == 'admin@gmail.com') {
        this._router.navigate(['/dashboard'])

      } else {
        this._router.navigate(['/NutritionPageOne'])

      }
      alert('userLogin successfully')

    })
  }
}