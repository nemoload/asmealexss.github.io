"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Benefit=function(){function Benefit(a,b,c,d){_classCallCheck(this,Benefit),this.benefitName=a,this.benefitText=b,this.benefitNumber=c,this.benefitURL=d}return _createClass(Benefit,[{key:"showBenefit",value:function showBenefit(){var a=this;bootbox.alert({size:"large",title:"<b>"+this.benefitNumber+"</b> appears to be your lucky number!",message:"<b>"+this.benefitNumber+"</b> means: "+this.benefitName+", which is "+this.benefitText,callback:function callback(){window.location=a.benefitURL}})}},{key:"benefitName",get:function get(){return this._benefitName},set:function set(a){this._benefitName=a}},{key:"benefitNumber",get:function get(){return this._benefitNumber},set:function set(a){this._benefitNumber=a}},{key:"benefitText",get:function get(){return this._benefitText},set:function set(a){this._benefitText=a}},{key:"benefitURL",get:function get(){return this._benefitURL},set:function set(a){this._benefitURL=a}}]),Benefit}(),BenefitsArray=[];function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}BenefitsArray.push(new Benefit("ASME Access Engineering","an online tool powered by McGraw-Hill Education contains more than 600 categorized volumes and references, in addition to Curriculum Maps in thousands of engineering fields.",1,"https://m.facebook.com/ASME.Alexandria.University/?fref=hovercard")),BenefitsArray.push(new Benefit("E-Mentoring Program","one-to-one advice that provide you with career-guiding insights, help you solve engineering problems or expand your networking opportunities with professionals.",2,"https://m.facebook.com/ASME.Alexandria.University/?fref=hovercard")),BenefitsArray.push(new Benefit("ASME SmartBrief","a frequent e-newsletter especially for mechanical engineers that provide them with a quick digest of the latest engineering news and trends from around the world and across their profession.",3,"https://m.facebook.com/ASME.Alexandria.University/?fref=hovercard")),BenefitsArray.push(new Benefit("Mechanical Engineering Magazine","a monthly publication that keeps you updated with the latest technology worldwide. It delivers an interdisciplinary view into engineering trends and breakthroughs.",4,"https://m.facebook.com/ASME.Alexandria.University/?fref=hovercard")),BenefitsArray.push(new Benefit("Internships and more!","attending regional and international conferences and getting internships and scholarships.",5,"https://m.facebook.com/ASME.Alexandria.University/?fref=hovercard"));var canvas=document.querySelector("canvas"),height=canvas.height,width=canvas.width,rotationAngle=0,wheel=new Image,arrow=new Image;// Create new img element
wheel.addEventListener("load",function(){arrow.addEventListener("load",function(){MainDrawFunction()},!1)},!1),wheel.src="img/wheel.png",arrow.src="img/arrow.png";var button=document.querySelector("button");button.addEventListener("click",function(){var a=Math.round(Math.asin(Math.sin(rotationAngle))*(180/Math.PI));0===a?BenefitsArray[0].showBenefit():72===a?BenefitsArray[1].showBenefit():36===a?BenefitsArray[2].showBenefit():-36===a?BenefitsArray[3].showBenefit():-72===a?BenefitsArray[4].showBenefit():void 0},!1);function MainDrawFunction(){if(canvas.getContext){var a=canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,width,height),a.drawImage(wheel,0,0),a.translate(width/2,height/2),a.rotate(rotationAngle),a.drawImage(arrow,-30,-20),rotationAngle+=72*(Math.PI/180)}else alert("Canvas isn't supported")}function displayTheBenefit(){}window.setInterval(MainDrawFunction,500);