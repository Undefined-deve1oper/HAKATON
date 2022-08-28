import { Module } from '../core/module'

export class TimerModule extends Module {
    #wrapper

    constructor( type, text ) {
        super( type, text )
        this.#wrapper = document.querySelector( ".wrapper" );
        this.renderTimerBlock = ( targetContainer ) => {
            targetContainer.insertAdjacentHTML( "beforeend",
                `
                    <div class="timers">
                        <div class="container">
                            <h1 id="headline">До нового года осталось</h1>
                            <div id="countdown">
                                <ul>
                                    <li><span id="days"></span>Дней</li>
                                    <li><span id="hours"></span>Часов</li>
                                    <li><span id="minutes"></span>Мин</li>
                                    <li><span id="seconds"></span>Сек</li>
                                </ul>
                            </div>
                            <div id="content" class="emoji">
                                <span>🥳</span>
                                <span>🎉</span>
                                <span>🎂</span>
                            </div>
                        </div>                    
                    </div>   
                `
            );
        };
        this.renderTimerBlock( this.#wrapper );
    }

    trigger() {
        const timer = document.querySelector( ".timers" );

        if ( timer ) {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let today = new Date(),
                dd = String( today.getDate() ).padStart( 2, "0" ),
                mm = String( today.getMonth() + 1 ).padStart( 2, "0" ),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "12/31/",
                birthday = dayMonth + yyyy;

            today = mm + "/" + dd + "/" + yyyy;
            if ( today > birthday ) {
                birthday = dayMonth + nextYear;
            }
            //end

            const countDown = new Date( birthday ).getTime(),
                x = setInterval( function () {

                    const now = new Date().getTime(),
                        distance = countDown - now;

                    document.getElementById( "days" ).innerText = Math.floor( distance / (day) ),
                        document.getElementById( "hours" ).innerText = Math.floor( (distance % (day)) / (hour) ),
                        document.getElementById( "minutes" ).innerText = Math.floor( (distance % (hour)) / (minute) ),
                        document.getElementById( "seconds" ).innerText = Math.floor( (distance % (minute)) / second );

                    //do something later when date is reached
                    if ( distance < 0 ) {
                        document.getElementById( "headline" ).innerText = "It's my birthday!";
                        document.getElementById( "countdown" ).style.display = "none";
                        document.getElementById( "content" ).style.display = "block";
                        clearInterval( x );
                    }
                    //seconds
                }, 0 );
        }
    }
}