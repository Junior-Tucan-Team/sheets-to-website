export const filterByQuestionType = (type) => (questions = {}) =>
Object.keys(questions).filter((questionID) => type.includes(questions[questionID].type));
