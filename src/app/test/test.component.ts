import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TestService]
})
export class TestComponent implements OnInit {
  ip = '';
  constructor(private ipservice: TestService) {
    this.ipservice.getIp().then(ip => this.ip = ip)
  }

  ngOnInit() {
  }

}
