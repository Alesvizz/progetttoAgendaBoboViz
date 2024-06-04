package it.ms.api.data.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import it.ms.api.data.entity.Task;


public interface TaskRepository extends JpaRepository<Task, Long>{



}