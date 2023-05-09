import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai
    .createCompletion({
        model: model,
        prompt: prompt,
        temperature: 0,
        max_tokens: 50,
    })
    .then(res => res.data.choices[0].text)
    .catch(err => 
        `ChatGPT was unable to find an answer to that query! (Error: ${err.message})`
    );

    return res;
}

export default query;