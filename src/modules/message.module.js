import { Module } from '../core/module'
import { getRandomArrayElement } from "@/utils.js";

export class MessageModule extends Module {
    constructor( type, text ) {
        super( type, text );
        this.wrapper = document.querySelector( ".wrapper" );
        this.currentTime = Date.now();

        this.createMessagesSection = ( targetContainer ) => {
            const isMessagesSection = document.querySelector( ".messages" );

            if ( !isMessagesSection ) {
                targetContainer.insertAdjacentHTML( "beforeend",
                    `
                    <section class="messages active">
                        <div class="messages__container _container">
                            <div class="message__header">
                                <h1 class="messages__title">Вы попали в блок случайных сообщений</h1>
                                <h3 class="messages__subtitle">Сообщения от рандомных людей</h3>
                            </div>
                            <span id="loader">Загрузка...</span>
                            <div class="messages__row">
                            </div>
                        </div>
                    </section>
                `
                );
            }
        };
        this.createMessageCard = ( message ) => {
            const { url, email, text, title, name } = message;

            const messagesContainer = document.querySelector( ".messages" );
            const messagesCardsContainer = document.querySelector( ".messages__row" );

            messagesCardsContainer.insertAdjacentHTML( "afterbegin",
                `
                    <div class="messages__column" data-creation="${ this.currentTime }">
                        <article class="message-item">
                            <div class="message-item__profile profile">
                                <div class="profile__image">
                                    <img src="${ url }" alt="Image">
                                </div>
                                <div class="profile__data">
                                    <h1 class="profile__name">${ name }</h1>
                                    <p class="profile__email">${ email }</p>
                                </div>
                            </div>
                            <div class="message-item__content">
                                <h1 class="message-item__title">${ title }</h1>
                                <p class="message-item__text">${ text }</p>
                            </div>
                        </article>
                    </div>
                `
            );

            const messageItem = document.querySelector( `[data-creation="${ this.currentTime }"]` );

            messageItem.classList.add( "active" );

            setTimeout( () => {
                messageItem.classList.remove( "active" );
            }, 7000 );
            setTimeout( () => {
                messageItem.remove();
                if ( !messagesCardsContainer.children.length > 0 ) {
                    messagesContainer.classList.remove( "active" );
                    setTimeout( () => messagesContainer.remove(), 800 );
                }
            }, 7800 );
        };

        this.createMessagesSection( this.wrapper );
    }

    async fetchingData() {
        try {
            // Удаляем предупреждение обошибке
            const info = document.querySelector(".info");
            if ( info ) info.remove();

            const loader = document.getElementById( "loader" );
            loader.style.display = "block";

            // Получаем список сообщений
            const messagesResponse = await fetch( "https://jsonplaceholder.typicode.com/comments" );
            const messages = await messagesResponse.json();

            // Выбираем случайное сообщение
            const randomMessage = getRandomArrayElement( messages );

            // Получаем список пользователей
            const usersResponse = await fetch( "https://jsonplaceholder.typicode.com/users" );
            const users = await usersResponse.json();

            // Выбираем случайного пользователя
            const randomUser = getRandomArrayElement( users );

            // Получаем список тегов
            const tagsResponse = await fetch( "https://cataas.com/api/tags" );
            const tags = await tagsResponse.json();

            // Выбираем случайный тег
            const randomTag = getRandomArrayElement( tags );

            // Получаем котиков по тегу
            const catsResponse = await fetch( `https://cataas.com/api/cats?tags=${ randomTag }` );
            const cats = await catsResponse.json();

            // Выбираем случайного котика
            const randomCat = getRandomArrayElement( cats );

            return {
                name: randomUser.name,
                email: randomMessage.email,
                text: randomMessage.body,
                title: randomMessage.name,
                url: `https://cataas.com/cat/${ randomCat.id }`
            };
        } catch ( e ) {
            const messagesContainer = document.querySelector( ".messages__row" );
            messagesContainer.innerHTML = "<h1 class='info'>Упс произошла ошибка, попробуйте еще раз)</h1>";

            throw new Error( `${e}. Ошибка в запросе - ` );
        } finally {
            // Скрываем статус загрузки
            const loader = document.getElementById( "loader" );
            loader.style.display = "none";
        }
    }

    trigger() {
        this.fetchingData()
            .then( ( response ) => this.createMessageCard(response))
            .catch( console.error );
    }
}