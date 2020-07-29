function message() {
    const message =
        'You are about to visit an external website not managed by Home from Hospital Care.\n\nPress Ok to continue or Cancel to return to our site';

    if (confirm(message)) {
        window.open("https://homefromhospitalcare.enthuse.com/Donate#!/");
    } else {
        location = location;
    }
}