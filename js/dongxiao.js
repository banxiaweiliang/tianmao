
 window.onload=function(){
  //文本框的效果
// function  $(select,obj){
//      var obj=obj||document;
//      if(typeof select=="string"){
//        select=select.replace(/^\s*|\s*$/g,'');
//       if(select.charAt(0)=="."){
//         return getClass(select.substr(1),obj);
//       }else if(select.charAt(0)=="#"){
//         return document.getElementById(select.slice(1));
//       }else if(/^[a-z|1-6]{1,10}$/g.test(select)){//标签名 
//         return  document.getElementsByTagName(select);
//       };
//      }else if(typeof select=="function"){
//       window.onload=function(){
//         select();
//       }
//      }
// }

  

 
var wenben=$(".wenben")[0];
    wenben.onfocus=function(){//表单获得焦点事件
     if(wenben.value=="猫猫狗狗购物狂欢，给它最好的"){//当框里有默认值时，点击后为空
      wenben.value="";
        } 
      }
     wenben.onblur=function(){//表单失去焦点事件
   if(wenben.value){//框里有其他值时，不做操做

    }else{
   wenben.value="猫猫狗狗购物狂欢，给它最好的";//当框里没有值时，点击外部赋值框为默认值
    }
    }



var wenben1=$(".wenben1")[0];
    wenben1.onfocus=function(){//表单获得焦点事件
     if(wenben1.value=="猫猫狗狗购物狂欢，给它最好的"){//当框里有默认值时，点击后为空
      wenben1.value="";
        } 
      }
     wenben1.onblur=function(){//表单失去焦点事件
   if(wenben1.value){//框里有其他值时，不做操做

    }else{
   wenben1.value="猫猫狗狗购物狂欢，给它最好的";//当框里没有值时，点击外部赋值框为默认值
    }
    }


//轮播的效果
 var bmzhong=getClass("bmzhong");
 var banner1=$(".banner1")[0];
 var yanse=["#62cbaa","#b90af9","#dadada","#fff701","#dcdcdc","#fff701"];
     var yeshu1=getClass("yeshu1");
     var t=setInterval(move,2000);
     var num=1;
     function move(){
          if(num==6){
           num=0;
           } 
         for(var i=0;i<bmzhong.length;i++){
            bmzhong[i].style.zIndex=4;
            yeshu1[i].style.background="#000"
                       }
           bmzhong[num].style.zIndex=5;
           yeshu1[num].style.background="#c40000";
           banner1.style.background=yanse[num];
         num++;
      }
           
      for(var i=0;i<yeshu1.length;i++){
             yeshu1[i].index=i;
          yeshu1[i].onmouseover=function(){
                clearInterval(t);
                for(var j=0;j<bmzhong.length;j++){
                    bmzhong[j].style.zIndex=4;
                    yeshu1[j].style.background="#000";
                };
                bmzhong[this.index].style.zIndex=5;
                yeshu1[this.index].style.background="#c40000";
                banner1.style.background=yanse[this.index];
          };
            yeshu1[i].onmouseout=function(){
               t=setInterval(move,2000);
              num=this.index+1;
            };
      }




//选项卡的效果
var xiaotu=getClass('xiaotu');
var xin=getClass('xin');
for(var i=0;i<xiaotu.length;i++){
	xiaotu[i].index=i;
	xiaotu[i].onmouseover=function(){
        xin[this.index].style.display="block";
	}
	xiaotu[i].onmouseout=function(){
        xin[this.index].style.display="none";
	}
}


   var zi4=getClass('zi4');
    var shuzi=getClass('shuzi');
     for(var i=0;i<zi4.length;i++){
     	zi4[i].index=i;//把对应的那两个下标的值变得一样了.用的是  对象.属性=另一个对象
     	zi4[i].onclick=function(){
     		for(var j=0;j<shuzi.length;j++){
    shuzi[j].style.display="none";//display=none不显示
    zi4[j].style.fontWeight="normal";
    zi4[j].style.textDecoration="none";
    };
    shuzi[this.index].style.display="block";
    zi4[this.index].style.fontWeight="bold";
    zi4[this.index].style.textDecoration="underline";
    };
     }
    


//侧导航栏与顶部隐藏导航栏
     var search=$(".search")[0];
      var flag=true;
      var flag1=true;//0--440  440-3000
        var floors=$(".yilou");
        
      var jump=$(".jumpqwe")[0];
        var btn123=$(".jumpli",jump);
        //alert(floors[1].offsetTop)
  
  // //按需加载
 var yilou=$(".yilou");
      
      var ch=document.documentElement.clientHeight;

    //按钮控制滚动条
        for(var i=0;i<btn123.length;i++){
          btn123[i].index=i;
          btn123[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].offsetTop})//当前按钮的对应楼层的top赋值给滚动条
          }
        }

      window.onscroll=function(){
        //搜索框的显示与隐藏
        var scrollT1=getScrollT();
        if(scrollT1>=440){
          if(flag){//为了保证页面往下拉时只有一个animate函数执行
            animate(search,{top:0},500);
            flag=false;
            flag1=true;
          }           
        }else{
                if(flag1){
                  animate(search,{top:-50});
                  flag1=false;
                  flag=true;
                }         
        }


        //楼层跳转

          if(scrollT1>=510){

            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
    //滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t-150<scrollT1){//如果scrollTop大于当前楼层的top
   
                for(var j=0;j<btn123.length;j++){
                  btn123[j].style.color="black";
                }
                btn123[i].style.color="red";
              }
          
            }




     // window.onscroll=function(){
        var scrollT2=getScrollT();//
        document.title=scrollT2;
        //alert(yilou[0].offsetTop)
        for(var i=0;i<yilou.length;i++){
        if(yilou[i].offsetTop<scrollT2+ch){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
                var imgs=$("img",yilou[i]);//获取当前楼层的所有图片
                for(var j=0;j<imgs.length;j++){//遍历图片
                  imgs[j].src=imgs[j].getAttribute("aa");//把每一个图片的aa属性的值赋值给src属性即可
                }
            
        }
      }
     // }   


      }





//楼层轮播
function aa(a){
    var t=setInterval(moveleft,1800);
            function moveleft()
          {
             var father=$(".imgs")[a];
             var first=getFirst(father);
             animate(father,{left:-190},1500,Tween.Linear,function(){//用回调函数来等动画执行完成在运行恢复功能，如果写在外边会导致在执行动画的过程中会同时执行下边的代码导致效果错误
                    father.appendChild(first);
                  father.style.left=0+"px";
               });   
          }
        function moveright()
        {
             var father=$(".imgs")[a];
             var last=getLast(father);
             var first=getFirst(father);
             father.style.left=-190+"px";
             father.insertBefore(last,first);
             animate(father,{left:190},1500,Tween.Linear);
             animate(father,{left:0},1000,Tween.Linear);
         }
         var left=$(".celeft")[a];
         var right=$(".ceright")[a];
         left.onmouseover=right.onmouseover=function()
         {
             clearInterval(t);
         }
         left.onmouseout=right.onmouseout=function()
         {
            t=setInterval(moveleft,1800);
         }
             left.onclick=function()
             {
               moveleft();
             }
             right.onclick=function()
             {
                moveright();
             }

}

aa(0);
aa(1);
aa(2);
aa(3);
aa(4);
aa(5);
aa(6);
aa(7);    
aa(8);
aa(9);
aa(10);
aa(11);





 
/////下拉菜单
var yiji=$(".yijiqwe");
    var erji=$(".erji");
      for(var i=0;i<yiji.length;i++){
           yiji[i].index=i;
           hover(yiji[i],function(){
            var lis=$("li",erji[this.index]);
            var h=lis[1].offsetHeight;
            erji[this.index].style.height=0+"px";
            animate(erji[this.index],{height:lis.length*h},600,Tween.Linear);
          },function(){
            var lis=$("li",erji[this.index]);
             var h=lis[1].offsetHeight;
            erji[this.index].style.height=0+"px";
            animate(erji[this.index],{height:0},600,Tween.Linear);
          })
      }







     var xuanze1=$(".xuanze1")[0];
     var candansq=$(".candansq")[0]; 
     xuanze1.onmouseover=function(){
      candansq.style.display="block";
    
     candansq.onmouseover=function(){
       candansq.style.display="block"
     }
     }

     
     candansq.onmouseout=function(){
       candansq.style.display="none"
     }
     xuanze1.onmouseout=function(){
       candansq.style.display="none"
     }

    
function  ares(a){
    var rrrr=$(".rrrr")[a];
    var youtankuang=$(".youtankuang")[0];
    rrrr.onmouseover=function(){
      youtankuang.style.display="block"
      youtankuang.onmouseover=function(){
       youtankuang.style.display="block"
     }
    }

    

     youtankuang.onmouseout=function(){
        youtankuang.style.display="none"
     }
     rrrr.onmouseout=function(){
        youtankuang.style.display="none"
     }

  }
  ares(0);
  ares(1);
  ares(2);
  ares(3);
  ares(4);
  ares(5);
  ares(6);
  ares(7);
  ares(8);
  ares(9);
  ares(10);
  ares(11);
  ares(12);
  ares(13);
  ares(14);



    var yctu=$(".yctu1q");
     var ycz=$(".yincangzi");
     var yincangzi=$(".yincangzi");
     for(var i=0;i<yctu.length;i++){
        yctu[i].index=i;
        yctu[i].onmouseover=function(){
           ycz[this.index].style.display="block"; 
        
        } 
            yctu[i].onmouseout=function(){
         ycz[this.index].style.display="none";
                      
             }
  }

   var fsd=$(".fanhuidingbu")[0];
    fsd.onclick=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
     animate(obj,{scrollTop:0}) 
    }


         var xlcdgt=$(".xlcdgt");
          var bbmm=$(".bbmm");
      for(var i=0;i<xlcdgt.length;i++){
           xlcdgt[i].index=i;
           hover(xlcdgt[i],function(){
            var lis=$("li",bbmm[this.index]);
            var h=lis[0].offsetHeight;
            bbmm[this.index].style.height=0+"px";
            animate(bbmm[this.index],{height:lis.length*h},600,Tween.Linear);
          },function(){
            var lis=$("li",bbmm[this.index]);
             var h=lis[0].offsetHeight;
            bbmm[this.index].style.height=0+"px";
            animate(bbmm[this.index],{height:0},600,Tween.Linear);
          })
      }







}
