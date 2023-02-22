package com.renato.dto.mapper;

import com.renato.dto.CourseDTO;
import com.renato.enums.Category;
import com.renato.model.Course;
import org.springframework.stereotype.Component;

@Component
public class CourseMapper {
    
    public CourseDTO toDTO(Course course) {
        if (course == null) {
            return null;
        }
         return new CourseDTO(course.getId(), course.getName(), "Front-end");
    }
    
    public Course toEntity(CourseDTO courseDTO) {
        
        if (courseDTO == null) {
            return null;
        }
        
        Course course = new Course();
        if (courseDTO.id() != null) {
            course.setId(courseDTO.id());
        }
        course.setName(courseDTO.name());
        course.setCategory(Category.FRONT_END);
        return course;
    }
}
