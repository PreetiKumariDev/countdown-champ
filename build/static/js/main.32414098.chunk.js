(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(8),i=n.n(a),c=n(2),l=n(3),o=n(5),r=n(4),d=(n(7),n(0)),u=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={days:0,hours:0,mins:0,secs:0},s}return Object(l.a)(n,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60),a=Math.floor(t/36e5%24),i=Math.floor(t/864e5);this.setState({days:i,hours:a,mins:s,secs:n})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"clock-days",children:[this.leading0(this.state.days),"days"]}),Object(d.jsxs)("div",{className:"clock-hours",children:[this.leading0(this.state.hours),"hours"]}),Object(d.jsxs)("div",{className:"clock-mins",children:[this.leading0(this.state.mins),"minutes"]}),Object(d.jsxs)("div",{className:"clock-secs",children:[this.leading0(this.state.secs),"seconds"]})]})}}]),n}(s.Component),h=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={deadline:"Dec 25, 2022",newDeadline:""},s}return Object(l.a)(n,[{key:"changeDeadline",value:function(){this.setState({deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Countdown Champ"}),Object(d.jsxs)("div",{className:"App-title",children:["Countdown to ",this.state.deadline]}),Object(d.jsx)(u,{deadline:this.state.deadline}),Object(d.jsxs)("div",{className:"input-box-submit",children:[Object(d.jsx)("input",{type:"text",placeholder:"New date",className:"input-box",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),Object(d.jsx)("button",{onClick:function(){return e.changeDeadline()},children:"Submit"})]})]})}}]),n}(s.Component);i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))},7:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.32414098.chunk.js.map