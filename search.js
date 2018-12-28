// require('ssl-root-cas').inject();
var cheerio = require('cheerio');
var https = require('https');
var iconv = require('iconv-lite');
var arr = require('./videoList');

// const superagent = require('superagent');  // 引入SuperAgent
// require('superagent-proxy')(superagent);  // 引入SuperAgent-proxy
var i = 0
arr.forEach(function(eleList){
    i=i+1000
    setTimeout(function(){
        var url = encodeURI('https://www.youtube.com/results?search_query='+eleList);
        console.log(eleList)
        //var url = encodeURI('https://www.baidu.com/?tn=94855285_hao_pg');
        var list = eleList.split("+")
        if(list.length===0){
            return
        }
    
        // var url = encodeURI('http://www.ygdy8.net/html/gndy/dyzz/index.html');
        // return
        
        // https.get(encodeURI(url), function(sres) {
        //     var chunks = [];
        //     sres.on('data', function(chunk) {
        //       chunks.push(chunk);
        //     });
        //     // chunks里面存储着网页的 html 内容，将它zhuan ma传给 cheerio.load 之后
        //     // 就可以得到一个实现了 jQuery 接口的变量，将它命名为 `$`
        //     // 剩下就都是 jQuery 的内容了
        //     // sres.on('end', function() {
        //     //   var titles = [];
        //     //   //由于咱们发现此网页的编码格式为gb2312，所以需要对其进行转码，否则乱码
        //     //   //依据：“<meta http-equiv="Content-Type" content="text/html; charset=gb2312">”
        //     //   var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
        //     //   var $ = cheerio.load(chunks, {decodeEntities: false});
        //     //   $('ytd-search').each(function (idx, element) {
        //     //     var $element = $(element);
        //     //     titles.push({
        //     //       title: $element.text()
        //     //     })
        //     //   })    
        //     //   console.log(titles);     
        //     // });
        //   });
        
        
        var request =require('superagent');
        require('superagent-proxy')(request);
        
        var fs = require('fs');
        
        
        var proxy = 'http://127.0.0.1:1080';
        
        var header = {
            strictSSL: false,
            rejectUnauthorized: false,
            agent: false,
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate, sdch, br',
            'Accept-Language':'zh-CN,zh;q=0.8,zh-TW;q=0.6',
            'Cache-Control':'max-age=0',
            'Cookie':'VISITOR_INFO1_LIVE=XmCTkh5p93o; PREF=f1=50000000; _ga=GA1.2.1601870359.1544085815; _gid=GA1.2.1036384960.1544085815; YSC=IUCOELsDj7w; GPS=1; ST-1b8b7tc=oq=%E7%99%BD%E8%9F%92%E4%BD%94%E9%BE%8D%E5%AE%AB%20%E7%A7%A6%E5%B0%8F%E6%A2%A8&gs_l=youtube.12...0.0.0.286.0.0.0.0.0.0.0.0..0.0....0...1ac..64.youtube..0.0.0....0.&feature=web-masthead-search&itct=CB0Q7VAiEwiK14__3ozfAhUCysQKHfUNAXco9CQ%3D&csn=TeQJXMr8L4KUkwb1m4S4Bw',
            'Upgrade-insecure-requests':'1',
            'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36',
            'X-Chrome-Uma-Enabled':'1',
            'X-Client-Data':'CIe2yQEIprbJAQjBtskBCKmdygEIu53KAQioo8oBGPmlygE=',
            'Connection': 'keep-alive',
            'requestCert': true
            
            //     'Host': 'www.youtube.com',
            //     'Connection': 'keep-alive',
            //     'X-YouTube-STS': 17871,
            //     'X-YouTube-Page-Label': 'youtube.ytfe.desktop_20181205_5_RC2',
            //     'User-Agent':' Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
            //     'X-YouTube-Variants-Checksum': 'd149c0c2e8b1cf3c2c3629437c34b5b8',
            //     'X-YouTube-Page-CL': '224297709',
            //    ' X-SPF-Referer': 'https://www.youtube.com/results?search_query=%E7%99%BD%E8%9F%92%E4%BD%94%E9%BE%8D%E5%AE%AB+%E7%A7%A6%E5%B0%8F%E6%A2%A8',
            //     'X-YouTube-Utc-Offset': 480,
            //     'X-YouTube-Client-Name': 1,
            //     'X-SPF-Previous': 'https://www.youtube.com/results?search_query=%E7%99%BD%E8%9F%92%E4%BD%94%E9%BE%8D%E5%AE%AB+%E7%A7%A6%E5%B0%8F%E6%A2%A8',
            //     'X-YouTube-Client-Version': '2.20181206',
            //     'Accept': '*/*',
            //     'X-Client-Data': 'CIe2yQEIprbJAQjBtskBCKmdygEIu53KAQioo8oBGPmlygE=',
            //     'Referer': 'https://www.youtube.com/results?search_query=%E7%99%BD%E8%9F%92%E4%BD%94%E9%BE%8D%E5%AE%AB+%E7%A7%A6%E5%B0%8F%E6%A2%A8',
            //     'Accept-Encoding': 'gzip, deflate, br',
            //     'Accept-Language': 'zh-CN,zh;q=0.9',
            //     'Cookie':' VISITOR_INFO1_LIVE=XmCTkh5p93o; PREF=f1=50000000; _ga=GA1.2.1601870359.1544085815; _gid=GA1.2.1036384960.1544085815; YSC=IUCOELsDj7w; GPS=1; ST-1b8b7tc=oq=%E7%99%BD%E8%9F%92%E4%BD%94%E9%BE%8D%E5%AE%AB%20%E7%A7%A6%E5%B0%8F%E6%A2%A8&gs_l=youtube.12...0.0.0.286.0.0.0.0.0.0.0.0..0.0....0...1ac..64.youtube..0.0.0....0.&feature=web-masthead-search&itct=CB0Q7VAiEwiK14__3ozfAhUCysQKHfUNAXco9CQ%3D&csn=TeQJXMr8L4KUkwb1m4S4Bw'
                };
        
        request
            .get(url)
            .set('header',header)
            .proxy(proxy)
            .end(onresponse);
        
        function onresponse(err,res){
           
            // console.log(err)
            // res.setEncoding('utf-8'); //防止中文乱码
            if(err){
                console.log(err);
                fs.appendFile('err.txt',eleList+" "+err+"\n\n\n",function(err){
                    if(err){
                        return console.log(err);
                    }
                });
            }else{
                console.log('status:'+res.status);
                //console.log(res.headers);
                // console.log(res.text);
                var $ = cheerio.load(res.text, {decodeEntities: false});
                var titles = []
                // $(".ytd-thumbnail-overlay-time-status-renderer")/////////////////////////////////////////////
                // $('.yt-lockup-title a').each(function (idx, element) {
                    $('.yt-lockup-video').each(function (idx, element) {
                    var $element = $(element);
                    var objTitle = $element.find(".yt-lockup-title a").attr("title")
                    var objTime = $element.find(".video-time").text()
                    var timeArr = objTime.split(":")
                    if(objTitle && objTitle.indexOf(list[0])!==-1 && objTime && (timeArr.length ===3 || parseInt(timeArr[0])>15)){
                        if(objTitle.indexOf(list[1])!==-1){
                            var objHref =  $element.find(".yt-lockup-title a").attr("href")
                        
                            titles.push({
                              title: objTitle,
                              objTime:objTime,
                              objHref:"https://www.youtube.com"+objHref
                            })
                            return
                        }
                    }
                    
                  })    
                  console.log(titles); 
                  console.log("total:"+titles.length)
        
                if(titles.length!==0){
                    //将res.text写入json文件
                    fs.appendFile('vediohome.json',JSON.stringify({
                        status: list[0],
                        data: titles
                    })+",",function(err){
                        if(err){
                            return console.log(err);
                        }
                        console.log('完成');
                    });
                }
                
            }
        }
    },i)
   
}
)