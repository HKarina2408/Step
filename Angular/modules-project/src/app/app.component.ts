import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modules-project';
}
