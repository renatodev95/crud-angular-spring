package com.renato.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.renato.model.Lesson;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

import java.util.List;

public record CourseDTO(
        @JsonProperty("_id") Long id,
        @NotNull @NotBlank @Length(min = 5, max = 100) String name,
        @NotNull @NotBlank @Length(max = 10) @Pattern(regexp = "Back-end|Front-end") String category,
        List<Lesson> lessons) {
}
