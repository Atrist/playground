import OpenAI from "openai";

const openai = new OpenAI(
    {
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        apiKey: 'sk-d35761246611436b99487e73341a64ea',
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);

const qus  = 'bablerc 和 bablelrc.config.json 的区别'
const completion = await openai.chat.completions.create({
    model: "qwen-plus",  //模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
    messages: [
        { role: "system", content: qus },
        { role: "user", content: qus }
    ],
    stream: true
});
console.log('A: ',)
for await (const chunk of completion) {
    process.stdout.write(chunk.choices[0].delta.content);
}
// for ( let  i of )
