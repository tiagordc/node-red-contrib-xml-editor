'use strict';

module.exports = function (RED) {

    function XmlEditor(config) {

        RED.nodes.createNode(this, config);

		var node = this;
		
        node.on('input', function (msg, nodeSend, nodeDone) {
			nodeSend(msg);
			nodeDone();
        });

        node.on("close",function() {
            node.status({});
        });

    };

    RED.nodes.registerType("xml-editor", XmlEditor);

};