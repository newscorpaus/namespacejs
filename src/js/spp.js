/**
 * Created by cahillr on 6/24/16.
 */

window.spp = window.spp || {};

window.spp.namespace = function namespace(name, object ) {
	if (!object) {
		object = null;
	}

	var segments = name.split('.');
	var firstSegment = segments[0];
	var lastSegment = segments[ segments.length - 1 ];
	var namespaceObject = undefined;

	// At this point, the firstSegment object is in the stack and can be used
	var namespace = '';
	segments.forEach(function(segment) {
		switch(segment) {
			case firstSegment:
				namespace = firstSegment;

				try {
					eval(firstSegment);
				} catch(e) {
					eval('window.' + firstSegment + '= {}'); // will evauate to (example): SPP = {}
				}
				break;
			case lastSegment:
				namespace = namespace + '.' + lastSegment;

				// Passed in object or a blank object is assigned to the last node
				if (null !== object) {
					eval(namespace + '= object');
				} else {
					eval(namespace + '= {}');
				}
				break;
			default:
				namespace = namespace + '.' + segment;

				// Build on previous node
				if(eval(namespace) == undefined) {
					eval(namespace + '= {}');
				}
				break;
		}
	});

	namespaceObject = eval(namespace);

	return namespaceObject;
};