import useBasename from 'history/lib/useBasename';

export default function withBasename(history, dirname) {
	console.log("dir", dirname);
	return useBasename(() => history)({ basename: `/${dirname}` })
}