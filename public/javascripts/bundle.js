(()=>{var e={501:(e,t,a)=>{const s=a(402);class l extends React.Component{render(){return React.createElement("div",null,React.createElement(s,{title:this.props.title,text:this.props.tooltipText},React.createElement("img",{src:this.props.imageUrl,onClick:()=>{this.props.displayVideoHandler(this.props.videoUrl)}})),React.createElement("span",{className:"header"}," ",this.props.title," "),React.createElement("span",{className:"footer"}," ",this.props.company," "))}}e.exports=l},118:(e,t,a)=>{function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},s.apply(this,arguments)}const l=a(501);class i extends React.Component{render(){return React.createElement("div",{className:"articleDisplay"},this.props.games.map(((e,t)=>React.createElement("div",{className:"articleContainer",key:t},React.createElement(l,s({displayVideoHandler:this.props.displayVideoHandler},e))))))}}e.exports=i},325:e=>{class t extends React.Component{render(){let e={zIndex:this.props.videoDisplay?1e4:0,display:this.props.videoDisplay?"":"none"};return React.createElement("div",{className:"modal infoBox",tabindex:"-1",style:e},React.createElement("div",{className:"modal-dialog"},React.createElement("div",{className:"modal-content"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:this.props.displayVideoHandler})),React.createElement("div",{className:"modal-body"},React.createElement("iframe",{width:"480",height:"360",src:this.props.videoUrl})),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.props.displayVideoHandler},"Close")))))}}e.exports=t},807:(e,t,a)=>{const s=a(118),l=a(325);class i extends React.Component{constructor(e){super(e),this.state={data:[],videoUrl:"",videoDisplay:!1},this.displayVideo=this.displayVideo.bind(this),this.displayVideoNoUrl=this.displayVideoNoUrl.bind(this)}async componentDidMount(){let e=await fetch("/data.json"),t=await e.json();this.setState({data:t.games})}displayVideo(e){this.setState({videoUrl:e,videoDisplay:!0})}displayVideoNoUrl(){this.setState({videoUrl:"",videoDisplay:!1})}render(){return React.createElement("div",{id:"mainContent"},React.createElement("h1",null,"Popular New Releases"),React.createElement(s,{displayVideoHandler:this.displayVideo,games:this.state.data}),React.createElement(l,{displayVideoHandler:this.displayVideoNoUrl,videoUrl:this.state.videoUrl,videoDisplay:this.state.videoDisplay}),React.createElement("br",null),React.createElement("br",null),React.createElement("footer",null," © GAM3R "))}}e.exports=i},402:e=>{class t extends React.Component{constructor(e){super(e),this.state={display:!1},this.toggle=this.toggle.bind(this)}toggle(){this.setState((e=>({display:!e.display})))}render(){let e={zIndex:this.state.display?5:0,display:this.state.display?"":"none"};return React.createElement("div",null,React.createElement("div",{className:"imageContainer",onMouseEnter:this.toggle,onMouseOut:this.toggle},this.props.children),React.createElement("div",{className:"popover",style:e,role:"tooltip"},React.createElement("h2",{class:"popover-header"},this.props.title),React.createElement("div",{className:"popover-body",dangerouslySetInnerHTML:{__html:this.props.text}})))}}e.exports=t}},t={};function a(s){var l=t[s];if(void 0!==l)return l.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}(()=>{const e=a(807),t=document.querySelector("#root");ReactDOM.render(React.createElement(e,null),t)})()})();