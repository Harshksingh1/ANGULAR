import { Component } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css'
})
export class TeamInfoComponent {
   team:any=[
      {tid:1,tname:'Mumbai Indians',tlogo:'https://tse4.mm.bing.net/th/id/OIP.YTSN8ksfufUU7fxMt9wOYAHaEK?pid=Api&P=0&h=180',tslogan:'MI'},
      {tid:2,tname:'Royal Challengers Banglore',tlogo:'https://tse4.mm.bing.net/th/id/OIP.S0dl61YVKwK-AhC5bKmUMQHaHa?pid=Api&P=0&h=180',tslogan:'RCB'},
      {tid:3,tname:'Chennai Super Kings',tlogo:'https://tse4.mm.bing.net/th/id/OIP.nh-CfJ6UdazG5pv_3Zpn7gHaEO?pid=Api&P=0&h=180',tslogan:'CSK'},
      {tid:4,tname:'Gujrat Titans',tlogo:'https://tse3.mm.bing.net/th/id/OIP.9Yw9Kgvs_mw6-3c4Ph7YcQHaFj?pid=Api&P=0&h=180',tslogan:'GT'},
      {tid:5,tname:'Rajsthan Royals',tlogo:'https://tse4.mm.bing.net/th/id/OIP.z4UmU0NWESOgiCGJLqgIzQHaHa?pid=Api&P=0&h=180',tslogan:'RR'},
      {tid:6,tname:'Punjab Kings',tlogo:'https://tse1.mm.bing.net/th/id/OIP.cjXvCTwGm-cxzPTa3-VyEgHaEK?pid=Api&P=0&h=180',tslogan:'PBKS'},
      {tid:7,tname:'Kolkata Knight Riders',tlogo:'https://tse3.mm.bing.net/th/id/OIP.XmhObQyIkeURhpvIlCvnTQHaEK?pid=Api&P=0&h=180',tslogan:'KKR'},
      {tid:8,tname:'Delhi Capitals',tlogo:'https://tse2.mm.bing.net/th/id/OIP.wMqcO1oivX3lfKJbATdGcAHaEO?pid=Api&P=0&h=180',tslogan:'DC'},
      {tid:9,tname:'Lucknow Super Giants',tlogo:'https://tse4.mm.bing.net/th/id/OIP.O_9ZCZRb7RvFG7JmyPL1uAHaEK?pid=Api&P=0&h=180',tslogan:'LSG'},
      {tid:10,tname:'Sunrisers Hyderabad',tlogo:'https://tse2.mm.bing.net/th/id/OIP._ew94G8wC85QkW0wuhlQWAHaFj?pid=Api&P=0&h=180',tslogan:'SH'},
    ]
}
