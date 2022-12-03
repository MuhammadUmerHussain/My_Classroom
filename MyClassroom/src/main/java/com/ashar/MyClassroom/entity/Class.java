package com.ashar.MyClassroom.entity;

public class Class {
	
	private int class_id;
	private String class_name;
	private String course_title;
	private String Course_Code;
	private String description;
	
    public Class() {
		super();
	}

	public Class(int class_id, String class_name, String course_title, String course_Code, String description) {
		super();
		this.class_id = class_id;
		this.class_name = class_name;
		this.course_title = course_title;
		Course_Code = course_Code;
		this.description = description;
	}
	
	
	@Override
	public String toString() {
		return "Class [class_id=" + class_id + ", class_name=" + class_name + ", course_title=" + course_title
				+ ", Course_Code=" + Course_Code + ", description=" + description + "]";
	}


	public int getClass_id() {
		return class_id;
	}
	public void setClass_id(int class_id) {
		this.class_id = class_id;
	}
	public String getClass_name() {
		return class_name;
	}
	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}
	public String getCourse_title() {
		return course_title;
	}
	public void setCourse_title(String course_title) {
		this.course_title = course_title;
	}
	public String getCourse_Code() {
		return Course_Code;
	}
	public void setCourse_Code(String course_Code) {
		Course_Code = course_Code;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	

}
