//banner效果
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagerbox li");
    let banner = document.querySelector("#banner");


    //轮播点的动画效果
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        };
    });

    //图片的动画效果
    let n = 0;

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    let t = setInterval(move, 3000);

    //鼠标移入移除效果
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    };


    // let flag=true;
    // next.onclick = function () {
    //     if(flag){
    //         flag=false;
    //         move();
    //     }
    // };
    // prev.onclick=function(){
    //     if(flag){
    //         flag=flase;
    //         n+=2;
    //         move();
    //     }
    // };
    // imgs.forEach(function(ele,index){
    //     ele.addEventListener("transitionend",function () {
    //         flag=true;
    //     })
    // })
}

{
    const prev = document.querySelector(".box_up2");
    const next = document.querySelector(".box_up1");
    const inner = document.querySelector(".buy_inner");

    var n = 0;
    next.onclick = function () {
        n++;
        prev.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner.style.marginLeft = -840 * n + "px";
    }
    prev.onclick = function () {
        n--;
        next.classList.remove("disable");
        if (n === 0) {
            prev.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner.style.marginLeft = -840 * n + "px";

    }
}

//选项卡效果
{
    // function content(parent) {
    const types = document.querySelectorAll(".type");
    const goods = document.querySelectorAll(".goodslist");

    types.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < types.length; i++) {
                types[i].classList.remove("active3");
                goods[i].classList.remove("active3");
            }
            this.classList.add("active3");
            goods[index].classList.add("active3");
        };
    });
}

// const contentList = document.querySelectorAll(".content");
// content(contentList[0]);
// }
{
    let menu = document.querySelector(".nav");
    let items = document.querySelectorAll(".item");
    const R = 200;
    let n = 1;
    menu.onclick = function () {
        n++;
        if (n % 2 === 0) {
            items.forEach(function (ele, index) {
                let angle = index * Math.PI / 3;
                let x = R * Math.cos(angle);
                let y = R * Math.sin(angle);
                ele.style.left = x + "px";
                ele.style.top = y + "px";
            });
        } else {
            items.forEach(function (ele, index) {
                ele.style.left = 0;
                ele.style.top = 0;
            });
        }
    };
}
{
    let contentinners = document.querySelector(".content_inner");
    let inner = document.querySelectorAll(".div888_2");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");

    let n = 0;
    next.onclick = function () {
        n++;
        if (n === inner.length) {
            n = inner.length - 1;
            return;
        }
        contentinners.style.marginLeft = n * -296 + "px";
    };
    prev.onclick = function () {
        n--;
        if (n < 0) {
            n = 0;
            return;
        }
        contentinners.style.marginLeft = n * -296 + "px";
    };
}

//totop
{
    let totop = document.querySelector(".totop");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25);
    };


    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");

    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 400) {
            topbar.style.display = "block";
        } else {
            topbar.style.display = "none";
        }
        if (800 < st) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }

    };
    // let lou=document.querySelectorAll(".div0310");
    // let containers=document.querySelectorAll(".leftbar div");
    // lou.forEach(function(ele,index){
    //     ele.onclick=function(){
    //         let os=document.documentElement.scrollTop;
    //         let now=containers[index].offsetTop-80;
    //         let time=0;
    //         let speed=(os-now)/8;
    //         let t=setInterval(function(){
    //             time+=25;
    //             now+=speed;
    //             if(time===200){
    //                 clearInterval(t);
    //             }
    //             document.documentElement.scrollTop=now;
    //         },25);
    //     }
    // });
    // window.addEventListener("scroll",function(){
    //     if(flag) {
    //         let st = document.documentElement.scrollTop;
    //         for (let i = 0; i < containers.length; i++) {
    //             if (st > containers[i].offsetTop - 50) {
    //                 for (let i = 0; i < tips.length; i++) {
    //                     tips[i].classList.remove("active1");
    //                 }
    //                 tips[i].classList.add("active1");
    //             }
    //         }
    //     }
    // })
}


{
    let inner = document.querySelector(".inner");
    let prev = document.querySelector(".prev1");
    let next = document.querySelector(".next1");

    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag=false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1005 * n + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag=false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1005 * n + "px";
        }
    };
    inner.addEventListener("transtionend", function () {
        flag=true;
        if (n === 4) {
            inner.style.transition = "none";
            inner.style.marginLeft = -1005 + "px";
            n = 1;
        }
        if (n === 0) {
            inner.style.transition = "none";
            inner.style.marginLeft = -3015 + "px";
            n = 3;
        }
    })
}