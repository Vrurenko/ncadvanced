package com.overseer.controller;

import com.overseer.model.Message;
import com.overseer.model.User;
import com.overseer.service.MessageService;
import com.overseer.service.UserService;
import io.jsonwebtoken.lang.Assert;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controller provides api for privet message, sending and getting message.
 */
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MessageController {
    private final UserService userService;
    private final MessageService messageService;

    @GetMapping("/users/managersByEmp")
    public ResponseEntity<List<User>> getManagersByEmployee(@RequestParam Long empId) {
        val managers = userService.findManagersByEmployee(empId);
        return new ResponseEntity<>(managers, HttpStatus.OK);
    }

    @GetMapping("/users/empByManager")
    public ResponseEntity<List<User>> getUsersByManager(@RequestParam Long managerId) {
        val users = userService.findUsersByManager(managerId);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/sendMessage")
    public void sendMessageToEmail(@RequestBody Message message) {
        Assert.notNull(message.getText(), "Message has to have text");
        messageService.create(message);
    }

    @GetMapping("/messagesByRecipient")
    public ResponseEntity<List<Message>> getMessagesByRecipient(@RequestParam Long recipient,
                                                                @RequestParam int pageNumber) {
        val messages = messageService.findByRecipient(recipient, pageNumber);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/messagesByTopic")
    public ResponseEntity<List<Message>> getMessagesByTopic(@RequestParam Long topicId) {
        val messages = messageService.findByTopic(topicId);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
}
