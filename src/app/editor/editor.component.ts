import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // Add FormsModule as it has dependency otherwise this control will not load

  text: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  constructor() { }

  ngOnInit() {
  }

  print() {
    console.log(this.text);
  }

}
