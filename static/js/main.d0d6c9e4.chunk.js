(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),i=n(8),o=n.n(i),l=n(3),u=n(4),r=n(6),c=n(5),v=(n(13),n(0)),h=function(e){var t=e.score;return Object(v.jsx)("header",{className:"header",children:Object(v.jsxs)("div",{className:"header__score",children:["Your score: ",Object(v.jsxs)("span",{className:"header__text",children:[" ",t," "]})]})})},m=n(1),f=(n(15),function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={gameOver:!1,gameWin:!1,isGameContinue:!1},e.startNewGame=function(){e.setState({gameOver:!1,gameWin:!1,isGameContinue:!1}),e.props.onNewGame()},e.continueGame=function(){e.setState({isGameContinue:!0})},e}return Object(u.a)(n,[{key:"setGameOver",value:function(){return Object(v.jsx)("li",{className:"game-over",children:Object(v.jsx)("button",{className:"game-over__button",onClick:this.startNewGame,children:"NewGame"})})}},{key:"setGameWin",value:function(){return Object(v.jsxs)("li",{className:"game-over",children:[Object(v.jsx)("button",{className:"game-over__button",onClick:this.startNewGame,children:"NewGame"}),Object(v.jsx)("button",{className:"game-over__button",onClick:this.continueGame,children:"Continue"})]})}},{key:"render",value:function(){var e=this.props,t=e.items,n=e.gameWin,a=this.state.isGameContinue,s=null,i=null;return this.props.gameOver&&(s=this.setGameOver()),n&&!a&&(i=this.setGameWin()),Object(v.jsxs)("ul",{className:"field",children:[i,s,t.map((function(e){return Object(v.jsx)("li",{className:"field__item",children:e.value},e.id)}))]})}}]),n}(s.a.Component)),d=(n(16),function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={items:[{id:0,x:0,y:0,value:null,isDone:!1},{id:1,x:1,y:0,value:null,isDone:!1},{id:2,x:2,y:0,value:null,isDone:!1},{id:3,x:3,y:0,value:null,isDone:!1},{id:4,x:0,y:1,value:null,isDone:!1},{id:5,x:1,y:1,value:null,isDone:!1},{id:6,x:2,y:1,value:null,isDone:!1},{id:7,x:3,y:1,value:null,isDone:!1},{id:8,x:0,y:2,value:null,isDone:!1},{id:9,x:1,y:2,value:null,isDone:!1},{id:10,x:2,y:2,value:null,isDone:!1},{id:11,x:3,y:2,value:null,isDone:!1},{id:12,x:0,y:3,value:null,isDone:!1},{id:13,x:1,y:3,value:null,isDone:!1},{id:14,x:2,y:3,value:null,isDone:!1},{id:15,x:3,y:3,value:null,isDone:!1}],changesWasDone:!1,score:0,isGameOver:!1,isGameWin:!1,isGameContinue:!1},e.checkKey=function(t){38===t.keyCode?(t.preventDefault(),e.moveTop()):40===t.keyCode?(t.preventDefault(),e.moveBottom()):37===t.keyCode?(t.preventDefault(),e.moveLeft()):39===t.keyCode&&(t.preventDefault(),e.moveRight())},e.newGame=function(){var t=Object(m.a)(e.state.items);t.map((function(e){return e.value=null})),e.setState({score:0,items:t,isGameOver:!1,isGameWin:!1}),e.setRandomCell(),e.setRandomCell()},e}return Object(u.a)(n,[{key:"moveLeft",value:function(){for(var e=this,t=Object(m.a)(this.state.items),n=3;n>0;n--)for(var a=function(n){t.forEach((function(a,s){if(a.x===n&&null!==a.value){var i=a.value,o=t[s-1].value,l=t[s-1].isDone,u=a.isDone;if(i!==o||l||u)null===o&&(t[s-1].value+=i,a.value=null,e.setState({changesWasDone:!0}));else{var r=i+o;t[s-1].value+=i,t[s-1].isDone=!0,a.value=null,a.isDone=!0,e.setState((function(e){return{changesWasDone:!0,score:e.score+r}}))}}}))},s=3;s>0;s--)a(s);t.forEach((function(e){return e.isDone=!1})),this.setState({items:t}),this.afterKeyUp()}},{key:"moveRight",value:function(){for(var e=this,t=Object(m.a)(this.state.items),n=3;n>0;n--)for(var a=function(n){t.forEach((function(a,s){if(a.x===n&&null!==a.value){var i=a.value,o=t[s+1].value,l=t[s+1].isDone,u=a.isDone;if(i!==o||l||u)null===o&&(t[s+1].value+=i,a.value=null,e.setState({changesWasDone:!0}));else{var r=i+o;t[s+1].value+=i,t[s+1].isDone=!0,a.value=null,a.isDone=!0,e.setState((function(e){return{changesWasDone:!0,score:e.score+r}}))}}}))},s=2;s>=0;s--)a(s);t.forEach((function(e){return e.isDone=!1})),this.setState({items:t}),this.afterKeyUp()}},{key:"moveTop",value:function(){for(var e=this,t=Object(m.a)(this.state.items),n=3;n>0;n--)for(var a=function(n){t.forEach((function(a,s){if(a.y===n&&null!==a.value){var i=a.value,o=t[s-4].value,l=t[s-4].isDone,u=a.isDone;if(i!==o||l||u)null===o&&(t[s-4].value+=i,a.value=null,e.setState({changesWasDone:!0}));else{var r=i+o;t[s-4].value+=i,t[s-4].isDone=!0,a.value=null,a.isDone=!0,e.setState((function(e){return{changesWasDone:!0,score:e.score+r}}))}}}))},s=1;s<=3;s++)a(s);t.forEach((function(e){return e.isDone=!1})),this.setState({items:t}),this.afterKeyUp()}},{key:"moveBottom",value:function(){for(var e=this,t=Object(m.a)(this.state.items),n=3;n>0;n--)for(var a=function(n){t.forEach((function(a,s){if(a.y===n&&null!==a.value){var i=a.value,o=t[s+4].value,l=t[s+4].isDone,u=a.isDone;if(i!==o||l||u)null===o&&(t[s+4].value+=i,a.value=null,e.setState({changesWasDone:!0}));else{var r=i+o;t[s+4].value+=i,t[s+4].isDone=!0,a.isDone=!0,a.value=null,e.setState((function(e){return{changesWasDone:!0,score:e.score+r}}))}}}))},s=2;s>=0;s--)a(s);t.forEach((function(e){return e.isDone=!1})),this.setState({items:t}),this.afterKeyUp()}},{key:"afterKeyUp",value:function(){var e=0;this.props.onChangeScore(this.state.score),this.setState({score:0}),this.state.items.forEach((function(t){null===t.value&&e++})),this.state.changesWasDone&&e>1?(this.setRandomCell(),this.setRandomCell(),e-=2):this.state.changesWasDone&&e>0&&(this.setRandomCell(),e-=1),0===e&&this.simulateMoves(),this.state.items.find((function(e){return 2048===e.value}))&&(console.log(1992),this.setState({isGameWin:!0})),this.setState({changesWasDone:!1}),e=0}},{key:"simulateMoves",value:function(){var e=0;e+=this.simulateMoveBottom(),e+=this.simulateMoveTop(),e+=this.simulateMoveRight(),48===(e+=this.simulateMoveLeft())?this.setState({isGameOver:!0}):this.setState({noMove:0})}},{key:"simulateMoveBottom",value:function(){var e=Object(m.a)(this.state.items),t=0;return e.forEach((function(n,a){3!==n.y&&(n.value!==e[a+4].value&&t++)})),t}},{key:"simulateMoveTop",value:function(){var e=Object(m.a)(this.state.items),t=0;return e.forEach((function(n,a){0!==n.y&&(n.value!==e[a-4].value&&t++)})),t}},{key:"simulateMoveRight",value:function(){var e=Object(m.a)(this.state.items),t=0;return e.forEach((function(n,a){3!==n.x&&(n.value!==e[a+1].value&&t++)})),t}},{key:"simulateMoveLeft",value:function(){var e=Object(m.a)(this.state.items),t=0;return e.forEach((function(n,a){0!==n.y&&(n.value!==e[a-1].value&&t++)})),t}},{key:"setRandomCell",value:function(){var e=Math.floor(15*Math.random()),t=Math.floor(10*Math.random());if(null!==this.state.items[e].value)this.setRandomCell();else{var n=Object(m.a)(this.state.items);n[e].value=t<9?2:4,this.setState({items:n})}}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.checkKey),this.setRandomCell(),this.setRandomCell()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.checkKey)}},{key:"render",value:function(){var e=this.state,t=e.items,n=e.isGameOver,a=e.isGameWin;return Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(f,{items:t,onNewGame:this.newGame,gameOver:n,gameWin:a})})}}]),n}(s.a.Component)),y=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={score:0},e.addScore=function(t){e.setState((function(e){return{score:e.score+t}}))},e.gameEnd=function(){},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.score;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h,{score:e}),Object(v.jsx)(d,{onChangeScore:this.addScore})]})}}]),n}(s.a.Component);o.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d0d6c9e4.chunk.js.map