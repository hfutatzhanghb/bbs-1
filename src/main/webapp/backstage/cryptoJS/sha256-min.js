(function(j,h){if(typeof exports==="object")module.exports=exports=h(require("./core"));else typeof define==="function"&&define.amd?define(["./core"],h):h(j.CryptoJS)})(this,function(j){(function(h){var k=j.lib,v=k.WordArray,p=k.Hasher;k=j.algo;var t=[],u=[];(function(){function f(d){for(var l=h.sqrt(d),m=2;m<=l;m++)if(!(d%m))return false;return true}function g(d){return(d-(d|0))*4294967296|0}for(var a=2,b=0;b<64;){if(f(a)){if(b<8)t[b]=g(h.pow(a,0.5));u[b]=g(h.pow(a,1/3));b++}a++}})();var n=[];k=
k.SHA256=p.extend({_doReset:function(){this._hash=new v.init(t.slice(0))},_doProcessBlock:function(f,g){for(var a=this._hash.words,b=a[0],d=a[1],l=a[2],m=a[3],e=a[4],q=a[5],r=a[6],s=a[7],c=0;c<64;c++){if(c<16)n[c]=f[g+c]|0;else{var i=n[c-15],o=n[c-2];n[c]=((i<<25|i>>>7)^(i<<14|i>>>18)^i>>>3)+n[c-7]+((o<<15|o>>>17)^(o<<13|o>>>19)^o>>>10)+n[c-16]}i=s+((e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25))+(e&q^~e&r)+u[c]+n[c];o=((b<<30|b>>>2)^(b<<19|b>>>13)^(b<<10|b>>>22))+(b&d^b&l^d&l);s=r;r=q;q=e;e=m+i|0;m=
l;l=d;d=b;b=i+o|0}a[0]=a[0]+b|0;a[1]=a[1]+d|0;a[2]=a[2]+l|0;a[3]=a[3]+m|0;a[4]=a[4]+e|0;a[5]=a[5]+q|0;a[6]=a[6]+r|0;a[7]=a[7]+s|0},_doFinalize:function(){var f=this._data,g=f.words,a=this._nDataBytes*8,b=f.sigBytes*8;g[b>>>5]|=128<<24-b%32;g[(b+64>>>9<<4)+14]=h.floor(a/4294967296);g[(b+64>>>9<<4)+15]=a;f.sigBytes=g.length*4;this._process();return this._hash},clone:function(){var f=p.clone.call(this);f._hash=this._hash.clone();return f}});j.SHA256=p._createHelper(k);j.HmacSHA256=p._createHmacHelper(k)})(Math);
return j.SHA256});