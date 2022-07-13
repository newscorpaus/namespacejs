# namespacejs
Namespacejs allows namespaces in JavaScript. ES5 compatible.

EXAMPLE
```
(function(namespace) {
	let helloService = namespace('MyCompany.HelloService', {
		hello : function() {
			console.log('Hi there!');
		}
	});
})(window.spp.namespace);
```
