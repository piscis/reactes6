export default class RawKataData {

  constructor(loadRemoteFile, url) {
    this.loadRemoteFile = loadRemoteFile;
    this.url = url;
  }

  load(onError, onSuccess) {

    this.loadRemoteFile(this.url, (err, data) => {

      if (err) {
        onError(err);
      } else {
        let parsed;
        try {
          parsed = JSON.parse(data);
        } catch (e) {
          onError('JSON parsing error');
          return;
        }
        if (!('groups' in parsed)) {
          onError(new Error('Wrong format'));
        } else {
          onSuccess(parsed);
        }
      }

    });
  }
}
