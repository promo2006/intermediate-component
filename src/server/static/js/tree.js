var myTree;
var myMenu;

function initTree(data, userLanguage) {

	let treeJsonDataVacio = {
		'id': 0,
		'item': []
	};

	if (data && data.length > 0) {
		treeJsonDataVacio = formatJSON(data);
	}

	myMenu = new dhtmlXMenuObject(null, '');
	myMenu.renderAsContextMenu();

	if (userLanguage === 'es') {
		myMenu.loadStruct('/static/dhtmlx/menu/es.menu.xml');
	} else if (userLanguage === 'en') {
		myMenu.loadStruct('/static/dhtmlx/menu/en.menu.xml');
	} else if (userLanguage === 'fr') {
		myMenu.loadStruct('/static/dhtmlx/menu/fr.menu.xml');
	} else {
		myMenu.loadStruct('/static/dhtmlx/menu/es.menu.xml');
	}

	myTree = new dhtmlXTreeObject('treeboxbox_tree', '100%', '100%', 0);
	myTree.setImagePath('/static/dhtmlx/skins/skyblue/imgs/dhxtree_skyblue/');
	myTree.enableTreeLines(true);
	myTree.enableDragAndDrop(true);
	myTree.setDragBehavior('complex');
	myTree.enableItemEditor(true);
	myTree.setEditStartAction(false, false);
	myTree.setDataMode('json');
	myTree.parse(treeJsonDataVacio, 'json');
	var obj = { myTree: myTree, myMenu: myMenu };
	return obj;
}

function createGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16).toUpperCase();
	});
}

function formatJSON(data) {
	var out = {
		"id": 0,
		"item": []
	};
	var obj, find;
	for (var i = 0; i < data.length; i++) {
		var d = createGuid();
		obj = data[i];
		if (obj.description && !obj.category1 && !obj.category2) {
			out.item.push({
				id: obj.id,
				text: data[i].description,
				child: 1,
				item: []
			});
		}
		else if (obj.description && obj.category1 && !obj.category2) {
			find = out.item.find(function (x) {
				return x.text === obj.category1;
			});
			if (find) {
				find.item.push({
					id: obj.id,
					text: obj.description,
					child: 1,
					item: []
				});
			}
			else {
				out.item.push({
					id: d,
					text: obj.category1,
					child: 1,
					item: [{
						id: obj.id,
						text: obj.description,
						child: 0,
						item: []
					}]
				});
			}
		}
		else if (obj.description && obj.category1 && obj.category2) {
			var d2 = createGuid();

			find = out.item.find(function (x) {
				return x.text === obj.category1 && x.item.length > 0;
			})
			if (find) {
				var find2 = find.item.find(function (x) {
					return x.text === obj.category2 && x.item.length > 0;
				})
			}

			if (find2) {
				find2.item.push({
					id: obj.id,
					text: obj.description,
					child: 0,
					item: []
				});
			}
			else if (find) {
				find.item.push({
					id: d2,
					text: obj.category2,
					child: 1,
					item: [{
						id: obj.id,
						text: obj.description,
						child: 0,
						item: []
					}]
				});
			}
			else {
				out.item.push({
					id: d,
					text: obj.category1,
					child: 1,
					item: [{
						id: d2,
						text: obj.category2,
						child: 1,
						item: [{
							id: obj.id,
							text: obj.description,
							child: 0,
							item: []
						}]
					}]
				});
			}
		}
	}
	return out;
}
