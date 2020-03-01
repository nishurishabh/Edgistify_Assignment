(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{121:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(126);t.a=function(e){return r.a.createElement("div",{className:"profileModal"},e.children)}},122:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(127);t.a=function(e){return e.show?r.a.createElement("div",{className:"backdrop",onClick:e.clicked},e.children):null}},123:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(125);t.a=function(e){var t,n=null,a=[];switch(e.touched&&e.invalid&&(a.push("invalid"),t=e.errorMessage),!e.touched||e.invalid||e.invalidN||(a.push("valid"),t=""),e.touched&&e.invalidN&&(a.push("invalid-newpost"),t=e.errorMessage),!e.touched||e.invalidN||e.invalid||(a.push("valid-newpost"),t=""),e.elementType){case"input":n=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({value:e.value},e.elementConfig,{onChange:e.changed,className:a.join(" ")})));break;case"textarea":n=r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",Object.assign({},e.elementConfig,{onChange:e.changed,className:a.join(" "),value:e.value})));break;case"select":n=r.a.createElement("select",{value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{value:e.value},e.displayValue)}));break;default:n=r.a.createElement("input",Object.assign({value:e.value},e.elementConfig,{onChange:e.changed}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,e.label),n,r.a.createElement("p",{style:{color:"red"}},t))}},124:function(e,t,n){"use strict";var a=n(8),r=n(9),o=n(11),i=n(10),s=n(12),l=n(0),c=n.n(l),u=n(121),d=n(122);n(128);t.a=function(e,t){return function(n){function l(){var e,t;Object(a.a)(this,l);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(i.a)(l)).call.apply(e,[this].concat(r)))).state={error:null},t.closeBackdrop=function(){t.setState({error:null})},t}return Object(s.a)(l,n),Object(r.a)(l,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){var t;return t=this.state.error?this.state.error.response.data.errors[0].message:null,c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{show:this.state.error,clicked:this.closeBackdrop},c.a.createElement(u.a,null,c.a.createElement("div",{className:"error"},c.a.createElement("h1",null,"An Error Occurred"),c.a.createElement("div",{className:"editProfile__icon",onClick:this.closeBackdrop},c.a.createElement("i",{className:"fas fa-times-circle"})),c.a.createElement("p",null,t)))),c.a.createElement(e,this.props))}}]),l}(l.Component)}},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},162:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n(8),o=n(9),i=n(11),s=n(10),l=n(12),c=n(0),u=n.n(c),d=(n(162),n(27)),p=n(123),m=n(13),h=n.n(m),f=n(124),v=n(14),g=n(38),b=n(141),y=n(142),k=g.a("allPosts",1,function(e){e.objectStoreNames.contains("posts")||e.createObjectStore("posts",{keyPath:"_id"}),e.objectStoreNames.contains("users")||e.createObjectStore("users",{keyPath:"_id"}),e.objectStoreNames.contains("sync-posts")||e.createObjectStore("sync-posts",{keyPath:"_id"})});var w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).signal=h.a.CancelToken.source(),n.state={showSnackbar:!1,newPostForm:{title:{elementType:"input",elementConfig:{placeholder:"title of your post",type:"text",name:"title"},validationRules:{required:!0,maxLength:!0},valid:!1,touched:!1,value:"",label:"Title",errorMessage:"Characters should be between 1 and 30"},body:{elementType:"textarea",elementConfig:{placeholder:"Body of your post",type:"text",name:"body"},validationRules:{required:!0},valid:!1,touched:!1,value:"",label:"Body",errorMessage:"This Field Is Required"},postPhoto:{elementType:"input",elementConfig:{type:"file",name:"image"},validationRules:{required:!0},valid:!1,touched:!1,value:"",label:"Image Of Your Post",errorMessage:"This Field Is Required"}},formIsValid:!1,imageSelected:null,buttonClicked:!1,file:null},n.changeInput=function(e,t){var r=Object(a.a)({},n.state.newPostForm),o=r[t];if("postPhoto"===t&&e.target.files[0]){var i=e.target.files[0];n.setState({imageSelected:URL.createObjectURL(i),file:i})}o.value=e.target.value,o.touched=!0,o.valid=n.checkValidity(o.validationRules,o.value),r[t]=o;var s=!0;for(var l in r)s=r[l].valid&&s;n.setState({newPostForm:r,formIsValid:s})},n.checkValidity=function(e,t){var n=!0;if(e.required&&(n=""!==t.trim()&&n),e.emailValid){n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)&&n}return e.maxLength&&(n=t.length<=30&&n),n},n.sendNewPostToDB=function(e){e.preventDefault(),n.setState({buttonClicked:!0,showSnackbar:!0});var t=new FormData;return t.append("image",n.state.file),h.a.put("/insertPostImage",t,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.props.token}}).then(function(e){var t=e.data.filePath,a={query:"\n                    mutation CreatePost($title: String!, $body: String!, $photo: String!) {\n                        createPost(postInput: {title: $title, body: $body, photo: $photo}) {\n                            _id\n                            title\n                            body\n                            photo\n                            user {\n                              _id\n                              name\n                              email\n                              createdAt\n                              updatedAt\n                            }\n                          }\n                    }\n                ",variables:{title:n.state.newPostForm.title.value,body:n.state.newPostForm.body.value,photo:t}};return h.a.post("/graphql",a,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+n.props.token},cancelToken:n.signal.token}).then(function(e){var t=e.data.data.createPost;navigator.serviceWorker.ready.then(function(e){e.active.postMessage(JSON.stringify({postId:t._id,userId:t.user._id,postTitle:t.title,postPhoto:t.photo,userName:t.user.name}))}),n.setState({showSnackbar:!1}),n.props.history.push("/posts")}).catch(function(e){n.setState({buttonClicked:!1})})}).catch(function(e){n.setState({buttonClicked:!1})})},n.createNewPost=function(e){navigator.onLine?n.sendNewPostToDB(e):(e.preventDefault(),n.setState({buttonClicked:!0}),"serviceWorker"in navigator&&"SyncManager"in window&&navigator.serviceWorker.ready.then(function(e){var t,a,r={_id:(new b.a).toHexString(),title:n.state.newPostForm.title.value,body:n.state.newPostForm.body.value,photo:n.state.file,token:n.props.token,userId:n.props.userId};(t="sync-posts",a=r,k.then(function(e){var n=e.transaction(t,"readwrite");return n.objectStore(t).put(a),n.complete})).then(function(){return e.sync.register("sync-new-posts")}).then(function(){n.setState({showSnackbar:!0})}).then(function(){n.props.history.push("/posts")}).catch(function(e){console.log(e)})}))},n.configurePushSub=function(){},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.signal.cancel("cancel")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.newPostForm)t.push({id:n,config:this.state.newPostForm[n]});return u.a.createElement("div",{className:"newPost"},u.a.createElement("h1",null,"Create New Post"),u.a.createElement("form",{className:"newPost__form",encType:"multipart/form-data"},t.map(function(t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{Icon:u.a.createElement("i",{className:"fas fa-alarm-clock"}),Show:e.state.showSnackbar},"Creating Your Post..."),u.a.createElement("div",{key:t.id},u.a.createElement(p.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalidN:!t.config.valid,touched:t.config.touched,label:t.config.label,key:t.id,changed:function(n){return e.changeInput(n,t.id)},errorMessage:t.config.errorMessage})))}),this.state.imageSelected?u.a.createElement("div",{className:"imageSelected"},u.a.createElement("img",{src:this.state.imageSelected,alt:"sdknflsd"})):null,u.a.createElement(d.a,{type:"submit",click:function(t){return e.createNewPost(t)},disabled:!this.state.formIsValid||this.state.buttonClicked},"Create Post")))}}]),t}(c.Component);t.default=Object(f.a)(Object(v.b)(function(e){return{token:e.auth.token,userId:e.auth.userId}})(w),h.a)}}]);
//# sourceMappingURL=10.f7eae1d5.chunk.js.map