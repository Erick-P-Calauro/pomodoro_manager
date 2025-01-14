package com.erick.pomodoro_manager.modules.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import com.erick.pomodoro_manager.modules.accounts.events.CreateAccount;
import com.erick.pomodoro_manager.modules.accounts.events.DeleteAccount;
import com.erick.pomodoro_manager.modules.accounts.events.GetAccount;
import com.erick.pomodoro_manager.modules.accounts.events.GetAllAccounts;
import com.erick.pomodoro_manager.modules.accounts.events.UpdateAccount;

@Service
public class AccountService {
    
    @Autowired
    AccountRepository repository;

    @EventListener
    public void getAccountById(GetAccount event) {
        Account foundAccount = repository.findById(event.getUid()).get();
        event.setResponse(foundAccount);
    }

    @EventListener
    public void getAllAccounts(GetAllAccounts event) {
        event.setResponse(repository.findAll());
    }

    @EventListener
    public void saveAccount(CreateAccount event) {
        Account created = repository.save(event.getAccount());
        event.setResponse(created);
    }

    @EventListener
    public void updateAccount(UpdateAccount event) {
        Account created = repository.save(event.getAccount());
        event.setResponse(created);
    }

    @EventListener
    public void deleteAccount(DeleteAccount event) {
        repository.delete(event.getAccount());
    }

}
