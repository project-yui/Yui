const url = new URL('/external-download?url=uuuuuu&test=tttt', `http://127.0.0.1`);
console.log(url.searchParams.get('url'))