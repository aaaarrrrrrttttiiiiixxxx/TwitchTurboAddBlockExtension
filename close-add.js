function handleMutations(mutationsList, observer) {
    for (let mutation of mutationsList) {
        for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            console.log(node)

            for (let elem of node.querySelectorAll('button[aria-label*="Вернуться к трансляции"]')) {
                console.log('FOUND')
                elem.click();
            }
        }
    }
}

const observer = new MutationObserver(handleMutations);
observer.observe(document.body, {childList: true, subtree: true});
