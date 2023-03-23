package com.home.lerning.controller;

import com.home.lerning.entity.User;
import com.home.lerning.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String list(Model model) {
        model.addAttribute("mUserOpen", "menu-open");
        model.addAttribute("mULActive", "active");
        return "layouts/user/list";
    }
    @GetMapping("/add")
    public String add(Model model) {
        model.addAttribute("mUserOpen", "menu-open");
        model.addAttribute("mUCActive", "active");
        return "layouts/user/create-update";
    }

    @GetMapping("/update/{id}")
    public String update(Model model, @PathVariable Integer id) {
        User user = this.userRepository.findByIdAndStatus(id, true);
        model.addAttribute("user", user);
        model.addAttribute("userId", id);
        model.addAttribute("action", "update");
        model.addAttribute("mUserOpen", "menu-open");
        model.addAttribute("mUCActive", "active");
        return "layouts/user/create-update";
    }
}
