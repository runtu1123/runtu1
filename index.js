// 轮播图定时器
var imgs = document.querySelectorAll(".zhuti-img")
var sum = 1
setInterval(function(){
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].className = "zhuti-img"
    }
    if(sum>=7){
        sum=0
    }
    imgs[sum].className = "zhuti-img active"
    sum++
}, 2000)
// 选择城市的效果
var lis=document.querySelectorAll(".cs>li")
for(var i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        for(var i=0;i<lis.length;i++){
            lis[i].className=""
        }
        this.className="dian"
    }
}
// 下方卡片框框的开关
var  kaiguans=document.querySelectorAll(".kaiguan");
var  divs=document.querySelectorAll(".card>ul div");
for(var i=0;i<kaiguans.length;i++){
    kaiguans[i].onclick=function(){
        for(var i=0;i<kaiguans.length;i++){
            kaiguans[i].className="kaiguan guan"
        }
        var zhanshi=this.parentNode.parentNode.childNodes[3]
        if(zhanshi.className==""){
            for(var i=0;i<divs.length;i++){
                divs[i].className="height-0"
            }
            this.className="kaiguan guan"
            zhanshi.className="height-0"
        }else{
            for(var i=0;i<divs.length;i++){
                divs[i].className="height-0"
            }
            zhanshi.className=""
            this.className="kaiguan kai"
        }
        
    }
}