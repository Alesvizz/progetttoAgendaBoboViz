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



    

    public Task( String name, String priority, String color) {
        this.name = name;
        this.priority = priority;
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
    
}
