import { serve } from "https://deno.land/std/http/server.ts";
import { copyFile, getFileList, readFile, readFileRaw } from "./tools/tool.ts";
import { template } from "./page.ts";


const PORT = 8000;

const s = serve( {
	port : PORT
} );

await copyFile( "./less/index.css", "./public/assets/css/index.min.css" );

const indexCss = await readFile( "./public/assets/css/index.min.css" );

await copyFile( "./less/index.css.map", "./public/assets/css/index.min.css.map" );

const indexCssMap = await readFile( "./public/assets/css/index.min.css.map" );

const fileNames = await getFileList( "./public/assets/img" );

const assetsMap = new Map();

for ( const fileName of fileNames ) {
	assetsMap.set( "/assets/img/" + fileName.path, await readFileRaw( fileName.absolutePath ) );
}

console.log( `Server running on http://localhost:${ PORT }` );

for await ( const req of s ) {
	if ( req.url === "/" ) {
		req.respond( { body : template } );
	} else if ( req.url === "/css/index.min.css" ) {
		req.respond( { body : indexCss } );
	} else if ( req.url === "/css/index.css.map" ) {
		req.respond( { body : indexCssMap } );
	} else if ( req.url.startsWith( "/assets/img" ) ) {
		let headers = new Headers();
		if(req.url.endsWith('.svg')) {
			headers.set("content-type", "image/svg+xml");
		} else {
			 headers.set("content-type", "image/png");
		}
		req.respond( {
			headers , body : assetsMap.get( req.url ), status : 200
		} );
	} else {
		console.log( req.url );
		req.respond( { status : 404 } );
	}
}