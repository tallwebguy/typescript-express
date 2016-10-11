// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/26f276c0032b2c27647e69097ca20eb7f2b1e21b/mime/mime.d.ts
declare module "mime" {
	export function lookup(path: string): string;
	export function extension(mime: string): string;
	export function load(filepath: string): void;
	export function define(mimes: Object): void;

	interface Charsets {
		lookup(mime: string): string;
	}

	export var charsets: Charsets;
	export var default_type: string;
}
