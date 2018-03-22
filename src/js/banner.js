var carousel =$('carousel');
var carouselList=$('carousel-list');
var carouselLi=carouselList.children;
var directionBtn = $('direction-btn');
var next=$('next');
var prev=$('prev');
var index=0;
var iPerW=192;
// 复制第一张
carouselList.innerHTML += carouselLi[0].outerHTML;

// 计算UL的宽度
carouselList.style.width = carouselLi.length * iPerW + 'px';

// 鼠标进入事件
carousel.onmouseover = function () {
	// 清除定时器
	// clearInterval(timer);
	directionBtn.style.display = 'block';
};

// 鼠标离开事件
carousel.onmouseout = function () {
	// 打开定时器
	// autoMove();
	directionBtn.style.display = 'none';
};


prev.onclick = function () {
	index--;
	// dotIndex--;

	if(index < 0) {
		// 将index设置成显示图片的下标
		index = carouselLi.length - 2;
		carouselList.style.left = - (carouselLi.length - 1) * iPerW  + 'px';
	}
	bufferMove(carouselList, {left:- index * iPerW});


};

// 右侧按钮点击事件
next.onclick = function () {
	rightMove();
};



// 自动运行
// function autoMove() {
// 	timer = setInterval(function () {
// 		rightMove();
// 	}, 3000);
// }


function rightMove() {
	index++;
	// dotIndex++;

	if(index >= carouselLi.length) {
		// 将index设置成显示图片的下标
		index = 1;
		carouselList.style.left = '0';
	}
	bufferMove(carouselList, {left:- index * iPerW});


}