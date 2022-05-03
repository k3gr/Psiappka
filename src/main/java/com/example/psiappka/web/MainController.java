package com.example.psiappka.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/generator-imion")
    public String namesGenerator() {
        return "names-generator";
    }

    @GetMapping("/psi-kalkulator")
    public String dogAge() {
        return "dog-age";
    }

    @GetMapping("/oblicz-karme")
    public String dogFood() {
        return "dog-food";
    }

    @GetMapping("/psie-memorki")
    public String memoryGame() {
        return "memory-game";
    }
}