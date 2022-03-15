package com.example.eskilfuntime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class bestillingController {
    List<Bestilling> bestillingList = new ArrayList<>();

    @PostMapping("/saveBestilling")
    public void saveBestilling(Bestilling bestilling){
        bestillingList.add(bestilling);
    }
    @GetMapping("/getBestilling")
    public List<Bestilling> getBestilling(){
        return bestillingList;
    }
    @GetMapping("/clearRegister")
    public void clearRegister(){
        bestillingList.clear();
    }
}
