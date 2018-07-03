import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any = ["users", "22222", "33333", "44444", "55555", "66666", "77777", "88888", "99999"]
  activeId = ""
  users: any = []
  usersView: any;
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
  }

  active(id) {
    this.activeId = id
    this.getUsers();
  }
  getUsers() {
    this.api.allUsers().subscribe(res => {
      this.users = res
    })
  }
  delete(id) {
    this.api.deleteUser({ "id": id }).subscribe(res => {
      console.log(res);
      this.getUsers();
    }, err => {
      console.log(err);
    })
  }
  getusebyid(data) {
    this.usersView = data;
  }

}
