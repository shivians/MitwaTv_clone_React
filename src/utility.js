import config from "./config";

const convertToSlug = function (Text)
{
    return Text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}

const createUrl = (Text) => {
    let url = config.API_BASE_URL + convertToSlug(Text);
    return url;
}

const utility = {
    convertToSlug: convertToSlug,
    createUrl: createUrl
}

export default utility;