package com.erick.pomodoro_manager.presentation.controllers;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.erick.pomodoro_manager.modules.accounts.Account;
import com.erick.pomodoro_manager.modules.accounts.AccountPublisher;
import com.erick.pomodoro_manager.modules.accounts.events.CreateAccount;
import com.erick.pomodoro_manager.modules.accounts.events.DeleteAccount;
import com.erick.pomodoro_manager.modules.accounts.events.GetAccount;
import com.erick.pomodoro_manager.modules.accounts.events.GetAllAccounts;
import com.erick.pomodoro_manager.modules.accounts.events.UpdateAccount;
import com.erick.pomodoro_manager.presentation.dto.accounts.AccountCreate;
import com.erick.pomodoro_manager.presentation.dto.accounts.AccountResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/account")
public class AccountsController {

    @Autowired
    AccountPublisher accountPublisher;

    @Autowired
    ModelMapper mapper;

    @GetMapping 
    public ResponseEntity<List<AccountResponse>> getAllAccounts() {
        
        List<Account> allAccounts = accountPublisher.publishEvent(new GetAllAccounts(this, ""));
        
        List<AccountResponse> allAccountsDTO = allAccounts.stream()
            .map(account -> mapper.map(account, AccountResponse.class))
            .collect(Collectors.toList());

        return ResponseEntity.ok().body(allAccountsDTO);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<AccountResponse> getAccountByUid(@PathVariable("uid") UUID accountToFind) {
        
        Account account = accountPublisher.publishEvent(new GetAccount(this, accountToFind));
        AccountResponse accountDTO = mapper.map(account, AccountResponse.class);

        return ResponseEntity.ok().body(accountDTO);
    }

    @PostMapping("/create")
    public ResponseEntity<AccountResponse> createAccount(@Valid @RequestBody AccountCreate newAccountCreate, BindingResult result) {        

        Account newAccount = mapper.map(newAccountCreate, Account.class);
        newAccount = accountPublisher.publishEvent(new CreateAccount(this, newAccount));
        AccountResponse accountDTO = mapper.map(newAccount, AccountResponse.class);

        return ResponseEntity.ok().body(accountDTO);
    }

    @PutMapping("/update/{uid}")
    public ResponseEntity<AccountResponse> updateAccount(
        @PathVariable("uid") UUID accountToEdit, @Valid @RequestBody AccountCreate newAccountData, BindingResult result) {
        
        Account newAccount = mapper.map(newAccountData, Account.class);
        newAccount.setUid(accountToEdit);
        
        newAccount = accountPublisher.publishEvent(new UpdateAccount(this, newAccount));
        AccountResponse accountDTO = mapper.map(newAccount, AccountResponse.class);

        return ResponseEntity.ok().body(accountDTO);
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deleteAccount(@PathVariable("uid") UUID accountToDelete) {
        
        Account account = accountPublisher.publishEvent(new GetAccount(this, accountToDelete));
        accountPublisher.publishEvent(new DeleteAccount(this, account));
        
        return ResponseEntity.ok().body("Account succesfuly deleted.");
    }
}
