sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/library'], function(Core, coreLib) {
	sap.ui.getCore().initLibrary({
		name: 'testlibs.scenario9.lib1',
		dependencies: [
		],
		noLibraryCSS: true
	});
	return testlibs.scenario9.lib1;
});