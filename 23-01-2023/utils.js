const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const quoteCard = (data) => {
    const containerEl = cE("div");
    const textContainerEl = cE("div");
    const authorEl = cE("p");
    const quoteEl = cE("p");
    containerEl.className = "quote-card";
    textContainerEl.className = "quote-card__text";
    authorEl.textContent = data.author;
    quoteEl.textContent = data.quote;

    textContainerEl.append(authorEl, quoteEl);
    containerEl.appendChild(textContainerEl);
    return containerEl;

};

export {cE, qS, quoteCard};