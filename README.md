# JavaScript 題目篇 - 新手 JS 地下城
 ![image]( https://github.com/HuiyuLiz/js-lightbox/blob/master/img/screenshot-3.jpg)  
 
11F - 燈箱效果 <a href="https://huiyuliz.github.io/js-lightbox/" target="_blank">Demo</a>，採原生 JS 破關，排版使用 SCSS 進行響應式設計。

 ## 特定技術 
 1.不可用 JS 框架，只能單純用原生 JS。  
 2.需符合響應式設計，什麼你說設計稿沒提供？嗯，你是勇者嘛，通靈什麻的一定略懂略懂嘍  
 3.當螢幕伸縮(resize)時，介面與 JS 功能也需正常
 
  ## 點選照片顯示 Modal(互動視窗)  
  
 ![image]( https://github.com/HuiyuLiz/js-lightbox/blob/master/img/screenshot-2.jpg)  
 
  ```js
  //選取網頁上所有的照片 (共 6 張)
  let imgs = document.querySelectorAll('.list-item img')
  
  //分別綁定 click 事件
  imgs.forEach(function (img, i) {
  img.addEventListener('click', (img) => {
  
  //讓Modal的網址等於當下選取照片的網址
    modalImage.src = img.target.src  
    
  //顯示Modal(原本為display:none)  
    modal.style.display = "flex"  
    
  //指定索引數，作為上一張或下一張的索引數    
    index = i  
    
  //頁面顯示第幾張(陣列起始值是 0，因此加 1)      
    contentIndex.innerHTML = index + 1  
    
  //執行動畫(SCSS filter: grayscale(80%))     
    animation()  
  })
}) 
  ```  
  ## 顯示上一張  
  將 index 作為使用 imgs 的索引，如imgs[index]。當 index 大於1，每按一次， index 減 1 ；翻到第一張 imgs[0] 後，再按上一張時會顯示 imgs[5] (imgs 陣列長度 6 減 1)。
  ```js
  let prevSlide = function () {
    index > 0 ? index-- : index = imgs.length - 1
    modalImage.src = imgs[index].src
    contentIndex.innerHTML = index + 1
    animation()
  }

  prev.addEventListener('click', prevSlide)
  ```  
  ## 顯示下一張  
  當 index 小於 5(imgs 陣列長度 6 減 1)，每按一次， index 加 1；按到最後一張時回到第一張 index = 0，進行輪播。
  ```js
  let nextSlide = function () {
    index < imgs.length - 1 ? index++ : index = 0
    modalImage.src = imgs[index].src
    contentIndex.innerHTML = index + 1
    animation()
  }
  
  next.addEventListener('click', nextSlide)
  ```  
  ## 點選按鈕關閉 Modal
  將 Modal 設回 display:none  
  
```js
 let closeModal = function () {
   modal.style.display = "none"
 }
  
 closeButton.addEventListener('click', closeModal)
```  
  ## 點選外部關閉 Modal
  點選照片和文字以外灰色的四周可以關閉 Modal  
  
```js
 let closeOutside = function (e) {
    if (e.target === modal) {
    modal.style.display = "none"
    }
 }
  
 window.addEventListener('click', closeOutside)
```  
  ## 照片底下沒有滿版怎麼辦? 除了 vertical-align:baseline 以外的解決方法
   ![image]( https://github.com/HuiyuLiz/js-lightbox/blob/master/img/screenshot-1.jpg)    
   
   基於 img 預設 vertical-align: baseline，可以看到圖片底下因沒有滿版而出現的空隙，解決的方式如下。
   
```css
img{
 //第一種方法
  display: block;

  //第二種方法(top 或 middle 或 bottom)
  vertical-align: top;
}
```  

  ## 參考資料
  <a href="https://www.zhangxinxu.com/wordpress/2015/03/css3-object-position-object-fit/" target="_blank">半深入理解CSS3 object-position/object-fit屬性</a>  
<a href="https://pjchender.blogspot.com/2015/04/css-3vh-vw.html" target="_blank">[筆記] 好用的css 3新單位vh vw ─ 讓你的圖片可以隨著螢幕大小而不同</a>  
  <a href="https://www.youtube.com/watch?v=afoxd5b0bJo" target="_blank">Modern Image Gallery With ES6 Vanilla JavaScript</a>   
  <a href="https://www.youtube.com/watch?v=wWWNrANNO1k" target="_blank">Full Screen Responsive Image Slider</a>    
  <a href="https://www.youtube.com/watch?v=2iclZL9SUqA" target="_blank">你的 jQuery 我來 VUE 第一集：簡易輪播篇</a>       
   
  
