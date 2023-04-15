package ru.volpi.qarest.service;

import ru.volpi.qarest.dto.question.QuestionResponse;

import java.util.List;

public interface ReadQuestionService {

    QuestionResponse findQuestionById(Long id);

    QuestionResponse findQuestionByName(String name);

    List<QuestionResponse> findAllQuestions();

    List<QuestionResponse> findAllQuestionsByCategoryName(String name);
}
