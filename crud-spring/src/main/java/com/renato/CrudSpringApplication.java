package com.renato;

import com.renato.enums.Category;
import com.renato.model.Course;
import com.renato.model.Lesson;
import com.renato.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com Spring");
			c.setCategory(Category.BACK_END);

			Lesson lesson = new Lesson();
			lesson.setName("Introdução");
			lesson.setYoutubeUrl("01234567890");
			lesson.setCourse(c);
			c.getLessons().add(lesson);

			Lesson lesson1 = new Lesson();
			lesson1.setName("Angular");
			lesson1.setYoutubeUrl("01234567891");
			lesson1.setCourse(c);
			c.getLessons().add(lesson1);

			courseRepository.save(c);
		};
	}
}
