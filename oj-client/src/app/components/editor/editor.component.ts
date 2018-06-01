import { Component, OnInit ,Inject} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
declare var ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;

  public languages: string[] = ['Java','C++','Python'];
  language: string = 'Java';
  sessionId: string;
  output: string;
  defaultContent = {
    'Java': `public class Example {
public static void main(String[] args) {
    // Type your Java code here
    }
}`,
    'C++': `#include <iostream>
using namespace std;
int main() {
  // Type your C++ code here
  return 0;
}`,
    'Python': `class Solution:
   def example():
       # Write your Python code here`
  }
  constructor(@Inject('collaboration') private collaboration,
              @Inject('data') private data,
              private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.sessionId = params['id'];
        this.initEditor();
      });
  }

  initEditor(){
    this.editor = ace.edit('editor');
    this.editor.setTheme("ace/theme/eclipse");
    this.resetEditor();
    this.editor.$blockScrolling=Infinity;
    document.getElementsByTagName('textarea')[0].focus();
    this.collaboration.init(this.editor, this.sessionId);
    this.editor.on('change',(e)=>{
          //console.log("here last appliedCHanged"+ this.editor.lastAppliJSedChange);
        console.group('e');
        console.log(JSON.stringify(e));
        console.groupEnd();

      if (!this.editor.shouldIgnore) {
        // console.log("e"+JSON.stringify(e)+","+"lastappliedchange"+this.editor.lastAppliedChange);
        this.collaboration.change(JSON.stringify(e));
      }
    });
    this.editor.getSession().getSelection().on("changeCursor",()=>{
      let cursor = this.editor.getSession().getSelection().getCursor();
      console.log('cursor moves:' + JSON.stringify(cursor));
      this.collaboration.cursorMove(JSON.stringify(cursor));

    });
    this.collaboration.restoreBuffer();

  }

  setLanguage(language: string): void{
       this.language = language;
       this.resetEditor();
  }

  resetEditor(): void{
    this.editor.session.setMode('ace/mode/'+this.language.toLowerCase());
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = '';

  }

  submit(): void{
    let userCode = this.editor.getValue();
    let data = {
      user_code: userCode,
      lang: this.language.toLowerCase()

    };

    this.data.buildAndRun(data)
      .then(res =>this.output = res.text);
    console.log(userCode);
  }
}
