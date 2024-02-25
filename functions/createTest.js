module.exports = async function createTest(conversation, ctx) {
    let test = {name: ""};
    let answer;
    await ctx.reply("Придумайте название тесту");
    answer = await conversation.wait();
    test.name = answer.message.text;
    await ctx.reply(`Выбранное название для теста: ${test.name}`);
  }

/* Переменная test
{
  name: Название теста
  questions: [
    {
      title: Заголовок первого вопроса
      correct_answer: Правильный ответ,
      incorrect_answers: Массив из неправильных ответов
    }
    ...
  ]
}
*/