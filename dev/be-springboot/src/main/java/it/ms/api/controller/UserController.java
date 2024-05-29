package it.ms.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import it.ms.api.data.entity.Utente;
import it.ms.api.data.repo.UtentiRepository;

@RestController
@RequestMapping("users")
public class UserController {
    
    @Autowired UtentiRepository utentiRepository;

    @PostMapping("register")
    public Utente insert(@RequestBody Utente u){

        return utentiRepository.save(u);

    }

    @PostMapping("login")
    public boolean login(@RequestBody Utente i){

        Utente ut = utentiRepository.findOneByUsername(i.getUsername());
        if (ut.getPassword().equals(i.getPassword())) {
            //return ut;
            return true;
        } else {
            //throw new RuntimeException("User login error");
            return false;
        }
    }



    @GetMapping("list")
    public List<Utente> list() {
        return utentiRepository.findAll();
    }

}
