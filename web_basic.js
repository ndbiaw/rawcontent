var i=0;
setInterval(function(){
    var titles=['Nguyễn Duy Bách', 'Chế Thiên Thảo', 'Yêu xa~', 'Mãi yêu Thảo', 'Yêu Thảo rất nhiều~', 'Đếm ngày yêu~', 'Hôn Thảo Moaz~'];
    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 5000);