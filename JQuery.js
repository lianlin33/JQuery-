// $(document)    - 選取器：尋找整份網頁物件
// ready();       - 方法：準備完成 - 當指定物件準備完成會執行 () 內容
// function() 方法、函式
// function() {}  - 匿名方法：可以在 {} 內執行任何事情
// alert();       - 方法：跳出訊息 () 內可以輸入任何文字，必須用 ""
$(document).ready(function () {

    alert("HI~~Welcome!!!");
    $("h1").hide();
    $("#box1").addClass("gold");
    $("#box2").fadeOut(1000).fadeIn(2000);

    $("#box3").mouseenter(function () { 
        $(this).animate({width:"200px"});
    });
    $("#box3").mouseout(function () { 
        $(this).animate({width:"100px"})
    });
});