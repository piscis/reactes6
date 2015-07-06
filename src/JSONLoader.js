import http from 'http';
import url from 'url';

export function loadRemoteFile(fileUrl, onLoaded) {

  var data = '';
  var options = url.parse(fileUrl);
  var request = http.request(options, function(res) {

    res.on('data', function(chunk) {data += chunk;});
    res.on('end', function() {
      var result = JSON.parse(data);

      if(("groups" in result)){
        onLoaded(null, result);
      }else{
        onLoaded(null, {});
      }

    });

  });

  request.on('error', function(e) { onLoaded(e); });
  request.end();
};