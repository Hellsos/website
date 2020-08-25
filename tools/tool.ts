import { walk } from "https://deno.land/std/fs/mod.ts";

/**
 *
 * @param path
 */
async function readFile( path : string ) : Promise<string> {
	console.log( `${ path }: Loading...` );
	const file = await Deno.open( path );
	const decoder = new TextDecoder( "utf-8" );
	const text = decoder.decode( await Deno.readAll( file ) );
	console.log( `${ path }: Loaded` );
	return text;

}

/**
 *
 * @param path
 */
async function readFileRaw( path : string ) : Promise<Uint8Array> {
	console.log( `${ path }: Loading...` );
	const raw = await Deno.readFile(path);
	console.log( `${ path }: Loaded` );
	return raw;
}

/**
 *
 * @param sourcePath
 * @param destinationPath
 */
async function copyFile( sourcePath : string, destinationPath : string ) {
	console.log( `${ sourcePath } -> ${ destinationPath }: Copying assets` );
	await Deno.copyFile( sourcePath, destinationPath );
	console.log( `${ sourcePath } -> ${ destinationPath }: Copied` );
}

/**
 *
 * @param directoryPath
 */
async function getFileList( directoryPath : string ) {
	const fileNames = [];
	for await ( const entry of walk( directoryPath ) ) {
		const fileName = entry.path.substr( directoryPath.length - 1 );

		if ( entry.isFile ) {
			fileNames.push( {path: fileName, absolutePath: entry.path} );
		}
	}
	return fileNames;
}

export {
	readFileRaw,
	readFile,
	copyFile,
	getFileList
};