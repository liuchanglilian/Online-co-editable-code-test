import { Injectable } from '@angular/core';
import {COLORS} from '../../assets/colors';
declare var io: any;
declare var ace:any;
@Injectable()
export class CollaborationService {

  collaborationSocket: any;
  clientInfo: Object = {};
  clientNum: number = 0;

  constructor() { }

  init(editor: any, sessionId:string): void{

    this.collaborationSocket = io(window.location.origin, {query: 'sessionId='+sessionId});
    this.collaborationSocket.on("change" , (delta:string)=>{
      //console.log('collaboration: editor changes by'+delta);
      //editor.lastApplideChange = delta;
      console.group('type of e in collaboration');
      console.log(typeof delta);
      console.groupEnd();
      delta = JSON.parse(delta);
        editor.shouldIgnore = true;
        editor.getSession().getDocument().applyDeltas([delta]);
        editor.shouldIgnore = false;
    });


    this.collaborationSocket.on("cursorMove",(cursor)=>{
      console.log("Here I got the cursorMove");
      console.log("cursor move:"+cursor);
      let session = editor.getSession();
      cursor = JSON.parse(cursor);
      let x = cursor['row'];
      let y = cursor['column'];
      let changeClientId = cursor['socketId'];
      console.log(x+','+ y+','+changeClientId);
      if(changeClientId in this.clientInfo){
        session.removeMarker(this.clientInfo[changeClientId]['marker']);
      }else{
        this.clientInfo[changeClientId] = {};

        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML=".editor_cursor_"+changeClientId +
             " { position:absolute; background:"+ COLORS[this.clientNum]+";"
        +" z-index: 100; width:3px !important;";
        document.body.appendChild(css);
        this.clientNum++;
      }
      let Range = ace.require('ace/range').Range;
      session.addMarker();
      let newMarker = session.addMarker(new Range(x,y,x,y+1),'editor_cursor_'+changeClientId,"line",true);
      this.clientInfo[changeClientId]['marker']=newMarker;
    });
   //Test
    this.collaborationSocket.on("message", (message) => {
     // console.log("received:"+message);

    })
  }

  change(delta: string): void{
    this.collaborationSocket.emit("change", delta);
   // console.log("I am at collaboration service"+ delta);
  }

  cursorMove(cursor: Object): void{
    this.collaborationSocket.emit("cursorMove", cursor);
  }
  restoreBuffer(): void{
    this.collaborationSocket.emit("restoreBuffer");
  }
}
