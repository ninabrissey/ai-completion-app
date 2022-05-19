export const cleanAnswer = (answerData, question) => {
  return {
    id: answerData.id,
    question: question,
    answer: answerData.choices[0].text,
    engine: answerData.model,
  };
};
