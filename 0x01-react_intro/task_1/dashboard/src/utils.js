export function getFullYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

export function getFooterCopy(isIndex) {
    let footerText;

    if (isIndex) {
        footerText = "Holberton School";
    } else {
        footerText = "Holberton School main dashboard";
    }

    return footerText;
}