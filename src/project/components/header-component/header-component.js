import React from 'react';
function Menu() {

    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Головна</a>
                <form class="form-inline">
                    Є чим поділитись?
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Додати</button>
                </form>
            </nav>
        </>
    );

}

export default Menu;
