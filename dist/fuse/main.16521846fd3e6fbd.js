/*! svg.filter.js - v2.0.2 - 2016-02-24
        * https://github.com/wout/svg.filter.js
        * Copyright (c) 2016 Wout Fierens; Licensed MIT */
function(){SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(m,_){return this.add(m,_),!m.attr("in")&&this.autoSetIn&&m.attr("in",this.source),m.attr("result")||m.attr("result",m),m},blend:function(m,_,x){return this.put(new SVG.BlendEffect(m,_,x))},colorMatrix:function(m,_){return this.put(new SVG.ColorMatrixEffect(m,_))},convolveMatrix:function(m){return this.put(new SVG.ConvolveMatrixEffect(m))},componentTransfer:function(m){return this.put(new SVG.ComponentTransferEffect(m))},composite:function(m,_,x){return this.put(new SVG.CompositeEffect(m,_,x))},flood:function(m,_){return this.put(new SVG.FloodEffect(m,_))},offset:function(m,_){return this.put(new SVG.OffsetEffect(m,_))},image:function(m){return this.put(new SVG.ImageEffect(m))},merge:function(){var m=[void 0];for(var _ in arguments)m.push(arguments[_]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,m)))},gaussianBlur:function(m,_){return this.put(new SVG.GaussianBlurEffect(m,_))},morphology:function(m,_){return this.put(new SVG.MorphologyEffect(m,_))},diffuseLighting:function(m,_,x){return this.put(new SVG.DiffuseLightingEffect(m,_,x))},displacementMap:function(m,_,x,D,I){return this.put(new SVG.DisplacementMapEffect(m,_,x,D,I))},specularLighting:function(m,_,x,D){return this.put(new SVG.SpecularLightingEffect(m,_,x,D))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(m,_,x,D,I){return this.put(new SVG.TurbulenceEffect(m,_,x,D,I))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(m){var _=this.put(new SVG.Filter);return"function"==typeof m&&m.call(_,_),_}}),SVG.extend(SVG.Container,{filter:function(m){return this.defs().filter(m)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(m){return this.filterer=m instanceof SVG.Element?m:this.doc().filter(m),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(m){return this.filterer&&!0===m&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(m){return null==m?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",m)},result:function(m){return null==m?this.attr("result"):this.attr("result",m)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{in:function(m){return null==m?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",m)},result:function(m){return null==m?this.attr("result"):this.attr("result",m)},toString:function(){return this.result()}}});var Ce={blend:function(m,_){return this.parent()&&this.parent().blend(this,m,_)},colorMatrix:function(m,_){return this.parent()&&this.parent().colorMatrix(m,_).in(this)},convolveMatrix:function(m){return this.parent()&&this.parent().convolveMatrix(m).in(this)},componentTransfer:function(m){return this.parent()&&this.parent().componentTransfer(m).in(this)},composite:function(m,_){return this.parent()&&this.parent().composite(this,m,_)},flood:function(m,_){return this.parent()&&this.parent().flood(m,_)},offset:function(m,_){return this.parent()&&this.parent().offset(m,_).in(this)},image:function(m){return this.parent()&&this.parent().image(m)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(m,_){return this.parent()&&this.parent().gaussianBlur(m,_).in(this)},morphology:function(m,_){return this.parent()&&this.parent().morphology(m,_).in(this)},diffuseLighting:function(m,_,x){return this.parent()&&this.parent().diffuseLighting(m,_,x).in(this)},displacementMap:function(m,_,x,D){return this.parent()&&this.parent().displacementMap(this,m,_,x,D)},specularLighting:function(m,_,x,D){return this.parent()&&this.parent().specularLighting(m,_,x,D).in(this)},tile:function(){return this.parent()&&this.parent().tile().in(this)},turbulence:function(m,_,x,D,I){return this.parent()&&this.parent().turbulence(m,_,x,D,I).in(this)}};SVG.extend(SVG.Effect,Ce),SVG.extend(SVG.ParentEffect,Ce),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{in:function(m){this.attr("in",m)}}});var t={blend:function(m,_,x){this.attr({in:m,in2:_,mode:x||"normal"})},colorMatrix:function(m,_){"matrix"==m&&(_=d(_)),this.attr({type:m,values:void 0===_?null:_})},convolveMatrix:function(m){m=d(m),this.attr({order:Math.sqrt(m.split(" ").length),kernelMatrix:m})},composite:function(m,_,x){this.attr({in:m,in2:_,operator:x})},flood:function(m,_){this.attr("flood-color",m),null!=_&&this.attr("flood-opacity",_)},offset:function(m,_){this.attr({dx:m,dy:_})},image:function(m){this.attr("href",m,SVG.xlink)},displacementMap:function(m,_,x,D,I){this.attr({in:m,in2:_,scale:x,xChannelSelector:D,yChannelSelector:I})},gaussianBlur:function(m,_){this.attr("stdDeviation",null!=m||null!=_?function(x){if(!Array.isArray(x))return x;for(var D=0,I=x.length,R=[];D<I;D++)R.push(x[D]);return R.join(" ")}(Array.prototype.slice.call(arguments)):"0 0")},morphology:function(m,_){this.attr({operator:m,radius:_})},tile:function(){},turbulence:function(m,_,x,D,I){this.attr({numOctaves:_,seed:x,stitchTiles:D,baseFrequency:m,type:I})}},i={merge:function(){var m;if(arguments[0]instanceof SVG.Set){var _=this;arguments[0].each(function(D){this instanceof SVG.MergeNode?_.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&_.put(new SVG.MergeNode(this))})}else{m=Array.isArray(arguments[0])?arguments[0]:arguments;for(var x=0;x<m.length;x++)m[x]instanceof SVG.MergeNode?this.put(m[x]):this.put(new SVG.MergeNode(m[x]))}},componentTransfer:function(m){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(x){this[x]=new(SVG["Func"+x.toUpperCase()])("identity"),this.rgb.add(this[x]),this.node.appendChild(this[x].node)}.bind(this)),m)for(var _ in m.rgb&&(["r","g","b"].forEach(function(x){this[x].attr(m.rgb)}.bind(this)),delete m.rgb),m)this[_].attr(m[_])},diffuseLighting:function(m,_,x){this.attr({surfaceScale:m,diffuseConstant:_,kernelUnitLength:x})},specularLighting:function(m,_,x,D){this.attr({surfaceScale:m,diffuseConstant:_,specularExponent:x,kernelUnitLength:D})}},s={distantLight:function(m,_){this.attr({azimuth:m,elevation:_})},pointLight:function(m,_,x){this.attr({x:m,y:_,z:x})},spotLight:function(m,_,x,D,I,R){this.attr({x:m,y:_,z:x,pointsAtX:D,pointsAtY:I,pointsAtZ:R})},mergeNode:function(m){this.attr("in",m)}};function d(m){return Array.isArray(m)&&(m=new SVG.Array(m)),m.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function u(){var m=function(){};for(var _ in"function"==typeof arguments[arguments.length-1]&&(m=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1)),arguments)for(var x in arguments[_])m(arguments[_][x],x,arguments[_])}["r","g","b","a"].forEach(function(m){s["Func"+m.toUpperCase()]=function(_){switch(this.attr("type",_),_){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),u(t,function(m,_){var x=_.charAt(0).toUpperCase()+_.slice(1);SVG[x+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+x)),m.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:{}})}),u(i,function(m,_){var x=_.charAt(0).toUpperCase()+_.slice(1);SVG[x+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+x)),m.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:{}})}),u(s,function(m,_){var x=_.charAt(0).toUpperCase()+_.slice(1);SVG[x]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+x)),m.apply(this,arguments)},inherit:SVG.ChildEffect,extend:{}})}),SVG.extend(SVG.MergeEffect,{in:function(m){return m instanceof SVG.MergeNode?this.add(m,0):this.add(new SVG.MergeNode(m),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(m){return null==m?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",m)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}.call(void 0),function(){function Ce(u,m,_,x,D,I,R){for(var H=u.slice(m,_||R),W=x.slice(D,I||R),se=0,ue={pos:[0,0],start:[0,0]},Ie={pos:[0,0],start:[0,0]};H[se]=t.call(ue,H[se]),W[se]=t.call(Ie,W[se]),H[se][0]!=W[se][0]||"M"==H[se][0]||"A"==H[se][0]&&(H[se][4]!=W[se][4]||H[se][5]!=W[se][5])?(Array.prototype.splice.apply(H,[se,1].concat(s.call(ue,H[se]))),Array.prototype.splice.apply(W,[se,1].concat(s.call(Ie,W[se])))):(H[se]=i.call(ue,H[se]),W[se]=i.call(Ie,W[se])),++se!=H.length||se!=W.length;)se==H.length&&H.push(["C",ue.pos[0],ue.pos[1],ue.pos[0],ue.pos[1],ue.pos[0],ue.pos[1]]),se==W.length&&W.push(["C",Ie.pos[0],Ie.pos[1],Ie.pos[0],Ie.pos[1],Ie.pos[0],Ie.pos[1]]);return{start:H,dest:W}}function t(u){switch(u[0]){case"z":case"Z":u[0]="L",u[1]=this.start[0],u[2]=this.start[1];break;case"H":u[0]="L",u[2]=this.pos[1];break;case"V":u[0]="L",u[2]=u[1],u[1]=this.pos[0];break;case"T":u[0]="Q",u[3]=u[1],u[4]=u[2],u[1]=this.reflection[1],u[2]=this.reflection[0];break;case"S":u[0]="C",u[6]=u[4],u[5]=u[3],u[4]=u[2],u[3]=u[1],u[2]=this.reflection[1],u[1]=this.reflection[0]}return u}function i(u){var m=u.length;return this.pos=[u[m-2],u[m-1]],-1!="SCQT".indexOf(u[0])&&(this.reflection=[2*this.pos[0]-u[m-4],2*this.pos[1]-u[m-3]]),u}function s(u){var m=[u];switch(u[0]){case"M":return this.pos=this.start=[u[1],u[2]],m;case"L":u[5]=u[3]=u[1],u[6]=u[4]=u[2],u[1]=this.pos[0],u[2]=this.pos[1];break;case"Q":u[6]=u[4],u[5]=u[3],u[4]=1*u[4]/3+2*u[2]/3,u[3]=1*u[3]/3+2*u[1]/3,u[2]=1*this.pos[1]/3+2*u[2]/3,u[1]=1*this.pos[0]/3+2*u[1]/3;break;case"A":u=(m=function(_,x){var D,I,R,H,W,se,ue,Ie,re,De,g,C,L,K,je,Je,$t,tn,Ln,Pn,An,Gn,bi,Di,hi,Gi,ya=Math.abs(x[1]),oa=Math.abs(x[2]),Da=x[3]%360,So=x[4],Wi=x[5],si=x[6],Ti=x[7],Hi=new SVG.Point(_),sa=new SVG.Point(si,Ti),lo=[];if(0===ya||0===oa||Hi.x===sa.x&&Hi.y===sa.y)return[["C",Hi.x,Hi.y,sa.x,sa.y,sa.x,sa.y]];for((I=(D=new SVG.Point((Hi.x-sa.x)/2,(Hi.y-sa.y)/2).transform((new SVG.Matrix).rotate(Da))).x*D.x/(ya*ya)+D.y*D.y/(oa*oa))>1&&(ya*=I=Math.sqrt(I),oa*=I),R=(new SVG.Matrix).rotate(Da).scale(1/ya,1/oa).rotate(-Da),Hi=Hi.transform(R),se=(H=[(sa=sa.transform(R)).x-Hi.x,sa.y-Hi.y])[0]*H[0]+H[1]*H[1],W=Math.sqrt(se),H[0]/=W,H[1]/=W,ue=se<4?Math.sqrt(1-se/4):0,So===Wi&&(ue*=-1),Ie=new SVG.Point((sa.x+Hi.x)/2+ue*-H[1],(sa.y+Hi.y)/2+ue*H[0]),re=new SVG.Point(Hi.x-Ie.x,Hi.y-Ie.y),De=new SVG.Point(sa.x-Ie.x,sa.y-Ie.y),g=Math.acos(re.x/Math.sqrt(re.x*re.x+re.y*re.y)),re.y<0&&(g*=-1),C=Math.acos(De.x/Math.sqrt(De.x*De.x+De.y*De.y)),De.y<0&&(C*=-1),Wi&&g>C&&(C+=2*Math.PI),!Wi&&g<C&&(C-=2*Math.PI),Je=[],$t=g,L=(C-g)/(K=Math.ceil(2*Math.abs(g-C)/Math.PI)),je=4*Math.tan(L/4)/3,An=0;An<=K;An++)Ln=Math.cos($t),tn=Math.sin($t),Pn=new SVG.Point(Ie.x+Ln,Ie.y+tn),Je[An]=[new SVG.Point(Pn.x+je*tn,Pn.y-je*Ln),Pn,new SVG.Point(Pn.x-je*tn,Pn.y+je*Ln)],$t+=L;for(Je[0][0]=Je[0][1].clone(),Je[Je.length-1][2]=Je[Je.length-1][1].clone(),R=(new SVG.Matrix).rotate(Da).scale(ya,oa).rotate(-Da),An=0,Gn=Je.length;An<Gn;An++)Je[An][0]=Je[An][0].transform(R),Je[An][1]=Je[An][1].transform(R),Je[An][2]=Je[An][2].transform(R);for(An=1,Gn=Je.length;An<Gn;An++)bi=(Pn=Je[An-1][2]).x,Di=Pn.y,hi=(Pn=Je[An][0]).x,Gi=Pn.y,si=(Pn=Je[An][1]).x,lo.push(["C",bi,Di,hi,Gi,si,Ti=Pn.y]);return lo}(this.pos,u))[0]}return u[0]="C",this.pos=[u[5],u[6]],this.reflection=[2*u[5]-u[3],2*u[6]-u[4]],m}function d(u,m){if(!1===m)return!1;for(var _=m,x=u.length;_<x;++_)if("M"==u[_][0])return _;return!1}SVG.extend(SVG.PathArray,{morph:function(u){for(var m=this.value,_=this.parse(u),x=0,D=0,I=!1,R=!1;!1!==x||!1!==D;){var H;I=d(m,!1!==x&&x+1),R=d(_,!1!==D&&D+1),!1===x&&(x=0==(H=new SVG.PathArray(W.start).bbox()).height||0==H.width?m.push(m[0])-1:m.push(["M",H.x+H.width/2,H.y+H.height/2])-1),!1===D&&(D=0==(H=new SVG.PathArray(W.dest).bbox()).height||0==H.width?_.push(_[0])-1:_.push(["M",H.x+H.width/2,H.y+H.height/2])-1);var W=Ce(m,x,I,_,D,R);m=m.slice(0,x).concat(W.start,!1===I?[]:m.slice(I)),_=_.slice(0,D).concat(W.dest,!1===R?[]:_.slice(R)),x=!1!==I&&x+W.start.length,D=!1!==R&&D+W.dest.length}return this.value=m,this.destination=new SVG.PathArray,this.destination.value=_,this}})}(),
/*! svg.draggable.js - v2.2.2 - 2019-01-08
        * https://github.com/svgdotjs/svg.draggable.js
        * Copyright (c) 2019 Wout Fierens; Licensed MIT */