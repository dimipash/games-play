const baseUrl = "http://localhost:3030/jsonstore";

export const create = async (gameData) => {
    const response = await fetch(`${baseUrl}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
    });
    const result = await response.json();
    return result;
};
