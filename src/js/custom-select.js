export class CustomSelect {
    constructor(id) {
        this.element = document.getElementById(id);
        this.element.addEventListener('click', evt => this.handleSelectClick(evt));
        document.addEventListener('click', evt => this.onDocumentClick(evt, this.element));
        this.isOpen = false;
    }

    handleSelectClick(evt) {
        evt.preventDefault();
        const element = evt.currentTarget;
        const clickedElement = evt.target;

        if (clickedElement.classList.contains('controls__options_item')) {
            this.setDataToTitle(element, clickedElement.dataset);
        }
        
        this.isOpen ? this.hideList(element) : this.showList(element);
    }

    showList(element) {
        element.classList.add('controls__options_open');
        this.isOpen = true;
    }

    hideList(element) {
        element.classList.remove('controls__options_open');
        this.isOpen = false;
    }

    setDataToTitle(element, data) {
        const title = element.querySelector('.controls__options_title');
        title.textContent = data.value;
    }

    onDocumentClick(event, element) {
        if (!element.contains(event.target)) {
            this.hideList(element)
        };
    }

}