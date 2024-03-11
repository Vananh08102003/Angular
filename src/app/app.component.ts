import { AfterContentInit, Component } from '@angular/core';
import { Inventor } from './common/inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterContentInit{

  inventors: Inventor[]= [
    {id: 1, first: 'Van Anh', last: 'Ho',  birthday: 2003 },
    {id: 2, first: 'Van B', last: 'Nguyen',  birthday: 2003 },
    {id: 3, first: 'Van C', last: 'Tran',  birthday: 2003 },
    {id: 4, first: 'Van D', last: 'Vo',  birthday: 2003 },
  ]

  ngAfterContentInit(): void {
    this.render(this.show);
  }

  show(innerHTLM: string){
    let item = document.querySelector('#list');
    if(item){
      item.innerHTML = innerHTLM;
    }
  }

 render(callback: (data: string) => any){
  let innerHTML = this.inventors.map(item =>{
    return `    
    <tr>
      <td> ${item.id}</td>
      <td> ${item.first}</td>
      <td> ${item.last}</td>
      <td> ${item.birthday}</td>
    </tr>
   `;

     
  }).join('');

  callback(innerHTML);

 }
}
