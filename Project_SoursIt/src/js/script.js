// "use strict";
window.addEventListener('DOMContentLoaded', function() {

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         modal.classList.add('show');
    //         modal.classList.remove('hide');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });

    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // });


    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }      
    
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

// Cards

class MenuCard {
    constructor(sale, src, alt, descr, price, parentSelector, ...classes) {
        this.sale = sale;
        this.src = src;
        this.alt = alt;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 40;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <div class="main_catalog_item">
                <div class="main_catalog_item_sale">Скидка ${this.sale}%</div>
                <div class="main_catalog_item_img">
                <img src=${this.src} alt=${this.alt}"></div>
                <a class="main_catalog_item_heart">
                    <span class="icon-heart-regular"></span>
                </a>
                <a class="main_catalog_item_filter">
                    <span class="icon-sliders-solid"></span>
                </a>
                <div class="main_catalog_item_descr">${this.descr}</div>
                <div class="catalog-item_prices">
                    <div class="main_catalog_item_price">${this.price}$</div>              
                </div>
                <button class="main_catalog_item_btn">Купить в 1 клик</button>
                <div class="main_catalog_item_basket">
                    <a href="#" class="catalog-item_link"><span class="icon-cart-shopping-solid"></span></a>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

    new MenuCard(
        "5",
        "img/blue.png",
        "ballon",
        'Композитный газовый баллон для BBQ-оборудования HPC Research Grill Edition lpg 24,5 литров (HPCR) – вентиль СНГ (SHELL)',
        10,
        ".main .main_catalog"
    ).render();

    new MenuCard(
        "10",
        "img/blue.png",
        "ballon",
        'Рабочее давление, МПа 1,6 Масса сжиженного газа (пропана), кг. , не более 2 Масса порожнего баллона, кг 4',
        20,
        ".main .main_catalog"
    ).render();

    new MenuCard(
        "15",
        "img/blue.png",
        "ballon",
        'Высота, мм., не более 285 Диаметр, мм. 222 Запорное устройство вентиль ВБ-2, клапан КБ-2 Упаковка Коробка картонная',
        25,
        ".main .main_catalog"
    ).render();

    new MenuCard(
        "50",
        "img/blue.png",
        "ballon",
        'Колба баллона изготавливается из полимера высокого качества, способного выдержать давление до 140 бар, против 30 предельных у металлического. Материал характеризуется высокой прочностью.',
        35,
        ".main .main_catalog"
    ).render();

}); 