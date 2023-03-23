package com.home.lerning.config;

import com.home.lerning.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfig {

    private UserRepository userRepository;
    public BeanConfig(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
