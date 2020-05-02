export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/fvtt-module-river/templates"
	];

	return loadTemplates(templatePaths);
}
