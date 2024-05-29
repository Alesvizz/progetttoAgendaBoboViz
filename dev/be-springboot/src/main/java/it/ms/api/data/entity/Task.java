package it.ms.api.data.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    @Column(name = "name")
    private String name;


    @Column(name = "priority")
    private String priority;


    @Column(name = "color")
    private String color;



    


    public Task( String name, String priority, String color) {
        this.name = name;
        this.priority = priority;
        this.color = color;
    }


    public Task() {
    }


    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getPriority() {
        return priority;
    }


    public void setPriority(String priority) {
        this.priority = priority;
    }


    public String getColor() {
        return color;
    }


    public void setColor(String color) {
        this.color = color;
    }
 

    
    
}
