(function () {
    const html = document.documentElement;
    const progressBar = document.createElement("div");
    const progressBarInner = document.createElement("div");

    progressBar.className = "progress-bar";
    progressBarInner.className = "progress-bar__inner";

    progressBar.append(progressBarInner);

    document.body.prepend(progressBar);

    window.addEventListener("scroll", () => {
        const height = html.scrollHeight - window.innerHeight;
        const scrolled = html.scrollTop / height * 100;

        progressBarInner.style.width = `${scrolled}%`;
    })
})()