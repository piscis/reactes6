import http from 'http';
import url from 'url';

export default class Loader {

  static loadRemoteFile(fileUrl, onLoaded) {

    let data = '';
    let options = url.parse(fileUrl);
    options.withCredentials = false;

    const request = http.request(options, function(res) {
      res.on('data', function(chunk) {data += chunk;});
      res.on('end', function() {
        onLoaded(null, data);
      });
    });

    request.on('error', function(e) { onLoaded(e); });
    request.end();
  }
}
