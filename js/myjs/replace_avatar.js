var image_num_arr = [1,2,3,4,5,6,7,8,9];
var image_num = image_num_arr[Math.floor((Math.random()*image_num_arr.length))];
var image_url = "/images/touxiang"+image_num+".jpg";
$('.site-author-image').attr('src',image_url);
//console.log(touxiang);

