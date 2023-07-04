import DOMPurify from "dompurify";

export const parseLinks = (text: string) => {
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?([^\s]+(\.ru|\.com|\.ai|\.рф|\.app|\.net|\.org|\.io|\.gov|\.edu|\.mil|\.int)[^\s]*)/g;

    const sanitizedText = DOMPurify.sanitize(text, {
        FORBID_TAGS: ["a"],
        ADD_ATTR: ['class'],
    });

    const textWithEncodedHtml = sanitizedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const textWithLinks = textWithEncodedHtml.replace(urlRegex, (url, domainAndPath) => {
        const fullUrl = url.startsWith("http") ? url : `https://${url}`;
        if (domainAndPath.length > 40) domainAndPath = domainAndPath.slice(0, 40) + "...";
        return `<a href="${fullUrl}" class="text-link-foreground hover:text-link-foreground/80">${domainAndPath}</a>`;
    });


    return textWithLinks;
};