package ru.volpi.qarest.web.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import ru.volpi.qarest.exception.category.CategoryNotFoundException;
import ru.volpi.qarest.exception.question.QuestionNotFoundException;

@RestControllerAdvice
public class GlobalHandler extends ResponseEntityExceptionHandler {

    private static final String SERVER_ERROR = "Внутреняя ошибка сервера: %s";

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public final ResponseEntity<?> onRuntimeException(final RuntimeException exc) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(GlobalHandler.SERVER_ERROR.formatted(exc.getMessage()));
    }

    @ExceptionHandler(QuestionNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public final ResponseEntity<?> onQuestionNotFoundException(final QuestionNotFoundException exc) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exc.getMessage());
    }

    @ExceptionHandler(CategoryNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public final ResponseEntity<?> onCategoryNotFound(final CategoryNotFoundException exc) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exc.getMessage());
    }
}
