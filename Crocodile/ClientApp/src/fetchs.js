const createGame = async function (isOpen, roundsCount, roundTime, userLogin) {
    let gameFroRequest = {
        isOpen,
        roundsCount,
        roundTime,
        userLogin
    };
    let response = await fetch("/game/creategame", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(gameFroRequest)
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    let game = await response.json();
    return game.id;
};

const joinToGame = async function (gameId, userLogin) {
    let gameFroRequest = {
        gameId,
        userLogin
    };
    let response = await fetch("/game/joinToGame", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(gameFroRequest)
    });
    return response.ok;
};

const getWords = async function () {
    let response = await fetch("/game/getWords");
    return await response.json();
};

const startGame = async function (gameId) {
    let response = await fetch("/game/startGame", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: gameId
    });
    return response.ok;
};

const getLeaderBoard = async function (gameId) {
    let response = await fetch("/game/getLeaderBoard", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: gameId
    });
    return await response.json();
};

const loginUser = async function (login, password) {
    let user = {
        login,
        password
    };
    let response = await fetch("/authentication/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return response.status;
};

const register = async function (login, password) {
    let user = {
        login,
        password
    };
    let response = await fetch("/authentication/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error(response.status.toString());
    }
    return response.status;
};


export {createGame, joinToGame, getWords, startGame, getLeaderBoard, loginUser, register}