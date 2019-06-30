var page1 = document.getElementById('page1');


page1.onclick = function(event){
    event.preventDefault;

    document.getElementById('CV').innerHTML = '<img src="CV/001.jpg" alt="Resume Page 1"></img>'
};

var page2 = document.getElementById('page2')

page2.onclick = function(event){
    event.preventDefault;

    document.getElementById('CV').innerHTML = '<img src="CV/002.jpg" alt="Resume Page 2"></img>'
};