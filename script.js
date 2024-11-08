const menu = document.querySelector('#menu');

const lists = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: 400,
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: 500,
    },
    {
        name: 'レモン',
        img: 'lemon.jpg',
        price: 400,
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: 500,
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price: 400,
    },
];
//console.log(lists[5]);


for(let i = 0; i < lists.length; i++){
    const {name, img, price} = lists[i];
    /* オンライン上で画像を表示させるため、このデモでは src のパス指定が書籍と異なります */
    const content = `<div><img src="https://assets.codepen.io/85188/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}