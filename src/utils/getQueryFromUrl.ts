export default function getQueryFromUrl() {

    let urlParams = new URLSearchParams(window.location.search);
    let params: {
        [arg: string]: string,
    } = {};

    urlParams.forEach((p, key) => {
        params[key] = p;
    });

    return params;
}